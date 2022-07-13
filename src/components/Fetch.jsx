import axios from 'axios';

export const Fetch = async ({ page, query }) => {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const myKey = '12834219-728ffad88c8528418d4b5c68f';

  await axios
    .get(
      `?q=${this.state.query}&page=${this.state.page}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(res => {
      this.setState(prev => ({
        items: [...prev.items, ...res.data.hits],
      }));
    });
};
