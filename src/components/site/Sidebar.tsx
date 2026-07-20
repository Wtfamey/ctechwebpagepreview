export function Sidebar() {
  const links: Array<
    | { icon: string; title: string; href: string; isVideo?: false }
    | { isVideo: true; videoId: string; label: string }
  > = [
    { icon: "/images/in_icon.jpg", title: "Composite materials in modular housing", href: "#section-modular-housing" },
    { icon: "/images/in_icon.jpg", title: "Schlumberger CSR 2016-17<br/>Dry-San Inauguration", href: "/pdf/Schlumberger_CSR2016-17_DrySanInauguration.pdf" },
    { icon: "/images/in_icon.jpg", title: "Swachh Bharat —<br/>Hygienic Dry-San Toilet", href: "/pdf/Dry-San%20Toilet%20%5BCTech%5D.pdf" },
    { isVideo: true, videoId: "AnzAWyDT7-0", label: "Dry-San Toilet" },
    { icon: "/images/in_icon.jpg", title: "4 M Strategy — Udit C", href: "/development_strategy.html" },
    { icon: "/images/d_icon.gif", title: "Beware!<br/>Your mouse can bite your hand!", href: "/pdf/mouse.pdf" },
    { icon: "/images/a_icon.gif", title: "Art -<br/>Untouched by Hand", href: "/pdf/art.pdf" },
    { icon: "/images/d_icon.gif", title: "Chair —<br/>The Human Factor", href: "/pdf/Chair_the_human_factor_21May22.pdf" },
    { icon: "/images/in_icon.jpg", title: "Innovation —<br/>Two Dozen Pointers", href: "/two_dozen_pointers_to_innovation.html" },
    { icon: "/images/in_icon.jpg", title: "Round Table on Innovation - Advantage for<br/>manufacturing companies", href: "/round_table.html" },
    { icon: "/images/in_icon.jpg", title: "Jugaad &amp; Frugal Innovation", href: "/pdf/jugad%20&%20Frugal%20Innovation.pdf" },
  ];

  return (
    <aside className="bg-[#383838] text-white rounded-none p-5 shadow-lg sidebar-scroll max-h-[calc(100vh-280px)]" id="link">
      <h3 className="font-bold text-base mb-4 pb-3 border-b border-slate-600 text-amber-400 text-center">
        Resources &amp; Downloads
      </h3>
      {links.map((link, idx) => {
        if (link.isVideo) {
          return (
            <div key={idx}>
              <div className="bg-white/10 rounded-lg p-2 mb-2">
                <iframe
                  title={link.label}
                  src={`https://www.youtube.com/embed/${link.videoId}?rel=0&loop=1`}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full aspect-video rounded"
                />
                <p className="text-xs text-white/70 mt-1 text-center">{link.label}</p>
              </div>
              <hr className="border-slate-600 my-3" />
            </div>
          );
        }
        const isExternal = link.href.startsWith("http") || link.href.startsWith("/pdf") || link.href.endsWith(".html");
        return (
          <div key={idx}>
            <div className="flex items-start gap-2 py-1">
              <img
                src={link.icon}
                alt=""
                className="flex-shrink-0 mt-0.5"
                style={{ width: "22px", height: "22px", objectFit: "contain" }}
              />
              <a
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel="noopener noreferrer"
                dangerouslySetInnerHTML={{ __html: link.title }}
                className="text-sm text-white/80 hover:text-amber-300 transition-colors leading-relaxed"
              />
            </div>
            {idx < links.length - 1 && (
              <hr className="border-slate-600 my-2" />
            )}
          </div>
        );
      })}
      <div className="mt-5 pt-4 border-t border-slate-600">
        <a
          href="/ctechpresentation.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/pdf.jpg"
            alt="CTech Presentation"
            className="w-full max-w-[200px] mx-auto rounded shadow hover:shadow-md transition-shadow"
          />
        </a>
      </div>
    </aside>
  );
}
