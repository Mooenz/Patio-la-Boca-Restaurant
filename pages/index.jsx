import Head from 'next/head';
import UseShow from '../context/ShowContext';

// Components
import Box from '../components/Box';
import MenuMain from '../components/MenuMain';
import Show from '../components/Show';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <title>Menu Patio la Boca </title>
      </Head>
      <UseShow>
        <Box>
          <Show />
          <MenuMain />
        </Box>
      </UseShow>
    </>
  );
}
//
