import PropTypes from "prop-types"
// components
import Footer from "components/molecules/Footer"
import Navbar from "components/molecules/Navbar"

/**
 * LayoutTemplate Component
 * @component
 * @description Componente LayoutTemplate con Navbar yoptimi Footer
 */
const LayoutTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

LayoutTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default LayoutTemplate
