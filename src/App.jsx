import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import 'react-toastify/dist/ReactToastify.css';
// project import
import router from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import 'bootstrap/dist/css/bootstrap.min.css';


// Redux store import (this assumes you've already set up your store)
import store from './store/storage';  // Adjust the import to where your store is located
import { ToastContainer } from 'react-toastify';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  return (
    <Provider store={store}>  {/* Wrap the app with the Provider */}
      <ThemeCustomization>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ScrollTop>
          <RouterProvider router={router} />
        </ScrollTop>
      </ThemeCustomization>
    </Provider>
  );
}
