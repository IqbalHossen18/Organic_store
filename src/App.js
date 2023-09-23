import logo from "./logo1.jpg";
import logo2 from "./logo2.png";
import img1 from "./img1.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1>
            {" "}
            <img
              id="logo1"
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="img"
            />
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse my-lg-0 "
            id="navbarSupportedContent"
          >
            <form id="listc" className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav mr-auto">
                <li>
                  <a style={{ textDecoration: "none" }} href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a style={{ textDecoration: "none" }} href="/">
                    All Products
                  </a>
                </li>
                <li>
                  <a style={{ textDecoration: "none" }} href="/">
                    About Us
                  </a>
                </li>
                <li>
                  <a style={{ textDecoration: "none" }} href="/">
                    Contact
                  </a>
                </li>
                <li>
                  <a style={{ textDecoration: "none" }} href="/">
                    Cart
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none" }}
                    href="/"
                    data-toggle="dropdown"
                  >
                    Dropdown
                    <i
                      style={{
                        paddingLeft: "5px",
                        color: "grey",
                        position: "relative",
                        top: "2px",
                      }}
                      className="fa-solid fa-caret-down"
                    ></i>
                  </a>
                  <div className="dropdown-menu">
                    <a
                      style={{ textDecoration: "none" }}
                      className="dropdown-item"
                      href="/"
                    >
                      Action
                    </a>
                    <a
                      style={{ textDecoration: "none" }}
                      className="dropdown-item"
                      href="/"
                    >
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a
                      style={{ textDecoration: "none" }}
                      className="dropdown-item"
                      href="/"
                    >
                      Something else here
                    </a>
                  </div>
                </li>
                <li>
                  <i class="fa-solid fa-cart-shopping"></i>
                </li>
              </ul>
            </form>
          </div>
        </nav>
        <div className="content">
          <div className="box1">
            <img
              id="img1"
              src={img1}
              width="650"
              height="550"
              style={{ marginLeft: "50px", marginTop: "15px" }}
              className="d-inline-block align-top"
              alt=""
            />
          </div>
          <div className="box2">
            <div className="box2c">
              <img
                id="box2img"
                src={logo2}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt=""
              />
              <h5>Best Quality Products</h5>
              <h1>
                Join The Organic
                <br /> Movement!
              </h1>
              <p>
                Organic World: Your expansive online resource for everything
                related to the organic food movement. Discover the freshest
                flavors, sustainable practices, and health-conscious choices tha
                define this vibrant culinary universe.
              </p>
              <button className="btn">
                {" "}
                <i class="fa-solid fa-cart-shopping"></i>Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
