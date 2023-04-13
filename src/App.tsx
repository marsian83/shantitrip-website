import { useEffect, useRef, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import useCache from "./contexts/cacheContext";
import DestinationsPage from "./pages/DestinationsPage/DestinationsPage";
import HomePage from "./pages/HomePage/HomePage";
import TripPage from "./pages/TripPage/TripPage";
import AboutUs from "./pages/AboutUsPage/AboutUs";
import ContactPage from "./pages/ContactPage/ContactPage";
import Collaborate from "./pages/Collaborate/Collaborate";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/trips" element={<div />} />
        <Route path="/trips/:id" element={<TripPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/collaborate" element={<Collaborate />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

function Root() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [useParams()]);

  const cache = useCache();

  return (
    <main className="relative">
      <div className="App">
        {!cache.loading ? (
          <>
            <Navbar />
            <Outlet />
            <Footer />
          </>
        ) : (
          <div className="flex h-screen justify-center items-center italic text-5xl font-medium font-raleway">
            Loading...
          </div>
        )}
      </div>
    </main>
  );
}
