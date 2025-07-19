'use client';
import type { ForesightRegisterOptions } from 'js.foresight';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useForesight from '@/hooks/use-foresight';

interface ForesightLinkProps
    extends Omit<LinkProps, 'prefetch'>,
    Omit<ForesightRegisterOptions, 'element' | 'callback'> {
    children: React.ReactNode;
    className?: string;
}

export function ForesightLink({
    children,
    className,
    ...props
}: ForesightLinkProps) {
    const router = useRouter(); // import from "next/navigation" not "next/router"
    const { elementRef, registerResults } = useForesight<HTMLAnchorElement>({
        callback: () => {
            router.prefetch(props.href.toString());
        },
        hitSlop: props.hitSlop,
        name: props.name,
        meta: props.meta,
    });

    return (
        <Link
            {...props}
            className={className}
            prefetch={registerResults?.isTouchDevice ?? false}
            ref={elementRef}
        >
            {children}
        </Link>
    );
}
