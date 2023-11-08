const Features = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Why Join Us?</h1>
      <div className="w-2/4 mx-auto my-4">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Support
        </div>
        <div className="collapse-content">
          <p>We have made a family sort relationship with each other so if one gets stuck, everyone tries to help him/her out</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Teacher Support
        </div>
        <div className="collapse-content">
          <p>Each assignment is crafted by the help of renowned teachers of the WORLD </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Flexible Learning
        </div>
        <div className="collapse-content">
          <p>Our platform allows you to learn at your own pace, anytime, anywhere, and from any device.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Features;
