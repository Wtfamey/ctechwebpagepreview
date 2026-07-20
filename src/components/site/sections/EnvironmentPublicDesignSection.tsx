export function EnvironmentPublicDesignSection() {
  const products = [
    { img: "/product/41.jpg", title: "Fire Line" },
    { img: "/product/42.jpg", title: "Blue Hill" },
    { img: "/product/43.jpg", title: "Falling Water" },
    { img: "/product/44.jpg", title: "Hanger" },
    { img: "/product/45.jpg", title: "Lightning" },
    { img: "/product/46.jpg", title: "Strollers" },
    { img: "/product/47.jpg", title: "Golden Frog" },
    { img: "/product/48.jpg", title: "Silver Twist" },
    { img: "/product/49.jpg", title: "Silver Ghost" },
    { img: "/product/50.jpg", title: "Golden Horn" },
    { img: "/product/51.jpg", title: "Light Tile" },
    { img: "/product/52.jpg", title: "Light Tile" },
    { img: "/product/53.jpg", title: "Light Tile" },
  ];
  return (
    <>
      Environment & Public Design at CTech concerns itself with the design of public amenities, the design of public spaces, meeting points, hotel lobbies and plazas – making them user-friendly, amenity rich and artistically and culturally interesting iconic spaces through multimedia, digital sculptures, paintings.
      <br />
      <div className="section-heading">Environment & Public Design</div>
      {products.map((p, i) => (
        <div className="gallery" key={i}>
          <img src={p.img} alt={p.title} />
        </div>
      ))}
      <div className="clear" />
    </>
  );
}
