import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in Name, Email and Message.");
      return;
    }
    setError("");
    // Opens default mail client with pre-filled data as a fallback
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\n${form.message}`
    );
    window.location.href = `mailto:info@ctechlab.com?subject=${encodeURIComponent(form.subject || "Enquiry from website")}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <div className="section-heading">Contact</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "flex-start" }}>
        {/* Address block */}
        <div style={{ minWidth: "200px", flex: "1 1 200px" }}>
          <span className="heading">CTech Labs Pvt. Ltd.</span>
          <br />
          C-703, Vijay Vihar,
          <br />
          Powai, Mumbai- 400076
          <br />
          India
          <div className="space1" />
          Tel: +91-22-25-704174
          <br />
          M: +91-9833687822
          <div className="space1" />
          <a href="https://www.ctechlab.com" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>
            www.ctechlab.com
          </a>
          <br />
          email:{" "}
          <a href="mailto:info@ctechlab.com" style={{ color: "#666", textDecoration: "underline" }}>
            info@ctechlab.com
          </a>
          <div className="space2" />
          <div style={{ textAlign: "left" }}>
            <a href="/ctechpresentation.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/images/pdf.jpg" style={{ width: "223px", height: "69px" }} alt="CTech Presentation" />
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div style={{ flex: "2 1 320px" }}>
          <iframe
            title="CTech Labs Location"
            src="https://maps.google.com/maps?q=Vijay+Vihar+Powai+Mumbai&output=embed"
            width="100%"
            height="220"
            style={{ border: "1px solid #ddd", borderRadius: "6px" }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <div className="space2" />
      <div className="sep" />
      <div className="space2" />

      {/* Contact Form */}
      <div className="section-heading">Send Us a Message</div>
      <div className="space1" />
      {submitted ? (
        <div className="highlightbox" style={{ color: "#006600" }}>
          Thank you for your message. We will get back to you soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "540px" }}
          noValidate
        >
          {error && (
            <div className="highlightbox" style={{ color: "#cc0000", marginBottom: "10px" }}>
              {error}
            </div>
          )}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td style={{ padding: "6px 8px 6px 0", whiteSpace: "nowrap", color: "#444", fontSize: "0.9rem", verticalAlign: "middle" }}>
                  <label htmlFor="contact-name">Name *</label>
                </td>
                <td style={{ padding: "6px 0" }}>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    placeholder="Your full name"
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "6px 8px 6px 0", whiteSpace: "nowrap", color: "#444", fontSize: "0.9rem", verticalAlign: "middle" }}>
                  <label htmlFor="contact-email">Email *</label>
                </td>
                <td style={{ padding: "6px 0" }}>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    placeholder="your@email.com"
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "6px 8px 6px 0", whiteSpace: "nowrap", color: "#444", fontSize: "0.9rem", verticalAlign: "middle" }}>
                  <label htmlFor="contact-phone">Phone</label>
                </td>
                <td style={{ padding: "6px 0" }}>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "6px 8px 6px 0", whiteSpace: "nowrap", color: "#444", fontSize: "0.9rem", verticalAlign: "middle" }}>
                  <label htmlFor="contact-subject">Subject</label>
                </td>
                <td style={{ padding: "6px 0" }}>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="">-- Select a topic --</option>
                    <option value="Product Enquiry">Product Enquiry</option>
                    <option value="Design Consulting">Design Consulting</option>
                    <option value="R&D Advisory">R&amp;D Advisory</option>
                    <option value="Technology Transfer">Technology Transfer</option>
                    <option value="Partnership">Partnership / Collaboration</option>
                    <option value="Job Application">Job Application</option>
                    <option value="CTech Academy">CTech Academy</option>
                    <option value="General">General Enquiry</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "6px 8px 6px 0", whiteSpace: "nowrap", color: "#444", fontSize: "0.9rem", verticalAlign: "top", paddingTop: "10px" }}>
                  <label htmlFor="contact-message">Message *</label>
                </td>
                <td style={{ padding: "6px 0" }}>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                    placeholder="Your message..."
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td style={{ padding: "8px 0" }}>
                  <button
                    type="submit"
                    style={{
                      background: "#1a7a3a",
                      color: "#fff",
                      border: "none",
                      padding: "9px 28px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      letterSpacing: "0.03em",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#145e2c")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#1a7a3a")}
                  >
                    Send Message
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      )}

      <div className="space2" />
      <div className="sep" />
      <div className="space2" />

      <div className="section-heading">Job Opening</div>
      <span className="heading">Product Manager – LED Lighting</span> (one position)
      <br />
      Passionate about innovative lighting. Good communicator to deal with architects / interior designers / lighting consultants. Insightful about market requirements. Generate feedback for developing new products. Good team player.
      <br />
      <div className="space2" />
      <span className="heading">Model Maker</span> (one position)
      <br />
      ITI pass in pattern making. Experience in plastic fabrication essential.
      <br />
      <div className="space2" />
      <span className="heading">Interns</span> (2 positions – every semester)
      <br />
      From good business or engineering (Mechanical/ electronics) schools. Duration 3 - 6 months. Willing to take up challenging and research based tasks / projects. Self learner / motivated with initiative.
      <br />
      <div className="space2" />
      <span className="heading">Secretary to the Director</span> (one position)
      <br />
      One or two years of secretarial experience desirable.
      <br />
      <div className="space2" />
      <p style={{ fontSize: "0.9rem", color: "#444" }}>
        To apply, email your CV to:{" "}
        <a href="mailto:info@ctechlab.com" style={{ color: "#1a5a1a", textDecoration: "underline" }}>
          info@ctechlab.com
        </a>
      </p>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "3px",
  padding: "6px 8px",
  fontSize: "0.9rem",
  color: "#333",
  background: "#fafafa",
  outline: "none",
  boxSizing: "border-box",
};
