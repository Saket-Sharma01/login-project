
import React, { useState, useEffect } from "react";




function Dashboard() {

  const [users, setUsers] = useState([]);




  useEffect(() => {

    fetch("https://dummyjson.com/users")

      .then((response) => response.json())

      .then((data) => setUsers(data.users));

  }, []);

  console.log(users);

  return (

    <div>

      <h1>Dashboard</h1>

      <table style={{ border: "1px black" }}>

<tbody>
        <tr>

          <th>Sno</th>

          <th>name</th>

          <th>Email</th>

        </tr>
        {users.map((item, ind) => (

          <tr key={ind}>

            <td>{item.id}</td>

            <td>{item.name}</td>

            <td>{item.email}</td>

          </tr>

        ))}
</tbody>
      </table>

    </div>

  );

}




export default Dashboard;