import {
  textVariant,
  fadeIn,
  zoomIn,
  slideIn,
  staggerContainer
} from './motion'

export { textVariant, fadeIn, zoomIn, slideIn, staggerContainer }

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}