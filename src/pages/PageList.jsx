import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/postSlice'
import ErrorPage from '../componets/ErrorPage'

export default function PageList() {


  const { users } = useSelector(state => state.postReducer)
  const [usersList, setUsersList] = useState([])
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [user, setUser] = useState('')
  const dispatch = useDispatch()
  const already = useRef(null)
  const error = useRef(null)


  const handleAddUser = () => {
    if (password === repeatPassword && usersList.indexOf(user) === -1 && user !== '' && password !== '') {
      dispatch(addUser({ username: user, password: password }))
      setUsersList(user)
      error.current.style.display = 'none'
      already.current.style.display = 'none'
    } else if(password !== repeatPassword){
      error.current.style.display = 'block'
    } else if (usersList.indexOf(user) !== -1){
      already.current.style.display = 'block'
    }
  }


  return (
    <div>

      <div className='inputs'>
        <input type="text" placeholder='Введите имя пользователя' onChange={(e) => setUser(e.target.value)} />
        <input type="text" placeholder='Введите пароль' onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder='Введите повторно пароль' onChange={(e) => setRepeatPassword(e.target.value)} />
        <button onClick={handleAddUser}>Добавить пользователя</button>
      </div>

      {
        <div>
          {
            users.length ? users.map((item, index) => (
              <div className='usersList' key={index}>
                <p>Имя пользователя: {item.username}</p>
                <p>Пароль пользователя: {item.password}</p>
              </div>
            ))
              : <div>
                Пусто
              </div>}
        </div>
      }

      <div className='already' ref={already}>
        Такой пользователь уже существует
      </div>

      <div className='error' ref={error}>
        Ошибка ввода пароля
      </div>

    </div>
  )
}
