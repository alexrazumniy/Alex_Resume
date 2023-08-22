import Header from "../Header";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
                NodeJS, BootStrap, MaterialUI, Yarn, TailwindCSS,
                StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Design</h2>
              <p>Figma, Adobe Photoshop, Corel Draw</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
