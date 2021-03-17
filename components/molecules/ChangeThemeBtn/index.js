import { useTranslation } from "react-i18next"
// chakra-ui
import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

/**
 * ChangeThemeBtn Component
 * @component
 * @description Componente botón para cambiar el theme del proyecto Dark-Light
 */
const ChangeThemeBtn = () => {
  const [t] = useTranslation("global")
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      as={Flex}
      align="center"
      justify="flex-start"
      variant="none"
      onClick={toggleColorMode}
      fontSize="1.5rem"
      w="100%"
    >
      <Box>
        {colorMode === "light" ? (
          <MoonIcon boxSize="1.5rem" />
        ) : (
          <SunIcon boxSize="1.5rem" />
        )}
      </Box>
      <Text ml="1rem">{t("ChangeThemeBtn.title")}</Text>
    </Button>
  )
}

export default ChangeThemeBtn
