const WhatWeOffer = () => {
  const services = [
    {
      heading: "App for Peace of Mind",
      listItems: [
        "Parents can track their child’s bus in real time, knowing its exact location and estimated arrival time.",
        "Schoollie prioritizes safety with features like driver monitoring, emergency alerts, and secure boarding processes.",
        "Parents receive notifications about bus delays, route changes, and other important updates",
        " Schoollie's optimized routes and scheduling ensure timely and efficient transportation for students."
      ],
    },
    {
      heading: "Well Trained Personnel",
      listItems: [
        "Our drivers are experienced professionals who undergo thorough training to ensure safe and efficient driving practices.",
        "Our attendants are trained to provide assistance to students with special needs, ensuring their safety and comfort during the journey",
        " Our customer service team is trained to provide prompt and helpful assistance, ensuring that parents and schools have a positive experience with our service.",
      ],
    },
  ];

  return (
    <>
      <div className="max-w-[1440px] px-10 md:px-20 mx-auto">
        <div className="py-20">
          <h1 className="font-syne font-bold text-2xl md:text-4xl text-primary md:text-center">
            What We Offer
          </h1>
          <p className="text-muted-foreground text-left md:text-center my-5">
          We understand the importance of safety, reliability, and convenience when it comes to your child’s transportation. Whether you need real-time tracking, transparent communication, or flexible scheduling options, Schoollie's approach ensures that your child’s transportation needs are met with care and precision.
          </p>
        </div>
        <div className="grid md:flex pb-20 w-full justify-evenly gap-10">
          {services.map((item, index) => (
            <div key={index} className="md:w-[45%]">
              <h3 className="font-syne font-semibold text-2xl">
                {item.heading}
              </h3>
              <p className="py-2 text-sm">{item.paragraph}</p>
              <ul className="text-muted-foreground grid list-disc ml-5 gap-1 text-sm">
                {item.listItems.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;