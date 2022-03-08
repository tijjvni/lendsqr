import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Wallet.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Wallet</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            


            <div className="flex w-full bg-gray-500 p-5 pb-10 flex-row text-white">
                <div className="flex-initital">
                    <i className="fa fa-home"></i>
                </div>
                <div className="flex-grow justify-center text-center">
                    <span className="text-amber text-md font-bold">
                        N10,000
                    </span>
                </div>
                <div className="flex-initial">
                    <span className="bg-gray-100 text-gray-700 font-semibold text-xs px-2 py-1 rounded">dentist</span>
                </div>
            </div>

            <div className="flex mx-auto w-4/5 -mt-5 bg-white shadow-md  rounded-md p-2 text-gray">
                <Image src="https://source.unsplash.com/41x41/?portrait" alt="Vercel Logo" width={12} height={12} />

                <div className="flex-col flex-grow justify-center px-2 py-1">
                    <div className="flex justify-between items-center ">
                        <h2 className="text-sm font-semibold">Tijjani Yusuf</h2>
                    </div>
                    <div className="flex pt-2  text-sm">
                        <div className="flex items-center mr-auto">
                            <span>tijjani@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>

        <footer className={styles.footer}>
            <a
            href="https://lendsqr.com/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Lendqr
            </a> Task
        </footer>
    </div>
  )
}

