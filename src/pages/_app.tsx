import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="wrapper">
      <Head>
        <title>My Web Tool</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="static" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">
              My Web Tool
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="content">
        <Container maxWidth="sm" sx={{ my: 2 }}>
          <Component {...pageProps} />
        </Container>
      </div>

      <div className="footer">
        <Footer />
      </div>

    </div>
  )
}

export default MyApp
