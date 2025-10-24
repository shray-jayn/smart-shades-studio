import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Sparkles } from "lucide-react";

const Footer = () => {
  const locations = [
    {
      city: "Hollywood",
      address: "700 N San Vicente Blvd G460, West Hollywood, CA 90069",
      phone: "(310) 498-0110",
    },
    {
      city: "Las Vegas",
      address: "8505 W Charleston Blvd #3, Las Vegas, NV 89117",
      phone: "(725) 316-7780",
    },
  ];

  const quickLinks = [
    { name: "Products", path: "/products" },
    { name: "Smart Home", path: "/smart-home" },
    { name: "Locations", path: "/locations" },
  ];

  return (
    <footer className="relative border-t border-border/40 bg-card/30">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-brand" />
                <div className="absolute inset-0 bg-brand/20 blur-xl" />
              </div>
              <span className="text-xl font-bold gradient-text">MB&M</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium motorized window coverings with smart home integration for LA, OC, SD & Las Vegas.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glass-heavy hover:text-brand transition-all hover-lift"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glass-heavy hover:text-brand transition-all hover-lift"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold mb-4">Our Locations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locations.map((loc) => (
                <div key={loc.city} className="space-y-2">
                  <p className="font-semibold text-brand">{loc.city}</p>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <a href={`tel:${loc.phone.replace(/\D/g, "")}`} className="hover:text-brand transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 Motorized Blinds & More. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
};

export default Footer;
