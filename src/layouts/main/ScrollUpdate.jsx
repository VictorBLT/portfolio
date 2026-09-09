import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollUpdate() {
    const { pathname, hash } = useLocation();
    const prevPathname = useRef(pathname);

    useEffect(() => {
        if (prevPathname.current !== pathname) {
            if (hash) {
                setTimeout(() => {
                    const id = hash.replace('#', '');
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'instant' });
                    }
                }, 0);
            } else {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'instant',
                });
            }
        }
        prevPathname.current = pathname;
    }, [pathname, hash]);
    return null;
}
