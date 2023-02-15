const Sidebar = () => {
  return (
    <div className={"sidebar open"}>
      <div className="sidebar__group">
        <div className="logo__container">
          <a style={{ cursor: "pointer" }} href="/">
            {/* <LogoIcon /> */}logo
          </a>
          {/* <Logo /> */}
        </div>
        <ul>
          <li>Link</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
