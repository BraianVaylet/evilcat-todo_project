import PropTypes from "prop-types"
// ui
import { Flex, Text } from "@chakra-ui/layout"
// styles
import { LogoIcon } from "styles/icons"
import { Button } from "@chakra-ui/button"

/**
 * Logo Component
 * @component
 * @description Componente Logo con icono y texto
 */
const Logo = ({ onClick, title }) => {
  return (
    <Flex as={Button} align="flex-start" onClick={onClick} variant="ghost">
      <LogoIcon fontSize="2rem" />
      <Text fontSize="1.5rem" fontWeight="bold" ml="1rem">
        {title}
      </Text>
    </Flex>
  )
}

Logo.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
}

export default Logo
