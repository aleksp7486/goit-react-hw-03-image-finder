// import PropTypes from 'prop-types';
import { Box, Btn } from './Button.styled';

const Button = ({ children, onClick }) => {
  return (
    <Box>
      <Btn onClick={onClick}>{children}</Btn>
    </Box>
  );
};

Button.propTypes = {};

export default Button;
