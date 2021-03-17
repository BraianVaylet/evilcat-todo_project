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
        <title>EvilCat ToDo</title>
        <link rel="icon" href="/favicon.ico" />
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
