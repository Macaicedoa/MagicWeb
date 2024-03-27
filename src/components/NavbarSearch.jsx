import { useState } from "react"
import Lupa from "./Lupa.jsx"
import { useNavigate } from "react-router-dom";

function NavbarSearch({onExplore}) {


  const [inputSearch,setInputSearch]=useState("")
  const navigate = useNavigate();

  function handleInputNavbarClick() {
    onExplore.CloseEverything();
  }
  
  function handleInputNavbarChange(e) {
    setInputSearch(e.target.value)
  } 

  function handleSubmit(e){
    e.preventDefault()
    onExplore.setInitOptions(inputSearch?`?name=${inputSearch}`:'?page=1')
    onExplore.setIsExplore(false)
    navigate("/explore");
  }

  function handleClickButtonSearch(e) {
    console.log("búsqueda: "+ inputSearch)
    onExplore.setInitOptions(inputSearch?`?name=${inputSearch}`:'?page=1')
    onExplore.setIsExplore(false)
    navigate("/explore");

  }

  return (
    <div className="navbar-search">
      <form onSubmit={handleSubmit} className="form-navbar">
        <input  className="input-search" value={inputSearch} type="text" name="" id="" onClick={handleInputNavbarClick} onChange={handleInputNavbarChange} placeholder="Search..."/>
        <button type="button" onClick={handleClickButtonSearch}><Lupa/></button>
    </form>
    </div>
    
  )
}

export default NavbarSearch