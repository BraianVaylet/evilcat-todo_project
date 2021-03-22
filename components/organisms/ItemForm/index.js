import { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// ui
import { Button } from "@chakra-ui/button"
import { Flex, Text } from "@chakra-ui/layout"
import { CloseIcon } from "@chakra-ui/icons"
import { Input } from "@chakra-ui/input"
import { useToast } from "@chakra-ui/toast"
// components
import CustomDrawer from "components/atoms/CustomDrawer"
import Counter from "components/molecules/Counter"
import Price from "components/molecules/Price"
// context
import { FormContext } from "context"
import { FirebaseContext } from "context/FirebaseContext"
// utils/proptypes
import { ItemPropTypes } from "utils/propTypes"

/**
 * ItemForm Container
 * @component
 * @description Componente ItemForm, Formulario de alta/edicion de items
 */
const ItemForm = ({ isOpen, onClose, item, withEditAction }) => {
  const [t] = useTranslation("global")
  const toast = useToast()
  const { handleAddItem, handleEditItem } = useContext(FirebaseContext)
  const { count, setCount, price, setPrice, cleanContext } = useContext(
    FormContext
  )
  const [value, setValue] = useState("")
  const [error, setError] = useState(null)

  useEffect(() => {
    if (withEditAction) {
      setValue(item.title)
      setPrice(item.price)
      setCount(item.units)
    }
  }, [withEditAction, item])

  const handleChangeInput = (e) => setValue(e.target.value)

  const handleCleanForm = () => {
    setValue("")
    cleanContext()
    setError(null)
  }

  const handleAction = (item) =>
    withEditAction ? handleEditItem(item) : handleAddItem(item)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (value !== "") {
      const _item = item || {}
      _item.title = value.toString()
      _item.units = parseInt(count)
      _item.price = parseInt(price)

      handleAction(_item)
        .then(() => {
          toast({
            title: t("ItemForm.success"),
            description: "",
            status: "success",
            position: "top",
            duration: 3000,
            isClosable: true,
          })
          handleCleanForm()
          onClose()
        })
        .catch((error) => {
          console.log(`error`, error)
          toast({
            title: t("ItemForm.error"),
            description: "",
            status: "error",
            position: "top",
            duration: 3000,
            isClosable: true,
          })
        })
    } else {
      value === "" && setError("Ingrese un titulo al item")
    }
  }

  return (
    <CustomDrawer
      withClose={false}
      size="md"
      direction="top"
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
                isInvalid={error}
                errorBorderColor="tomato"
              />
              <Price />
            </Flex>
            <Counter />
            <Flex
              direction="column"
              align="center"
              justify="center"
              w="100%"
              mb="3rem"
            >
              <Button type="submit" w="100%" p="1rem">
                <Text fontSize="2rem">{t("ItemForm.save")}</Text>
              </Button>
              {error && (
                <Text color="tomato" fontSize="1rem" mt=".5rem">
                  {error}
                </Text>
              )}
            </Flex>
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
  withEditAction: false,
}

ItemForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.shape(ItemPropTypes),
  withEditAction: PropTypes.bool,
}

export default ItemForm
