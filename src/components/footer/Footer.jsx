import "./Footer.css";

import IconGitHub from "../icons/GitHub";
import IconLinkedin from "../icons/Linkedin";
import IconOracleNext from "../icons/OracleNext";

function Footer() {
  return (
    <footer>
      <ul className="redes">
        <li>
          <h2>Weather API</h2>
        </li>
        <li>jonathanvel84@gmail.com</li>
        <li>
          <ul className="sub-redes">
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/jonathanvel04"
              >
                <IconLinkedin />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/Jonathan-04">
                <IconGitHub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://app.aluracursos.com/emprega-one/profile/jonathanvel84"
              >
                <IconOracleNext />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="important">
        <p>
          Esta web es con fines de aprendizaje en el consumo de API por medio de
          <a href="https://openweathermap.org/api" target="_blank">
            OpenWeather
          </a>
        </p>

        <p>
          Créditos al diseño por:
          <a
            href="https://www.figma.com/community/file/1158928016905524023"
            target="_blank"
          >
            Rebeca Sousa
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
