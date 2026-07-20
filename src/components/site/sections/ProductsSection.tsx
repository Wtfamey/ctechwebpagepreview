export function ProductsSection() {
  const categories = [
    { href: "#section-jugnoo-led-lights", img: "/images/Jugnoo-Solar-Street-Light.jpg", title: "Jugnoo LED Lights" },
    { href: "#section-eon-electric-mobility", img: "/images/Elderly_Scooter.jpg", title: "eOn Electric Mobility" },
    { href: "#section-modular-housing", img: "/images/Modulat-pedestrian-Bridge1.jpg", title: "Modular Housing" },
    { href: "#section-environment-public-design", img: "/images/banner04.jpg", title: "Environment & Public Design" },
  ];
  return (
    <>
      <div className="section-heading">Products</div>
      <p className="textmatter">Eco-friendly, market-ready products developed in collaboration with IITs and research partners.</p>
      <div className="products-grid">
      {categories.map((cat) => (
        <div key={cat.title} className="product-card">
          <a href={cat.href} className="product-link">
            <img src={cat.img} alt={cat.title} className="product-image" />
          </a>
          <span className="heading product-title">
            <a href={cat.href} className="product-title-link">{cat.title}</a>
          </span>
        </div>
      ))}
      </div>
    </>
  );
}
