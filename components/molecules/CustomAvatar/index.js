import PropTypes from "prop-types"
// ui
import { Avatar } from "@chakra-ui/avatar"
import { Flex, Text } from "@chakra-ui/layout"
// utils/props
import { userPropTypes } from "utils/propTypes"

/**
 * CustomAvatar Component
 * @component
 * @description Componente con la info y avatar del user
 */
const CustomAvatar = ({ user, ...props }) => (
  <Flex {...props}>
    <Avatar name={user?.username} src={user?.avatar} size="2xl" />
    <Text p="2rem" fontSize="1.5rem">
      {user?.username}
    </Text>
  </Flex>
)

CustomAvatar.propTypes = {
  user: PropTypes.shape(userPropTypes).isRequired,
}

export default CustomAvatar
