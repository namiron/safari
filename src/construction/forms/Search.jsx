import React, { useState, useEffect } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import searchStyle from '../../modules/search.module.scss'
import '../../wrapper.scss'

const Search = ({ productList }) => {



	return (
		<div className={searchStyle.search}>
			<input type="text" name="search" className={searchStyle.searchInput} placeholder='Search...' />
			<button className={searchStyle.searchIcon}><IoSearchSharp className='iconSearch' /></button>
		</div>
	);
}

export default Search;
