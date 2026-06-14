import { products } from "@/data/products-coffee";
import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";

export default function BeanSelectionPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 1rem" }}>
      <Analytics />
      
      <h1>Beans Selection ☕</h1>

      <p>My curated selection of high-quality coffee beans from Indonesian roastery.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {products.map((product) => (
            <div key={product.name} className="product-card">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "1rem",
                    }}
                  />
                )}
                <div>
                    <h3 style={{ margin: "0 0 0.5rem 0" }}>{product.name}</h3>
                    <p style={{ marginBottom: "1rem", fontSize: "0.9rem", opacity: 0.8 }}>{product.description}</p>
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {product.links.shopee && (
                    <a
                      className="store-button shopee"
                      href={product.links.shopee}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Shopee
                    </a>
                  )}
                  {/* {product.links.tokopedia && (
                    <a
                      className="store-button tokopedia"
                      href={product.links.tokopedia}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tokopedia
                    </a>
                  )} */}
                  {product.links.tiktok && (
                    <a
                      className="store-button tiktok"
                      href={product.links.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TikTok Shop
                    </a>
                  )}
                  {product.video && (
                    <a
                      className="store-button youtube"
                      href={product.video}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Video
                    </a>
                  )}
                </div>
            </div>
        ))}
      </div>
      <p style={{ marginTop: "3rem", fontSize: "0.8rem", opacity: 0.7 }}>
        Disclosure: Some links may be affiliate links.
      </p>
    </main>
  );
}