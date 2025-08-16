import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

type Slice = { name: string; value: number };
const baseData: Slice[] = [
  { name: "Happy", value: 4 },
  { name: "Calm", value: 3 },
  { name: "Stressed", value: 2 },
  { name: "Excited", value: 2 }
];
// Nice palette
const COLORS = ["#34d399", "#60a5fa", "#fbbf24", "#f87171", "#a78bfa", "#f472b6"];

export default function MoodVisualizer() {
  const [data, setData] = useState<Slice[]>(baseData);

  const bump = (name: string) => {
    setData(d => d.map(s => s.name === name ? { ...s, value: s.value + 1 } : s));
  };

  const total = data.reduce((a, b) => a + b.value, 0);

  return (
    <div className="card" style={{ width: "100%", maxWidth: 480 }}>
      <h2 className="h1" style={{ fontSize: 22 }}>Mood Visualizer</h2>
      <p className="subtle">Click a mood to add it. Great for daily check‑ins.</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "8px 0 16px" }}>
        {data.map((s, idx) => (
          <button key={idx} className="btn" onClick={() => bump(s.name)}>{s.name}</button>
        ))}
      </div>
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" outerRadius={90} dataKey="value" nameKey="name" label>
              {data.map((entry, i) => <Cell key={`c-${i}`} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="footer">Entries today: <strong>{total}</strong></div>
    </div>
  );
}
