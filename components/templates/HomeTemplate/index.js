import { useContext, useEffect, useState } from "react"
// ui
import { Flex, Text } from "@chakra-ui/layout"
// components
import ItemsList from "components/organisms/ItemsList"
// context
import { FirebaseContext, ItemsContext } from "context"
// hooks
import useUser from "hooks/useUser"

/**
 * HomeTemplate Component
 * @component
 * @description Componente HomeTemplate con acceso a la configuracion.
 */
const HomeTemplate = () => {
  const user = useUser()
  const itemsContext = useContext(ItemsContext)
  const { handleGetAllItemsRealTime } = useContext(FirebaseContext)
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    let unsubscribe
    setLoading(true)
    if (user) {
      unsubscribe = await handleGetAllItemsRealTime(setItems)
      setLoading(false)
    }
    return () => unsubscribe && {}
  }, [user])

  useEffect(() => itemsContext.setItems(items), [items])

  return (
    <Flex w="100%">
      {loading ? (
        <Text w="100%" textAlign="center">
          Cargando...
        </Text>
      ) : (
        <ItemsList items={items} />
      )}
    </Flex>
  )
}

export default HomeTemplate
