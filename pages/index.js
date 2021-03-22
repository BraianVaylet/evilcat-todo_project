import { useEffect } from "react"
// ui
import { Flex, Text } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/spinner"
// components
import LoginGoogle from "components/atoms/LoginGoogle"
import Logo from "components/atoms/Logo"
// hooks
import useUser, { USER_STATES } from "hooks/useUser"
// util/constants
import { APP_TITLE } from "utils/constants"
// next
import { useRouter } from "next/router"
import Head from "next/head"

/**
 * HomePage Page
 * @component
 * @description Componente page HomePage
 */
export default function HomePage() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace("/Home")
  }, [user])

  return (
    <>
      <Head>
        <title>Login | EvilCat</title>
      </Head>
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
        {user === USER_STATES.NOT_KNOWN && (
          <Spinner size="xl" colorScheme="blue" />
        )}
        {user === USER_STATES.NOT_LOGGED && <LoginGoogle fontSize="3rem" />}
      </Flex>
    </>
  )
}
