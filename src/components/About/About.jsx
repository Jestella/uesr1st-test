import "./About.scss";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      <section>
        <Outlet />
      </section>
      <nav className="about-nav">
        <ul>
          <li>
            <Link to="/about">About Overview</Link>
          </li>
          <li>
            <Link to="/about/1">About 1</Link>
          </li>
          <li>
            <Link to="/about/2">About 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default About;
