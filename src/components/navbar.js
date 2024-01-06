import './navbar.css'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href={props.mainURL}>{props.main}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={props.aboutURL}>{props.about}</a>
          </li>
        </ul>
      </div>

      <div className="social-media">
        <a href={props.facebook} className="social-link" id="facebook-url"><i className="fa-brands fa-square-facebook fa-2xl"></i></a>
        <a href={props.instagram} className="social-link" id="instagram-url"><i className="fa-brands fa-square-instagram fa-2xl"></i></a>
        <a href={props.whatsapp} className="social-link" id="whatsapp-url"><i className="fa-brands fa-square-whatsapp fa-2xl"></i></a>
      </div>
    </nav>
  );
}

export default Navbar;
