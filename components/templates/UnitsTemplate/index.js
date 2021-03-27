import { useContext, useState } from "react"
// import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// ui
import { Box, Flex, Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
// containers
import WrapperItem from "containers/WrapperItem"
// components
import Counter from "components/molecules/Counter"
// context
import { FormContext } from "context"
// next
import { useRouter } from "next/router"

/**
 * UnitsTemplate Component
 * @component
 * @description Componente UnitsTemplate con acceso a la configuracion.
 */
const UnitsTemplate = () => {
  const [t] = useTranslation("global")
  const router = useRouter()
  const { count } = useContext(FormContext)
  const [error, setError] = useState(null)

  const handleContinue = () =>
    count !== "NaN" ? router.push("/Units") : setError("Algo falló")

  return (
    <WrapperItem title={t("UnitsTemplate.title")}>
      <Flex
        align="center"
        justify="space-between"
        direction="column"
        w="100%"
        h="100%"
      >
        <Flex
          align="center"
          justify="space-between"
          direction="column"
          w="100%"
          h="100%"
          p="3rem 1rem"
        >
          <Box mt="4rem">
            <Counter />
          </Box>
          <Flex
            direction="column"
            align="center"
            justify="center"
            w="100%"
            mb="3rem"
          >
            <Button w="100%" p="15px" onClick={handleContinue}>
              <Text fontSize="20px">{t("UnitsTemplate.continue")}</Text>
            </Button>
            {error && (
              <Text color="tomato" fontSize="1rem" mt=".5rem">
                {error}
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </WrapperItem>
  )
}

export default UnitsTemplate
