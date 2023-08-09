import React, { Component, useState, useId } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import TodoPage from './pages/TodoPage';
import Layout from './Layout/Layout';
import ToDoDetails from './Todo/ToDoDetails';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='news' element={<NewsPage />} />
        <Route path='todo' element={<TodoPage />} />
        <Route path='todo/:id' element={<ToDoDetails />} />
      </Route>
    </Routes> )
}

export default App