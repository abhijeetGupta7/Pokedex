import { Link } from 'react-router-dom'
import './App.css'
import PokedexTitle from './components/PokedexTitle/PokedexTitle'
import Search from './components/Search/Search'
import CustomRoutes from './routes/CustomRoutes'
import { useState } from 'react'

function App() {

  const [searchTerm,setSearchTerm]=useState('');               // for actual api calls based on this value
  const [inputValue, setInputValue] = useState(searchTerm);    // for ui changes in input box only

  return (
    <>
      <div className='wrapper'>
      <Link className='home-link' to="/" onClick={() => { setSearchTerm(''); setInputValue(''); }}> 
        <PokedexTitle/>
      </Link>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} inputValue={inputValue} setInputValue={setInputValue}/>
      <CustomRoutes searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>       
      </div>
    </>
  )
}

export default App
