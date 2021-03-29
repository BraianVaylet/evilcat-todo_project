import { useContext, useEffect, useState } from "react"
// import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// ui
import { Flex, Text } from "@chakra-ui/layout"
import { Input } from "@chakra-ui/input"
import { Button } from "@chakra-ui/button"
// containers
import WrapperItem from "containers/WrapperItem"
// components
import Keyboard from "components/molecules/Keyboard"
// context
import { FirebaseContext, FormContext } from "context"
// next
import { useRouter } from "next/router"
import { useToast } from "@chakra-ui/toast"

/**
 * PriceTemplate Component
 * @component
 * @description Componente PriceTemplate con acceso a la configuracion.
 */
const PriceTemplate = () => {
  const [t] = useTranslation("global")
  const router = useRouter()
  const toast = useToast()
  const { item, setItem, price, isEditing } = useContext(FormContext)
  const { handleEditItem } = useContext(FirebaseContext)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (item) {
      const _item = item
      _item.price = price !== "NaN" && parseInt(price)
      setItem(_item)
    }
  }, [price])

  const handleContinue = () =>
    price !== "NaN" ? router.push("/Units") : setError("Algo falló")

  const handleEdit = () => {
    if (price !== "NaN" && item) {
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
  return (
    <WrapperItem title={t("PriceTemplate.title")}>
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
            value={price}
            placeholder="Item"
            size="lg"
            fontSize="20px"
            variant="filled"
            isDisabled
            autoFocus={false}
            isInvalid={error}
            errorBorderColor="tomato"
          />
          <Keyboard />
          <Flex
            direction="column"
            align="center"
            justify="center"
            w="100%"
            mb="3rem"
          >
            {isEditing ? (
              <Button w="100%" p="15px" onClick={handleEdit}>
                <Text fontSize="20px">{t("PriceTemplate.save")}</Text>
              </Button>
            ) : (
              <Button w="100%" p="15px" onClick={handleContinue}>
                <Text fontSize="20px">{t("PriceTemplate.continue")}</Text>
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

export default PriceTemplate
