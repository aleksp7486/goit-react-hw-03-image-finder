import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AppBox } from './App.styled';
import { Box } from 'utils/Box';
import SearchBar from 'components/SearchBar';
import ImageGallery from 'components/ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Api from 'services/publicationsApi';
import Modal from './Modal';

export class App extends Component {
  state = {
    galleryItems: [],
    query: '',
    page: 1,
    totalPage: null,
    selectedImage: null,
    ilLoading: false,
  };

  perPage = 30;

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, totalPage } = this.state;
    if (prevState.totalPage !== totalPage || prevState.page !== page) {
      if (page === totalPage || totalPage === 1) {
        toast.info('Это все изображения по вашему запросу');
      }
    }

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ ilLoading: true });
        const items = await Api.getImages(query, page, this.perPage);
        if (items.data.hits.length === 0) {
          toast.error('Изображения по вашему запросу не найдены');
          return;
        }
        this.setState(state => ({
          galleryItems: [...state.galleryItems, ...items.data.hits],
          totalPage: Math.ceil(items.data.totalHits / this.perPage),
        }));
      } catch (error) {
        console.warn(error);
      } finally {
        this.setState({ ilLoading: false });
      }
    }
  }

  onSearchBarSubmit = async value => {
    if (value === this.state.query) {
      return;
    }
    this.setState({
      galleryItems: [],
      query: value,
      page: 1,
      totalPage: null,
    });
  };

  onLoadButtonClick = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  onSelectImage = (url, tags) => {
    this.setState(() => ({ selectedImage: { url, tags } }));
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { galleryItems, ilLoading, selectedImage, page, totalPage } =
      this.state;
    return (
      <AppBox>
        <SearchBar onSubmit={this.onSearchBarSubmit} />
        {galleryItems.length > 0 && (
          <ImageGallery
            onSelectImage={this.onSelectImage}
            images={galleryItems}
            isLoading={ilLoading}
          />
        )}
        {ilLoading && <Loader />}
        {galleryItems.length > 0 && page < totalPage && (
          <Box textAlign="center">
            <Button onClick={this.onLoadButtonClick}>Load more</Button>
          </Box>
        )}
        {selectedImage && (
          <Modal closeModal={this.closeModal}>
            <img src={selectedImage.url} alt={selectedImage.tags} />
          </Modal>
        )}
        <ToastContainer />
      </AppBox>
    );
  }
}

export default App;
