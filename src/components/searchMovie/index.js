import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../../API_KEY'
import MovieCard from '../movieCard'
import Error from './error'

const SearchMovie = () => {
	const [search, setSearch] = useState([])
	// const [error, setError] = useState(false)
	const { movieName } = useParams()
	const getSearchMovie = key => {
		axios(
			`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`
		).then(res => {
			setSearch(res.data.results)

			// console.log(res.data.results)
		})
	}
	// console.log(movieName)
	useEffect(() => {
		getSearchMovie(API_KEY)
	}, [movieName])
	console.log(movieName)

	return (
		<div className='blocks'>
			{search.length > 0 ? (
				search.map(el => <MovieCard key={el.id} el={el} />)
			) : (
				<Error />
			)}
		</div>
	)
}

export default SearchMovie
