import { useContext } from "react"
import PropTypes from "prop-types"
// components
import Navbar from "components/organisms/Navbar"
import ItemForm from "components/organisms/ItemForm"
import Footer from "components/organisms/Footer"
// ui
import { useDisclosure } from "@chakra-ui/hooks"
import { Flex } from "@chakra-ui/layout"
// context
import { FormContext } from "context"

/**
 * LayoutTemplate Component
 * @component
 * @description Componente LayoutTemplate con Navbar yoptimi Footer
 */
const LayoutTemplate = ({ children }) => {
  const { cleanContext } = useContext(FormContext)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClickAdd = () => {
    cleanContext()
    onOpen()
  }

  return (
    <>
      <Navbar />
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
          <Footer onClickAdd={handleClickAdd} />
        </Flex>
      </Flex>
      <ItemForm isOpen={isOpen} onClose={onClose} />
    </>
  )
}

LayoutTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default LayoutTemplate
