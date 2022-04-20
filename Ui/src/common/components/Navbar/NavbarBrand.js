import logo from "assets/images/gobridget.png";

const index = () => {
    return (
      <a className="navbar-brand" href="#home"  data-testid={`navbar-brand`}>
        <img
          src={logo}
          alt="logo"
          width="125"
          style={{
            paddingRighrt: "12px",
            height: "auto",
            maxHeight: "40px",
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
      </a>
    );
  }

  export default index;