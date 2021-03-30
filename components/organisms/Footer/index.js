import { useContext } from "react"
import { MdViewList } from "react-icons/md"
// ui
import { IconButton } from "@chakra-ui/button"
import { AddIcon, SettingsIcon } from "@chakra-ui/icons"
import { Flex } from "@chakra-ui/layout"
import Icon from "@chakra-ui/icon"
// context
import { FormContext } from "context"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// next
import { useRouter } from "next/router"
// component
import LinkIconBtn from "components/molecules/LinkIconBtn"

/**
 * Footer Component
 * @component
 * @description Componente Footer con acceso a las paginas
 */
const Footer = () => {
  const router = useRouter()
  const { cleanContext } = useContext(FormContext)
  const backgroundColor = useSetColorTheme("gray.900", "white")

  const handleClickNewItem = () => {
    cleanContext()
    router.push("/Item")
  }

  return (
    <Flex
      w="100%"
      align="center"
      justify="space-around"
      p="1rem"
      bgColor={backgroundColor}
    >
      <LinkIconBtn
        icon={<Icon as={MdViewList} fontSize="1.5rem" />}
        href="/Home"
      />
      <IconButton
        onClick={handleClickNewItem}
        icon={<AddIcon fontSize="1.5rem" />}
        w="30%"
        variant="ghost"
      />
      <LinkIconBtn icon={<SettingsIcon fontSize="1.5rem" />} href="/Config" />
    </Flex>
  )
}

export default Footer
