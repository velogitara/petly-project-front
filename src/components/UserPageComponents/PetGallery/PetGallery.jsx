import { GalleryContainer } from './PetGallery.styled';
import PetCard from 'components/UserPageComponents/PetCard';

const PetGallery = ({ screen }) => {
  return (
    <GalleryContainer>
      <PetCard />
      <PetCard screen={screen} />
    </GalleryContainer>
  );
};

export default PetGallery;
