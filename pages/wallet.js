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
            


            <div class="flex w-full bg-primary p-5 pb-10 flex-row text-white">
                <div class="flex-initital">
                    <i class="fa fa-home"></i>
                </div>
                <div class="flex-grow justify-center text-center">
                    <span class="text-amber text-md font-bold">
                        N10,000
                    </span>
                </div>
                <div class="flex-initial">
                    <span class="bg-primary-light text-primary-dark font-semibold text-xs px-2 py-1 rounded">dentist</span>
                </div>
            </div>

            <div class="flex mx-auto w-4/5 -mt-5 bg-white shadow-md  rounded-md p-2 text-gray">
                <img alt="" class="w-12 h-12 rounded-full mr-3" src="https://source.unsplash.com/41x41/?portrait"/>
                <div class="flex-col flex-grow justify-center px-2 py-1">
                    <div class="flex justify-between items-center ">
                        <h2 class="text-sm font-semibold">Tijjani Yusuf</h2>
                    </div>
                    <div class="flex pt-2  text-sm">
                        <div class="flex items-center mr-auto">
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

