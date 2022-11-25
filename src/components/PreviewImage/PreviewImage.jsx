import { useState } from 'react';
import { Image } from './PreviewImage.styled';
const PreviewImage = ({ image, className }) => {
  const [imagePreview, setImagePreview] = useState();

  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = () => {
    setImagePreview(reader.result);
  };

  return <Image src={imagePreview} alt="preview" className={className} />;
};

export default PreviewImage;
