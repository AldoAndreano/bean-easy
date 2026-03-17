export default function LinksPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "4rem 1rem" }}>
      <h1>Recommended Links</h1>

      <p>
        Some of these are affiliate links. If you buy through them,
        you help support the channel at no extra cost ☕
      </p>

      <ul>
        <li>
          <a href="https://example.com" target="_blank">
            Coffee Gear I Use
          </a>
        </li>
      </ul>

      <div style={{ marginTop: "2rem" }}>
        <a href="/">← Back home</a>
      </div>
    </main>
  );
}
