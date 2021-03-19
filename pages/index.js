import { useEffect } from "react"
// ui
import { Flex } from "@chakra-ui/layout"
// components
import useUser from "hooks/useUser"
// next
import { useRouter } from "next/router"
import Head from "next/head"
import { Spinner } from "@chakra-ui/spinner"

/**
 * Main Page
 * @component
 * @description Componente page Main
 */
export default function Main() {
  const user = useUser()
  const router = useRouter()

  useEffect(
    () => (user === null ? router.push("/Login") : router.push("/Home")),
    [user]
  )

  return (
    <>
      <Head>
        <title>Loading... | EvilCat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        w="100%"
        align="center"
        justify="center"
        direction="column"
        h="100%"
        minH="75vh"
      >
        <Spinner size="xl" colorScheme="blue" />
      </Flex>
    </>
  )
}
