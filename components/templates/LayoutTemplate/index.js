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
      <Flex w="100%" mt="5rem">
        {children}
      </Flex>
      <Footer onClickAdd={handleClickAdd} />
      <ItemForm isOpen={isOpen} onClose={onClose} />
    </>
  )
}

LayoutTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default LayoutTemplate
