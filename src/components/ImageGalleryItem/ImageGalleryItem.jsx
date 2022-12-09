import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ onClick, webFormatURL, largeImageURL, tags }) => {
  return (
    <Item>
      <Image
        onClick={() => onClick(largeImageURL, tags)}
        src={webFormatURL}
        alt={tags}
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  webFormatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
