import { useContext, useState } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// ui
import { Button } from "@chakra-ui/button"
import { Flex, Text } from "@chakra-ui/layout"
import { CloseIcon } from "@chakra-ui/icons"
import { Input } from "@chakra-ui/input"
// components
import CustomDrawer from "components/atoms/CustomDrawer"
import Counter from "components/molecules/Counter"
import Price from "components/molecules/Price"
// context
import { FormContext } from "context"

/**
 * ItemForm Container
 * @component
 * @description Componente ItemForm, Formulario de alta/edicion de items
 */
const ItemForm = ({ isOpen, onClose }) => {
  const [t] = useTranslation("global")
  const [value, setValue] = useState("")
  const { count } = useContext(FormContext)

  const handleChangeInput = (e) => setValue(e.target.value)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log("count", count)
    if (value !== "") {
      // guardo
    } else {
      // otra cosa
    }
  }

  return (
    <CustomDrawer
      withClose={false}
      isOpen={isOpen}
      onClose={onClose}
      header={<Text fontSize="2.5rem">{t("ItemForm.title")}</Text>}
      body={
        <form
          onSubmit={handleOnSubmit}
          style={{ width: "100%", height: "100%" }}
        >
          <Flex
            align="center"
            justify="space-between"
            direction="column"
            w="100%"
            h="100%"
            p="3rem 1rem"
          >
            <Flex
              direction="column"
              align="flex-start"
              justify="center"
              w="100%"
            >
              <Input
                value={value}
                onChange={handleChangeInput}
                placeholder="Item"
                size="lg"
                fontSize="2rem"
                variant="filled"
                autoFocus={true}
                mb="2rem"
              />
              <Price />
            </Flex>
            <Counter />
            <Button type="submit" w="100%" mb="3rem" p="1rem">
              <Text fontSize="2rem">{t("ItemForm.save")}</Text>
            </Button>
          </Flex>
        </form>
      }
      footer={
        <Flex align="center" justify="center" w="100%">
          <Button onClick={onClose} variant="none">
            <CloseIcon />
          </Button>
        </Flex>
      }
    />
  )
}

ItemForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ItemForm
