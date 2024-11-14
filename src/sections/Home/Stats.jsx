import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  const [scroll, setScroll] = useState(false);
  const statsContent = [
    { h: 100, p: "Rides Completed" },
    { h: 25, p: "Students Served" },
    { h: 15, p: "Schools Served" },
  ];
  return (
    <div className="bg-primary flex items-center justify-center">
      <div className="max-w-[1440px] px-10 md:px-20 w-full grid md:flex gap-5 justify-evenly items-center py-14">
        {statsContent.map((item, index) => (
          <div className="text-center">
            <ScrollTrigger onEnter={() => setScroll(true)} onExit={() => setScroll(false)}>
              <h1 key={index} className="font-bold text-3xl">
                {scroll && <CountUp start={0} end={item.h} duration={3} />}
                
                {item.p !== "Schools Served" ? <span>K+</span> : <span>+</span>}
              </h1>
            </ScrollTrigger>
            <p className="text-muted-foreground">{item.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
