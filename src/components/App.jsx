import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import NewsPage from './pages/NewsPage';
// import TodoPage from './pages/TodoPage';
// import ToDoDetails from './Todo/ToDoDetails';

const ToDoDetails = lazy(() => import('./Todo/ToDoDetails'))
const TodoPage = lazy(() => import('./pages/TodoPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='news' element={<NewsPage />} />
        <Route path='todo' element={<TodoPage />} />
        <Route path='todo/:id' element={<ToDoDetails />} />
        <Route path='products' element={<ProductsPage />} />
      </Route>
      <Route path='/login' element={<Suspense><LoginPage /></Suspense> } />
    </Routes> )
}

export default App