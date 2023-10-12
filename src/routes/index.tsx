import React, { ReactElement, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Questions } from '../pages/Questions';
import { Main } from '../pages/Main';
import { Results } from '../pages/Results';
import { DefaultLayout } from '../layout/DefaultLayout';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
    { path: '/results/:id', component: Results, layout: DefaultLayout },
  ];
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <HelmetProvider>
        <Helmet>
          <title>눈을 떠보니 마법소녀가 되어있던 건에 대하여</title>
          <meta name="description" content="내가 마법소녀였다면 어떤 마법소녀였을까?" />
          <meta property="og:url" content="https://mabeopsonyeo.github.io/test/" />
          <meta property="og:title" content="눈을 떠보니 마법소녀가 되어있던 건에 대하여" />
          <meta property="og:image" content="%PUBLIC_URL%/images/logo.png" />
          <meta property="og:description" content="내가 마법소녀였다면 어떤 마법소녀였을까?" />
          <meta property="og:type" content="website" />
        </Helmet>
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
      </HelmetProvider>
    </BrowserRouter>
  );
};
