import type { ReactNode } from "react";

interface FeatureBoxProps {
  children: ReactNode;
  className?: string;
}

function FeatureBox({ children, className = "" }: FeatureBoxProps) {
  return (
    <div className={`bg-white rounded-lg p-4 ${className}`}>{children}</div>
  );
}

interface LayerProps {
  title: string;
  stakeholders: string[];
  features: ReactNode[];
  benefit: string;
  bgColor: string;
  bgColor2: string;
  dark: boolean;
}

function Layer({
  title,
  stakeholders,
  features,
  benefit,
  bgColor,
  bgColor2,
  dark,
}: LayerProps) {
  return (
    <div
      style={{ backgroundColor: `#${bgColor}` }}
      className="rounded-xl overflow-hidden mb-4"
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[16%] p-6 font-bold flex items-center">
          <h3
            className={`text-xl font-bold ${
              dark ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h3>
        </div>

        <div
          style={{ backgroundColor: `#${bgColor2}` }}
          className="w-full md:w-[16%] p-6 flex items-center"
        >
          <ul className="w-full">
            {stakeholders.map((stakeholder, index) => (
              <li
                key={index}
                className={`flex items-start mb-2 ${
                  dark ? "text-white" : "text-black"
                }`}
              >
                <span className="flex item-center justify-center mr-2 text-sm">
                  •
                </span>
                <span>{stakeholder}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-[50%] p-6 space-y-4 flex flex-col justify-center">
          {features}
        </div>

        <div
          style={{ backgroundColor: `#${bgColor2}` }}
          className="w-full md:w-[18%] p-6 flex items-center"
        >
          <p className={dark ? "text-white" : "text-black"}>{benefit}</p>
        </div>
      </div>
    </div>
  );
}

const layersData: LayerProps[] = [
  {
    title: "HOSTING LAYER",
    stakeholders: ["NODE OPERATORS", "ARCHIVISTS"],
    features: [
      <div key="hosting-features" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeatureBox>
            Data stored permanently with verifiable proofs
          </FeatureBox>
          <FeatureBox>Archive culturally significant content</FeatureBox>
        </div>
        <FeatureBox>
          Host websites that survive server shutdowns or payment failures
        </FeatureBox>
      </div>,
    ],
    benefit:
      "Your content lives forever, immune to takedowns or corporate policy changes",
    bgColor: "FFCB91",
    bgColor2: "F3EBDE",
    dark: false,
  },
  {
    title: "GATEWAY LAYER",
    stakeholders: ["NODE OPERATORS", "DEVELOPERS"],
    features: [
      <div key="gateway-features" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeatureBox>Low-latency retrieval of websites worldwide</FeatureBox>
          <FeatureBox>
            Decentralized content delivery network {"(DCDN)"}
          </FeatureBox>
        </div>
        <FeatureBox>
          Intelligent caching and geo-replicated storage for optimal loading
          speeds and uptime
        </FeatureBox>
      </div>,
    ],
    benefit: "User get the speed of Web2 with the trustlessness of Web3",
    bgColor: "202D37",
    bgColor2: "2F4B5C",
    dark: true,
  },
  {
    title: "APPLICATION LAYER",
    stakeholders: ["DEVELOPERS", "NO-CODE USERS", "BEGINNERS"],
    features: [
      <div key="application-features" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeatureBox>Create AI-generated apps</FeatureBox>
          <FeatureBox>
            Launch token-gated communities or membership platforms
          </FeatureBox>
        </div>
        <FeatureBox>
          Deploy censorship resistant blogs, portfolios, or DAO governance pages
        </FeatureBox>
      </div>,
    ],
    benefit:
      "Democratize creation—no technical skills or centralized platforms required",
    bgColor: "FFF595",
    bgColor2: "FFDC2F",
    dark: false,
  },
];

export default function WhyItMatters() {
  return (
    <section className="py-28 px-4 md:px-8 lg:px-16">
      <h2 className="text-6xl md:text-7xl font-normal text-center mb-10">
        WEBHASH PROTOCOL
      </h2>

      <div className="border border-black rounded-2xl overflow-hidden px-4">
        <div className="p-4 text-center">
          <h3 className="text-sm md:text-base font-bold uppercase tracking-wider">
            A decentralized infrastructure designed for permanence, speed, and
            universal access
          </h3>
        </div>

        <div>
          {layersData.map((layer, index) => (
            <Layer key={index} {...layer} />
          ))}
        </div>
      </div>
    </section>
  );
}
