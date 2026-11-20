import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">

      <div className="sidebar-user">
        <div className="user-avatar">U</div>
        <h2>Name</h2>
        <h3>Role</h3>
        <p>Welcome back, User</p>
      </div>
      <div className="aside-btn">
        <button onClick={() => navigate("/")}>Upload Patient</button>
        <button onClick={() => navigate("/studies")}>Studies</button>
        <button onClick={() => navigate("/settings")}>Settings</button>
      </div>
      <div className="sidebar-logout">
        <button>Log out</button>
      </div>

    </aside>
  );
};

export default Sidebar;