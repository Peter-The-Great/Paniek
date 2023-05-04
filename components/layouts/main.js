import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Paniek's homepage" />
        <meta name="author" content="Paniek" />
        <meta name="author" content="Peter-The-Great" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Paniek" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Pimmetje_" />
        <meta name="twitter:creator" content="@Pimmetje_" />
        <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1512380456062365697/5yMkTZGH_400x400.jpg" />
        <meta property="og:site_name" content="Paniek" />
        <meta name="og:title" content="Paniek" />
        <meta property="og:type" content="website" />
        <title>Paniek - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
