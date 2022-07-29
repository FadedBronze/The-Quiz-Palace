import Navbar from "../../components/Navbar/Navbar"
import {v4 as uuid} from 'uuid'

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { motion } from 'framer-motion'

import quizesData from '../../data/quizes.json'
import MultiChoiceQuestion from "../../components/MultiChoiceQuestion/MultiChoiceQuestion"

type QuizData = { 
    name: string; 
    questions: {
        name: string; 
        answers: {name: string, correct: boolean}[];
    }[];
}

function Quiz() {
    const router = useRouter()
    const [data, setData]: [QuizData, (value: QuizData) => void] = useState() 
    const [correctIndexs, setCorrectIndexs]: [boolean[], (value: boolean[]) => void] = useState([])
    const [selected, setSelected]: [number[], (value: number[]) => void] = useState([])

    const [quizDone, setQuizDone] = useState(false)

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
                {data.questions.map((question, index) => 
                    <MultiChoiceQuestion
                        quizDone={quizDone}
                        key={uuid()} 
                        setCorrect={
                            value => {
                                const newCorrectIndexs = [...correctIndexs]
                                newCorrectIndexs[index] = value
                                setCorrectIndexs(newCorrectIndexs)
                            }
                        }
                        question={question}
                        selected={selected[index]}
                        setSelected={
                            value => {
                                const newSelected = [...selected]
                                newSelected[index] = value
                                setSelected(newSelected)
                            }
                        }
                    />
                )}
            </div>

            <div className="w-full h-96 bg-gray-300">
                <motion.button 
                    className="m-10 mb-0 w-24 h-14 bg-green-300 rounded-md"
                    onClick={() => {
                        if (correctIndexs.length != data.questions.length) return
                        setQuizDone(true)
                    }}
                    whileHover={{
                        scale: 1.1
                    }}
                >SUBMIT</motion.button>
                {quizDone && <div className="text-center m-10 pt-10 h-52 bg-gray-200">
                    <h1 className="text-xl font-bold" >Stats:</h1>
                    <h2 className="text-2xl">
                        Accuracy: {correctIndexs.filter(correctIndex => correctIndex == true).length / correctIndexs.length * 100}% 
                    </h2>
                    <h2 className="text-2xl">
                        Correct: {correctIndexs.filter(correctIndex => correctIndex == true).length} / {correctIndexs.length}
                    </h2>
                </div>}
            </div>
        </div>
    )
}

export default Quiz;