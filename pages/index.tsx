import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>What's up?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          fontSize: "2em",
        }}
      >
        Nothing here, do you have the right link?
      </div>
    </div>
  );
}
