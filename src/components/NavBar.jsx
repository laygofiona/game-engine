import React from 'react'


export function NavBar({handleInput, inputValue, searchTitle, handleKeyPress}) {
  return (
    <div className="navbar">
        <div>
          <h1>Game <span>Engine</span></h1>
          <div className="search-bar">
            <input type="text"  onKeyDown={handleKeyPress}  id="search" name="search" onChange={handleInput} value={inputValue} placeholder="Search over 500,000+ games" aria-label="Search bar" required/>
            <button type="submit" className="searchButton" onClick={searchTitle}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
    </div>
  )
}

