import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import search from '../../modules/search.module.scss'
import '../../wrapper.scss'


const Search = () => {
	return (
		<div className={search.search}>
			<input type="text" name="search" className={search.searchInput} placeholder='Search...' />
			<button className={search.searchIcon}><IoSearchSharp className='iconSearch' /></button>
		</div>


	)
}
export default Search;