import { Button } from "../../components/ui/Button";
import Bus from "../../assets/bus.png";

const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-10 md:px-20 w-full flex flex-col-reverse md:flex-row justify-evenly min-h-[90vh] items-center md:gap-10">
      {/* text section */}
      <div className="text-center md:text-left">
        <h1 className="font-syne font-bold text-2xl md:text-4xl text-primary">
          SAFE AND RELIABLE STUDENT TRANSPORTATION
        </h1>
        <p className="my-3 md:my-5 text-sm">
          Our services cater to Primary School students, High School students,
          and Special Needs students, ensuring that every student’s
          transportation needs are met with care.
        </p>
        <div className="flex gap-5">
          <Button>PARENT SIGNUP</Button>
          <Button>SCHOOL SIGNUP</Button>
        </div>
      </div>

      {/* image section */}
      <div className="relative w-3/4 h-full">
        {/* <div className="absolute w-full h-full bg-primary/20 -top-14 -right-14 rounded-full" /> */}
        <img src={Bus} alt="School Bus Image" classsName="w-[50%]" />
      </div>
    </div>
  );
};

export default Header;
