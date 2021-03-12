import { useRef } from "react"
// ui
import { useDisclosure } from "@chakra-ui/hooks"
import { Flex } from "@chakra-ui/layout"
// components
import CustomDrawer from "components/atoms/CustomDrawer"
import Navbar from "components/molecules/Navbar"
import ChangeThemeBtn from "components/molecules/ChangeThemeBtn"
import ChangeLanguageBtn from "components/molecules/ChangeLanguageBtn"

/**
 * LayoutMenu Component
 * @component
 * @description Componente LayoutMenu con Navbar y CustomDrawer
 */
const LayoutMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <>
      <Navbar onClickMenu={onOpen} btnRef={btnRef} />
      <CustomDrawer
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        footer={
          <Flex>
            <ChangeThemeBtn />
            <ChangeLanguageBtn />
          </Flex>
        }
      />
    </>
  )
}

export default LayoutMenu
