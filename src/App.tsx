import React, {useState} from "react";

import Header from "./components/Home/Layout/Header";
import Meals from "./components/Home/Meals/Meals";
import Cart from "./components/Home/Cart/Cart";
import HeaderLogin from "../src/components/Login/HeaderLogin";
import Login from "./components/Login/Login";
import HeaderLandingPage from "./components/Landing/HeaderLandingPage";
import SignInForm from "../src/components/Landing/SignInForm";
import SignUpForm from "./components/Landing/SignUpForm";




function App() {
    const [showSignInForm, setShowSignInForm] = useState(true);
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    function showSignUp () {
        setShowSignInForm(false);
        setShowSignUpForm(true);
    }

    function showSignIn () {
        setShowSignInForm(true);
        setShowSignUpForm(false);
    }


    const [showCart, setShowCart] = useState(false);

  function showCartHandler () {
      setShowCart(true);
  }

  function hideCartHandler () {
      setShowCart(false);
  }

  return (
      <React.Fragment>
          <HeaderLandingPage />
          { showSignInForm && <SignInForm onSwitchToSignUp={showSignUp} />}
          { showSignUpForm && <SignUpForm onSwitchToSignIn={showSignIn}/>}
      </React.Fragment>
  )

  // return (
  //     <React.Fragment>
  //         <HeaderLogin />
  //         <Login onLogin={isLoggedInHandler} />
  //     </React.Fragment>
  // )

/*  return (
      <React.Fragment>
          <Header onShowCart={showCartHandler} />
          {showCart ? <Cart onHideCart={hideCartHandler} /> : null}
          <main>
              <Meals />
          </main>
      </React.Fragment>
  );*/
}

export default App;
