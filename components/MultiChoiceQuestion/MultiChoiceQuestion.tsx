import MultiChoiceAnswer from "./MultiChoiceAnswer";
import {v4 as uuid} from 'uuid'
import { useState } from "react";
import { motion } from 'framer-motion'

function MultiChoiceQuestion({question, setCorrect, quizDone, selected, setSelected}) {

    return (
        <motion.div animate={{scale: 0.9}} whileInView={{scale: 1}} className="m-10">
            <h2 className="text-3xl mb-6">{question.name}:</h2>
            <div>
                {question.answers.map((answer, index) => 
                    <MultiChoiceAnswer 
                        key={uuid()} 
                        quizDone={quizDone}
                        answer={answer}
                        setCorrect={setCorrect}
                        isSelected={selected == index}
                        selectThis={() => setSelected(index)}
                    />
                )}
            </div>
        </motion.div>
    )
}

export default MultiChoiceQuestion;