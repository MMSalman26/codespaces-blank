import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Head>
   <title>Mizan App | bxd mizan</title>
        <meta name="description" content="This App is created for exposing the bxd mizan" />
        <meta name="keywords" content="bxd mizan"></meta>
        <meta name="author" content="bxd mizan"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Mizan App" />
        <meta property="og:description" content="This App is created for exposing the bxd mizan" />
        <meta property="og:image" content="https://www.shutterstock.com/shutterstock/photos/699192727/display_1500/stock-photo-portrait-very-fat-man-raises-a-dumbbell-morning-exercise-of-a-fat-man-with-dumbbells-white-699192727.jpg" />
   </Head>
   <div className='min-h-screen w-screen bg-slate-900 flex justify-center items-center text-cyan-300 text-3xl'>
    <div className='flex justify-center items-center flex-col mr-10'>

    <h1 className='my-20'>bxd mizan</h1>
    <h2 className='mb-20'>Greatest Nim Ever</h2>
    </div>
    {/* <div className='w-[300px] h-[600px]'>
      <img src='https://www.shutterstock.com/shutterstock/photos/699192727/display_1500/stock-photo-portrait-very-fat-man-raises-a-dumbbell-morning-exercise-of-a-fat-man-with-dumbbells-white-699192727.jpg' alt="hi buddy"></img>
    </div> */}
   </div>
   </>
  )
}
