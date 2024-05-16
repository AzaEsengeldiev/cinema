import axios from 'axios'
import React, { useState, createContext, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { API_KEY } from '../../API_KEY'

export const languageContext = createContext()

const RootContext = ({ children }) => {
	const [search, setSearch] = useState([])
	const [language, setLanguage] = useState('en-US')
	const [theme, setTheme] = useState(false)
  // const {para}

	// const getSearchMovie = async key => {
	// 	await axios(
	// 		`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`
	// 	).then(res => {
	// 		setSearch(res.data.results)
	// 	})
	// }
	// // console.log(movieName)
	// useEffect(() => {
	// 	getSearchMovie(API_KEY)
	// }, [])

	return (
		<languageContext.Provider
			value={{
				language,
				setLanguage,
				theme,
				search,
				setTheme
			}}
		>
			{children}
		</languageContext.Provider>
	)
}

export default RootContext
