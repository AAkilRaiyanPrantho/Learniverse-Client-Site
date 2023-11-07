import { MdOutlineKeyboardDoubleArrowLeft,MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";



const FAQ = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-4"><h1 className="text-center font-bold text-4xl">FAQ Section</h1></div>
      <div className="carousel lg:w-2/3 my-4 lg:h-[200px]">
        <div id="slide1" className="carousel-item relative w-full justify-center">
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-error">
            Can I access course materials on mobile devices?
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-success">Yes, our platform is mobile-friendly, allowing you to learn on the go.</div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-0 lg:right-5 right-0 top-1/2">
            <a href="#slide3" className="btn max-md:btn-sm btn-circle btn-glass">
              <MdOutlineKeyboardDoubleArrowLeft/>
            </a>
            <a href="#slide2" className="btn max-md:btn-sm btn-circle btn-glass">
              <MdOutlineKeyboardDoubleArrowRight/>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full justify-center">
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-error">
            How long do I have access to course materials?
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-success">You have lifetime access to course materials once enrolled.</div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-0 lg:right-5 right-0 top-1/2">
            <a href="#slide1" className="btn max-md:btn-sm btn-circle btn-glass">
              <MdOutlineKeyboardDoubleArrowLeft/>
            </a>
            <a href="#slide3" className="btn max-md:btn-sm btn-circle btn-glass">
              <MdOutlineKeyboardDoubleArrowRight/>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full justify-center">
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-error">What if I have technical issues with the website?
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-success">Reach out to our support team for prompt assistance with any technical problems.</div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-0 lg:right-5 right-0 top-1/2">
            <a href="#slide2" className="btn max-md:btn-sm btn-circle btn-glass">
              <MdOutlineKeyboardDoubleArrowLeft/>
            </a>
            <a href="#slide1" className="btn max-md:btn-sm btn-circle btn-glass">
              <MdOutlineKeyboardDoubleArrowRight/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
