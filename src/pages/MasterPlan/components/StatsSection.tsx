interface StatsSectionProps {
  statNumber: string;
  line1: string;
  line2: string;
  line3: string;
  lineMob: string;
}

export default function StatsSection({
  statNumber,
  line1,
  line2,
  line3,
  lineMob,
}: StatsSectionProps) {
  return (
    <section className="px-4 md:px-8 lg:px-16 w-full py-8 lg:py-16 lg:pb-[140px] flex flex-col-reverse md:flex-row items-left justify-between">
      <div className="lg:mb-8 md:mb-0 md:w-1/2">
        {/* Mobile only */}
        <h2 className="text-2xl font-normal tracking-tight leading-tight uppercase text-left md:hidden">
          {lineMob}
        </h2>

        {/* md and above only */}
        <h2 className="hidden md:block text-2xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-tight uppercase text-left">
          {line1}
          <br />
          {line2}
          <br />
          {line3}
        </h2>
      </div>
      <div className="md:w-1/2 flex justify-start md:justify-end">
        <div className="text-[120px] md:text-[180px] lg:text-[220px] xl:text-[280px] font-normal text-[#202D37]">
          {/* bg-gradient-to-r from-amber-300 via-orange-400 to-pink-500 bg-clip-text text-transparent */}
          {statNumber}
        </div>
      </div>
    </section>
  );
}
