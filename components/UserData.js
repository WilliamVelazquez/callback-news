import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import LabelInput from './LabelInput'
import Button from './Button'
import Notification from './Notification'
import useForm from '../hooks/useForm'
import useToggle from '../hooks/useToggle'

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px 5px;
  padding: 30px 0px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr;
  @media screen and (min-width: 568px) {
    grid-template-columns: 1fr 2fr;
  }
`

const Form = styled.form`
  width: 70%;
  padding: 0px;
  display: grid;
  align-items: end;
  grid-gap: 20px 40px;
  grid-template-columns: 1fr;
  justify-items: center;
  @media screen and (min-width: 768px) {
    justify-items: right;
    justify-self: flex-start;
    grid-template-columns: 1fr 1fr;
  }
`

const UserData = ({ data = [] }) => {
  const [message, setMessage] = useState('')
  const [isNotifying, toggleNotification] = useToggle(false)
  const [isEditing, toggleEditing] = useToggle(false)
  const [userData, handleChange, handleData, setUserData] = useForm({
    ...data,
    password: '',
    newPassword: '',
    newPasswordConfirmation: '',
  })

  useEffect(() => {
    setUserData({ ...data })
  }, [data])

  const handleSubmit = (event) => {
    toggleEditing()
    setMessage('Data saved')
    toggleNotification()
    const finalData = handleData(event)
    // console.log('finalData --> ', finalData)
  }

  return (
    <MainContainer>
      <Avatar withBorder size="140px" />
      <Form onSubmit={handleSubmit}>
        <LabelInput
          id="username"
          label="Username"
          value={userData.username}
          disabled={!isEditing}
          onChange={handleChange}
        />
        <LabelInput
          id="email"
          label="Email"
          type="email"
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,5}$"
          value={userData.email}
          disabled={!isEditing}
          onChange={handleChange}
        />
        <LabelInput
          id="password"
          label="Current Password"
          type="password"
          value={userData.password}
          disabled={!isEditing}
          onChange={handleChange}
        />
        <LabelInput
          id="newPassword"
          label="New Password"
          type="password"
          value={userData.newPassword}
          disabled={!isEditing}
          onChange={handleChange}
        />
        <LabelInput
          id="newPasswordConfirmation"
          label="Confirm Password"
          type="password"
          value={userData.newPasswordConfirmation}
          disabled={!isEditing}
          onChange={handleChange}
        />
        {
          // isEditing ?
          //   <Button text="Save" onClick={handleSubmit} /> :
          //   <Button text="Edit" onClick={toggleEditing} />
        }
      </Form>
      <Notification
        isNotifying={isNotifying}
        close={toggleNotification}
        message={message}
      />
    </MainContainer>
  )
}

export default UserData
