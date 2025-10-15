import { useState } from "react";
import { Header } from "./components/Header";
import { LoginPage } from "./components/LoginPage";
import { SearchPage } from "./components/SearchPage";
import { CheckoutPage } from "./components/CheckoutPage";
import lionMascot from "figma:asset/6634fd0cd0a2bb1812db9ddbe5da4fc2b3fc7f5d.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"login" | "search" | "checkout">("search");

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage />;
      case "search":
        return <SearchPage />;
      case "checkout":
        return <CheckoutPage />;
      default:
        return <SearchPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <footer className="relative border-t border-primary/10 py-8 px-4 bg-gradient-to-br from-primary/5 via-card to-accent/5 shadow-inner overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
          <img src={lionMascot} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <img src={lionMascot} alt="Campus Lion" className="w-16 h-16 object-contain" />
            <div>
              <h3 className="text-primary">Campus Bookstore</h3>
              <p className="text-sm text-muted-foreground">Your Academic Success Partner</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="mb-2 text-primary">Help & Support</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-primary">Policies</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><a href="#" className="hover:underline">Return Policy</a></li>
                <li><a href="#" className="hover:underline">Rental Terms</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-primary">Resources</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><a href="#" className="hover:underline">Store Hours</a></li>
                <li><a href="#" className="hover:underline">Buyback Program</a></li>
                <li><a href="#" className="hover:underline">Price Match</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-primary">Account</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><a href="#" className="hover:underline">Order History</a></li>
                <li><a href="#" className="hover:underline">My Courses</a></li>
                <li><a href="#" className="hover:underline">Saved Items</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-primary/10 text-center text-sm text-muted-foreground">
            <p className="mb-1">© 2025 Campus Bookstore. All rights reserved.</p>
            <p className="text-xs">All content optimized for keyboard navigation and screen readers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
