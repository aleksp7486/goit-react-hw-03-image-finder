import { Component } from 'react';
import { AppBox } from './App.styled';
import SearchBar from 'components/SearchBar';
import ImageGallery from 'components/ImageGallery';
import Button from './Button';
import Loader from './Loader';

import * as Api from 'services/publicationsApi';

export class App extends Component {
  state = {
    searchValue: '',
    galleryItems: [],
    galleryPage: 1,
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
        console.error('Что-то пошло не так :( ');
      } finally {
        this.setState({ ilLoading: false });
      }
    }
  }

  onSearchBarSubmit = async value => {
    if (value === this.state.searchValue) {
      return;
    }
    this.setState({ galleryItems: [], searchValue: value, page: 1 });
  };

  onLoadButtonClick = () => {
    this.setState(state => ({ galleryPage: state.galleryPage + 1 }));
  };

  render() {
    const { galleryItems, ilLoading } = this.state;
    return (
      <AppBox>
        <SearchBar onSubmit={this.onSearchBarSubmit} />
        {galleryItems.length > 0 && (
          <ImageGallery images={galleryItems} isLoading={ilLoading} />
        )}
        {ilLoading && <Loader />}
        {galleryItems.length > 0 && (
          <Button onClick={this.onLoadButtonClick}>Load more</Button>
        )}

        {/* <Modal /> */}
      </AppBox>
    );
  }
}

export default App;
