import Image from "next/image";
import Link from "next/link";
import useWindowSize from '../../hooks/useWindowSize.js'

import { motion } from 'framer-motion'

function SitePageLink({ img, name, href }) {
    const windowSize = useWindowSize()

    return (
        <Link href={href}>
            <a>
                <motion.div 
                    className="flex gap-1 items-center justify-between"
                    whileHover={{scale: 1.2}}
                >
                    <div className="image-containter w-7">
                        <Image className="image" src={img} />
                    </div>
                    {windowSize.width > 800 ? name : ""}
                </motion.div>
            </a>
        </Link>
    )
}

export default SitePageLink;