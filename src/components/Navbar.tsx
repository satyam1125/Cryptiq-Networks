import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: "Website Development", path: "/services/website-development" },
    { name: "App Development", path: "/services/app-development" },
    { name: "Cyber Security", path: "/services/cybersecurity" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-card/70 backdrop-blur-xl border-b border-border/50 shadow-[0_8px_32px_rgba(255,20,147,0.1)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-xl">CN</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cryptiq Networks
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-lg border-border">
                {services.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link
                      to={service.path}
                      className="cursor-pointer hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/our-work"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/our-work") ? "text-primary" : "text-foreground"
              }`}
            >
              Our Work
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>

            <Button variant="hero" size="sm" asChild>
              <Link to="/our-work#contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-card/90 backdrop-blur-xl border-t border-border/50 shadow-[0_8px_32px_rgba(255,20,147,0.1)] animate-fade-in">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/")
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-primary/5 hover:text-primary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="px-3 py-2">
              <p className="text-sm font-semibold text-muted-foreground mb-2">Services</p>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block px-3 py-2 rounded-md text-sm hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link
              to="/our-work"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/our-work")
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-primary/5 hover:text-primary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Work
            </Link>

            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/about")
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-primary/5 hover:text-primary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            <div className="px-3 py-2">
              <Button variant="hero" className="w-full" asChild>
                <Link to="/our-work#contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
