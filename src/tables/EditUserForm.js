import React, {useState,useEffect} from 'react';

const EditUserForm = props => {
  const [user,setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const {name, value} = event.target
    setUser({...user, [name]: value})
  }

  useEffect(() => {
    setUser(props.currentUser)
  },[props])

  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange}></input>
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange}></input>
      <button>Update User</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
    </form>
  )
}

export default EditUserForm;