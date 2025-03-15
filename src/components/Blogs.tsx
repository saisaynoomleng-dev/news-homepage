import { sanityFetch } from '@/sanity/lib/live'
import Bounded from './Bounded'
import { BLOG_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { BoundedType } from '@/app/lib/definitions'
import clsx from 'clsx'

const Blogs = async ({ className }: { className: string }) => {
    const { data: blogs } = await sanityFetch({ query: BLOG_QUERY })

    const indexParser = (number) => {
        if (number < 10) {
            return `0${number + 1}`
        } else {
            return `${number + 1}`
        }
    }

    if (!blogs) {
        return null
    }
    return (
        <Bounded
            className={clsx('flex gap-4 p-0 m-0', className)}>
            {blogs.map((blog, index) => (
                <div
                    key={blog?.slug?.current}
                    className='grid grid-cols-2 gap-2 cursor-pointer'>
                    <Image
                        src={urlFor(blog?.image)
                            .width(400)
                            .height(800)
                            .quality(60)
                            .auto('format')
                            .url()
                        }
                        width={400}
                        height={800}
                        alt={blog?.image?.alt || ''}
                        priority />

                    <div>
                        <p className='text-fs-500 font-semibold text-brand-red'>{indexParser(index)}</p>
                        <p className="font-semibold">{blog?.title}</p>
                        <p className='text-fs-300 font-semibold'>{blog?.summary}</p>
                    </div>
                </div>
            ))}
        </Bounded>
    )
}

export default Blogs