import { Component } from 'react';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { SearchBar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';
import axios from 'axios';
import styles from './App.module.css';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    isLoading: false,
    isModalOpen: false,
    bigImg: '',
    error: null,
  };

  componentDidUpdate = (_, prevState) => {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.fetchItems();
    }
  };

  onOpenModal = bigImg => {
    this.setState({
      isModalOpen: true,
      bigImg,
    });
    document.addEventListener('keydown', this.handleCloseModal);
    document.addEventListener('click', this.handleCloseModal);
  };

  handleCloseModal = e => {
    if (e.code === 'Escape' || e.target.nodeName === 'DIV') {
      this.setState({ isModalOpen: false });
      document.removeEventListener('keydown', this.handleCloseModal);
      document.removeEventListener('click', this.handleCloseModal);
    }
  };

  fetchItems = async () => {
    this.setState({ isLoading: true });

    axios.defaults.baseURL = 'https://pixabay.com/api/';
    const myKey = '12834219-728ffad88c8528418d4b5c68f';

    await axios
      .get(
        `?q=${this.state.query}&page=${this.state.page}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(res =>
        this.setState(prev => ({
          items: [...prev.items, ...res.data.hits],
        }))
      )
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const queryFromInput = e.target.elements.query.value;

    if (queryFromInput !== this.state.query) {
      this.setState({
        page: 1,
        query: queryFromInput,
        items: [],
      });
    }

    e.target.reset();
  };

  render() {
    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.handleSubmit} />
        {this.state.isModalOpen && <Modal bigImg={this.state.bigImg} />}
        {this.state.error && (
          <div>
            {this.state.error}
            <p>Sorry, try again.</p>
          </div>
        )}

        <ImageGallery items={this.state.items} onOpenModal={this.onOpenModal}>
          {this.state.isLoading && <Loader />}

          {this.state.items.length > 0 && (
            <LoadMoreBtn onClick={this.loadMore} />
          )}
        </ImageGallery>
      </div>
    );
  }
}
