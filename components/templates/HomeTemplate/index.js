import { useContext, useEffect, useState } from "react"
// ui
import { Flex } from "@chakra-ui/layout"
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

  useEffect(() => {
    let unsubscribe
    if (user) {
      unsubscribe = handleGetAllItemsRealTime(setItems)
    }
    return () => unsubscribe && {}
  }, [user])

  useEffect(() => itemsContext.setItems(items), [items])

  return (
    <Flex w="100%">
      <ItemsList items={items} />
    </Flex>
  )
}

export default HomeTemplate
