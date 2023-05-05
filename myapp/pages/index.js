import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Head>
   <title>Mizan App</title>
        <meta name="description" content="This App is created for exposing the goddamned freak Mizan" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Mizan App" />
        <meta property="og:description" content="This App is created for exposing the goddamned freak Mizan" />
        <meta property="og:image" content="https://www.shutterstock.com/shutterstock/photos/699192727/display_1500/stock-photo-portrait-very-fat-man-raises-a-dumbbell-morning-exercise-of-a-fat-man-with-dumbbells-white-699192727.jpg" />
   </Head>
   <div className='h-screen w-screen bg-slate-900 flex justify-center items-center text-cyan-300 text-3xl'>Mizan Akta Bokchod</div>
   </>
  )
}
