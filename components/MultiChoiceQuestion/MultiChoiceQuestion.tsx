import MultiChoiceAnswer from "./MultiChoiceAnswer";
import {v4 as uuid} from 'uuid'

function MultiChoiceQuestion({question}) {
    return (
        <div className="m-10">
            <h2 className="text-3xl mb-6">{question.name}:</h2>
            <div>
                {question.answers.map(answer => <MultiChoiceAnswer key={uuid()} answer={answer} />)}
            </div>
        </div>
    )
}

export default MultiChoiceQuestion;