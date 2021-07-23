import React, { useState } from 'react'
import UserTable from './tables/userTable'
import AddUserForm from './tables/addUserForm'
import EditUserForm from './tables/EditUserForm'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => {
  const userData = [
    { id: 1, name: 'Xiaoming', username: 'sky' },
    { id: 2, name: 'zhuyawen', username: 'beijita' },
    { id: 3, name: 'huyitian', username: 'shengyue' }
  ]

  const [users, setUsers] = useState(userData)
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurentUser] = useState(initialFormState)
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const editRow = user => {
    setEditing(true)
    setCurentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className='container'>
      <h1>CRUD with React-Hooks</h1>

      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              {' '}
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />{' '}
            </div>
          )}
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  )
}

export default App
