import React, { Suspense } from 'react';
import './App.css';
import Layout from './components/layout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomeContainer from './containers/HomeContainer';
import { CookiesProvider } from 'react-cookie';


const Loading = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<h1>Loading</h1>}>
    {children}
  </Suspense>
)

const App = () => {
  console.log(process.env.REACT_APP_ACTIVE_THEME)
  return (
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/app" element={<Loading><HomeContainer /></Loading>} />
              <Route path="/login" element={<Loading><h1>Login</h1></Loading>} />
              <Route path="*" element={<Navigate to="/app" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  );
}

export default App;
