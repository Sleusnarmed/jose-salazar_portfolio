import { createBrowserRouter, RouterProvider } from "react-router";

// Importar componentes y páginas
import MainLayout from "./components/mainLayout/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Projects from "./pages/projects/Projects.jsx"
import Resume from "./pages/resume/Resume.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects/> },
      { path: "/resume", element: <Resume/> }
    ],
  },
  {
    path: "*",
    element: <h1>Página no encontrada</h1>,
  },
]);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
