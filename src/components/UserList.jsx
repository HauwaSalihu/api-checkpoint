import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserList() {
  const [user, SetUser] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      SetUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {user.map((item, index) => {
        return (
          <div key={index}>
            <UserCard
              name={item.name}
              username={item.username}
              phone={item.phone}
              website={item.website}
              email={item.email}
            />
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
