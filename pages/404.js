import { Flex, Text } from "@chakra-ui/layout"
import Link from "next/link"

const Custom404 = () => {
  return (
    <Flex align="center" justify="center" direction="column" w="100%" h="100vh">
      <Text fontSize="1.25rem" mb="5rem">
        404 Not Found
      </Text>
      <Link href="/">Vovler</Link>
    </Flex>
  )
}

export default Custom404
