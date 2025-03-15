import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { MdOutlinePermMedia } from "react-icons/md";
import { defineField, defineType } from "sanity";
import { BsFilePost } from 'react-icons/bs'

export const postType = defineType({
    name: 'post',
    title: 'post',
     groups: [
            { name: 'detail', title: 'Detail', icon: BiSolidMessageSquareDetail, default: true},
            { name: 'media', title: 'Media', icon: MdOutlinePermMedia }
        ],
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: rule => rule
                .required()
                .min(10)
                .warning('Title Must be at least 10 characters'),
            group: 'detail'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {source: 'name'},
            validation: rule => rule
                .required()
                .error('Required to generate on a page'),
            group: 'detail',
            hidden: ({document}) => !document?.title
        }),
        defineField({
            name: 'summary',
            type: 'text',
            title: 'Summary',
            validation: rule => rule
                .required()
                .min(30)
                .warning('Summary should be at least 30 characters long'),
            group: 'detail',
        }),
    ],
    
})