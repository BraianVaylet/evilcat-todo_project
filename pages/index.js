// ui
import { Flex } from "@chakra-ui/layout"
// components
import ItemsList from "components/organisms/ItemsList"

export default function Home() {
  const items = [
    {
      id: "1",
      title: "Producto 1",
      units: 2,
      check: true,
      price: 0,
    },
    {
      id: "2",
      title: "Producto 2",
      units: 22,
      check: true,
      price: 0,
    },
    {
      id: "3",
      title: "Producto 3",
      units: 1,
      check: false,
      price: 0,
    },
    {
      id: "4",
      title: "Producto 4",
      units: 2,
      check: false,
      price: 0,
    },
    {
      id: "5",
      title: "Producto 5",
      units: 2,
      check: false,
      price: 0,
    },
    {
      id: "6",
      title: "Producto 6",
      units: 12,
      check: false,
      price: 0,
    },
  ]

  return (
    <Flex w="100%">
      <ItemsList items={items} />
    </Flex>
  )
}
