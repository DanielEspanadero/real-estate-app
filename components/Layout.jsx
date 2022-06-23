import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({ children }) => (
    <>
        <Head>
            <title>Dubai Estate</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            {/* <link rel='shortcut icon' href='../assets/images/dubai-estate.icon' /> */}
        </Head>
        <Box maxWidth='1280px' m='auto'>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
)

export default Layout;