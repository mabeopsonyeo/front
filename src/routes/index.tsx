import React, { ReactElement, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Questions } from '../pages/Questions';
import { Main } from '../pages/Main';
import { Results } from '../pages/Results';
import { DefaultLayout } from '../layout/DefaultLayout';

export const Router = () => {
  const routes: Array<{
    path: string;
    component: () => ReactElement;
    layout?: (props: { children: ReactNode | undefined }) => ReactElement;
  }> = [
    {
      path: '/',
      component: Main,
      layout: DefaultLayout,
    },
    { path: '/questions', component: Questions, layout: DefaultLayout },
    { path: '/results', component: Results, layout: DefaultLayout },
  ];
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.layout ? (
                <route.layout>
                  <route.component />
                </route.layout>
              ) : (
                <route.component />
              )
            }
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};
