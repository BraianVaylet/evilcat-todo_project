// ui
import { Avatar } from "@chakra-ui/avatar"
import { Flex, Text } from "@chakra-ui/layout"
// hooks
import useUser from "hooks/useUser"

/**
 * CustomAvatar Component
 * @component
 * @description Componente con la info y avatar del user
 */
const CustomAvatar = ({ ...props }) => {
  const user = useUser()

  return (
    <Flex {...props}>
      <Avatar name={user?.username} src={user?.avatar} size="2xl" />
      <Text p="2rem" fontSize="1.5rem">
        {user?.username}
      </Text>
    </Flex>
  )
}

export default CustomAvatar
