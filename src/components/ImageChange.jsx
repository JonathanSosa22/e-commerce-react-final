import React, { useState } from "react";

const ImageChange = ({ initialImage, alternativeImage }) => {
  const [imageSrc, setImageSrc] = useState(initialImage);

  const handleMouseOver = () => {
    setImageSrc(alternativeImage);
  };

  const handleMouseOut = () => {
    setImageSrc(initialImage);
  };

  return (
    <img
      src={imageSrc}
      alt="Image"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default ImageChange;
