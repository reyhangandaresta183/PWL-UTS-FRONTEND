import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomeLayout from "./presentation/layouts/Home/HomeLayout";
import HomePage from "./presentation/layouts/Home/pages/HomePage";
import AddPage from "./presentation/layouts/Home/pages/AddPage";
import CartPage from "./presentation/layouts/Home/pages/CartPage";
import DetailPage from "./presentation/layouts/Home/pages/DetailPage";
import EditPage from "./presentation/layouts/Home/pages/EditPage";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={routes} />;
};

export default App;
