import { useState } from "react";
import { motion } from "framer-motion";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatBox() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I’m MindMate. How are you feeling today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content: text }]);
    setLoading(true);

    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });
      const data = await r.json();
      const reply = (data?.reply ?? "Hmm, I’m not sure right now.").toString();
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "I’m having trouble connecting to AI right now." }]);
    } finally {
      setLoading(false);
    }
  };

  const quickAffirmation = async () => {
    if (loading) return;
    setLoading(true);
    setMessages((m) => [...m, { role: "user", content: "Give me a short positive affirmation for today." }]);
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Give me a short positive affirmation for today." })
      });
      const data = await r.json();
      setMessages((m) => [...m, { role: "assistant", content: data?.reply ?? "You’ve got this." }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "You are enough. You’ve got this." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card" style={{ width: "100%", maxWidth: 640 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <h2 className="h1" style={{ margin: 0, fontSize: 22 }}>MindMate Chat</h2>
        <span className="badge">OpenXAI Powered</span>
      </div>

      <div className="scroll" style={{ display: "flex", flexDirection: "column" }}>
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: m.role === "user" ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={`bubble ${m.role === "user" ? "user" : "bot"}`}
            style={{ alignSelf: m.role === "user" ? "flex-end" : "flex-start" }}
          >
            {m.content}
          </motion.div>
        ))}
        {loading && <div className="bubble bot">Typing…</div>}
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        <input
          className="input"
          placeholder="Type your thought..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button className="btn" onClick={send}>Send</button>
        <button className="btn" onClick={quickAffirmation}>Affirmation</button>
      </div>
    </div>
  );
}














