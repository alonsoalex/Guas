"use client";


import "./globals.css";

import './firebase/config'



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

        <div className="gridLayout">
          <div>
            <NavBar />
          </div>
        </div>
       

        {/* grid */}
      
      

          {children} 
        <div className="footer">fooyer</div>
      </body>
    </html>
  );
}
