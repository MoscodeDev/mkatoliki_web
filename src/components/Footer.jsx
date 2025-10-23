import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12 border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Mkatoliki Store</span> — All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-sm text-blue-600">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a
            href="https://wa.me/254788883643?text=Hi%20Mkatoliki!"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
