import { defineArrayMember, defineField, defineType } from "sanity";
import { BiSolidMessageSquareDetail } from 'react-icons/bi'
import { MdOutlinePermMedia } from 'react-icons/md'

export const blog = defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    groups: [
        { name: 'detail', title: 'Detail', icon: BiSolidMessageSquareDetail, default: true},
        { name: 'media', title: 'Media', icon: MdOutlinePermMedia }
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: rule => rule
                .required()
                .min(10)
                .warning(`Title must have at least 10 characters`),
            group: 'detail'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'},
            validation: rule => rule
                .required()
                .error(`Required to generate on the page`),
            hidden: ({document}) => !document?.name,
            group: 'detail'
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'text',
            rows: 2,
            validation: rule => rule
                .required()
                .min(30)
                .warning(`Recommend to have a summary of at least 30 characters`),
            group: 'detail'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    validation: rule => rule.custom((value, context) => {
                        const parent = context?.parent as { asset?: {_ref?: string}}

                        return !value && parent?.asset?._ref ? 'Must provide alt text' : true
                    })
                })
            ],
            group: 'media'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [ defineArrayMember({
                type: 'block'
            })]
        }),
        defineField({
            name: 'date',
            title: 'Published Date',
            type: 'datetime',
            validation: rule => rule
                .required(),
            initialValue: new Date().toISOString()
        })
    ],
    preview: {
        select: {
            media: 'image',
            title: 'title',
            subtitle: 'summary'
        }
    }
})