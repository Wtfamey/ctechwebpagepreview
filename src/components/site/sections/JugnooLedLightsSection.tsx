export function JugnooLedLightsSection() {
  const ruralProducts = [
    { img: "/product/01.jpg", pdf: "/pdf/e-Lantern brochure-final-17.3.08.pdf", title: "LED Lantern" },
    { img: "/product/02.jpg", pdf: "/pdf/eCANDLE brochure-min.pdf", title: "LED Candle" },
    { img: "/product/03.jpg", pdf: "/pdf/Solar Mobile Phone Charger-min.pdf", title: "Solar Phone Charger" },
    { img: "/product/04.jpg", pdf: "/pdf/Solar Home Light.1.pdf", title: "Solar Home Lights" },
    { img: "/product/05.jpg", pdf: "/pdf/Solar LED Streetlight- brochure-13May2017-min.pdf", title: "Solar Street Lights" },
    { img: "/product/06.jpg", pdf: null, title: "LED Night Light" },
    { img: "/product/07.jpg", pdf: "/pdf/Jugnoo LED Lights-230-12s-brochure- 27.12.07.pdf", title: "Solar Lights" },
    { img: "/product/08.jpg", pdf: "/pdf/Solar Hawker Light.pdf", title: "Hawker Solar Lights" },
    { img: "/product/multi.jpg", pdf: "/pdf/Solar Multipurpose Light Brochure-min.pdf", title: "Solar Multipurpose Light" },
  ];
  const infraProducts = [
    { img: "/product/19.jpg", pdf: "/pdf/Solar Streetlight- brochure.pdf", title: "Street Lights" },
    { img: "/product/20.jpg", pdf: "/pdf/Garden Light A4 copy.pdf", title: "Garden Lights" },
    { img: "/product/21.jpg", pdf: "/pdf/Solar Traffic Light.pdf", title: "Solar Traffic Lights" },
    { img: "/product/22.jpg", pdf: "/pdf/Path Light.pdf", title: "LED Path Lights" },
    { img: "/product/23.jpg", pdf: "/pdf/Modular Public Light Column.pdf", title: "Public Light Column" },
    { img: "/product/24.jpg", pdf: "/pdf/Tunnel light brochure.pdf", title: "Tunnel Lights" },
    { img: "/product/25.jpg", pdf: "/pdf/Customised Institutional LED Lights .pdf", title: "Concealed Lights" },
    { img: "/product/26.jpg", pdf: "/pdf/Customised Institutional LED Lights .pdf", title: "Bay Lights" },
  ];
  const specialProducts = [
    { img: "/product/09.jpg", pdf: "/pdf/Auto Interior LED lighting.pdf", title: "Auto Interior LED" },
    { img: "/product/10.jpg", pdf: "/pdf/Miner Cap Lamp.pdf", title: "Miner Cap Lamp" },
    { img: "/product/11.jpg", pdf: "/pdf/Plant Growth Light-brochure.pdf", title: "Plant Growth Light" },
    { img: "/product/12.jpg", pdf: "/pdf/Customised Institutional LED Lights .pdf", title: "Industrial LED Lights" },
    { img: "/product/13.jpg", pdf: "/pdf/Red Light Therapy System.pdf", title: "Red Light Therapy" },
    { img: "/product/14.jpg", pdf: null, title: "LED Wall Washer" },
    { img: "/product/15.jpg", pdf: "/pdf/Customised Institutional LED Lights .pdf", title: "Ceiling Tile Light" },
    { img: "/product/16.jpg", pdf: null, title: "Signage Light Solar" },
    { img: "/product/17.jpg", pdf: "/pdf/Customised Institutional LED Lights .pdf", title: "LED Retrofits" },
    { img: "/product/18.jpg", pdf: null, title: "LED Flasher" },
  ];
  return (
    <>
      <div id="product1" />
      Current major design & development program of <span className="heading">CTech Labs</span> is in the area of power saving products based on LED lighting technologies, as a part of social commitment. <span className="heading">CTech</span> has developed LED solar lighting systems for rural sector applications - Jugnoo LED Lights eLantern, eCandle, Hawker Light and low weight Cap Light for miners.
      <br />
      <span className="heading">CTech</span> is developing energy saving LED based lighting devices for special applications – Marine, Railways, emergencies, medical therapy, green house lights for plant growth etc.
      <br />
      To promote employment and development in rural areas, <span className="heading">CTech</span> offers to collaborate with NGOs & rural based organizations to develop special products for rural communities & industries.
      <br />
      <span className="heading">CTech</span> actively promotes the concept " GO GREEN "
      <br />
      <div className="space2" />
      <div style={{ textAlign: "center", margin: "0 auto" }}>
        <img src="/images/product_name.jpg" style={{ width: "267px", height: "48px" }} alt="Jugnoo LED" />
        <span className="heading2" style={{ paddingLeft: "8px" }}> Ecological LED Lighting</span>
      </div>
      <div className="space1" />
      <span className="heading3">Rural & Social Sector LED Lightning</span>
      <br />
      <div className="space1" />
      {ruralProducts.map((p, i) => (
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
      <div className="space2" />
      <span className="heading3">Infrastructure Lighting</span>
      <br />
      <div className="space1" />
      {infraProducts.map((p, i) => (
        <div className="gallery" key={i}>
          <a href={p.pdf} title="Download Brochure" target="_blank" rel="noopener noreferrer">
            <img src={p.img} alt={p.title} />
          </a>
        </div>
      ))}
      <div className="clear" />
      <div className="space2" />
      <span className="heading3">Specialty & Customised Lights</span>
      <br />
      <div className="space1" />
      {specialProducts.map((p, i) => (
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
      <div className="space2" />
    </>
  );
}
