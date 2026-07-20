export function EonElectricMobilitySection() {
  const products = [
    { img: "/product/27.jpg", title: "ECO 3-Wheeler eTrike", href: "/pdf/5.eSCOOT-min.pdf" },
    { img: "/product/28.jpg", title: "Electric 3 Wheeler", href: "/pdf/1.eTRIKE-Multipurpose%20Runabout-min.pdf" },
    { img: "/product/29.jpg", title: "Electric Rickshaw", href: "/pdf/4.eRICK-min.pdf" },
    { img: "/product/30.jpg", title: "Electric Cart", href: "/pdf/e-Cart-brochure%20.pdf" },
    { img: "/product/31.jpg", title: "Electric Platform", href: "/pdf/e-Platform-brochure%20.pdf" },
  ];
  return (
    <>
      A firm believer of design-enabled green manufacturing and having realized the potential of electro-mobility, CTech in collaboration with IITB has designed and developed sustainable and eco-friendly energy saving electrical vehicles – two wheelers, three wheelers for interior use - airports, shopping malls, IT campuses, railway stations, factories etc.
      <br />
      <div className="space2" />
      CTech strategy is based on niche EV marketing for developing micro EVs, where range can be limited, thereby reducing the battery weight and where the vehicles can go round the corner for quick dose of charging.
      <br />
      <div className="space2" />
      <div style={{ paddingLeft: "60px" }}>
        <span className="heading6"><img src="/images/eco_logo.jpg" style={{ width: "134px", height: "37px" }} alt="" /></span>
        <span className="heading4" style={{ paddingLeft: "10px" }}>Electric Mobility</span>
      </div>
      <div className="space" />
      <div className="space1" />
      <div className="column21" style={{ textAlign: "center" }}>
        <iframe src="https://www.youtube.com/embed/57yOFe9xckY?rel=0&loop=1" frameBorder="0" allowFullScreen title="ECO 3-Wheeler eTrike"></iframe>
        <br /><div className="space" />ECO 3-Wheeler eTrike
      </div>
      <div className="column21" style={{ textAlign: "center" }}>
        <iframe src="https://www.youtube.com/embed/HCC-yyq4Q2k?rel=0&loop=1" frameBorder="0" allowFullScreen title="ECO eScooter"></iframe>
        <br /><div className="space" />ECO eScooter
      </div>
      <div className="clear" />
      <div className="space1" />
      {products.map((p, i) => (
        <div className="gallery" key={i}>
          <a href={p.href} title="Download Brochure" target="_blank" rel="noopener noreferrer">
            <img src={p.img} alt={p.title} />
          </a>
        </div>
      ))}
      <div className="clear" />
      <div className="space2" />
      Demonstration vehicles were designed for minimum weight, using composite materials, optimized geometry and configuration. Two such vehicles prototypes (single seat scooter and 3-wheeler runabout (Trike) for interior application (airport, malls, IT / Industry campuses) are running for more than a year at IIT-B Campus and are now available for technology transfer to entrepreneurs looking out at new business opportunities and markets. We are happy to receive the proposals. See Tech Mart for more details.
      <br />
      <div className="space2" />
      <span className="heading3">Eco-Friendly Energy Saving Electrical Vehicles</span>
      <br />
      <div className="space1" />
    </>
  );
}
