import { useState, createContext } from "react"
import PropTypes from "prop-types"

export const FormContext = createContext({})

export const FormContextProvider = ({ children }) => {
  const [count, setCount] = useState(1)
  const [price, setPrice] = useState(0)

  const cleanContext = () => {
    setCount(1)
    setPrice(0)
  }

  return (
    <FormContext.Provider
      value={{
        count,
        setCount,
        price,
        setPrice,
        cleanContext,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

FormContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
