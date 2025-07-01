import { Network, Terminal, Users } from "lucide-react";
import arrowRightUp from "../../../assets/images/arrowUpIcon.png";

export default function NodeOperator() {
  return (
    <section className="h-full lg:h-screen py-16 lg:py-24 px-4 md:px-8 lg:px-16 lg:px-8">
      <div className="h-full flex flex-col lg:flex-row justify-between">
        {/* Left Column */}
        <div className="lg:w-1/2 pr-0 lg:pr-8 mb-12 lg:mb-0 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl sm:text-6xl font-machina font-regular leading-tight tracking-tighter">
              BECOME A<br />
              NODE OPERATOR
            </h2>
            <h3 className="text-3xl sm:text-4xl font-machina font-regular leading-tight tracking-tighter">
              The backbone of the <br className="hidden md:block" />{" "}
              Decentralised Web
            </h3>
            <p className="mt-6 text-xl font-medium">
              Join the decentralized web. Run a node{" "}
              <br className="hidden md:block" /> easily on a Raspberry Pi or
              home PC and <br className="hidden md:block" /> support the
              infrastructure of the permanet.
            </p>
            {/* <div className="mt-4 text-gray-500 font-mono">///////</div> */}
          </div>
          <div className="mt-10">
            <a
              href="https://node-setup.webhash.com/"
              target="_blank"
              className="bg-black text-white px-8 py-4 font-medium inline-flex items-center gap-4 uppercase"
            >
              Setup guide
              <img src={arrowRightUp} alt="Arrow Icon" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column - Features Grid */}
        <div className="lg:w-1/2">
          <div className="grid lg:grid-cols-2 grid-rows-2 h-full">
            {/* Top Left - Empty Cell */}
            <div className="hidden lg:block"></div>

            {/* Top Right - LOW BARRIERS */}
            <div className="border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="border border-gray-300 p-2 mr-3">
                  <Network className="h-5 w-5 lg:h-10 lg:w-10" />
                </div>
                <h3 className="text-2xl lg:text-4xl font-extrabold">
                  LOW
                  <br />
                  BARRIERS
                </h3>
              </div>
              <p className="mt-4 lg:text-xl">
                Run a node on a Raspberry Pi or home PC.
              </p>
            </div>

            {/* Bottom Left - EARN $HASH REWARDS */}
            <div className="border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="border border-gray-300 p-2 mr-3">
                  <Users className="h-5 w-5 lg:h-10 lg:w-10" />
                </div>
                <h3 className="text-2xl lg:text-4xl font-extrabold">
                  EARN
                  <br />
                  $HASH
                  <br />
                  REWARDS
                </h3>
              </div>
              <p className="mt-4 lg:text-xl">
                Get paid for storage, uptime, and bandwidth.
              </p>
            </div>

            {/* Bottom Right - ONE-COMMAND SETUP */}
            <div className="border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="border border-gray-300 p-2 mr-3">
                  <Terminal className="h-5 w-5 lg:h-10 lg:w-10" />
                </div>
                <h3 className="text-2xl lg:text-4xl font-extrabold">
                  ONE-
                  <br />
                  COMMAND
                  <br />
                  SETUP
                </h3>
              </div>
              <p className="mt-4 lg:text-xl">
                Start in minutes with automated updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
