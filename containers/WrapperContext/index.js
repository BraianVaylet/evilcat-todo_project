import React from "react"
import PropTypes from "prop-types"

/**
 * WrapperContext Container
 * @component
 * @description Contenedor del Context del proyecto
 */
const WrapperContext = ({ children }) => {
  return <>{children}</>
}

WrapperContext.propTypes = {
  children: PropTypes.element.isRequired,
}

export default WrapperContext
