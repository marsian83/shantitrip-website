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
import useCache from "./contexts/cacheContext";
import DestinationsPage from "./pages/DestinationsPage/DestinationsPage";
import HomePage from "./pages/HomePage/HomePage";
import ItineraryPage from "./pages/ItineraryPage/ItineraryPage";
import TripPage from "./pages/TripPage/TripPage";
import AboutUs from "./pages/AboutUsPage/AboutUs";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/trips" element={<ItineraryPage />} />
        <Route path="/trips/:id" element={<TripPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Route>
    )
  );

  const cache = useCache();

  return !cache.loading ? (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  ) : (
    <div className="flex h-screen justify-center items-center italic text-5xl font-medium font-raleway">
      Loading...
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
