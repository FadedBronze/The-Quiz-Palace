import Image from "next/image";
import Link from "next/link";
import useWindowSize from '../../hooks/useWindowSize.js'

function SitePageLink({ img, name, href }) {
    const windowSize = useWindowSize()

    return (
        <Link href={href}>
            <a className="flex gap-1 items-center justify-between">
                <div className="image-containter w-7">
                    <Image className="image" src={img} />
                </div>
                {windowSize.width > 800 ? name : ""}
            </a>
        </Link>
    )
}

export default SitePageLink;