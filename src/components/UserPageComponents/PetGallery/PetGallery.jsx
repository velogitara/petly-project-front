import { GalleryContainer, NoPets } from './PetGallery.styled';
import PetCard from 'components/UserPageComponents/PetCard';

const PetGallery = ({ pets, screen }) => {
  const isPets = pets.length !== 0;

  return (
    <>
      {isPets ? (
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
              screen={screen}
            />
          ))}
        </GalleryContainer>
      ) : (
        <NoPets>You haven't added pets yet.</NoPets>
      )}
    </>
  );
};

export default PetGallery;
