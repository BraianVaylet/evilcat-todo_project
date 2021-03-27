import PropTypes from "prop-types"
// next
import Head from "next/head"
// containers
import Wrapper from "../containers/Wrapper"

/**
 * MyApp Component
 * @component
 * @description Componente principal
 */
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>EvilCat</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
        />
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

export default MyApp
