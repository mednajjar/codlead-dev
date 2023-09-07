import Head from 'next/head'

export default function home () {
  return (
    <>
      <Head>
        <title>CODLead</title>
        <meta
          name='description'
          content='CODLead Plateform For Best Conversion Rate'
          key='desc'
        />
        <meta property='og:title' content='CODLead' />
        <meta
          property='og:description'
          content='Discover The latest Designs And Data Analytics'
        />
        {/* <meta property='og:image' content='./favicon.png' /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon' type='image/<generated>' sizes='32' />
      </Head>
      <main className='h-screen w-full flex flex-col justify-center items-center bg-gradient-to-tr from-indigo-700 to-black'>
        <h1 className='text-white text-6xl font-bold md:text-7xl lg:text-8xl'>
          COD<span className='text-green-600'>Lead</span>
        </h1>
        <p className='text-white mt-6 font-semibold'>Comming soon...</p>
        <a className='mt-5 text-white font-semibold px-3 py-3 text-xl rounded-md bg-indigo-600 hover:bg-indigo-500' href="https://forms.gle/P2BCwnPTcf29hKw27" target="_blank" rel="noopener noreferrer">Buy CODLead.com</a>
      </main>
    </>
  )
}
