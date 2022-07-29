import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import QuizDisplay from '../components/QuizDisplay/QuizDisplay'

import Test from '../public/images/Test.png'
import Math from '../public/images/Math.webp'

export default function Home() {
  const data = [
    {name: "Math Quiz", img: Math, difficulty: 1, path: "/quizes/0"},
    {name: "Science Quiz", img: Test, difficulty: 2, path: "/quizes/1"},
    {name: "w", img: Test, difficulty: 0, path: "/quizes/0"},
    {name: "w", img: Test, difficulty: 0, path: "/quizes/0"},
    {name: "w", img: Test, difficulty: 0, path: "/quizes/0"},
  ] 

  return (
    <div>
      <Head>
        <title>Quiz Palace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <h1 className="mt-7 mb-7 ml-6 mr-6 text-3xl font-bold">Welcome!</h1>
        <QuizDisplay quizDisplayData={data} theme="Check out these quizes:" />
      </main>
    </div>
  )
}
