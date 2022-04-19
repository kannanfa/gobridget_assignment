const ToggleIcon = ({ toggle = false }) => {
    const className = !toggle
      ? "fa-solid fa-angle-down ps-3"
      : "fa-solid fa-angle-up ps-3";
    return (
      <i className={className} padding="ps-3" style={{ float: "right" }}></i>
    );
  };

export default ToggleIcon