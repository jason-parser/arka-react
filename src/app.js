import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import UserPage from './pages/user'
import CartPage from './pages/cart'
import ChoosePage from './pages/choose'
import GalleryPage from './pages/gallery'
import DetailsPage from './pages/details'

import RestoreScroll from './components/common/RestoreScroll'

const App = () => (
  <Router>
    <RestoreScroll>
      <div>
        <Route path="/details" component={DetailsPage} />
        <Route path="/choose" component={ChoosePage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/user" component={UserPage} />
      </div>
    </RestoreScroll>
  </Router>
)

export default App
