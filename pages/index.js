import Calculator from '@/components/Calculator/Calculator';
import { Inter } from '@next/font/google';
import Head from 'next/head';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>JavaScript Calculator</title>
                <meta name='description' content='Calculator' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className='App'>
                <Calculator></Calculator>
            </main>
        </>
    );
}
