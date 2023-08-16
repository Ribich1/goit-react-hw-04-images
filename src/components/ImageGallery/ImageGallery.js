import React from 'react';
import '../../components/styles.scss'

const ImageGallery = ({ children }) => (
  <ul className="ImageGallery">
    {children}
  </ul>
);
export default ImageGallery;
