import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Mission() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth > 768 && sidebarRef.current && sectionsRef.current) {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Create the pin effect for the sidebar
      if (sidebarRef.current && sectionsRef.current) {
        gsap.to(sidebarRef.current, {
          // y: "4%", // Moves the sidebar up faster than scroll
          scrollTrigger: {
            trigger: sectionsRef.current,
            start: "top top",
            end: "bottom top",
            pin: sidebarRef.current,
            pinSpacing: false,
            scrub: 1, // Adjust scrub for smoothness
          },
        });
      }

      // Highlight active section based on scroll position
      const sections = document.querySelectorAll(".section-content");
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => highlightNavItem(section.id),
          onEnterBack: () => highlightNavItem(section.id),
        });
      });
      return () => {
        // Clean up ScrollTrigger instances
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  const highlightNavItem = (sectionId: string) => {
    if (window.innerWidth > 768 && sidebarRef.current && sectionsRef.current) {
      // Remove active class from all nav items
      document.querySelectorAll(".nav-item").forEach((item) => {
        item.classList.remove(
          "bg-gradient-to-r",
          "from-[#FF38BB]",
          "via-[#FF8038]",
          "to-[#F5BE66]",
          "text-transparent",
          "bg-clip-text"
        );

        item.classList.add("text-gray-500");
      });

      // Add active class to current nav item
      const activeItem = document.querySelector(
        `[data-section="${sectionId}"]`
      );
      if (activeItem) {
        activeItem.classList.remove("text-gray-500");
        activeItem.classList.add(
          "bg-gradient-to-r",
          "from-[#FF38BB]",
          "via-[#FF8038]",
          "to-[#F5BE66]",
          "text-transparent",
          "bg-clip-text"
        );
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - window.innerHeight * 0.2, // + 20vh
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-4 md:px-8 lg:pl-16 lg:px-0 py-12">
      <div className="flex flex-col lg:flex-row">
        {/* Main content */}
        <div ref={sectionsRef} className="lg:w-2/3 pr-0 lg:pr-28">
          {/* Mission Section */}
          <section id="our-mission" className="mb-16 section-content">
            <h1 className="text-3xl md:text-4xl font-medium mb-8">
              Our Mission: Building The Indestructible Web
            </h1>

            <div className="text-gray-700 space-y-6">
              <p className="leading-relaxed">
                The Silent Crisis of Digital Decay: Imagine clicking a link, a
                gateway to knowledge or a cherished memory, only to be met with
                the cold, stark reality of a 404 error. This isn't a rare
                occurrence; it's a symptom of a widespread issue known as
                digital decay. Shockingly, nearly 40% of webpages from just a
                decade ago, 2013, have vanished from the Internet. This constant
                erosion of online content threatens our collective memory and
                the very fabric of the digital age. Even in the realm of Web3,
                the promise of decentralization is often undermined by reliance
                on single points of failure.
              </p>

              <p className="leading-relaxed">
                WebHash: Forging Content Immortality: WebHash is not just
                another protocol; it's a declaration of war against digital
                decay. Our mission is to build a truly Permanet, where content
                lives forever, unburdened by censorship or the relentless march
                of technological obsolescence. We envision a future where
                information is immutable, accessible to all, and owned by its
                creators — a future powered by Content Immortality.
              </p>

              <p className="leading-relaxed">
                This grand vision is meticulously engineered through a powerful
                three-layered architecture:
              </p>
            </div>
          </section>

          {/* 3 Layers Section */}
          <section id="layers-of-permanence" className="mb-16 section-content">
            <h2 className="text-3xl font-medium mb-8">
              3 Layers of Permanence
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">
                  Layer 1: Decentralized Hosting Network
                </h3>
                <p className="text-gray-700 mb-4">
                  At the core of WebHash lies the Hosting Layer, the bedrock
                  upon which digital permanence is built. This layer ensures
                  that your content isn't just stored; it's enshrined.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                  <li>
                    <span className="font-medium">Decentralized Fortress:</span>{" "}
                    Unlike traditional hosting or even some Web3 solutions
                    relying on centralized pinning, WebHash distributes your
                    websites & applications across a global network of
                    independent hosting nodes. This eliminates single points of
                    failure, ensuring resilience against outages or shutdowns.
                  </li>
                  <li>
                    <span className="font-medium">
                      Intelligent Replication:
                    </span>{" "}
                    Our Selective Replication algorithm strategically
                    distributes data based on node availability, reliability,
                    geographic diversity, and randomness. Think of it as having
                    multiple, independently managed backups of your digital
                    presence.
                  </li>
                  <li>
                    <span className="font-medium">Immutable Proof:</span> The
                    On-Chain Registry acts as an unalterable ledger, recording
                    every piece of content and its hosting nodes. Leveraging
                    smart contracts, this registry guarantees proof of existence
                    and data integrity over time.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">
                  Layer 2: Global Gateway Layer
                </h3>
                <p className="text-gray-700 mb-4">
                  With content securely stored, the next step is ensuring fast,
                  decentralized access.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                  <li>
                    <span className="font-medium">Supercharged Delivery:</span>{" "}
                    The WebHash Decentralized Content Delivery Network (DCDN)
                    retrieves data from the Hosting Layer and delivers it
                    globally with sub-second latency.
                  </li>
                  <li>
                    <span className="font-medium">Intelligent Caching:</span>{" "}
                    Advanced caching stores frequently accessed content closer
                    to users, reducing load times and enhancing responsiveness.
                  </li>
                  <li>
                    <span className="font-medium">Uninterrupted Access:</span>{" "}
                    Distributed gateways and smart traffic management ensure
                    99.99% uptime, even during network disruptions.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">
                  Layer 3: Creator-Centric Application Layer
                </h3>
                <p className="text-gray-700 mb-4">
                  Empowering creators to build on the Permanet.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                  <li>
                    <span className="font-medium">
                      Tools for Every Builder:
                    </span>{" "}
                    From developers using APIs to no-code enthusiasts with
                    drag-and-drop tools, WebHash caters to all skill levels.
                  </li>
                  <li>
                    <span className="font-medium">AI-Powered Creation:</span>{" "}
                    Describe your vision, and an AI Agent instantly generates a
                    decentralized website.
                  </li>
                  <li>
                    <span className="font-medium">One-Click Deployment:</span>{" "}
                    Launch your site onto the Permanet in seconds. Over 9,000
                    decentralized websites already thrive on WebHash.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sustaining Permanence Section */}
          <section id="sustaining-permanence" className="mb-16 section-content">
            <h2 className="text-3xl font-medium mb-8">
              Sustaining Permanence: The Permanence Pool & DAO Governance
            </h2>

            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                WebHash's permanence is sustained by two pillars:
              </p>

              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <span className="font-medium">The Permanence Pool:</span> A
                  decentralized endowment fund fueled by transaction fees and
                  token allocations. This pool rewards hosting nodes
                  perpetually, ensuring they remain incentivized to store and
                  serve content for decades.
                </li>
                <li>
                  <span className="font-medium">DAO-Governed Incentives:</span>{" "}
                  The WebHash DAO governs a transparent system where nodes earn
                  HASH tokens for uptime and efficiency, while malicious actors
                  face penalties like token slashing.
                </li>
              </ul>
            </div>
          </section>

          {/* Future Section */}
          <section id="future-is-Permanet" className="section-content">
            <h2 className="text-3xl font-medium mb-8">
              The Future is Permanet: Join the Movement
            </h2>

            <div className="text-gray-700">
              <p className="leading-relaxed">
                WebHash is not just solving a problem; we are building the
                foundation for the future of the internet. A future where
                digital content is no longer ephemeral but endures, empowering
                creators, preserving knowledge, and safeguarding freedom of
                expression. Join us in building the indestructible internet
                {"–"} a truly Permanet for all.
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar Navigation */}
        <div ref={sidebarRef} className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="my-2 space-y-6">
            <button
              onClick={() => scrollToSection("our-mission")}
              className="nav-item flex items-center space-x-4 text-gray-500 hover:text-black transition-colors w-full text-left  py-4 border-b border-gray-300 "
              data-section="our-mission"
            >
              <span className="text-lg font-medium">01</span>
              <span className="uppercase text-base font-normal">
                Our Mission
              </span>
            </button>

            <button
              onClick={() => scrollToSection("layers-of-permanence")}
              className="nav-item flex items-center space-x-4 text-gray-500 hover:text-black transition-colors w-full text-left  py-4 border-b border-gray-300 "
              data-section="layers-of-permanence"
            >
              <span className="text-lg font-medium">02</span>
              <span className="uppercase text-base font-normal">
                3 Layers of Permanence
              </span>
            </button>

            <button
              onClick={() => scrollToSection("sustaining-permanence")}
              className="nav-item flex items-center space-x-4 text-gray-500 hover:text-black transition-colors w-full text-left  py-4 border-b border-gray-300 "
              data-section="sustaining-permanence"
            >
              <span className="text-lg font-medium">03</span>
              <span className="uppercase text-base font-normal">
                Sustaining Permanence
              </span>
            </button>

            <button
              onClick={() => scrollToSection("future-is-permanet")}
              className="nav-item flex items-center space-x-4 text-gray-500 hover:text-black transition-colors w-full text-left  py-4 border-b border-gray-300 "
              data-section="future-is-permanet"
            >
              <span className="text-lg font-medium">04</span>
              <span className="uppercase text-base font-normal">
                The Future is Permanet
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
