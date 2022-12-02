import { useState } from 'react';
import { Image, Container } from './PreviewImage.styled';
import ImageLoader from './ImageLoader/ImageLoader';

const PreviewImage = ({ image, className }) => {
  const [imagePreview, setImagePreview] = useState();

  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = () => {
    setTimeout(() => {
      setImagePreview(reader.result);
    }, 1000);
  };

  return (
    <>
      <Container>
        {!imagePreview && <ImageLoader />}
        <Image src={imagePreview} className={className} />
      </Container>
    </>
  );
};

export default PreviewImage;
