export function ModularHousingSection() {
  const products = [
    { img: "/product/32.jpg", title: "Beach Huts", href: "/pdf/Modular%20Housing%20in%20FRP%20-%20Beach%20Cabin.pdf" },
    { img: "/product/33.jpg", title: "Modular Houseboat", href: "/pdf/Modular%20Housing%20in%20FRP-%20Houseboat.pdf" },
    { img: "/product/34.jpg", title: "Rural Banking Kiosk", href: "/pdf/Modular%20Housing%20in%20FRP-%20Portable%20Cabin.pdf" },
    { img: "/product/35.jpg", title: "Rail Coach Toilet", href: "/pdf/Modular%20Housing%20in%20FRP-%20Rail%20Coach%20Toilet.pdf" },
    { img: "/product/36.jpg", title: "Frangible Airport Hut", href: "/pdf/Modular%20Housing%20in%20FRP-%20Frangible%20Cabin.pdf" },
    { img: "/product/37.jpg", title: "Rail Coach Interior", href: "/pdf/Modular%20Shelters-Aangan-Wadi.pdf" },
    { img: "/product/38.jpg", title: "Modular Shelter", href: "/pdf/Modular%20Housing%20in%20FRP%20-%20Rail%20Sleeper%20Coach.pdf" },
    { img: "/product/39.jpg", title: "Dry-san Toilet", href: "/pdf/Modular%20Shelters-Aangan-Wadi.pdf" },
    { img: "/product/40.jpg", title: "Dry-san Toilet", href: "/pdf/Dry-San%20Toilet%20[CTech]1.pdf" },
  ];
  return (
    <>
      "In the next 30 years, more than 3000 million people will need places to live & work: 3000 cities with a population of 1,000,000 each will have to be developed. CTech is committed to contribute."
      <br />
      <div className="space2" />
      CTech has been working with IITB and other agencies like TIFAC (Composite Mission program) and various manufacturers to develop variety of appropriate applications for composite materials, particularly glass fibre-reinforced plastic, to effectively compete with traditional materials in cost, and offer superiority in function and performance. Some of the work has been in the area of products like Railways, vehicles and special class of boats.
      <br />
      <div className="space2" />
      CTech licenses these products & technologies to interested companies for manufacture & marketing. Some of these are available for technology transfer to entrepreneurs looking out at new business opportunities and markets. We are happy to receive the proposals. See Tech Mart for more details.
      <br />
      <div className="section-heading">Modular Housing Systems</div>
      <span className="heading3">Eco-Friendly Energy Efficient Housing Systems</span>
      <br />
      <div className="space1" />
      {products.map((p, i) => (
        <div className="gallery" key={i}>
          <a href={p.href} title="Download Brochure" target="_blank" rel="noopener noreferrer">
            <img src={p.img} alt={p.title} />
          </a>
        </div>
      ))}
      <div className="clear" />
    </>
  );
}
