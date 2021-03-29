import { useState, createContext, useEffect } from "react"
import PropTypes from "prop-types"

export const ItemsContext = createContext({})

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [itemsIsActiveTrue, setItemsIsActiveTrue] = useState([])
  const [itemsIsActiveFalse, setItemsIsActiveFalse] = useState([])
  const [itemsCheckTrue, setItemsCheckTrue] = useState([])
  const [itemsCheckFalse, setItemsCheckFalse] = useState([])

  useEffect(() => {
    setItemsIsActiveTrue(activeTrue)
    setItemsIsActiveFalse(activeFalse)
    setItemsCheckTrue(checkTrue)
    setItemsCheckFalse(checkFalse)
  }, [items])

  const handleSortItems = (items) =>
    items.sort((a, b) => {
      if (a.title < b.title) return -1
      if (a.title > b.title) return 1
      return 0
    })

  const activeTrue = handleSortItems(items).filter(
    (item) => item.isActive === true
  )
  const activeFalse = handleSortItems(items).filter(
    (item) => item.isActive === false
  )
  const checkTrue = handleSortItems(items).filter(
    (item) => item.isActive === true && item.check === true
  )
  const checkFalse = handleSortItems(items).filter(
    (item) => item.isActive === true && item.check === false
  )

  const cleanContext = () => {
    setItems([])
    setItemsIsActiveTrue([])
    setItemsIsActiveFalse([])
    setItemsCheckTrue([])
    setItemsCheckFalse([])
  }

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
        cleanContext,
        itemsIsActiveTrue,
        itemsIsActiveFalse,
        itemsCheckTrue,
        itemsCheckFalse,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}

ItemsContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
