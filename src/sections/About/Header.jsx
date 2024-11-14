const Header = () => {
  return (
    <div className="w-full mx-auto py-10 md:py-20 text-center px-10 md:px-20">
      <h1 className="font-syne font-bold text-2xl md:text-4xl text-primary">About Us</h1>
      <div>
        <h3 className="font-syne font-semibold text-xl mt-5">Mission</h3>
        <p className="text-muted-foreground">
          Our mission is to empower young minds by ensuring safe & reliable
          student transportation is accessible for all.
        </p>

        <h3 className="font-syne font-semibold text-xl mt-5">Vision</h3>
        <p className="text-muted-foreground">
        We Aspire To Be The Safest Transportation Platform For Students.
        </p>
      </div>
    </div>
  );
};

export default Header;
