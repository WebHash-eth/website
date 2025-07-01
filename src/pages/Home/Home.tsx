import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import FirstPoint from "./components/FirstPoint";
import Points from "./components/Points";
import PointsMob from "./components/PointsMob";

import Protocol from "./components/Protocol";
import HostingLayerFlow from "../../assets/images/HostingLayerFlow.png";
import GatewayLayerFlow from "../../assets/images/GatewayLayerFlow.png";
import ApplicationLayerFlow from "../../assets/images/ApplicationLayerFlow.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhyItMatters from "./components/WhyItMatters";
import NodeOperator from "./components/NodeOperator";
// import ProtocolHeading from "./components/ProtocolHeading";
// import DappFeatures from "./components/DappFeatures";

import HostingItem1 from "../../assets/images/HostingItem1.png";
import HostingItem2 from "../../assets/images/HostingItem2.png";
// import HostingItem3 from "../../assets/images/HostingItem3.png";
// import HostingItem4 from "../../assets/images/HostingItem4.png";

import GatewayItem1 from "../../assets/images/GatewayItem1.png";
// import GatewayItem2 from "../../assets/images/GatewayItem2.png";

import ApplicationItem1 from "../../assets/images/ApplicationItem1.png";
import ApplicationItem2 from "../../assets/images/ApplicationItem2.png";
import ApplicationItem3 from "../../assets/images/ApplicationItem3.png";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const contents = gsap.utils.toArray<HTMLElement>(".content");
    contents.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "top bottom",
        pin: true,
        pinSpacing: false,
        endTrigger: ".final-1",
        id: (i + 1).toString(),
        markers: false,
      });
    });

    const contents2 = gsap.utils.toArray<HTMLElement>(".content-2");
    contents2.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "top bottom",
        pin: true,
        pinSpacing: false,
        endTrigger: ".final-2",
        id: (i + 1).toString(),
        markers: false,
      });
    });

    const contents3 = gsap.utils.toArray<HTMLElement>(".content-3");
    contents3.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "top bottom",
        pin: true,
        pinSpacing: false,
        endTrigger: ".final-3",
        id: (i + 1).toString(),
        markers: false,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // const containerRef = useRef<HTMLDivElement | null>(null);
  // const protocolRefs = useRef<(HTMLDivElement | null)[]>([]);

  // useEffect(() => {
  //   if (!containerRef.current) return;

  //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  //   protocolRefs.current.forEach((el, i) => {
  //     if (!el) return;

  //     gsap.to(el, {
  //       scrollTrigger: {
  //         trigger: el,
  //         start: "top top",
  //         end: "top top",
  //         pin: true,
  //         pinSpacing: false,
  //         scrub: false,
  //         markers: false,
  //         id: `protocol-${i + 1}`,
  //         endTrigger: ".final",
  //       },
  //     });
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <>
      <Hero />
      <WhyItMatters />
      <div
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        className="content"
      >
        <Protocol
          title="Webhash Protocol"
          subtitle="Hosting Layer"
          description="Permanent, censorship-resistant web hosting for the decentralized web."
          buttonText="LEARN MORE"
          buttonLink="/learn-more"
          imagePath={HostingLayerFlow}
          bgColor="#F3EBDE"
          bgColor2="#FFCB91"
        />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        className="content"
      >
        <Points
          tag="//HOSTING LAYER"
          num={["before:content-['01']", "before:content-['02']"]}
          title={["PERMA NODE", "ON-CHAIN REGISTRY"]}
          desc={[
            "The WebHash Hosting Node is designed for ultra-low barrier to entry, enabling anyone to participate in decentralized website hosting, including home users, developers, and enthusiasts with minimal hardware.",
            "The On-Chain Registry in WebHash Protocol ensures permanent and verifiable tracking of hosting on the decentralised web. It utilizes EVM-compatible smart contracts to register, verify, and audit hosting by participating nodes.",
          ]}
          btnInfo={[
            { name: "Learn More", link: "https://nodes.webhash.com/" },
            { name: "Learn More", link: "#" },
          ]}
          imgLink={[HostingItem1, HostingItem2]}
        />
        <PointsMob
          tag="//HOSTING LAYER"
          num="before:content-['01']"
          title="PERMA NODE"
          desc="The WebHash Hosting Node is designed for ultra-low barrier to entry, enabling anyone to participate in decentralized website hosting, including home users, developers, and enthusiasts with minimal hardware."
          btnInfo={{ name: "Learn More", link: "https://nodes.webhash.com/" }}
          imgLink={HostingItem1}
        />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        className="content lg:hidden"
      >
        <PointsMob
          tag="//HOSTING LAYER"
          num="before:content-['02']"
          title="ON-CHAIN REGISTRY"
          desc="The On-Chain Registry in WebHash Protocol ensures permanent and verifiable tracking of hosting on the decentralised web. It utilizes EVM-compatible smart contracts to register, verify, and audit hosting by participating nodes."
          btnInfo={{ name: "Learn More", link: "#" }}
          imgLink={HostingItem2}
        />
      </div>
      {/* <div
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
        className="content"
      >
        <Points
          tag="//HOSTING LAYER"
          num={["before:content-['03']", "before:content-['04']"]}
          title={["VERIFIABLE STORAGE", "MODLY AI"]}
          desc={[
            "WebHash ensures that every piece of content stored in the network is provably hosted using zk-SNARKs and Merkle proofs—without ever exposing the data.",
            "An LLM-based content moderation API designed explicitly to secure the ENS ecosystem by analyzing website content, particularly HTML files containing text and image references, before they are published to the decentralized web.",
          ]}
          btnInfo={[
            { name: "Try Now", link: "#" },
            { name: "Try Now", link: "http://Modly.xyz" },
          ]}
          imgLink={[HostingItem3, HostingItem4]}
        />
        <PointsMob
          tag="//HOSTING LAYER"
          num="before:content-['02']"
          title="VERIFIABLE STORAGE"
          desc="WebHash ensures that every piece of content stored in the network is provably hosted using zk-SNARKs and Merkle proofs—without ever exposing the data."
          btnInfo={{ name: "Try Now", link: "#" }}
          imgLink={HostingItem3}
        />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[4] = el;
        }}
        className="content lg:hidden"
      >
        <PointsMob
          tag="//HOSTING LAYER"
          num="before:content-['03']"
          title="MODLY AI"
          desc="An LLM-based content moderation API designed explicitly to secure the ENS ecosystem by analyzing website content, particularly HTML files containing text and image references, before they are published to the decentralized web."
          btnInfo={{ name: "Try Now", link: "http://Modly.xyz" }}
          imgLink={HostingItem4}
        />
      </div> */}

      <section className="section final-1"></section>

      <div
        ref={(el) => {
          sectionsRef.current[5] = el;
        }}
        className="content-2"
      >
        <Protocol
          title="Webhash Protocol"
          subtitle="Gateway Layer"
          description="Lightning-fast access to the decentralised web, anywhere."
          buttonText="LEARN MORE"
          buttonLink="/learn-more"
          imagePath={GatewayLayerFlow}
          bgColor="#2F4B5C"
          bgColor2="#202D37"
        />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[6] = el;
        }}
        className="content-2"
      >
        <FirstPoint
          tag="//Gateway Layer"
          title="Hash DWEB GATEWAY"
          desc="A Chrome extension designed to be the portal to the decentralized web. It enables effortless resolution of ENS domains on the web browser, Instantly translating .eth domains into readable IPFS links, facilitating direct access to decentralized sites and content."
          btnInfo={{
            name: "Try Now",
            link: "https://chromewebstore.google.com/detail/hash-decentralized-gatewa/mjjndfhdgdafdonmmpbmddiginkbclmi?hl=en&pli=1",
          }}
          imgLink={GatewayItem1}
        />
        {/* <Points
          tag="//Gateway Layer"
          num={["before:content-['01']", "before:content-['02']"]}
          title={["Hash DWEB GATEWAY", "Gateway node"]}
          desc={[
            "A critical component of the Webhash ecosystem, enabling seamless navigation to decentralized web content. It facilitates the resolution of .eth domains, by directing users to the appropriate decentralized content.",
            "Gateway Node is a decentralized entry point to the WebHash ecosystem. It acts as a verifier and resolver, allowing users to seamlessly access IPFS-hosted content linked to ENS domains — without relying on traditional, centralized gateways.",
          ]}
          imgLink={[GatewayItem1, GatewayItem2]}
          btnInfo={[
            {
              name: "Try Now",
              link: "https://chromewebstore.google.com/detail/hash-decentralized-gatewa/mjjndfhdgdafdonmmpbmddiginkbclmi?hl=en&pli=1",
            },
            { name: "Try Now", link: "#" },
          ]}
        /> */}
        <PointsMob
          tag="//Gateway Layer"
          num="before:content-['01']"
          title="Hash DWEB GATEWAY"
          desc="A Chrome extension designed to be the portal to the decentralized web. It enables effortless resolution of ENS domains on the web browser, Instantly translating .eth domains into readable IPFS links, facilitating direct access to decentralized sites and content."
          imgLink={GatewayItem1}
          btnInfo={{
            name: "Try Now",
            link: "https://chromewebstore.google.com/detail/hash-decentralized-gatewa/mjjndfhdgdafdonmmpbmddiginkbclmi?hl=en&pli=1",
          }}
        />
      </div>

      {/* <div
        ref={(el) => {
          sectionsRef.current[7] = el;
        }}
        className="content-2 lg:hidden"
      >
        <PointsMob
          tag="//Gateway Layer"
          num="before:content-['02']"
          title="Gateway node"
          desc="Gateway Node is a decentralized entry point to the WebHash ecosystem. It acts as a verifier and resolver, allowing users to seamlessly access IPFS-hosted content linked to ENS domains — without relying on traditional, centralized gateways."
          imgLink={GatewayItem2}
          btnInfo={{ name: "Try Now", link: "#" }}
        />
      </div> */}

      <section className="section final-2"></section>

      <div
        ref={(el) => {
          sectionsRef.current[8] = el;
        }}
        className="content-3"
      >
        <Protocol
          title="Webhash Protocol"
          subtitle="Application Layer"
          description="Build anything, for everyone - no code or blockchain expertise needed."
          buttonText="LEARN MORE"
          buttonLink="/learn-more"
          imagePath={ApplicationLayerFlow}
          bgColor="#FFF595"
          bgColor2="#FFDC2F"
        />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[9] = el;
        }}
        className="content-3"
      >
        <FirstPoint
          tag="//Application Layer"
          title="No-Code Builder"
          desc="An intuitive no-code website builder designed for creators, designers, and entrepreneurs who want to deploy decentralized websites without technical expertise."
          btnInfo={{ name: "Try Now", link: "http://app.webhash.com" }}
          imgLink={ApplicationItem1}
        />
      </div>
      <PointsMob
        tag="//Application Layer"
        num="before:content-['01']"
        title="No-Code Builder"
        desc="An intuitive no-code website builder designed for creators, designers, and entrepreneurs who want to deploy decentralized websites without technical expertise."
        btnInfo={{ name: "Try Now", link: "http://app.webhash.com" }}
        imgLink={ApplicationItem1}
      />
      <div
        ref={(el) => {
          sectionsRef.current[10] = el;
        }}
        className="content-3"
      >
        <Points
          tag="//Application Layer"
          num={["before:content-['02']", "before:content-['03']"]}
          title={["eth.cd", "Webhash Pro "]}
          desc={[
            "Social hub for ENS domains. It creates real-time, living profiles for every .eth name. it’s a gateway to explore, connect, and engage with ENS users. eth.cd is the foundation for real-time, decentralized interaction. Whether it’s supporting your favourite creators through tipping or messaging.",
            "An advanced, developer-focused platform that enables seamless deployment of static websites, React frontends, and Next.js applications directly to the decentralised web and effortlessly connects them to ENS and DNS domains.",
          ]}
          imgLink={[ApplicationItem2, ApplicationItem3]}
          btnInfo={[
            { name: "Try Now", link: "http://eth.cd" },
            { name: "Try Now", link: "http://pro.webhash.com" },
          ]}
        />
        <PointsMob
          tag="//Application Layer"
          num="before:content-['02']"
          title="eth.cd"
          desc="Social hub for ENS domains. It creates real-time, living profiles for every .eth name. it’s a gateway to explore, connect, and engage with ENS users. eth.cd is the foundation for real-time, decentralized interaction. Whether it’s supporting your favourite creators through tipping or messaging."
          btnInfo={{ name: "Try Now", link: "http://eth.cd" }}
          imgLink={ApplicationItem2}
        />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[11] = el;
        }}
        className="content-3 lg:hidden"
      >
        <PointsMob
          tag="//Application Layer"
          num="before:content-['03']"
          title="Webhash Pro"
          desc="An advanced, developer-focused platform that enables seamless deployment of static websites, React frontends, and Next.js applications directly to the decentralised web and effortlessly connects them to ENS and DNS domains."
          btnInfo={{ name: "Try Now", link: "http://pro.webhash.com" }}
          imgLink={ApplicationItem3}
        />
      </div>
      <section className="section final-3"></section>

      {/* <DappFeatures /> */}
      {/* <div ref={containerRef} className="relative w-full">
        <ProtocolHeading />
        <div
          ref={(el) => {
            protocolRefs.current[0] = el;
          }}
          className="h-screen flex items-center justify-center"
        >
          <Protocol
            title="Webhash Protocol"
            subtitle="Hosting Layer"
            description="Permanent, censorship-resistant storage for the decentralized web."
            buttonText="LEARN MORE"
            buttonLink="/learn-more"
            imagePath={HostingLayerFlow}
            bgColor="#F3EBDE"
            bgColor2="#FFCB91"
          />
        </div>
        <div
          ref={(el) => {
            protocolRefs.current[1] = el;
          }}
          className="h-screen flex items-center justify-center"
        >
          <Protocol
            title="Webhash Protocol"
            subtitle="Gateway Layer"
            description="Lightning-fast access to decentralised content, anywhere."
            buttonText="LEARN MORE"
            buttonLink="/learn-more"
            imagePath={GatewayLayerFlow}
            bgColor="#2F4B5C"
            bgColor2="#202D37"
          />
        </div>
        <div
          ref={(el) => {
            protocolRefs.current[2] = el;
          }}
          className="h-screen flex items-center justify-center final"
        >
          <Protocol
            title="Webhash Protocol"
            subtitle="Application Layer"
            description="Build anything, for everyone - no code or blockchain expertise needed."
            buttonText="LEARN MORE"
            buttonLink="/learn-more"
            imagePath={ApplicationLayerFlow}
            bgColor="#FFF595"
            bgColor2="#FFDC2F"
          />
        </div>
      </div> */}
      <NodeOperator />
    </>
  );
}

export default Home;
