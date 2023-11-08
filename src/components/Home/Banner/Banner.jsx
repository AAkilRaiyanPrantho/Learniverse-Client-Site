const Banner = () => {
  return (
    <div>
      <div className="carousel w-full lg:h-[800px]">
        <div id="item1" className="carousel-item w-full">
          <div
            className="hero"
            style={{
              backgroundImage: "url(https://i.ibb.co/gMnZHN1/Banners-1.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content lg:pr-[1000px] lg:text-left">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Learn Together, Grow Together</h1>
                <p className="mb-5">
                Join our supportive community of learners where your growth and success are our priorities
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
        <div id="item1" className="carousel-item w-full">
          <div
            className="hero"
            style={{
              backgroundImage: "url(https://i.ibb.co/kDfRJtG/Banners-2.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Empowering Learning, Enriching Lives</h1>
                <p className="mb-5">
                We believe that education has the power to transform lives, and we're here to empower your learning journey
                </p>
                
              </div>
            </div>
          </div>
        </div>
        </div>
        <div id="item3" className="carousel-item w-full">
        <div id="item1" className="carousel-item w-full">
          <div
            className="hero"
            style={{
              backgroundImage: "url(https://i.ibb.co/qyb73gV/Banners-3.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content lg:pl-[1000px] lg:text-right">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Diversity in Unity, Learning in Harmony</h1>
                <p className="mb-5">
                Explore diverse subjects and cultures as we come together to learn in harmony.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
