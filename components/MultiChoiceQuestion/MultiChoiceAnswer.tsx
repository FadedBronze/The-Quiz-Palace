import styles from '../../styles/MultiChoiceAnswer.module.css'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

function MultiChoiceAnswer({answer, setCorrect, selectThis, isSelected, quizDone, correct}) {

    return (
        <motion.button 
            whileHover={{backgroundColor: "rgb(244, 244, 246)"}}
            animate={{backgroundColor: quizDone ? answer.correct ? "rgb(200, 255, 200)" : "rgb(255, 200, 200)" : "rgb(229, 231, 235)" }}
            style={{ border: isSelected ? "1px solid rgb(150, 200, 255)" : "" }}
            className={"bg-gray-200 mt-4 relative p-4 block w-full text-left " + styles.MultiChoiceAnswer}
            onClick={() => {
                if (!quizDone) {
                    setCorrect(answer.correct == true)
                    selectThis()
                }
            }}
        >
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-black"/>
            {answer.name}
        </motion.button>
    )
}

export default MultiChoiceAnswer;