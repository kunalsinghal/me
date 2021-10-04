import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>What's up?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GateKeeper />
    </div>
  );
}

const GateKeeper = () => {
  const [answer, setAnswer] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    const normalized = answer.trim().toLowerCase();
    console.log(normalized);
    if (["proposal", "propose", "engagement", "roka"].includes(normalized)) {
      router.push("/happy-birthday");
    }
  }, [answer]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        fontSize: "2em",
      }}
    >
      <div>How do you get in?</div>
      <input
        style={{
          marginTop: "10px",
          fontSize: "0.8em",
        }}
        placeholder="Hint: the first flower"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
    </div>
  );
};
