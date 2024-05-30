import { motion } from "framer-motion";

export const PageTransition = (): JSX.Element => {
  const transitionVariants = {
    initial: {
      scaleX: 1,
      transformOrigin: "left"
    },
    animate: {
      scaleX: 0,
      transformOrigin: "left"
    },
    exit: {
      transformOrigin: "left"
    }
  }

  const transition = [
    { delay: 0.2, color: "#2e2257", opacity: "30" },
    { delay: 0.4, color: "#3b2d71", opacity: "20" },
    { delay: 0.6, color: "#4b3792", opacity: "10" }
  ]

  return (
    <>
      {
        transition.map(({ delay, color, opacity }) => (
          <motion.div
            key={color}
            className="fixed top-0 bottom-0 right-0 left-0"
            style={{
              backgroundColor: color,
              zIndex: opacity,
              transformOrigin: "left" // Ensures that the origin of the transformation is the right edge
            }}
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              delay,
              duration: 0.6,
              ease: "easeInOut"
            }}
          />
        ))
      }
    </>
  )
}