import PropTypes from "prop-types"
// ui
import { Flex, Text } from "@chakra-ui/layout"
// styles
import { LogoIcon } from "styles/icons"

/**
 * Logo Component
 * @component
 * @description Componente Logo con icono y texto
 */
const Logo = ({ title }) => {
  return (
    <Flex align="flex-start">
      <LogoIcon fontSize="2rem" />
      <Text fontSize="1.5rem" fontWeight="bold" ml="1rem">
        {title}
      </Text>
    </Flex>
  )
}

Logo.propTypes = {
  title: PropTypes.string,
}

export default Logo
