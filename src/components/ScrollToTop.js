import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        document.querySelector("header").scrollIntoView({
            alignToTop: true,
            behavior: "smooth",
        });
    }, [pathname]);

    return null;
}

export default ScrollToTop;
