import { useState, createContext } from "react"
import PropTypes from "prop-types"

export const ItemsContext = createContext({})

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const cleanContext = () => {
    setItems([])
  }

  return (
    <ItemsContext.Provider
      value={{
        items,
        cleanContext,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}

ItemsContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
