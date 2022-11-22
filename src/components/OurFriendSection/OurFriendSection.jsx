import styledComponents from './OurFriendSection.styled';
const { OurFriendSectionStyled } = styledComponents;

const OurFriendSection = ({ children }) => {
  return <OurFriendSectionStyled>{children}</OurFriendSectionStyled>;
};

export default OurFriendSection;
