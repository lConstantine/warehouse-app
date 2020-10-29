import React from 'react'

const Search = ({ search, setSearch }) => {

  return(
    <div style={{ 'border': '1px solid blue', 'marginBottom':'0px' }}>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search goods"/>
    </div>
  )
}

export default Search