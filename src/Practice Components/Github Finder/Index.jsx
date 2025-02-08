import React, { useEffect, useState } from "react";
import CardUser from "./CardUser";

//https://api.github.com/users/${userName}

const Index = () => {
  const [userName, setUserName] = useState("paedDev");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  async function fetchGithubProfile() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      console.log(data);
      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName("");
      } else {
        setErrMsg(data.message);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setErrMsg(err.message);
    }
  }

  useEffect(() => {
    fetchGithubProfile();
  }, []);

  const handleSubmit = () => {
    fetchGithubProfile();
  };
  return (
    <div className="min-h-screen lg:w-4/5 w-3/4 m-auto pt-10 space-y-10">
      <div className="">
        <div>
          <input
            type="text"
            placeholder="Input a Github Username..."
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
          {loading && <p>Loading ...</p>}
          {errMsg && <p className="text-red-500">{errMsg}</p>}
          {userData !== null ? <CardUser user={userData} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Index;
