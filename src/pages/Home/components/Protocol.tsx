import { LockIcon } from "lucide-react";

interface ProtocolProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imagePath: string;
  bgColor: string;
  bgColor2: string;
}

export default function Protocol({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imagePath,
  bgColor,
  bgColor2,
}: ProtocolProps) {
  return (
    <section
      className={`flex flex-col md:flex-row w-full h-screen ${"border-y border-1"}`}
    >
      {/* Left Content Section */}
      <div
        className="w-full md:w-1/2 h-1/2 md:h-full px-4 md:px-8 lg:px-16 py-8 md:py-16 flex flex-col justify-center border-r"
        style={{ backgroundColor: bgColor }}
      >
        <div className="max-w-xl">
          <p
            className={` font-light text-lg md:text-2xl mb-2 ${
              bgColor === "#2F4B5C" ? "text-white" : "text-gray-800"
            }`}
          >
            {title}
          </p>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-normal mb-6 ${
              bgColor === "#2F4B5C" ? "text-white" : "text-gray-800"
            }`}
          >
            {subtitle}
          </h2>
          <p
            className={`text-lg mb-8 ${
              bgColor === "#2F4B5C" ? "text-white" : "text-gray-800"
            }`}
          >
            {description}
          </p>
          <a
            href={buttonLink}
            className="px-8 py-3 bg-black text-white font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors pointer-events-none inline-flex items-center gap-2"
          >
            <LockIcon className="w-4 h-4 text-white" />

            {buttonText}
          </a>
        </div>
      </div>

      {/* Right Flowchart Section */}
      <div
        className="w-full md:w-1/2 relative flex items-center h-1/2 md:h-full"
        style={{ backgroundColor: bgColor2 }}
      >
        <img
          src={imagePath || "/placeholder.svg"}
          alt="Protocol Flowchart"
          className="object-contain w-full h-full p-4 py-8"
        />
      </div>
    </section>
  );
}
