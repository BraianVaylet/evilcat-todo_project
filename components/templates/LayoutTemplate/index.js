import { useContext } from "react"
import PropTypes from "prop-types"
// components
import Navbar from "components/organisms/Navbar"
import ItemForm from "components/organisms/ItemForm"
import Footer from "components/organisms/Footer"
// ui
import { useDisclosure } from "@chakra-ui/hooks"
// next
import { useRouter } from "next/router"
// context
import { FormContext } from "context"

/**
 * LayoutTemplate Component
 * @component
 * @description Componente LayoutTemplate con Navbar yoptimi Footer
 */
const LayoutTemplate = ({ children }) => {
  const { cleanContext } = useContext(FormContext)
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClickAdd = () => {
    cleanContext()
    onOpen()
  }

  const handleClickSettings = () => router.push("/Config")

  const handleClickRefresh = () => {}

  return (
    <>
      <Navbar />
      {children}
      <Footer
        onClickAdd={handleClickAdd}
        onClickSettings={handleClickSettings}
        onClickRefresh={handleClickRefresh}
      />
      <ItemForm isOpen={isOpen} onClose={onClose} />
    </>
  )
}

LayoutTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default LayoutTemplate
