import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Dashboard</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Gestionnaire de stock</a>
        </div>
        <h2>Patients</h2>
       
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">Ajout d'un patient</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">Mise à jour d'un patient</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Liste des Patients</a>
        </div>
        
        <h2>Chambres</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Ajouter une chambre</a>
        </div>
       
        
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="#">Mise è jour des Chambres</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="#">Liste des chambres</a>
        </div>
        <h2>Matériels</h2>

    
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="#">Ajout du Matériels</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="#">Mise à jour du Matériels</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="#">Liste du Matériels</a>
        </div>
        <h2>Consommables</h2>

<div className="sidebar__link">
  <i className="fa fa-money"></i>
  <a href="#">Ajout d'un Consommable</a>
</div>

<div className="sidebar__link">
  <i className="fa fa-briefcase"></i>
  <a href="#">Liste des Consommables</a>
</div>

<div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="#">Liste des Consommables</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;