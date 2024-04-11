import { motion } from 'framer-motion'
import { slideUpItem } from '../../variants/motion'

const MotionInner = ({ children }) => {
  return (
    <motion.div variants={slideUpItem} className='h-full'>
      {children}
    </motion.div>
  )
}
export default MotionInner
