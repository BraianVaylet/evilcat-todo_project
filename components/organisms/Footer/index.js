import PropTypes from "prop-types"
// ui
import { Button } from "@chakra-ui/button"
import { AddIcon, RepeatIcon, SettingsIcon } from "@chakra-ui/icons"
import { Flex } from "@chakra-ui/layout"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"

/**
 * Footer Component
 * @component
 * @description Componente Footer con acceso a las paginas
 */
const Footer = ({ onClickAdd, onClickSettings, onClickRefresh }) => {
  const backgroundColor = useSetColorTheme("gray.900", "white")

  return (
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
      <Button size="lg" variant="ghost" onClick={onClickRefresh}>
        <RepeatIcon fontSize="1.5rem" />
      </Button>
      <Button size="lg" variant="ghost" onClick={onClickAdd}>
        <AddIcon fontSize="1.5rem" />
      </Button>
      <Button size="lg" variant="ghost" onClick={onClickSettings}>
        <SettingsIcon fontSize="1.5rem" />
      </Button>
    </Flex>
  )
}

Footer.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
  onClickSettings: PropTypes.func.isRequired,
  onClickRefresh: PropTypes.func.isRequired,
}

export default Footer
