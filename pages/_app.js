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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
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
