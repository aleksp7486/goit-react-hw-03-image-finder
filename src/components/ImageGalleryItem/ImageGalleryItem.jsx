// import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';
import Modal from '../Modal';
import { Component } from 'react';

// const ImageGalleryItem = ({ webFormatURL, largeImageURL }) => {
//   const handleClick = event => {
//     console.log(event.target);
//   };

//   return <Image src={webFormatURL} alt="" onClick={handleClick} />;
// };

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
    const { webFormatURL, largeImageURL, tag } = this.props;
    const { showModal } = this.state;
    return (
      <Item>
        <Image onClick={this.onClick} src={webFormatURL} alt={tag} />
        {showModal && (
          <Modal
            onClick={this.onClick}
            toggleModal={this.toggleModal}
            imageUrl={largeImageURL}
            tag={tag}
          />
        )}
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
