import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/root";
import { CssBaseline } from "@mui/material";
import FlightsPage from "./pages/flights/flights";
import TravelPage from "./pages/travel";
import ExplorePage from "./pages/explore";
import HotelsPage from "./pages/hotel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <FlightsPage /> },
      { path: "/travel", element: <TravelPage /> },
      { path: "/explore", element: <ExplorePage /> },
      { path: "/hotels", element: <HotelsPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
