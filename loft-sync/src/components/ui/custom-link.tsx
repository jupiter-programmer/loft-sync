'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function CustomLink ({
    children,
    href,
    target,
    className,
    style,
    id,
    ...props
} : {
    children: ReactNode;
    href: string;
    target?: string;
    className?: string;
    style?: object;
    id?: string;
}) {
    const pathname = usePathname();
    const isActive = 
        pathname === href || 
        pathname.startsWith(`${href}/`);
    const linkClass = isActive ? `${className} active` : className;
    return (
        <Link 
            href={href} 
            target={target} 
            className={linkClass} 
            style={style}
            id={id}
            {...props}
        >
            { children }
        </Link>
    );
};