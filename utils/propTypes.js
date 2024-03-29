import PropTypes from "prop-types"

export const ItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  units: PropTypes.number.isRequired,
  check: PropTypes.bool,
  price: PropTypes.number,
}

export const userPropTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
}

export const btnPropTypes = {
  action: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
