import { useContext, useState } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// ui
import { Button } from "@chakra-ui/button"
import { Flex, Text } from "@chakra-ui/layout"

import { Input } from "@chakra-ui/input"

// context
import { FormContext } from "context"
// utils/proptypes
import { ItemPropTypes } from "utils/propTypes"

/**
 * ItemTitle Container
 * @component
 * @description Componente ItemTitle, Formulario de alta/edicion de items
 */
const ItemTitle = ({ item, withEditAction }) => {
  const [t] = useTranslation("global")
  const { title, setTitle } = useContext(FormContext)
  const [error, setError] = useState(null)

  const handleChangeInput = (e) => setTitle(e.target.value)

  const handleContinue = () =>
    title !== "" ? console.log("true :>> ", true) : setError("Ingrese un Item")

  return (
    <Flex
      align="center"
      justify="space-between"
      direction="column"
      w="100%"
      h="100%"
    >
      <Text fontSize="30px">{t("ItemTitle.title")}</Text>
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
  )
}

ItemTitle.propTypes = {
  withEditAction: false,
}

ItemTitle.propTypes = {
  item: PropTypes.shape(ItemPropTypes),
  withEditAction: PropTypes.bool,
}

export default ItemTitle
