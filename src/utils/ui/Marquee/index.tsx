import { Children } from '@/utils/interfaces/Children'
import { forwardRef, ReactNode } from 'react'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { motion } from 'framer-motion'

interface Params extends Children<ReactNode> {
    className?: string
}

const Marquee = forwardRef<HTMLDivElement, Params>(({ children, className }, ref) => {
    return (<div className={styles.marquee}>
        <div ref={ref} className={cl(styles.marquee__list, className)}>
            {children}
            {children}
        </div>
    </div>)
})

Marquee.displayName = 'Marquee'

export const MotionMarquee = motion(Marquee)