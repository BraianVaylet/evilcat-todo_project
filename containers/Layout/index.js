import PropTypes from "prop-types"
// ui
import { Flex } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query"
// theme
import { MY_BREAKPOINTS } from "styles/theme"
// components
import LayoutTemplate from "components/templates/LayoutTemplate"
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
        className="Layout"
        height={mediaQuery ? "90vh" : "100%"}
        width={mediaQuery ? MY_BREAKPOINTS.BREAK_MIN : "100%"}
        borderRadius="10px"
        boxShadow="lg"
        direction="column"
        justify="flex-start"
        align="center"
        overflowY="auto"
        overflowX="none"
        position="relative"
        bgColor={backgroundColor}
      >
        <LayoutTemplate>
          <Flex w="100%" mt="5rem">
            {children}
          </Flex>
        </LayoutTemplate>
      </Flex>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
