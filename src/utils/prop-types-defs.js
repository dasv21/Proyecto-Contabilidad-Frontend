import PropTypes from "prop-types";

export const clientPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  shortName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  rif: PropTypes.string.isRequired,
}).isRequired;

export const clientDetailsPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  rif: PropTypes.string.isRequired,
  shortName: PropTypes.string.isRequired,
  legalName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phones: PropTypes.arrayOf(PropTypes.string).isRequired,
  address: PropTypes.string.isRequired,
  accountant: PropTypes.string.isRequired,
  createOn: PropTypes.string.isRequired,
  updateOn: PropTypes.string.isRequired,
}).isRequired;
