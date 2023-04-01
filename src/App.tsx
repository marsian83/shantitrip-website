import { useEffect, useRef, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ItineraryPage from "./pages/ItineraryPage/ItineraryPage";
import AboutUs from "./pages/AboutUsPage/AboutUs";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/trips" element={<ItineraryPage />} />
        <Route path="/about" element={<AboutUs />} />

      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

function Root() {
  return (
    <main className="relative">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
