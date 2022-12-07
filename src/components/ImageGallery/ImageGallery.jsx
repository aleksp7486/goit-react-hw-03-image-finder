// import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(el => (
        <ImageGalleryItem
          key={el.id}
          webFormatURL={el.webformatURL}
          largeImageURL={el.largeImageURL}
          tag={el.tag}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {};

export default ImageGallery;
