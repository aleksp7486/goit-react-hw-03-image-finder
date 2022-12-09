import { Component } from 'react';
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
    searchValue: '',
    galleryPage: 1,
    selectedImage: null,
    ilLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchValue, galleryPage } = this.state;
    if (
      prevState.searchValue !== searchValue ||
      prevState.galleryPage !== galleryPage
    ) {
      try {
        this.setState({ ilLoading: true });
        const images = await Api.getImages(searchValue, galleryPage);
        this.setState(state => ({
          galleryItems: [...state.galleryItems, ...images.hits],
        }));
      } catch (error) {
        console.error(error);
      } finally {
        this.setState({ ilLoading: false });
      }
    }
  }

  onSearchBarSubmit = async value => {
    if (value === this.state.searchValue) {
      return;
    }
    this.setState({
      galleryItems: [],
      searchValue: value,
      page: 1,
    });
  };

  onLoadButtonClick = () => {
    this.setState(state => ({ galleryPage: state.galleryPage + 1 }));
  };

  selectModalImage = (url, tags) => {
    this.setState(() => ({ selectedImage: { url, tags } }));
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { galleryItems, ilLoading, selectedImage } = this.state;
    return (
      <AppBox>
        <SearchBar onSubmit={this.onSearchBarSubmit} />
        {galleryItems.length > 0 && (
          <ImageGallery
            onClick={this.selectModalImage}
            images={galleryItems}
            isLoading={ilLoading}
          />
        )}
        {ilLoading && <Loader />}
        {galleryItems.length > 0 && (
          <Box textAlign="center">
            <Button onClick={this.onLoadButtonClick}>Load more</Button>
          </Box>
        )}
        {selectedImage && (
          <Modal closeModal={this.closeModal}>
            <img src={selectedImage.url} alt={selectedImage.tags} />
          </Modal>
        )}
      </AppBox>
    );
  }
}

export default App;
