import { useState, useRef, useEffect } from 'react';
import { Rnd } from 'react-rnd';

export function useDraggableResizable(initialSize: { width: number; height: number }, initialPosition: { x: number; y: number }) {
    const [size, setSize] = useState(initialSize);
    const [position, setPosition] = useState(initialPosition);
    const maxWidth = useRef(window.innerWidth);
    const maxHeight = useRef(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            maxWidth.current = window.innerWidth;
            maxHeight.current = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const onResizeStop = (event: any, { size }: any) => {
        setSize(size);
    };

    return {
        size,
        position,
        setSize,
        setPosition,
        maxWidth: maxWidth.current,
        maxHeight: maxHeight.current,
        onResizeStop,
    };
}
