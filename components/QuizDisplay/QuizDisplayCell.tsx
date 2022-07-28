import Image from "next/image";
import Link from "next/link";

import { motion } from 'framer-motion'

function QuizDisplayCell({ quizDisplayData }) {
    return (
        <Link href={quizDisplayData.path}>
            <a>
                <motion.div 
                    className="h-full w-56 relative bg-black text-white flex-shrink-0"
                    whileHover={{scale: 0.95, rotate: -1}}
                > 
                    <div className="image-container w-full h-fit">
                        <Image className="image" src={quizDisplayData.img} />
                    </div>
                    <h3 className="absolute m-2 top-0 text-2xl font-light">{quizDisplayData.name}</h3>
                    <h4 className="absolute m-2 bottom-0 font-bold">{quizDisplayData.difficulty}/10</h4>
                </motion.div>
            </a>
        </Link>
    )
}

export default QuizDisplayCell;