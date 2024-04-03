"use client"

import { Container } from "@/common/components/Container/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export const Header = () => {

    const pathname = usePathname()
    console.log(pathname);

    const [showLink, setShowLink] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 30) {
                setShowLink(true);
            } else {
                setShowLink(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <p>.</p>
        // <Container className="h-16 fixed flex items-center w-full">
        //     {pathname !== "/" && <Link href={"/"}><p>Maria's Pawsome Care</p></Link>}
        //     {pathname === "/" && 
        //     <div>
        //         {showLink &&
        //             <Link href={"/"}><p>Maria's Pawsome Care</p></Link>
        //         }
        //     </div>}
        //     <div className="ml-auto flex items-center">
        //         <Link href={"client"}><button className="border py-2 px-10 mr-5 bg-light-peach" type="button">Book me</button></Link>
        //         <button type="button"><CiMenuBurger size={24}/></button>
        //     </div>
        // </Container>
    )
}