import PersonImg from "../../assets/person.jpg";

const Testimonials = () => {
  const testimonialsContent = [
    {
      image: PersonImg,
      comment:
        "I am incredibly grateful for the outstanding support received. The team has shown deep understanding and commitment, making a real difference in our school community",
      name: "Alice Smith",
    },
    {
      image: PersonImg,
      comment:
        "The support provided has been outstanding. They have created a nurturing and inclusive environment where neurodiverse students feel valued and supported. Their professionalism and dedication are truly commendable.",
      name: "Jane Doe",
    },
    {
      image: PersonImg,
      comment:
        "This service has been a game-changer for our school. The team’s ability to understand and cater to the unique needs of neurodiverse pupils has made a remarkable difference. Their approach is both compassionate and effective",
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
