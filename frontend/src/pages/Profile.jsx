export default function Profile() {
    const logout = () => {
      localStorage.removeItem("token");
      window.location.reload();
    };
  
    return (
      <div>
        <h2>Profile</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  