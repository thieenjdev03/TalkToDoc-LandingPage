// src/routes/publicRoutes.ts
import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Education from '../pages/Education/Education';
import Fun from '../pages/Fun/Fun';
import Projects from '../pages/Projects/Projects';  // import thêm Projects

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    index: true, // index route
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/education',
    element: <Education />,
  },
  {
    path: '/fun',
    element: <Fun />,
  },
  {
    path: '/projects',
    element: <Projects />,  // Thêm route /projects
  },
];

export default publicRoutes;
