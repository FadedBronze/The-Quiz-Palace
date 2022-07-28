import Navbar from "../../components/Navbar/Navbar"
import {v4 as uuid} from 'uuid'

import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import quizesData from '../../data/quizes.json'
import MultiChoiceQuestion from "../../components/MultiChoiceQuestion/MultiChoiceQuestion"

type QuizData = { 
    name: string; 
    questions: {
        name: string; 
        correct: number[]; 
        answers: string[]; 
    }[];
}

function Quiz() {
    const router = useRouter()

    const [data, setData]: [QuizData, (value: QuizData) => void] = useState() 

    useEffect(() => {
        if (!router.isReady) return

        setData(quizesData[
            parseInt(router.query.id as string)
        ])
    }, [router.isReady, router.query.id])

    if (typeof data === "undefined") return

    return (
        <div className=" overflow-x-hidden">
            <Navbar />
            <h1 className="m-10 mb-16 text-4xl font-bold">{ data.name }:</h1>
            <div>
                {data.questions.map(question => <MultiChoiceQuestion key={uuid()} question={question}/>)}
            </div>
        </div>
    )
}

export default Quiz;