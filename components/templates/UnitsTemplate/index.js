import { useContext, useEffect, useState } from "react"
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
import { FirebaseContext, FormContext } from "context"
// next
import { useRouter } from "next/router"
import { useToast } from "@chakra-ui/toast"

/**
 * UnitsTemplate Component
 * @component
 * @description Componente UnitsTemplate con acceso a la configuracion.
 */
const UnitsTemplate = () => {
  const [t] = useTranslation("global")
  const router = useRouter()
  const toast = useToast()
  const {
    item,
    setItem,
    title,
    price,
    units,
    cleanContext,
    isEditing,
  } = useContext(FormContext)
  const { handleAddItem, handleEditItem } = useContext(FirebaseContext)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (item) {
      const _item = item
      _item.units = item !== "" && units
      setItem(_item)
    }
  }, [units])

  const handleEdit = (saveAndCheck = false) => {
    if (title !== "" && item) {
      item.check = saveAndCheck || item.check
      handleEditItem(item)
        .then(() => {
          toast({
            title: t("toasts.success"),
            description: "",
            status: "success",
            position: "top",
            duration: 3000,
            isClosable: true,
          })
          router.push("/Home")
        })
        .catch((error) => {
          console.log(`error`, error)
          toast({
            title: t("toasts.error"),
            description: "",
            status: "error",
            position: "top",
            duration: 3000,
            isClosable: true,
          })
          setError("Algo falló")
        })
    } else {
      setError("Ingrese un titulo al item")
    }
  }

  const handleSaveNewItem = () => {
    if (title !== "" && price !== "NaN" && units !== "NaN") {
      const _item = {}
      _item.title = title.toString()
      _item.units = parseInt(units)
      _item.price = parseInt(price)

      handleAddItem(_item)
        .then(() => {
          toast({
            title: t("toasts.success"),
            description: "",
            status: "success",
            position: "top",
            duration: 3000,
            isClosable: true,
          })
          cleanContext()
          router.push("/Home")
        })
        .catch((error) => {
          console.log(`error`, error)
          toast({
            title: t("toasts.error"),
            description: "",
            status: "error",
            position: "top",
            duration: 3000,
            isClosable: true,
          })
          setError("Algo falló")
        })
    } else {
      setError("Algo falló")
    }
  }

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
          <Box mt="4rem" w="100%">
            <Counter />
          </Box>
          <Flex
            direction="column"
            align="center"
            justify="center"
            w="100%"
            mb="3rem"
          >
            <Button
              w="100%"
              p="15px"
              onClick={isEditing ? handleEdit : handleSaveNewItem}
            >
              <Text fontSize="20px">{t("UnitsTemplate.save")}</Text>
            </Button>

            {isEditing && item.check === false && (
              <Button
                mt="1rem"
                w="100%"
                p="15px"
                onClick={() => handleEdit(true)}
              >
                <Text fontSize="20px">{t("BtnSaveCheck.saveAndCheck")}</Text>
              </Button>
            )}

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
