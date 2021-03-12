// ui
import { Box, Flex } from "@chakra-ui/layout"
// components
import ChangeLanguageBtn from "components/molecules/ChangeLanguageBtn"
import ChangeThemeBtn from "components/molecules/ChangeThemeBtn"

/**
 * ConfigTemplate Component
 * @component
 * @description Componente ConfigTemplate con acceso a la configuracion.
 */
const ConfigTemplate = () => {
  return (
    <Flex direction="column" align="flex-start" justify="flex-start" w="100%">
      <Box w="100%" mt="3rem">
        <ChangeLanguageBtn />
      </Box>
      <Box w="100%" mt="3rem">
        <ChangeThemeBtn />
      </Box>
    </Flex>
  )
}

export default ConfigTemplate
