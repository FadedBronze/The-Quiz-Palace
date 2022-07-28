import styles from '../../styles/MultiChoiceAnswer.module.css'

function MultiChoiceAnswer({answer}) {
    return (
        <button className={"bg-gray-200 mt-4 relative p-4 block w-full text-left hover:bg-gray-100 " + styles.MultiChoiceAnswer}>
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-black"/>{answer}
        </button>
    )
}

export default MultiChoiceAnswer;