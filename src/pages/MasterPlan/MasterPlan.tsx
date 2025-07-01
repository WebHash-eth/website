import Hero from "./components/Hero";
import Mission from "./components/Mission";
import StatsSection from "./components/StatsSection";

export default function MasterPlan() {
  return (
    <div>
      <Hero />
      <div className="px-4 md:px-8 lg:px-16 py-16">
        <h2 className="text-center md:text-left text-3xl md:text-5xl lg:text-7xl font-normal">
          OUR INTERNET IS DYING AND WE ARE HERE TO CHANGE THAT
        </h2>
      </div>
      <StatsSection
        statNumber="32M"
        line1="32 MILLION WIKIPEDIA PAGES"
        line2="CONTAIN BROKEN LINKS"
        line3="LEADING TO 404 ERRORS"
        lineMob="WIKIPEDIA PAGES CONTAIN BROKEN LINKS LEADING TO 404 ERRORS"
      />
      <StatsSection
        statNumber="38%"
        line1="38% of all web pages from"
        line2="2013 are no longer"
        line3="accessible"
        lineMob="of all web pages from 2013 are no longer accessible"
      />
      <Mission />
    </div>
  );
}
