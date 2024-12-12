import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div>

        
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to="/">Inicio</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to="page1">Page1</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to="page2">Page2</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to="about">About</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
         
      </div>
      <div className="container">

        <Outlet />
      </div>
    </>
  );
};
export default Layout;