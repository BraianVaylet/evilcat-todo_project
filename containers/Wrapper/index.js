import PropTypes from "prop-types"
// import { Global } from "@emotion/react"
// translations
import { I18nextProvider } from "react-i18next"
import i18next from "translations"
// ui
import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react"
// containers
import WrapperContext from "containers/WrapperContext"
import Layout from "containers/Layout"
// styles
import theme from "styles/theme"
// styles/fonts
// import fonts from "styles/font-face"

/**
 * Wrapper Container
 * @component
 * @description Contenedor Wrapper, da acceso a I18Next y ChakraProvider
 */
const Wrapper = ({ children }) => {
  return (
    <WrapperContext>
      <I18nextProvider i18n={i18next}>
        <ChakraProvider theme={theme}>
          <CSSReset />
          {/* <Global styles={fonts} /> */}
          <ColorModeScript initialColorMode={theme.initialColorMode} />
          <Layout>{children}</Layout>
        </ChakraProvider>
      </I18nextProvider>
    </WrapperContext>
  )
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Wrapper
