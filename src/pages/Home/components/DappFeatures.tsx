import NoCodeBuilderImg from "../../../assets/images/Builder.png";
import WebhookProImg from "../../../assets/images/WebhashPro.png";
import ModeraAIImg from "../../../assets/images/ModeraAI.png";
import SDKImg from "../../../assets/images/SDK.png";
import GatewayImg from "../../../assets/images/Gateway.png";
import ethcdImg from "../../../assets/images/ethcd.png";
import arrowRightUpBlack from "../../../assets/images/arrowRightUpBlack.svg";

export default function DappFeatures() {
  const features = [
    {
      title: "No-Code Builder",
      image: NoCodeBuilderImg,
      alt: "3D interlinked rings representing No-Code Builder",
      link: "https://app.webhash.com",
    },
    {
      title: "WebHash Pro",
      image: WebhookProImg,
      alt: "3D geometric crystal representing Webhook Pro",
      link: "https://pro.webhash.com",
    },
    {
      title: "Modly AI",
      image: ModeraAIImg,
      alt: "3D cylindrical shape representing Modly AI",
      link: "https://modly.xyz",
    },
    {
      title: "Hosting Nodes",
      image: SDKImg,
      alt: "3D ring shape representing Hosting Nodes",
      link: "https://nodes.webhash.com",
    },
    {
      title: "Hash Gateway",
      image: GatewayImg,
      alt: "3D pyramid shape representing Hash Gateway",
      link: "https://chromewebstore.google.com/detail/hash-decentralized-gatewa/mjjndfhdgdafdonmmpbmddiginkbclmi?hl=en&pli=1",
    },
    {
      title: "eth.cd",
      image: ethcdImg,
      alt: "3D cube representing eDucd",
      link: "https://eth.cd",
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-12 max-w-3xl">
        EVERYTHING YOU NEED TO BUILD, SCALE, AND MONETIZE YOUR DAPP
      </h2>

      <div className="flex justify-between md:grid md:grid-cols-3 lg:grid-cols-6 gap-3 xl:gap-4 overflow-x-auto md:overflow-x-hidden">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => window.open(feature.link, "_blank")}
            className="cursor-pointer min-w-[200px] max-w-[200px] md:min-w-[unset] md:max-w-[unset] bg-white hover:bg-[#FBFCFE] rounded-3xl md:rounded-lg flex flex-col items-center border border-[#E0E2EB] hover:shadow-lg transition-all duration-300 py-6 md:py-16 group"
          >
            <div className="h-[50px] md:h-unset flex items-start justify-between gap-4 mb-8 px-4">
              <p className="text-base md:text-base font-bold text-black md:text-[#ABACB5] transition-colors duration-300 group-hover:text-black md:text-center">
                {feature.title}
              </p>
              <img
                src={arrowRightUpBlack}
                alt="Arrow Right Up icon"
                className="w-4 h-4 mt-1 md:hidden"
              />
            </div>
            <div className="relative w-24 h-24">
              <img
                src={feature.image || "/placeholder.svg"}
                alt={feature.alt}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
