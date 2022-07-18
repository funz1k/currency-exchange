import { Button, FeedbackContainer } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackBtn = ({ options, onClick }) => (
  <FeedbackContainer>
    {options.map(option => (
      <Button key={option} name={option} type="button" onClick={onClick}>
        {option}
      </Button>
    ))}
  </FeedbackContainer>
);

FeedbackBtn.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClick: PropTypes.func.isRequired,
};

export default FeedbackBtn;
