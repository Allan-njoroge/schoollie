import {
    FaPhone,
    FaLocationDot,
  } from "react-icons/fa6";
  import { MdEmail } from "react-icons/md";

const Header = () => {

    const contactInfo = [
        { name: "Phone", details: "0712345678", link: "", icon: FaPhone },
        {
          name: "Email",
          details: "schoollie@gmail.com",
          link: "",
          icon: MdEmail,
        },
        {
          name: "Visit Us",
          details: "Nairobi Kenya",
          link: "",
          icon: FaLocationDot,
        },
      ];

  return (
    <div className="flex justify-center items-center my-auto min-h-[90vh]">
        <div className="max-w-[1440px] mx-auto px-10">
            <h1 className="font-syne font-bold text-2xl md:text-4xl text-primary text-center mb-10">Contact Us</h1>
            <ul className="grid md:flex gap-10">
                {contactInfo.map((item, index) => (
                    <li key={index} className="flex md:w-[30%] gap-5 hover:bg-primary/20 p-5 rounded-md">
                        <item.icon className="text-5xl text-primary" />
                        <span className="">
                            <h4 className="font-semibold font-syne text-xl md:text-2xl">{item.name}</h4>
                            <p className="text-muted-foreground">{item.details}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Header