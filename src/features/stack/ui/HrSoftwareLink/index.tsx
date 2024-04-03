import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'
import { useSpecialSection } from '@/features/main'

type LinkParams = Parameters<typeof Link>[0]

interface Params extends Omit<LinkParams, 'href' | 'onClick'> {}

export default function HrSoftwareLink({ children, ...params }: Params) {
    const { invoke } = useSpecialSection()

    return (<Link
        href={config.routes.services.hrSoftware}
        onClick={() => invoke('hr-software')}
        scroll={false}
        {...params}
    >
        {children}
    </Link>)
}