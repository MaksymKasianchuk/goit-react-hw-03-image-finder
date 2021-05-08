import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.scss';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClick }) => (
<ul className={styles.gallery} onClick={onClick}>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);

ImageGallery.defaultProps = {
  onClick: () => {},
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
  onClick: PropTypes.func,
};

export default ImageGallery;