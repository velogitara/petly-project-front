import { GalleryContainer } from './PetGallery.styled';
import PetCard from 'components/UserPageComponents/PetCard';

const PetGallery = ({ pets }) => {
  const isPets = pets.length !== 0;

  return (
    <>
      {isPets && (
        <GalleryContainer>
          {pets.map(({ _id, name, birthday, breed, imageURL, comments, owner }) => (
            <PetCard
              key={_id}
              _id={_id}
              name={name}
              birthday={birthday}
              breed={breed}
              imageURL={imageURL}
              comments={comments}
              owner={owner}
            />
          ))}
          {/* <PetCard />
      <PetCard screen={screen} /> */}
        </GalleryContainer>
      )}
    </>
  );
};

export default PetGallery;
