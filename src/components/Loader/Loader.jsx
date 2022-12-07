import { Grid } from 'react-loader-spinner';
import { Box } from './Loader.styled';

const Loader = () => {
  return (
    <Box>
      <Grid color="#3f51b5" />
    </Box>
  );
};

export default Loader;
