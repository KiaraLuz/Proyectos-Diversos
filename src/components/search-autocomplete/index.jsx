import { useEffect, useState } from "react";
import "./styles.css";
import { Suggestions } from "./suggestions";

export function SearchAutomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDrop, setShowDrop] = useState(false);
  const [filterUsers, setFilterUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterUsers(filteredData);
      setShowDrop(true);
    } else {
      setShowDrop(false);
    }
  }

  function handleClick(event) {
    setShowDrop(false);
    setSearchParam(event.target.innerText);
    setFilterUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="search-automplete">
      {loading ? (
        <h1>Cargando</h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Buscar usuarios"
          onChange={handleChange}
        />
      )}
      {showDrop && <Suggestions handleClick={handleClick} data={filterUsers} />}
    </div>
  );
}
