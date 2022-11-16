import PropTypes from 'prop-types';
import { LearnButton } from './LearnMoreButton.styled';

const LearnMoreButton = ({ onPress }) => {
  return (
    <LearnButton type="button" title="Learn more" onClick={onPress}>
      learn more
    </LearnButton>
  );
};

LearnMoreButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default LearnMoreButton;
