import './App.css';

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Form from './components/Form'
import Items from './components/Items'

function App() {

  const [getItems, setItems] = useState([])

  function newitem(item) {
    setItems([...getItems, item])
  }

  let editted = {}

  function newValue(e) {
    if (e.target.name === 'title') {
      editted.title = e.target.value
    }
    if (e.target.name === 'photo') {
      editted.photo = e.target.value
    }
    if (e.target.name === 'price') {
      editted.price = e.target.value
    }
    if (e.target.name === 'quantity') {
      editted.quantity = e.target.value
    }
  }

  function submitChanges(id) {
    setItems(getItems.map((item) => item.id === id ? { ...item, title: editted.title, photo: editted.photo, price: editted.price, quantity: editted.quantity } : item))
  }

  function addToFavs(id) {
    setItems(getItems.map((item) => item.id === id ? { ...item, favorites: !item.favorites } : item))
  }

  function deletePost(id) {
    setItems(getItems.filter(item => item.id !== id))
  }
  return (
    <Router>
      <div className="App dFlex column">

        <Switch>

          <Route path="/form">
            <Form sendData={newitem} />
          </Route>

          <Route path="/items">
            <div className="dFlex">
              {getItems.map(item =>
                <Items
                  item={item}
                  newValue={(e) => newValue(e)}
                  submitChange={() => submitChanges(item.id)}
                  addToFav={addToFavs}
                  deletePost={deletePost}
                />
              )}
            </div>

            <div>
              <button>
                <Link to="/form">Back to Form</Link>
              </button>
            </div>
            <div><h1>FAVORITES</h1></div>
            {getItems.map(item =>
              item.favorites ? <Items item={item} newValue={(e) => newValue(e)}
                submitChange={() => submitChanges(item.id)}
                addToFav={addToFavs}
                deletePost={deletePost} /> : null
            )}
          </Route>

        </Switch>

      </div>
    </Router>
  );

}


export default App;
