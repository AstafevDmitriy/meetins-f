import axios from 'axios'
import { createEffect, createStore } from 'effector'

export type MainPageInfoT = {
	mainText: string
	description: string
}[]

export const getMainPageInfo = createEffect(async () => {
	const data = await axios.get('http://34.116.215.226/main-page/get-about')
	return data.data
})
export const $mainPageInfo = createStore<MainPageInfoT>([]).on(
	getMainPageInfo.doneData,
	(_, fetchedInfo) => fetchedInfo
)
