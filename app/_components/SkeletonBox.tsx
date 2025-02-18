import { motion } from "framer-motion"
interface SkeletonProps {
    width: number | string;
    height: number;
    className?: string;
}
const SkeletonBox = ({ width  , height , className = "" } : SkeletonProps ) => (
    <motion.div
        className={`bg-gray-300 rounded ${className}`}
        style={{ width, height }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
    />
);

export default SkeletonBox;
