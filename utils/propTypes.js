import PropTypes from "prop-types"

export const ItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  units: PropTypes.number.isRequired,
  check: PropTypes.bool,
  price: PropTypes.number,
}
