import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../image/s1.jpg";
import Trip2 from "../image/s2.jpg";
import Trip3 from "../image/s5.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using this website</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Saint Martin"
          text="Debemos estar agradecidos a la naturaleza 
          por sus innumerables bendiciones. 
          Debemos apreciar la belleza de la 
          naturaleza y tratar de conservarla. 
          No debemos dañar ni contaminar el 
          medio ambiente. Deberíamos plantar 
          más árboles y promover iniciativas."
        />
        <TripData
          image={Trip2}
          heading="Trip in Coxs Bazar"
          text="Debemos estar agradecidos a la naturaleza 
          por sus innumerables bendiciones. 
          Debemos apreciar la belleza de la 
          naturaleza y tratar de conservarla. 
          No debemos dañar ni contaminar el 
          medio ambiente. Deberíamos plantar 
          más árboles y promover iniciativas."
        />
        <TripData
          image={Trip3}
          heading="Trip in Sunderban"
          text="Debemos estar agradecidos a la naturaleza 
          por sus innumerables bendiciones. 
          Debemos apreciar la belleza de la 
          naturaleza y tratar de conservarla. 
          No debemos dañar ni contaminar el 
          medio ambiente. Deberíamos plantar 
          más árboles y promover iniciativas."
        />
      </div>
    </div>
  );
}

export default Trip;
