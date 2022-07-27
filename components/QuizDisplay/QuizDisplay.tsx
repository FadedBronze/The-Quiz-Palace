import QuizDisplayCell from "./QuizDisplayCell";
import {v4 as uuid} from 'uuid'
import useInterval from '../../hooks/useInterval.js'
import { useRef, useState } from "react";
import { StaticImageData } from "next/image";

type QuizDisplayData = {
    name: string;
    difficulty: number;
    img: StaticImageData;
}

type Props = {
    quizDisplayData: QuizDisplayData[]
    theme: string
}

function QuizDisplay({quizDisplayData, theme}: Props) {
    const scrollRef = useRef(null)
    const [scroll, setScroll] = useState(0)
    const [hovering, setHovering] = useState(false)

    useInterval(() => {
        if (hovering) return

        scrollRef.current.scrollLeft += 2

        if (scroll == scrollRef.current.scrollLeft) {
            scrollRef.current.scrollLeft = 0
        }

        setScroll(scrollRef.current.scrollLeft)
    }, 70)

    return (
        <div className="" >
            <h3 className="mt-20 mb-5 ml-6 mr-6">{theme}</h3>
            <div 
                className="p-1 flex bg-gray-200 h-fit overflow-x-auto overflow-y-hidden hide-scrollbar gap-1" 
                ref={scrollRef}
                onMouseOver={() => setHovering(true)}
                onMouseOut={() => setHovering(false)}
            >
                {quizDisplayData.map((data) => <QuizDisplayCell key={uuid()} quizDisplayData={data} /> )}
            </div>
        </div>
    )
}

export default QuizDisplay;