import { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';
import Modal from '../Modal';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  targetElement = null;
  componentDidMount() {
    this.targetElement = document.querySelector('#modal-root');
  }
  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }
  onClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.state.showModal ? this.closeModal() : this.openModal();
    }
  };
  openModal = () => {
    console.log('open');
    this.setState(state => ({ showModal: true }));
    disableBodyScroll(this.targetElement);
  };
  closeModal = () => {
    console.log('close');
    this.setState(state => ({ showModal: false }));
    enableBodyScroll(this.targetElement);
  };

  render() {
    const { webFormatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;
    return (
      <Item>
        <Image onClick={this.onClick} src={webFormatURL} alt={tags} />
        {showModal && (
          <Modal onClick={this.onClick} closeModal={this.closeModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {
  webFormatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
