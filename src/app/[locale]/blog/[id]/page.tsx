import { getAllBlogsId, getBlogById } from '@/features/blog'
import { getLocale } from 'next-intl/server'
import { BlogArticle } from '@/widgets/blog'

interface Params {
    params: {
        id: string,
        locale: string
    }
}

export async function generateMetadata({ params: { id, locale } }: Params) {
    const { title, description, ...blog } = await getBlogById(locale, id)

    return { title, description }
}

export async function generateStaticParams() {
    return (await getAllBlogsId()).map((id) => ({ id }))
}

export default async function Page({ params: { id } }: Params) {
    const locale = await getLocale()
    const blog = await getBlogById(locale, id)

    return (<BlogArticle blog={blog}>
        <h1 />
    </BlogArticle>)
}