import WhyImg from "../../assets/why.png"

const Why = () => {
  const cardsContent = [
    {
      title: "Safety Priority",
      p: "Safety is more than just a priority; it’s our core value. We are committed to providing the safest transportation experience for students, which is why we continually invest in advanced safety technologies and stringent driver training programs.zFrom the moment students board our vehicles to the time they arrive at their destination, we ensure every journey is safe, reliable, and worry-free.",
    },
    {
        title: "Technology Integration",
        p: "We seamlessly integrate technology to enhance the student transportation experience. Our innovative approach includes a user-friendly app for parents to track their child’s journey in real-time, ensuring transparency and peace of mind. Additionally, our advanced routing software optimizes routes for efficiency, reducing travel time and environmental impact"
    },
    {
        title: "Customized Solutions",
        p: "we understand that every school and student has unique transportation needs. That’s why we offer customized solutions tailored to fit specific requirements. Whether it’s designing specialized routes for students with varying schedules or providing additional assistance for special needs students, we work closely with schools and parents to create transportation solutions that are safe, reliable, and convenient."
    }
  ];
  return (
    <div className="max-w-[1440px] px-5 md:px-10 mx-auto w-full py-20 gap-10">
      <h1 className="font-syne font-bold text-2xl md:text-4xl text-primary text-center">Why Choose Us?</h1>
      <div className="grid md:flex gap-10 mt-10">
        {cardsContent.map((item, index) => (
            <div key={index} className="md:text-center grid gap-5">
                <h3 className="text-2xl font-semibold text-center">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.p}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
