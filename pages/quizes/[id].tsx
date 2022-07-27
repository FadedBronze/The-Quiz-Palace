import Navbar from "../../components/Navbar/Navbar"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import quizesData from '../../data/quizes.json'

function Quiz() {
    const router = useRouter()

    const [data, setData] = useState({ }) 

    useEffect(() => {
        if (!router.isReady) return

        setData(quizesData[router.query.id as string])
    }, [router.isReady, router.query.id])

    return (
        <div>
            <Navbar />
            {JSON.stringify(data)}
        </div>
    )
}

export default Quiz;