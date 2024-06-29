import { Route, Routes } from 'react-router-dom';
import Board from '~/pages/Boards/_id';
import { Suspense, lazy } from 'react';
import LayoutDashboard from './layout/LayoutDashboard';

const SignInPage = lazy(() => import('./pages/Auth/SignInPage'));
const SignUpPage = lazy(() => import('./pages/Auth/SignUpPage'));
const BoardPage = lazy(() => import('./pages/dashboard/BoardPage'));
const TemplatePage = lazy(() => import('./pages/dashboard/TemplatePage'));
const HomePage = lazy(() => import('./pages/dashboard/HomePage'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard />}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/boards' element={<BoardPage />}></Route>
          <Route path='/template' element={<TemplatePage />}></Route>
        </Route>
        <Route path='/login' element={<SignInPage />}></Route>
        <Route path='/register' element={<SignUpPage />}></Route>
        <Route path='/boards/:slug' element={<Board />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
