import { createEvent, createStore } from 'effector'

export const setLoggedIn = createEvent<boolean>()
export const $isLoggedIn = createStore<boolean>(false).on(
	setLoggedIn,
	(_, loggedIn) => loggedIn
)

export const setUser = createEvent()
export const $user = createStore(null).on(setUser, (_, userDetails) => {
	return userDetails
})

export const setCurrentPage = createEvent<string>()
export const $currentPage = createStore<string>('').on(
	setCurrentPage,
	(_, currPage) => currPage
)
