export function CtechAcademySection() {
  return (
    <>
      <div className="section-heading">CTech Academy</div>
      CTech Academy offers educational programs, workshops, seminars and training in innovation management, design thinking, product development and entrepreneurship — drawing on decades of experience at IIT Bombay and industry.
      <br />
      <div className="space2" />

      <span className="heading">Innovation & Creativity Workshops</span>
      <br />
      Hands-on workshops covering the fundamentals of innovation, creativity tools, lateral thinking and structured problem-solving for product development teams and engineering organizations.
      <br />
      <div className="space2" />

      <span className="heading">Product Development Masterclass</span>
      <br />
      A comprehensive program covering the full product development cycle — from concept ideation and technology scouting to prototype, production engineering and market launch strategy.
      <br />
      <div className="space2" />

      <span className="heading">Humanology in Design</span>
      <br />
      Introduces the science of human potential, limitations and interactive behaviour as applied to product design and development. Covers ergonomics, user experience, human factors and inclusive design.
      <br />
      <div className="space2" />

      <span className="heading">4M Strategy — Innovation Management</span>
      <br />
      CTech's unique 4M approach: <strong>Mentoring</strong> new product development teams, introducing appropriate <strong>Methodologies</strong> and analytical tools, <strong>Motivating</strong> &amp; challenging for higher levels of creativity, and <strong>Monitoring</strong> the product development process to achieve high certainty of market success.
      <br />
      <div className="space2" />

      <div className="section-heading">Two Dozen Pointers to Innovation</div>
      <p style={{ color: "#FF9900", fontSize: "0.9rem", lineHeight: 1.7 }}>
        Innovation has become a buzzword in India. It is seen as a panacea for future growth and development. There is however some confusion regarding the word — it is often considered synonymous with invention, design or product. It is usually forgotten that it is a disciplined process that needs a fertile environment to happen. The following points bring clarity on what innovation is and what it is not.
        {" "}<strong>— K. Munshi</strong>
      </p>
      <br />
      {[
        "Innovation is not acceptable if it does not fulfill a commercial, business, social or intellectual objective",
        "Innovation starts with an idea, an invention, or even a problem",
        "Invention and innovation are not the same. However, while innovating one might also invent",
        "Innovation is basically a process — the end result is a product or a service",
        "Planned innovation is a result of a disciplined process using a methodology",
        "The process of innovation includes research, design & development",
        "Customer / user is the key factor in innovation",
        "Technology may or may not be a factor",
        "Creativity is integral to the process of innovation",
        "Innovation management includes methodology, monitoring, mentoring & motivating (Munshi's 4M approach)",
        "Good management of innovation means ensuring high certainty of success in the market place, even before the 'innovation product' is launched",
        "Good management of innovation also means high productivity of the 'innovation process'",
        "Innovation can be a small step forward or a break-through",
        "Small step innovations can sometimes turn out to be big money earners",
        "Break-through innovations are a long-term investment and important for growth of a company",
        "Break-through innovations involve risk",
        "Break-through innovations have to justify the investment put into them even before they are fully developed",
        "Break-through innovations are generally susceptible to resistance and rejection. They will be screened at many levels",
        "Break-through innovations need to be introduced carefully and diligently and have to be proved viable at many stages",
        "To judge the potential of break-through innovation, help from sensitive, well-informed, forward-looking members of the management team is needed",
        "Innovation does not happen in isolation",
        "A collaborative approach helps the process of innovation",
        "Replicating a design is not innovation. Replicating design can however yield short-term benefits",
        "Form innovation (innovation in shape) is also an innovation and should be recognized as such",
      ].map((point, idx) => (
        <p key={idx} style={{ marginBottom: "0.6rem", fontSize: "0.9rem", color: "#444", lineHeight: 1.6 }}>
          <span className="heading" style={{ color: "#000000", marginRight: "6px" }}>{idx + 1}.</span>
          {point}
        </p>
      ))}
      <p style={{ fontSize: "0.9rem", color: "#444" }}>
        More information:{" "}
        <a href="mailto:munshi@iitb.ac.in" style={{ color: "#1a5a1a", textDecoration: "underline" }}>
          munshi@iitb.ac.in
        </a>
      </p>
      <div className="space2" />

      <div className="section-heading">Programs &amp; Registration</div>
      For program schedules and registration, contact:{" "}
      <a href="mailto:info@ctechlab.com" style={{ color: "#666", textDecoration: "underline" }}>
        info@ctechlab.com
      </a>
      <br />
      <div className="space2" />
      <div style={{ textAlign: "left" }}>
        <a href="/ctechpresentation.pdf" target="_blank" rel="noopener noreferrer">
          <img src="/images/pdf.jpg" style={{ width: "223px", height: "69px" }} alt="CTech Presentation" />
        </a>
      </div>
      <div className="space2" />
    </>
  );
}
