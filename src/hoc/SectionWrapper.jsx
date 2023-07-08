import { motion } from "framer-motion";
import { staggerContainer } from "../utils";

export const SectionWrapper = (Component, idName) => 
function HOC() {
  return (
    <section className='relative z-0 sectionWrapper' id={idName}>
      <Component />
    </section>
  )
}
