import PropTypes, { arrayOf } from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <Gallery>
      {images.map(el => (
        <ImageGalleryItem
          key={el.id}
          onClick={onClick}
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
