import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [newUserData, setNewUserData] = useState({name : "", email : "", password : ""});

  useEffect(() => {
    fnGetAllUsers();
  }, []);

  const fnGetAllUsers = async () => {
    setLoader(true);    
    try {
      const response = await fetch('https://comfort-kicks-admin-be.vercel.app/api/admin/test');
      const result = await response.json();
      setData(result?.data);
      setLoader(false);
    } catch (error) {
      console.log('some error occured : ', error);
      setLoader(false);
    }
  };

  const fnCreateUser = async () => {
    if(newUserData?.email && newUserData.name && newUserData.password) {
      try {
        const response = await fetch('https://comfort-kicks-admin-be.vercel.app/api/admin/test', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            {
              name: "Afzal",
              email: "afzal@gmail.com",
              password: "test1234"
            }
          )
        });
  
        if(response.ok) {
          fnGetAllUsers()
        }
  
      } catch (error) {
        console.log('some error occured : ', error)
      }
    } else {
      alert('please filled all the fields required!')
    }
  };

  return (
    <div>
      {
        loader ? 'Loading...' 
        : data?.map((user, index) => {
          return (
            <div>
              <h1>
              {index + 1} : {user.name}

              </h1>
              <h3>
                {user?._id}
              </h3>
            </div>
          )
        })
      }
      <div onClick={fnCreateUser} >
        Create User
      </div>
    </div>
  )
}

export default App