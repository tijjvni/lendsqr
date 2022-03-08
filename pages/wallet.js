import Head from 'next/head'
import styles from '../styles/Wallet.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Wallet</title>
            <link rel="icon" href="/lendsqr.png" />
        </Head>

        <main className={styles.main}>
            

            <div className="flex-col w-full bg-gray-500 p-5 pb-10 flex-row text-white">
                <div className="flex flex-row">
                    <div className="flex-initital">
                        <span className="text-md font-semibold">Lendsqr</span>
                    </div>
                    <div className="flex-grow justify-center text-center">
                        <span className="text-lg font-bold">
                            N10,000
                        </span>
                    </div>
                    <div className="flex-initial">
                        <span className="bg-gray-100 text-gray-700 font-semibold text-xs px-2 py-1 rounded">sign out</span>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="flex-grow justify-center text-center">
                        <div className="flex rounded-lg text-sm mb-2" role="group">
                            <button className="bg-gray-400 text-white hover:bg-gray-300 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">Fund</button>
                            <button className="bg-gray-400 text-white hover:bg-gray-300  px-4 py-2 mx-0 outline-none focus:shadow-outline">Transfer</button>
                            <button className="bg-gray-400 text-white hover:bg-gray-300 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">Withdraw</button>
                        </div>         
                    </div>         
                </div>
            </div>

            <div className="flex mx-auto w-4/5 -mt-5 bg-white shadow-md  rounded-md p-2 text-gray">
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
            Lendsqr Task
            </a>
        </footer>
    </div>
  )
}

