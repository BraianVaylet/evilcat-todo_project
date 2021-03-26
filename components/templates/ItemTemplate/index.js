import { useContext, useState } from "react"
// import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// ui
import { Flex, Text } from "@chakra-ui/layout"
import { Input } from "@chakra-ui/input"
import { Button } from "@chakra-ui/button"
// containers
import WrapperItem from "containers/WrapperItem"
// context
import { FormContext } from "context"

/**
 * ItemTemplate Component
 * @component
 * @description Componente ItemTemplate con acceso a la configuracion.
 */
const ItemTemplate = () => {
  const [t] = useTranslation("global")
  const { title, setTitle } = useContext(FormContext)
  const [error, setError] = useState(null)

  const handleChangeInput = (e) => setTitle(e.target.value)

  const handleContinue = () =>
    title !== "" ? console.log("true :>> ", true) : setError("Ingrese un Item")

  return (
    <WrapperItem title={t("ItemTitle.title")}>
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
          <Input
            value={title}
            onChange={handleChangeInput}
            placeholder="Item"
            size="lg"
            fontSize="20px"
            variant="filled"
            autoFocus={true}
            mb="2rem"
            isInvalid={error}
            errorBorderColor="tomato"
          />
          <Flex
            direction="column"
            align="center"
            justify="center"
            w="100%"
            mb="3rem"
          >
            <Button w="100%" p="15px" onClick={handleContinue}>
              <Text fontSize="20px">{t("ItemTitle.continue")}</Text>
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

export default ItemTemplate
