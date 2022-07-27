import QuizDisplayCell from "./QuizDisplayCell";
import {v4 as uuid} from 'uuid'
import useInterval from '../../hooks/useInterval.js'
import { useRef, useState } from "react";

type QuizDisplayData = {
    name: string;
    difficulty: number;
    img: string;
}

type Props = {
    quizDisplayData: QuizDisplayData[]
}

function QuizDisplay({quizDisplayData}: Props) {
    const scrollRef = useRef(null)
    const [scroll, setScroll] = useState(0)

    useInterval(() => {
        scrollRef.current.scrollLeft += 2

        if (scroll == scrollRef.current.scrollLeft) {
            scrollRef.current.scrollLeft = 0
        }

        setScroll(scrollRef.current.scrollLeft)
    }, 70)

    return (
        <div 
            className="flex h-44 bg-gray-700 w-full overflow-y-auto hide-scrollbar" 
            ref={scrollRef}
        >
            {quizDisplayData.map((data) => <QuizDisplayCell key={uuid()} quizDisplayData={data} /> )}
        </div>
    )
}

export default QuizDisplay;