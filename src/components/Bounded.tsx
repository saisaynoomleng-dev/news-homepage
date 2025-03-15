import clsx from "clsx";
import { BoundedType } from "@/app/lib/definitions";

const Bounded = ({
    children,
    className,
    as: Comp = 'section',
    style
}: BoundedType) => {
    return (
        <Comp
            className={clsx('custom-container', className)}>
            {children}
        </Comp>
    )
}

export default Bounded