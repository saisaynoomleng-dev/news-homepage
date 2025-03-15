import { HeadingType } from "@/app/lib/definitions"

const Heading = ({
    as: Comp = 'h2',
    children,
    size,
    className
}: HeadingType) => {
    return (
        <Comp
            className={className}>
            {children}
        </Comp>
    )
}

export default Heading