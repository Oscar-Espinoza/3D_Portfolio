import {
  textVariant,
  fadeIn,
  zoomIn,
  slideIn,
  staggerContainer,
  handleLinkClick
} from './motion'

const capitalizeFirstLetter = (string) => (string.charAt(0).toUpperCase() + string.slice(1))

export { textVariant, fadeIn, zoomIn, slideIn, staggerContainer, capitalizeFirstLetter, handleLinkClick }

