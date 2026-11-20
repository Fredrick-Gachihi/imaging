
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-user">
        <div className="user-avatar">U</div>

        <h2>Name</h2>
        <h3>Role</h3>
        <p>Welcome back, User</p>
      </div>

      <div className="aside-btn">
        <button>Studies</button>
        <button>Upload</button>
        <button>Settings</button>
        {/* <button>Report</button>once ther report is opened this will appear  */}
      </div>

      <div className="sidebar-logout">
        <button>Log out</button>
      </div>
    </aside>
  );
}
