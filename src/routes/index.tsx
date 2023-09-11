import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Questions } from '../pages/Questions';
import { Main } from '../pages/Main';
import { Results } from '../pages/Results';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/results/:id" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};
