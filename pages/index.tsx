import Head from "next/head";
import ChatBox from "../components/ChatBox";
import MoodVisualizer from "../components/MoodVisualizer";

export default function Home() {
  return (
    <>
      <Head>
        <title>MindMate — AI Wellness Buddy</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <main className="container">
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <h1 className="h1">🌸 MindMate — AI Wellness Buddy</h1>
          <p className="subtle">
            Chat with a supportive AI, track your mood visually, and get a quick daily affirmation.
          </p>
        </div>
        <div className="row">
          <ChatBox />
          <MoodVisualizer />
        </div>
        <div className="footer">
          Built for Hack Node India • Uses <strong>OpenXAI API</strong>
        </div>
      </main>
    </>
  );
}
