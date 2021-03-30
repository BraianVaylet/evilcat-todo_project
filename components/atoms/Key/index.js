import PropTypes from "prop-types"
// ui
import { Button } from "@chakra-ui/button"
import { Box, Text } from "@chakra-ui/layout"

/**
 * Key Component
 * @component
 * @description Componente Key
 */
const Key = ({ children, onClick }) => {
  return (
    <Button onClick={onClick} w="100%" h="10vh" m=".5rem">
      <Box p="1rem">
        <Text fontSize="3rem">{children}</Text>
      </Box>
    </Button>
  )
}

Key.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Key
