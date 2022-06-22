import { Box } from '@chakra-ui/react';

const Footer = () => (
    <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
        Created by <a href='https://www.daniel-espanadero.com/'>Daniel Españadero</a> © {new Date().getFullYear()}
    </Box>
);

export default Footer;