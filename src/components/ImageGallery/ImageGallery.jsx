import PropTypes, { arrayOf } from 'prop-types';
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
          tags={el.tags}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: arrayOf(PropTypes.object),
};

export default ImageGallery;
