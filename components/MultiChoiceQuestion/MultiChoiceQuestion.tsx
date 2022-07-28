import MultiChoiceAnswer from "./MultiChoiceAnswer";
import {v4 as uuid} from 'uuid'
import { useState } from "react";

function MultiChoiceQuestion({question, setCorrect, correct, quizDone}) {
    const [selected, setSelected] = useState()

    return (
        <div className="m-10">
            <h2 className="text-3xl mb-6">{question.name}:</h2>
            <div>
                {question.answers.map((answer, index) => 
                    <MultiChoiceAnswer 
                        key={uuid()} 
                        quizDone={quizDone}
                        answer={answer}
                        correct={correct}
                        setCorrect={setCorrect}
                        isSelected={selected == index}
                        selectThis={() => setSelected(index)}
                    />
                )}
            </div>
        </div>
    )
}

export default MultiChoiceQuestion;