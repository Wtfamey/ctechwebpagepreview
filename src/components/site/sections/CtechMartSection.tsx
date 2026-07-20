export function CtechMartSection() {
  const products = [
    { img: "/mart/01.jpg", pdf: "/pdf/Beach-Huts.pdf", title: "Beach Huts" },
    { img: "/mart/02.jpg", pdf: "/pdf/Ergo Body Rocker & 3Leg Chair.pdf", title: "Ergo Body Rocker" },
    { img: "/mart/03.jpg", pdf: null, title: "" },
    { img: "/mart/04.jpg", pdf: "/pdf/Ergo Chair (1).pdf", title: "Ergo Chair" },
    { img: "/mart/05.jpg", pdf: "/pdf/Modular Housing in FRP- Frangible Cabin.pdf", title: "Modular Housing" },
    { img: "/mart/06.jpg", pdf: "/pdf/Modular Shelters-Aangan-Wadi.pdf", title: "Modular Shelter" },
    { img: "/mart/07.jpg", pdf: "/pdf/Schlumberger_CSR2016-17_DrySanInauguration.pdf", title: "Dry-San Toilet" },
    { img: "/mart/08.jpg", pdf: "/pdf/Modular Shelters-Aangan-Wadi.pdf", title: "Modular Shelter" },
    { img: "/mart/09.jpg", pdf: "/pdf/Geodesic Umbrella-Tent. Canopy brochure.pdf", title: "Geodesic Umbrella" },
    { img: "/mart/10.jpg", pdf: "/pdf/Geodesic Umbrella-Tent. Canopy brochure.pdf", title: "Geodesic Umbrella" },
    { img: "/mart/11.jpg", pdf: "/pdf/Geodesic Umbrella-Tent. Canopy brochure.pdf", title: "Geodesic Umbrella" },
    { img: "/mart/12.jpg", pdf: "/pdf/Solar Cooker Brochure.pdf", title: "Solar Cooker" },
    { img: "/mart/13.jpg", pdf: "/pdf/Modular Toilet Cluster- brochure.pdf", title: "Modular Toilet" },
    { img: "/mart/14.jpg", pdf: null, title: "" },
    { img: "/mart/15.jpg", pdf: null, title: "" },
    { img: "/mart/16.jpg", pdf: "/pdf/Carbogen Inhaler.pdf", title: "Carbogen Inhaler" },
  ];
  return (
    <>
      <span className="heading">CTech</span> is developing variety of affordable, energy efficient, eco-friendly green products for niche markets with an excellent business potential, better acceptability & marketability.
      <br />
      <span className="heading">CTech</span> offers complete design and technology know-how under license to interested organizations for manufacture / marketing or creates subsidiary companies in partnership with venture capital funds / investment funds / other companies.
      <br />
      <span className="heading">CTech</span> offers design documentation, CAD drawings, working models / mockup models and prototype of the product. In special cases, soft tooling / knock-down kits for assembly are also provided.
      <br />
      <span className="heading">CTech</span> also seeks dealership for these products.
      <br />
      <div className="section-heading">CTech Mart</div>
      To promote employment and development in rural areas, CTech offers to collaborate with NGOs & rural based organizations to develop special products for rural industries. CTech offers training to the personnel of these organizations to make and adapt new products and processes.
      <br />
      <div className="space1" />
      {products.map((p, i) => (
        <div className="gallery" key={i}>
          {p.pdf ? (
            <a href={p.pdf} title="Download Brochure" target="_blank" rel="noopener noreferrer">
              <img src={p.img} alt={p.title} />
            </a>
          ) : (
            <img src={p.img} alt={p.title} />
          )}
        </div>
      ))}
      <div className="clear" />
    </>
  );
}
