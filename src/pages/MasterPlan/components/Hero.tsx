import TextRevealAnimation from "../../../components/TextRevealAnimation";

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white">
      <div className="container mx-auto px-4 pt-20 pb-16 h-screen flex flex-col justify-center">
        {/* OLD Hero title */}
        {/* <div className="text-white mb-12 lg:mb-28">Master Plan</div> */}
        {/* <h1 className="text-5xl md:text-7xl font-normal max-w-4xl">
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(to right, #f5d0a9, #f59e0b, #ea580c)",
            }}
          >
            PERMANET:
          </span>
          <br />
          <span className="text-white">
            THE INTERNET
            <br />
            BUILT TO LAST
          </span>
        </h1> */}
        <h1 className="text-center text-3xl md:text-5xl lg:text-[48px] xl:text-[62px] font-normal tracking-tight leading-tight mt-10 mb-8 font-machina uppercase">
          <TextRevealAnimation>MASTER PLAN FOR PERMANET: </TextRevealAnimation>
          <br className="hidden lg:block" />
          <TextRevealAnimation>THE INTERNET BUILT TO LAST</TextRevealAnimation>
        </h1>
        <p className=" max-w-3xl mx-auto text-lg text-center">
          The web decays: 40% of content vanishes in 10 years. Permanet fixes
          this. A decentralized ecosystem merging uncensorable hosting, instant
          global access, and tools for effortless creation—no-code builders, AI
          agents, one-click deployment. This is the internet, rebuilt to resist
          takedowns, outlast corporations, and empower creators. Permanently.
        </p>
      </div>
    </main>
  );
}
