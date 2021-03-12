// ui
import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { AddIcon, RepeatIcon, SettingsIcon } from "@chakra-ui/icons"
import { Flex, Text } from "@chakra-ui/layout"
import CustomDrawer from "components/atoms/CustomDrawer"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// next
import { useRouter } from "next/router"

/**
 * Footer Component
 * @component
 * @description Componente Footer con acceso a las paginas
 */
const Footer = () => {
  const backgroundColor = useSetColorTheme("gray.900", "white")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  const handleClickConfig = () => router.push("/Config")

  return (
    <>
      <Flex
        w="100%"
        align="center"
        justify="space-around"
        p="1rem"
        position="absolute"
        bottom="0"
        bgColor={backgroundColor}
        zIndex="1000"
      >
        <Button size="lg" variant="ghost">
          <RepeatIcon fontSize="1.5rem" />
        </Button>
        <Button size="lg" variant="ghost" onClick={onOpen}>
          <AddIcon fontSize="1.5rem" />
        </Button>
        <Button size="lg" variant="ghost" onClick={handleClickConfig}>
          <SettingsIcon fontSize="1.5rem" />
        </Button>
      </Flex>

      <CustomDrawer
        isOpen={isOpen}
        onClose={onClose}
        header={<Text>Nuevo Item</Text>}
      />
    </>
  )
}

export default Footer
