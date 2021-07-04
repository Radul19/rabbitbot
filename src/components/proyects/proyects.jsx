import noPage from "../img/noPage.png";
import se from "../img/sePrev.png";

const Proyects = () => {
  let booly = true;
  const prev = "rotateY(";
  const post = "deg)";
  const translate = 'translateZ(5vw) '
  let carouselDeg = 0;
  let screenDeg = 0;
  const calRight = (item, back) => {
    item.style.transform = translate + prev + (carouselDeg -= 60) + post+ '' ;
    back.style.transform = prev + (screenDeg += 60) + post;
  };
  const calLeft = (item, back) => {
    item.style.transform = translate + prev + ( carouselDeg += 60) + post;
    back.style.transform = prev + (screenDeg -= 60) + post;
  };

  const rotate = (side) => {
    const carousel = window.document.getElementById("carousel");
    const screen = window.document.getElementById("screen");
    if (booly) {
      carousel.style.transform = "rotateY(0deg)";
      booly = false;
    }
    if (side === "left") calLeft(carousel, screen);
    if (side === "right") calRight(carousel, screen);
  };

  return (
    <div className="proyects">
      <h1>Projects I've done</h1>
      <div className="carousel-container">
        <div className="scene">
          <div className="carousel" id="carousel">
            <div className="carousel__cell"><img src={se} alt=""/></div>
            <div className="carousel__cell"><img src={noPage} alt=""/></div>
            <div className="carousel__cell"><img src={noPage} alt=""/></div>
            <div className="carousel__cell"><img src={se} alt=""/></div>
            <div className="carousel__cell"><img src={noPage} alt=""/></div>
            <div className="carousel__cell"><img src={noPage} alt=""/></div>
            <div className="screen" id="screen"></div>
          </div>
        </div>
      </div>
      <div className="dotsContainer">
        <div
          className="dotLeft dots"
          onClick={() => {
            rotate("left");
          }}
        >
          &#10508;
        </div>
        <div className="dotsCenter dots">
          <div className="dotsCenterIndex"></div>
          <div className="dotsCenterIndex"></div>
          <div className="dotsCenterIndex"></div>
        </div>
        <div
          className="dotRight dots"
          onClick={() => {
            rotate("right");
          }}
        >
          &#10509;
        </div>
      </div>
      <button>Go to app</button>
    </div>
  );
};

export default Proyects;
