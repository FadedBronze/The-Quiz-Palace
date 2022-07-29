import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useRef } from 'react'

function MultiChoiceAnswer({answer, setCorrect, selectThis, isSelected, quizDone}) {
    const animCrtl = useAnimationControls()

    return (
        <motion.button
            whileHover={{backgroundColor: "rgb(244, 244, 246)"}}
            onMouseOver={() => animCrtl.start({width: "8px"})}
            onMouseOut={() => animCrtl.start({width: "4px"})}
            animate={{backgroundColor: quizDone ? answer.correct ? "rgb(200, 255, 200)" : "rgb(255, 200, 200)" : "rgb(229, 231, 235)" }}
            style={{ border: isSelected ? "1px solid rgb(150, 200, 255)" : "" }}
            className={"bg-gray-200 mt-4 relative p-4 block w-full text-left"}
            onClick={() => {
                if (!quizDone) {
                    setCorrect(answer.correct == true)
                    selectThis()
                }
            }}
        >
            <motion.div className="absolute top-0 bottom-0 left-0 w-1 bg-black" animate={animCrtl} />
            {answer.name} { quizDone && isSelected && !answer.correct ? "❌" : "" } { quizDone && isSelected && answer.correct ? "✅" : "" }
        </motion.button>
    )
}

export default MultiChoiceAnswer;