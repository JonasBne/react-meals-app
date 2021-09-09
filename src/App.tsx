import React, {useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [showCart, setShowCart] = useState(false);

  function showCartHandler () {
      setShowCart(true);
  }

  function hideCartHandler () {
      setShowCart(false);
  }


  return (
      <React.Fragment>
          <Header onShowCart={showCartHandler} />
          {showCart ? <Cart onHideCart={hideCartHandler} /> : null}
          <main>
              <Meals />
          </main>
      </React.Fragment>
  );
}

export default App;
