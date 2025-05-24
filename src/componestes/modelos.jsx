import { useState, useEffect } from "react";
import HeaderDesktop from "./Header"
import HeaderMobile from "./HeaderMobile";

export default function AppHeader() {
    const [Mobile, setMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const heander = () => {
            setMobile(window.innerWidth < 768)
        }
        window.addEventListener('resize', heander)

        return () => window.removeEventListener("resize", heander)
    }, [])

    return Mobile ? <HeaderMobile /> : <HeaderDesktop />
}