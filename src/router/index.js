import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
const ProductsList = lazy(() => import("../views/ProductsList"));
const AboutPage = lazy(() => import("../views/About"));

function NotFoundPage() {
  return (
    <div className="m-5 d-flex justify-content-center">
      <div className="text-center">
        <img
          src="https://assets.justinmind.com/wp-content/uploads/2020/04/best-404-pages.png"
          alt="Page not found"
        />
        <h5 className="mt-5">Page not found</h5>
        <Link to="/" className="link mt-0">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default function Paths() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Suspense>
  );
}
