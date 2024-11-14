import NotFoundImage from "../assets/404.png";

const NotFound = () => {
  return (
    <div className="w-full flex justify-center h-[80vh]">
      <img src={NotFoundImage} alt="404 Not Found" className="w-1/2" />
      {/* <h1 className="text-primary">Page Not Found!</h1> */}
    </div>
  );
};

export default NotFound;
