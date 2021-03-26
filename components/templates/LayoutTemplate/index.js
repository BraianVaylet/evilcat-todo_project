import PropTypes from "prop-types"
// components
import Navbar from "components/organisms/Navbar"
import Footer from "components/organisms/Footer"
// ui
import { Flex } from "@chakra-ui/layout"

/**
 * LayoutTemplate Component
 * @component
 * @description Componente LayoutTemplate con Navbar yoptimi Footer
 */
const LayoutTemplate = ({ children }) => {
  return (
    <>
      <Flex maxH="10vh" minH="10vh" h="10vh" w="100%">
        <Navbar />
      </Flex>
      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        h="100%"
      >
        <Flex
          w="100%"
          maxH="80vh"
          minH="80vh"
          h="80vh"
          overflowY="auto"
          overflowX="none"
        >
          {children}
        </Flex>
        <Flex maxH="10vh" minH="10vh" h="10vh" w="100%">
          <Footer />
        </Flex>
      </Flex>
    </>
  )
}

LayoutTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default LayoutTemplate
