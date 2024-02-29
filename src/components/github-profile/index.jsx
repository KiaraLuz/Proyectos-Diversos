import { useState, useEffect } from "react";
import "./styles.css";
import { User } from "./user";

export function GitHubProfile() {
  const [userName, setUserName] = useState("KiaraLuz");
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGitHubUser() {
    setLoading(true);
    const res1 = await fetch(`https://api.github.com/users/${userName}`);
    const data1 = await res1.json();

    const res2 = await fetch(`https://api.github.com/users/${userName}/repos`);
    const data2 = await res2.json();

    if (data1 && data2) {
      setUserData(data1);
      setUserRepos(data2);
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGitHubUser();
  }

  useEffect(() => {
    fetchGitHubUser();
  }, []);

  return (
    <div className="github-profile">
      <div className="form">
        <input
          name="username"
          type="text"
          placeholder="Ingresar perfil..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Buscar</button>
      </div>

      {loading ? <h1>Cargando...</h1> : ""}
      {userData !== null ? <User user={userData} repos={userRepos} /> : null}
    </div>
  );
}
