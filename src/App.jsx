import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart'
import Contact from './Components/Contact'
import Home from './Components/Home'
import ShoppingCartContext from './context/ShoppingCartContext'

const App = () => {
    return (
    <BrowserRouter>
       <ShoppingCartContext>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/category/:category' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </ShoppingCartContext>
    </BrowserRouter>
  )
}

export default App