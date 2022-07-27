import Image from "next/image";
import Link from "next/link";


function QuizDisplayCell({ quizDisplayData }) {
    return (
        <Link href={quizDisplayData.path}>
            <a className="h-full w-56 relative bg-black text-white flex-shrink-0">
                <div className="image-container w-full h-fit">
                    <Image className="image" src={quizDisplayData.img} />
                </div>
                <h3 className="absolute m-2 top-0 text-2xl font-light">{quizDisplayData.name}</h3>
                <h4 className="absolute m-2 bottom-0 font-bold">{quizDisplayData.difficulty}/10</h4>
            </a>
        </Link>
    )
}

export default QuizDisplayCell;