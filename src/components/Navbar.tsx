// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import QuoteWizard from "@/components/QuoteWizard";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Smart Home", path: "/smart-home" },
    { name: "Locations", path: "/locations" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-heavy glow-soft" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-brand group-hover:text-accent transition-colors" />
                <div className="absolute inset-0 bg-brand/20 blur-xl group-hover:bg-accent/30 transition-all" />
              </div>
              <span className="text-xl font-bold gradient-text hidden sm:block">
                Motorized Blinds & More
              </span>
              <span className="text-xl font-bold gradient-text sm:hidden">
                MB&M
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative group ${
                    location.pathname === link.path
                      ? "text-brand"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-vibrant transition-all ${
                      location.pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+13104980110"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-brand transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(310) 498-0110</span>
              </a>
              <Button
                size="sm"
                className="gradient-vibrant hover:opacity-90 transition-opacity"
                onClick={() => setQuoteOpen(true)}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-brand transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-heavy border-t border-border/40"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-brand"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <a
                    href="tel:+13104980110"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-brand transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>(310) 498-0110</span>
                  </a>
                  <Button
                    className="w-full gradient-vibrant"
                    onClick={() => setQuoteOpen(true)}
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Global quote wizard triggered from navbar */}
      <QuoteWizard open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default Navbar;
