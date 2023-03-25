import { useState, useEffect } from 'react'
import User from './User';
import './index.css'

function App() {

  const [user, setUser] = useState([]);

  const getUser = async () => {
    const response = await fetch('https://api.github.com/users');
    setUser(await response.json())
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <>
      <main>
        <div className="section-title">
          <h1 className='title'>List of GitHub Users</h1>
        </div>
        <div className="container text-center">
          <div className='row justify-content-md-center'>

            {user.map((currUser) => {
                  return (
                    <User key={currUser.id} detail={currUser} />
                  )
            })}

          </div>
        </div>
      </main>
    </>
  )
}

export default App