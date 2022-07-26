import Image from "next/image";
import Link from "next/link";


function SitePageLink({ img, name, href }) {

    return (
        <div className="flex gap-1 items-center justify-between">
            <div className="image-containter w-7">
                <Image className="image" src={img} />
            </div>
            <Link href={href}>{name}</Link>
        </div>
    )
}

export default SitePageLink;