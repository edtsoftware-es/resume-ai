import {
    ForesightManager,
    type ForesightRegisterOptionsWithoutElement,
    type ForesightRegisterResult,
} from 'js.foresight';
import { useEffect, useRef, useState } from 'react';

export default function useForesight<T extends HTMLElement = HTMLElement>(
    options: ForesightRegisterOptionsWithoutElement
) {
    const elementRef = useRef<T>(null);
    const [registerResults, setRegisterResults] =
        useState<ForesightRegisterResult | null>(null);

    useEffect(() => {
        if (!elementRef.current) {
            return;
        }

        const result = ForesightManager.instance.register({
            element: elementRef.current,
            ...options,
        });

        setRegisterResults(result);

        return () => {
            result.unregister();
        };
    }, [options]);

    return { elementRef, registerResults };
}
