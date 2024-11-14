import Image from "../../assets/person.jpg";

const Founder = () => {
  return (
    <div>
      <div className="max-w-[1440px] px-10 md:px-20 py-10 md:py-20 mx-auto">
        <h1 className="font-syne font-bold text-2xl md:text-4xl text-primary text-center">
          Meet the Founder
        </h1>
        <div className="grid md:flex gap-10 justify-evenly mt-10">
          <img
            src={Image}
            alt=""
            className="w-full md:w-[45%] h-[50vh] md:h-[80vh] object-cover rounded-md"
          />
          <p className="md:w-[45%] my-auto">
            John Doe’s mission to transform student transportation is deeply
            rooted in his personal experiences. Growing up, John saw firsthand
            the challenges his family faced, especially with his younger
            brother, who had specific learning needs. John’s mother often
            struggled to find safe and reliable transportation options, making
            his brother’s school attendance inconsistent and limiting his
            educational opportunities. <br />
            <br /> Years later, as John began raising his own family, he
            encountered the same barriers. His community still lacked dedicated
            school transportation, and private alternatives were often costly or
            unpredictable. This realization drove John to take action on an
            issue that had impacted his own family for years. <br />
            <br /> Motivated by a commitment to make a difference, John founded
            a platform that offers customized transportation solutions for
            students. His vision is simple but powerful: to empower students by
            ensuring safe, dependable access to education, so that every child
            has the chance to learn and grow without transportation being a
            barrier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
