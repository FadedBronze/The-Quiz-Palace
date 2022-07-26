// images
import Logo from "../../public/images/Logo.png"
import Daily from "../../public/images/Daily.png"
import Home from "../../public/images/Home.png"
import About from "../../public/images/About.png"
import Search from "../../public/images/Search.png"

// components

// outs
import Image from "next/image";

// ins
import SitePageLink from "./SitePageLink";

// components



function Navbar() {
    return (
        // Navbar
        <div className="w-full bg-gray-100 h-24 fixed top-0 text-black flex justify-between">
            {/* logo and name container */}
            <div className="m-3 flex gap-3 w-fit h-fit items-center">
                {/* logo */}
                <Image src={Logo} width="40" height="40" />
                {/* name */}
                <h2 className="font-bold text-2xl">Quiz Palace</h2>
            </div>

            {/* navigation */}
            <nav className="flex h-fit w-96 justify-between m-4">
                <SitePageLink href="/" img={Home} name="Home" />
                <SitePageLink href="/" img={About} name="About" />
                <SitePageLink href="/" img={Daily} name="Daily" />
                <SitePageLink href="/" img={Search} name="Search" />
            </nav>
        </div>
    )
}

export default Navbar;