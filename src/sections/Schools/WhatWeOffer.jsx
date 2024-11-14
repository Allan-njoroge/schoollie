const WhatWeOffer = () => {
  const services = [
    {
      heading: "We Provide A Versatile Fleet",
      paragraph:
        "Schoollie offers a versatile fleet to meet all your school transportation needs including: ",
      listItems: [
        "Flexible fleet sizes to accommodate varying passenger loads",
        "Efficient routes for optimized travel times and reduced costs",
        "Perfect for field trips, after-school activities, and special education transportation",
      ],
    },
    {
      heading: "Schoollie’s School Bus Management System",
      paragraph:
        "Schoollie’s School Bus Management System is a comprehensive solution designed to streamline school transportation operations. Our system offers: ",
      listItems: [
        "Real-time tracking of buses and students for improved safety and security",
        "Automated route optimization to reduce fuel costs and minimize travel time",
        "Parent communication tools for bus tracking and notifications",
        "Maintenance scheduling and tracking to ensure buses are always in top condition",
        "Customizable reporting features for better fleet management",
        "Integration with existing school systems for seamless operations.",
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
            We understand that every school has unique transportation needs.
            That’s why we offer solutions that are tailored to cater to your
            specific requirements. Whether you need a fleet of vehicles,
            transport management software, or both. Our goal is to make managing
            your school’s transportation as easy and efficient as possible, so
            you can focus on what matters most – educating your students
          </p>
        </div>
        <div className="grid md:flex pb-20 w-full justify-evenly gap-10">
          {services.map((item, index) => (
            <div key={index} className="md:w-[45%]">
                <h3 className="font-syne font-semibold text-2xl">{item.heading}</h3>
                <p className="py-2 text-sm">{item.paragraph}</p>
                <ul className="text-muted-foreground grid list-disc ml-5 gap-1 text-sm">
                    {item.listItems.map((li, i) => (
                        <li key={i}>
                            {li}
                        </li>
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
