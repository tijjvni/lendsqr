import Head from 'next/head'
import styles from '../styles/Wallet.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Wallet</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            

            <div className="flex-col w-full bg-gray-500 p-5 pb-10 flex-row text-white">
                <div className="flex flex-row">
                    <div className="flex-initital">
                        <span className="text-md font-semibold">Lendsqr</span>
                    </div>
                    <div className="flex-grow justify-center text-center">
                        <span className="text-md font-bold">
                            N10,000
                        </span>
                    </div>
                    <div className="flex-initial">
                        <span className="bg-gray-100 text-gray-700 font-semibold text-xs px-2 py-1 rounded">sign out</span>
                    </div>
                </div>

                <div className="flex">

                    <div className="inline-flex rounded-md shadow-sm w-full " role="group">
                        <button type="button" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        <svg className="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                        Profile
                        </button>
                        <button type="button" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        <svg className="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                        Settings
                        </button>
                        <button type="button" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        <svg className="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
                        Downloads
                        </button>
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

