import Calculator from '@/components/Calculator/Calculator';
import Head from 'next/head';

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
