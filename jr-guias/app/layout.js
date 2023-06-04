"use client";
import { useState } from "react";

import "./globals.css";

import "./firebase/config";

import Footer from "./components/Footer.jsx";

import { ItemProvider } from "./context/ItemContext";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import NavBar from "./components/NavBar.jsx";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body className="body">
        {/* grid */}
        <ItemProvider>
          <div className="gridLayout">
            <div>
          
                <NavBar />
              
            </div>
            {children}
          </div>
        </ItemProvider>

        {/* grid */}

        {/* <Footer/>
         */}
        <footer className="footer">fotter</footer>
      </body>
    </html>
  );
}
