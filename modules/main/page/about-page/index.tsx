import HorizontalDividingLine from '@/components/shared/horizontal-dividing-line'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'
import { ArrowDownIcon } from 'lucide-react'
import * as motion from 'motion/react-client'
import Link from 'next/link'

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
          你可以叫我,
          {' '}
          <span className="font-bold text-purple-400">姜莱</span>
          {' '}
          ~
        </h2>
        <h2>
          也可以叫我,
          {' '}
          <span className="font-bold text-purple-400">AD钙</span>
          {' '}
          ~
        </h2>
        <p>不是很想透露真名, 所以我有很多很多马甲~</p>
      </MaxWidthWrapper>
    </motion.div>
  )
}
