import { useEffect } from "react"
// ui
import { Flex, Text } from "@chakra-ui/layout"
import LoginGoogle from "components/atoms/LoginGoogle"
// components
import Logo from "components/atoms/Logo"
import useUser from "hooks/useUser"
// utils/constants
import { APP_TITLE } from "utils/constants"
// next
import { useRouter } from "next/router"

export default function Login() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => user && router.push("/Home"), [user])

  return (
    <Flex
      w="100%"
      align="center"
      justify="space-around"
      direction="column"
      h="100%"
      minH="75vh"
    >
      <Flex w="100%" align="center" justify="center" direction="column">
        <Logo iconSize="10rem" />
        <Text fontSize="5rem">{APP_TITLE}</Text>
      </Flex>
      <LoginGoogle fontSize="3rem" />
    </Flex>
  )
}
