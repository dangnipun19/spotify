function Search({search,setSearch}) {
    return (
      <div className="max-w-[1150px] bg-[#1a1a1a] rounded-full overflow-hidden border-2 border-[#333333] p-1.5 px-5 pr-8 flex items-center">
          <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse" />
          <input type='text' value={search} placeholder="Artists, songs or podcasts" onChange={(e)=>setSearch(e.target.value)}
          className = 'bg-[#1A1A1A] text-white border-none  w-full focus:ring-0 outline-none placeholder-[#FAFAFA] text-xs'
          ></input>
          
      </div>
    )
  } 
  
  export default Search