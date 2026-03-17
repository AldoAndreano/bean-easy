export default function HomePage() {
  return (
    <main style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "4rem 1rem",
        lineHeight: 1.6,
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Bean Easy ☕
      </h1>

      <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
        Life happens, coffee helps.
        <br />
        Simple brewing, honest gear, no fuss.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <a href="/gear">→ My recommended gear</a>
      </div>
    </main>
  );
}