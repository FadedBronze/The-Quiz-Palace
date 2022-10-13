import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import QuizPalaceDecor from '../public/images/QuizPalaceDecor.png'

function About() {
    return (
        <div className="h-screen w-screen relative overflow-hidden">
            <Navbar />

            <div className="m-12 w-96">
                <h1 className="text-3xl">About Quiz Palace:</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsum! Voluptatum aspernatur, officia officiis excepturi labore facilis accusantium quisquam consectetur corporis minus quae, alias iste quod reiciendis aut ipsum assumenda.
                </p>
            </div>

            <div className="w-4/12 absolute -bottom-2 right-0 image-container">
                <Image className="image" src={QuizPalaceDecor} />
            </div>
        </div>
    )
}

export default About;