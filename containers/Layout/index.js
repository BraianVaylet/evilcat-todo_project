import PropTypes from "prop-types"
// ui
import { Flex } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query"
// theme
import { MY_BREAKPOINTS } from "styles/theme"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"

/**
 * Layout Container
 * @component
 * @description Contenedor Principal de la App
 */
const Layout = ({ children }) => {
  const [mediaQuery] = useMediaQuery(`(min-width: ${MY_BREAKPOINTS.BREAK_MIN})`)
  const backgroundColor = useSetColorTheme("gray.900", "white")

  return (
    <Flex display="grid" height="100vh" placeItems="center">
      <Flex
        height={mediaQuery ? "100vh" : "100%"}
        width={mediaQuery ? MY_BREAKPOINTS.BREAK_MIN : "100%"}
        borderRadius="10px"
        boxShadow="lg"
        direction="column"
        justify="flex-start"
        align="center"
        overflowY="none"
        overflowX="none"
        position="relative"
        bgColor={backgroundColor}
        scrollbarColor="rgba(0, 0, 0, .5) rgba(0, 0, 0, 0)"
        scrollbarWidth="thin"
      >
        {children}
      </Flex>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
