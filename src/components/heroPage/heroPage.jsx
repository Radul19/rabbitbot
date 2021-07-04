
import boxes from "../img/Boxes.png";
import wave from "../img/Wave.png";

// const PixelCage = () => {
//   return (
//     <div className="pixelCage">
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//     </div>
//   );
// };

// const Pixel = (props) => {
//   //////PIXEL EFFECTS//////////
//   const classPixel = [
//     "pixel1",
//     "pixel2",
//     "pixel3",
//     "pixel4",
//     "pixel5",
//     "pixel6",
//     "pixel7",
//     "pixel8",
//   ];
//   const choosenPixel = () => {
//     /////// RANDON NUMBER PIXEL///////////
//     const i = Math.floor(Math.random() * 4) + 1;
//     return classPixel[i - 1];
//   };
//   const changeClass = (e) => {
//     /////// CHANGE CLASS FUNCTION ///////////
//     const cut = e.target.className.split(" ");
//     const removeClass = cut[1];
//     // console.log(removeClass);
//     let newClass = choosenPixel();
//     while (removeClass === newClass) {
//       newClass = choosenPixel();
//     }
//     e.target.classList.replace(removeClass, newClass);
//   };

//   /////RETURN/////
//   return <div className="pixel pixelx" onAnimationEnd={changeClass}></div>;
// };

const HeroPage = (props) => {
  return (
    <main id="Home">
      <h1>Rabbit Bot</h1>
      <h2>
        Full-Stack
        <br />
        Web development
      </h2>
      <p>
        <span>Rabbit Bot</span> se ocupara de todas sus necesidades a nivel de
        Software, no solo en desarrollo web, si no tambien en el manejo de datos
        y applicaciones de escritorio.
      </p>
      <img className="boxes" src={boxes} alt="" />
      <img className="wave" src={wave} alt="" />
      {/* <PixelCage/> */}
    </main>
  );
};

export default HeroPage;
