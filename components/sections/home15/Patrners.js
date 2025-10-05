"use client";

import Image from "next/image";

const marqueeStyles = `
  @keyframes marquee-right {
    0% { transform: translateX(0); }
    100% { transform: translateX(50%); }
  }

  .marquee-container {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .marquee-track {
    display: flex;
    gap: 4rem;
    animation: marquee-right 40s linear infinite;
    white-space: nowrap;
    align-items: center;
  }

  .marquee-track:hover {
    animation-play-state: paused;
  }

  .partner-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
    padding: 0.5rem 1rem;
    background-color: #f9f9f9;
    border-radius: 0.75rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  }

  .partner-item img {
    height: 48px;
    width: auto;
    object-fit: contain;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  .partner-item:hover img {
    opacity: 1;
  }

  .partner-item p {
    margin: 0;
    font-weight: 500;
    font-size: 1rem;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    .marquee-track {
      gap: 2rem;
    }

    .partner-item {
      padding: 0.5rem;
      gap: 0.5rem;
    }

    .partner-item p {
      font-size: 0.875rem;
    }

    .partner-item img {
      height: 36px;
    }
  }
`;

const partners = [
  { name: "HRP Heaves Relief Program", logo: "/assets/images/partners/placeholder.jpg" },
  { name: "National Help Services", logo: "/assets/images/partners/nhs.png" },
  { name: "Pathway for Peace and Progress", logo: "/assets/images/partners/placeholder.jpg" },
  { name: "Evolving Minds Therapy", logo: "/assets/images/partners/placeholder.jpg" },
  { name: "PAC Recycle Works", logo: "/assets/images/partners/placeholder.jpg" },
  { name: "Miss Eastlands Organization", logo: "/assets/images/partners/placeholder.jpg" },
];

export default function PartnersMarquee() {
  return (
    <>
      <style jsx>{marqueeStyles}</style>
      <section className="working-process-section-eight py-10">
        <div className="auto-container">
          <div className="sec-title text-center mb-8">
            <h6 className="home-subtitle">Trusted Partners</h6>
            <h2 className="m-20">Organizations we're proud to work with</h2>
          </div>

          <div className="marquee-container">
            <div className="marquee-track">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="partner-item">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={48}
                    height={48}
                  />
                  <p>{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
