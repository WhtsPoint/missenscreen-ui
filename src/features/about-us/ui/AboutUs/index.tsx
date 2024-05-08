import { type ReactNode, useState } from 'react'
import type {Person} from '../../types/Person'
import PersonInformation from '../PersonInformation'
import PersonSelect from '../PersonSelect'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

interface Params {
    className?: string,
    imagesChildren?: ReactNode
}

export default function AboutUs({ className, imagesChildren }: Params) {
    const [person, setPerson] = useState<Person>('darya')

    const swapPerson = () => setPerson((prev) => prev === 'darya' ? 'vladimir' : 'darya')


    return (<div className={cl(styles.aboutUs, className)}>
        <PersonSelect
            person={person}
            className={styles.aboutUs__personSelect}
            imagesChildren={imagesChildren}
            swapPerson={swapPerson}
        />
        <PersonInformation person={person} className={styles.aboutUs__infromation} />
    </div>)
}