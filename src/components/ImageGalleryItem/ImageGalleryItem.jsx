import { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';
import Modal from '../Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  onClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.toggleModal();
    }
  };
  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { webFormatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;
    return (
      <Item>
        <Image onClick={this.onClick} src={webFormatURL} alt={tags} />
        {showModal && (
          <Modal
            onClick={this.onClick}
            toggleModal={this.toggleModal}
            // imageUrl={largeImageURL}
            // tag={tag}
          >
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
