import "./DestinationStyle.css";
import DestinationData from "./DestinationData";
import tImg from "../image/5.jpg";
import cImg from "../image/4.jpg";
import fImg from "../image/10.jpg";
import sImg from "../image/6.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Populer Destination</h1>
      <p>La Madre Naturaleza es la más dulce de todas las bendiciones</p>

      <DestinationData
        className="first-des"
        heading="Vienna, Austria"
        text="Su generosidad es inagotable y sus ncantos son múltiples. Ella nunca
        se cansa de otorgarnos sus favores y nos colma de sus riquezas en
        todas las estaciones. La belleza de la naturaleza es cautivadora y
        encantadora. Tiene un poder para encantar y seducir al corazón. La
        frescura del aire de la mañana, la serenidad de la brisa de la
        tarde, la tranquilidad de una noche de luna llena tienen un encanto
        indescriptible.La belleza de la naturaleza se puede ver en las
        flores que florecen, los gorjeos de los pájaros, en los ríos que
        fluyen y en todas las demás."
        img1={fImg}
        img2={sImg}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Brussels, Belgium"
        text="Debemos estar agradecidos a la naturaleza 
              por sus innumerables bendiciones. 
              Debemos apreciar la belleza de la 
              naturaleza y tratar de conservarla. 
              No debemos dañar ni contaminar el 
              medio ambiente. Deberíamos plantar 
              más árboles y promover iniciativas ecológicas. 
              Al hacerlo, podemos hacer de nuestro mundo 
              un lugar mejor para vivir y preservar 
              la belleza natural para las generaciones futuras.
              La belleza de la naturaleza es inagotable y eterna. 
              Nunca deja de inspirarnos y llenarnos de asombro y 
              reverencia por el Creador."
        img1={cImg}
        img2={tImg}
      />
    </div>
  );
};

export default Destination;
