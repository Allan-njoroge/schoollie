import PersonImg from "../../assets/person.jpg";

const Testimonials = () => {
  const testimonialsContent = [
    {
      image: PersonImg,
      comment:
        "Zidallie has provided an excellent service for my school. Zidallie has taken care of my neurodiverse pupils and served them with dignity and honor. I highly recommend these service to schools. ",
      name: "Alice Smith",
    },
    {
      image: PersonImg,
      comment:
        "Thank you for your service, my son Noa really loves the driver assigned to his rides",
      name: "Jane Doe",
    },
    {
      image: PersonImg,
      comment:
        "Thank you for taking care of my daughter. Before Zidallie we were really struggling with transport to his dance classes. You have served us well.",
      name: "Alexa Adams",
    },
  ];
  return (
    <div className="max-w-[1440px] mx-auto px-10 md:px-20 w-full py-20">
      <h1 className="font-syne font-bold text-2xl md:text-4xl text-primary text-center">
        Testimonials
      </h1>
      <div className="grid md:flex justify-between mt-20 gap-10 md:gap-0">
        {testimonialsContent.map((item, index) => (
          <div
            key={index}
            className="md:w-[30%] text-center grid gap-5 border border-muted-foreground/20 rounded-md p-5 hover:bg-primary relative hover:-translate-y-2 transition-all ease-in-out duration-500"
          >
            <img
              src={item.image}
              alt="testimonial image"
              className="w-20 h-20 rounded-full mx-auto"
            />
            <p className="text-sm">"{item.comment}"</p>
            <p className="text-sm text-muted-foreground font-bold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
