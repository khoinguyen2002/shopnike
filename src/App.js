import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { DataProvider } from './components/Context';
import '../src/components/css/globals.css';
import NewLoginPage from './components/login/NewLoginPage';
import NewRegisterPage from './components/login/NewRegisterPage';
import HomePage from './components/HomePage/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from './components/Products/ProductDetails';
import ListProducts from './components/Products/ListProducts';
import Cart from './components/section/Cart';
import Payment from './components/section/Payment';

class App extends React.Component {
  render() {
    return (
      <>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <DataProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login">
                <NewLoginPage />
              </Route>
              <Route exact path="/register">
                <NewRegisterPage />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/payment">
                <Payment />
              </Route>
              {/* <Route exact path="/about">
                <AboutPage />
              </Route> */}
              <Route exact path="/product">
                <ListProducts />
              </Route>
              <Route exact path="/product/:id">
                <ProductDetails />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/*">
                <div>Page 404</div>
              </Route>
            </Switch>
          </BrowserRouter>
        </DataProvider>
      </>
    );
  }
}

export default App;
