import "./TopStyle.css";

function Top(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="topImg" src={props.topImg} />

        <div className="top-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnclass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}
export default Top;
