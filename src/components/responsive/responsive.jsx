

const Responsive = () => {
  return (
    <div className="responsive">
      <h1>100% Responsive</h1>
      <PhoneContainer />
      <p className="responsive-text">From these facts, one may conclude that the evolution of the constructive criticism impacts approximately on every structure absorption. In respect of violations of the user interface becomes a serious problem. Though, the objectives of the design of the tasks priority</p>
    </div>
  );
};

const PhoneContainer = () => {
  return (
    <div className="phoneShape">
      <div className="blackTop">
        <div className="blackTopLine"></div>
      </div>
      <div className="blackBottom">
        <div className="blackBottomCircle"></div>
      </div>
      <div className="redBox1"></div>
      <div className="blueRectangle">
        {/* <p>Click Me!</p> */}
      </div>
      <div className="blueCircle"></div>
      <div className="linesContainer1">
        <div className="linePhone"></div>
        <div className="linePhone"></div>
        <div className="linePhone"></div>
        <div className="linePhone"></div>
      </div>
      <div className="linesContainer2">
        <div className="linePhone"></div>
        <div className="linePhone"></div>
        <div className="linePhone"></div>
        <div className="linePhone"></div>
        <div className="linePhone"></div>
      </div>
      <div className="smallBox1"></div>
      <div className="smallBox2"></div>
      <div className="smallBox3"></div>
      <div className="rightBox"></div>
    </div>
  );
};

export default Responsive;
