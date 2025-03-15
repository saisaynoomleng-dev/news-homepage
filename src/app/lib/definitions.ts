// section
export type BoundedType = {
    children: React.ReactNode,
    as?: React.ElementType,
    className?: string
    style?: React.CSSProperties
}

// heading
export type HeadingType = {
    children: React.ReactNode
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size?: 'lg' | 'md' | 'sm'
    className?: string

}