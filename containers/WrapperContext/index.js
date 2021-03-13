import React from "react"
import PropTypes from "prop-types"
// context
import { FormContextProvider } from "context"

/**
 * WrapperContext Container
 * @component
 * @description Contenedor del Context del proyecto
 */
const WrapperContext = ({ children }) => {
  return <FormContextProvider>{children}</FormContextProvider>
}

WrapperContext.propTypes = {
  children: PropTypes.element.isRequired,
}

export default WrapperContext
