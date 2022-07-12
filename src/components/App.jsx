import { Component } from 'react'
import { LoadMoreBtn } from "./Button";
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery";
import { Loader } from "./Loader/Loader";
// import { Modal } from "./Modal";
import axios from "axios";



export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    isLoading: false,
  }

  componentDidUpdate = (_, prevState) => {
    if(prevState.page !== this.state.page || prevState.query !== this.state.query) {
      
      this.fetchItems();
      
    }
  }

  fetchItems = async () => {

    this.setState({isLoading: true});

    axios.defaults.baseURL = 'https://pixabay.com/api/';
    const myKey = '12834219-728ffad88c8528418d4b5c68f';
    
    await axios.get(`?q=${this.state.query}&page=${this.state.page}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => {
      this.setState(prev => ({
      items:  [...prev.items, ...res.data.hits],
      }));
      this.setState({isLoading: false});
    });

  }


  loadMore = () => {
    this.setState(prevState => ({
    page: prevState.page + 1
    }))
  }


  handleSubmit = (e) => {
    e.preventDefault();

    const queryFromInput = e.target.elements.query.value;

    if(queryFromInput !== this.state.query) {
      this.setState({
        page: 1,
        query: queryFromInput,
        items: [],
      })
    }   

    e.target.reset();
  }


  render() {
    return (
      <>

  
      <SearchBar onSubmit={this.handleSubmit}/> 
      <ImageGallery items={this.state.items}> 

      
        {this.state.isLoading && <Loader/>}

        {/* <Loader/>  */}
        {this.state.items.length > 0 && <LoadMoreBtn onClick={this.loadMore}/> }
        {/* <Modal/> */}

                
      </ImageGallery> 
          

      </>
        
    )
  }
};
