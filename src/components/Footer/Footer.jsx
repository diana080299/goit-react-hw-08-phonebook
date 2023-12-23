import { Box, Heading } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      marginTop="30px"
      gap="10px"
      backgroundColor="#BEE3F8"
      padding="20px"
    >
      <Heading as="h5" size="sm">
        Copyright &#xa9; Diana Shtumak
      </Heading>
      {new Date().getFullYear()}
    </Box>
  );
};
export default Footer;
