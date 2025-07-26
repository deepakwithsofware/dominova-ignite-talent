import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-6 h-6 bg-gradient-primary transform rotate-45"></div>
                <div className="w-6 h-6 bg-gradient-primary transform rotate-45 -ml-2"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                DOMINOVA
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional internship program connecting talent with opportunity
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>dominovachennai@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+91 9025092699</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/internship-details" className="text-muted-foreground hover:text-primary transition-colors">
                  Internship Programs
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Registration */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Registration</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/internship-registration" className="text-muted-foreground hover:text-primary transition-colors">
                  Student Registration
                </Link>
              </li>
              <li>
                <Link to="/trainer-registration" className="text-muted-foreground hover:text-primary transition-colors">
                  Trainer Registration
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 DOMINOVA. All rights reserved. Udyam-registered startup.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;