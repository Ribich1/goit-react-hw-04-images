import React from 'react';
import '../../components/styles.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, largeSrc, onClick }) => {
  console.log('largeSrc', largeSrc);
  return (
    <li className="ImageGalleryItem">
      <img src={src} alt={alt} data-srcjs={largeSrc} onClick={onClick} />
    </li>
  );
};

ImageGalleryItem.propTypes={
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}


export default ImageGalleryItem;
