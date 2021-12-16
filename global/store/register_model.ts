import axios from 'axios'
import { createEffect, createEvent, createStore } from 'effector'

type RegisterDetailsType = {
	firstName: string
	lastName: string
	phoneNumber: string | null
	email: string | null
	password: string
	gender: string
	dateRegister: string
} | null

export const sendRegData = createEffect()
export const getUsers = createEffect()

export const setRegisterDetails = createEvent<RegisterDetailsType>()
export const $registerDetails = createStore<RegisterDetailsType>(null).on(
	setRegisterDetails,
	(_, newRegDetails) => {
		return newRegDetails
	}
)

sendRegData.use(async (regDetails) => {
	const data = await axios.post(
		'http://34.116.215.226/user/register-user',
		regDetails
	)
	console.log(data)
	return data
})

getUsers.use(async () => {
	const data = await axios.get('http://34.116.215.226/user/get-users')
	console.log(data)
	return data
})
