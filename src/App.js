import React, { useState, useEffect } from 'react';
import { movies$ } from './movies';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    movies$.then(res => {
      return setMovieList(res);
      
})
  })
  useEffect(() => {
    movies$.then(res => {
      const categoryList = res.map(movie => {return movie.category})
      return setCategories(categoryList)
    })
  }, [movieList.length])
  console.log('movieList',movieList)
  return (
    <div>
      <h1>Hello!</h1>
      <label for="category">Choose a category:</label>
<select name="category" id="category">
      { categories.length ? categories.map(category => {
        return (
  <option value={ category }>{category}</option>
  )
}):(<p>No categories available</p>)}
</select>
      <ul>

        { movieList.length > 1 ? movieList.map((movie) => {
          return (
          
            <li><div><h3>{ movie.category }</h3><h2>{ movie.title }</h2><p><span>likes:{movie.likes}</span><span>likes:{movie.dislikes}</span></p></div></li>
        )
        }) : (
            <p>Please wait the movies to load</p>
          )}
      </ul>
    </div>
    );
  
}

export default App;