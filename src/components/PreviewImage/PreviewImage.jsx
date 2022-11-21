import { useState } from 'react';
import { Image } from './PreviewImage.styled';
const PreviewImage = ({ image }) => {
  const [imagePreview, setImagePreview] = useState();

  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = () => {
    setImagePreview(reader.result);
  };

  return <Image src={imagePreview} alt="preview" />;
};

export default PreviewImage;
