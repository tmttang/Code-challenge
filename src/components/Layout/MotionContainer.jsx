import { motion } from 'framer-motion'
import { slideUpContainer } from '../../variants/motion'

const MotionContainer = ({ children, viewport }) => {
  return (
    <motion.section
      variants={slideUpContainer}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.4, ...viewport }}
    >
      {children}
    </motion.section>
  )
}
export default MotionContainer
