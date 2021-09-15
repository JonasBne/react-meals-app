import React, {useEffect, useState} from "react";

import Header from "./components/Home/Layout/Header";
import Meals from "./components/Home/Meals/Meals";
import Cart from "./components/Home/Cart/Cart";
import HeaderLandingPage from "./components/Landing/HeaderLandingPage";
import Login from "./components/Landing/Login";
import Register from "./components/Landing/Register";
import AuthContext from "./store/auth-context";




function App() {
    //todo: context api to work with login

    const [showSignInForm, setShowSignInForm] = useState(true);
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function showSignUp () {
        setShowSignInForm(false);
        setShowSignUpForm(true);
    }

    function showSignIn () {
        setShowSignInForm(true);
        setShowSignUpForm(false);
    }

    useEffect(() => {
        const storedUserAuthentication = localStorage.getItem("isLoggedIn");

        if (storedUserAuthentication === "1") {
            setIsLoggedIn(true);
        }
    })

    function loginHandler (formState: any) {
        if (formState) {
            localStorage.setItem("isLoggedIn", "1");
            setIsLoggedIn(true);
        }
    }

    function logoutHandler () {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    }


    const [showCart, setShowCart] = useState(false);

  function showCartHandler () {
      setShowCart(true);
  }

  function hideCartHandler () {
      setShowCart(false);
  }

  return (
<AuthContext.Provider value={{
    isLoggedIn: isLoggedIn
}}>
    { !isLoggedIn && <HeaderLandingPage />}
    { !isLoggedIn && showSignInForm && <Login onSwitchToSignUp={showSignUp} onLogin={loginHandler}/>}
    { !isLoggedIn && showSignUpForm && <Register onSwitchToSignIn={showSignIn}/>}

    { isLoggedIn && <Header onShowCart={showCartHandler} onLogout={logoutHandler} />}
    { isLoggedIn && showCart && <Cart onHideCart={hideCartHandler} />}
    <main>
    {isLoggedIn && <Meals />}

    </main>
</AuthContext.Provider>


  )
/*    return (
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
