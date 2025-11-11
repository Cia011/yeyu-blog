import MaxWidthWrapper from '@/components/shared/max-width-wrapper'
import * as motion from 'motion/react-client'

export default function AboutPage() {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: [30, -8, 0], opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
    >
      <MaxWidthWrapper className="md:text-lg text-center flex items-center justify-center flex-col gap-4 mt-4">
        <p>嘿, 你好呀~👋🏻</p>
        <h2>
          我是
          {' '}
          <span className="font-bold text-purple-400">ciao</span>
          {' '}
          一名热爱技术的开发者。
        </h2>
      </MaxWidthWrapper>
    </motion.div>
  )
}
