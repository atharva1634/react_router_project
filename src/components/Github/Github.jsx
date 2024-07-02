import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://api.github.com/users/atharva1634")
//       .then((res) => res.json())
//       .then((data) => {
       
//         setData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

  return (
    <div className="text-center  p-4 m-4 rounded-2xl font-bold bg-gray-600 text-white text-2xl">
          Github followers: {data ? data.followers : ""}
          <div className="flex items-center justify-center">
          <img className="w-60" src={data ? data.avatar_url : ""}></img>
          </div>
    </div>
  );
}

export default Github;

export const githubData = async () => {
    const res = await fetch("https://api.github.com/users/atharva1634")
    return res.json()
}