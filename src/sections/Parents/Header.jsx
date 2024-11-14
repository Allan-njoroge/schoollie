import { Button } from "../../components/ui/Button";

const Header = () => {
  return (
    <div className="bg-primary min-h-[40vh] flex items-center justify-center">
      <div className="max-w-[1440px] px-10 md:px-20 mx-auto text-center">
        <h1 className="font-syne font-bold text-2xl md:text-4xl ">
          We Ensure Peace of Mind for Parents
        </h1>
        <h3 className="my-3 text-muted-foreground text-lg">
          You can trust that your child is in good hands every step of the way
        </h3>
        <Button variant="secondary" className="">PARENT SIGNUP</Button>
      </div>
    </div>
  );
};

export default Header;
