import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import videos from '@/utils/config/videos'
import config from '@/utils/config'
import { CSSProperties } from 'react'
import WebServicesLink from '@/features/stack/ui/WebServicesLink'

interface Params {
    style?: CSSProperties
}

export default function WebServices({ style }: Params) {
    const t = useTranslations('stack')

    return (<WebServicesLink style={style}>
        <Item
            video={{ src: videos.stack[1] }}
            theme={t('web-services')}
        />
    </WebServicesLink>)
}