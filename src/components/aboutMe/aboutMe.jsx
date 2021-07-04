import arrow from "../img/arr.png";
import stud from "../img/stud.png";
import lapt from "../img/lapt.png";

const AboutMe = () => {
    return (
        <div className="about">
            <h1>Who are you?</h1>
            <section className="sect-Bio">
                <img src="" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                    recusandae doloribus voluptatibus, hic suscipit voluptates blanditiis
                    cupiditate accusamus sit, quis iusto! Obcaecati maiores reiciendis
                    debitis dolores voluptas aut omnis ipsam ducimus earum nesciunt
                    tenetur, unde at atque consequuntur incidunt pariatur ut. Autem,
                    nobis. Iusto qui autem aut nemo, provident nesciunt!
        </p>
            </section>
            <section className="sect-Colums">
                <div>
                    <img src={stud} alt="" />
                    <h2>Student</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit aperiam ipsum aliquam facilis? Placeat illo corporis velit a, nam necessitatibus quam repudiandae et, ipsa voluptates voluptatum totam. Officia, ipsam.</p>
                </div>
                <div>
                    <img src={lapt} alt="" />
                    <h2>Freelancer</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit aperiam ipsum aliquam facilis? Placeat illo corporis velit a, nam necessitatibus quam repudiandae et, ipsa voluptates voluptatum totam. Officia, ipsam.</p>
                </div>
                <div id="aboutArrow">
                    <img src={arrow} alt="" />
                    <h2>Future</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit aperiam ipsum aliquam facilis? Placeat illo corporis velit a, nam necessitatibus quam repudiandae et, ipsa voluptates voluptatum totam. Officia, ipsam.</p>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
