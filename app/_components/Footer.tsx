import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Github,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="Footer"
      className="bg-bgdark/90 bg-glass w-full p-4 mt-4 shadow-md text-textmain border-t border-primary-dark/30 backdrop-blur-lg"
    >
      <div className="max-w-screen-lg mx-auto flex gap-6 justify-center flex-wrap">
        {/* Company Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-between">
          <div>
            <h2 className="text-lg font-bold text-primary">E-Commerce</h2>
            <p className="mt-2 text-base text-textmuted">
              Your one-stop shop for all things amazing.
            </p>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-secondary">Contact</h3>
            <div className="mt-1 text-base text-textmuted space-y-2">
              <p className="flex items-center space-x-3 hover:bg-bgdark/60 p-1 rounded transition-all">
                <Phone size={18} />
                <a
                  href="tel:+201113951795"
                  className="text-accent hover:text-primary"
                >
                  +20 11 13951795
                </a>
              </p>
              <p className="flex items-center space-x-3 hover:bg-bgdark/60 p-1 rounded transition-all">
                <Mail size={18} />
                <a
                  href="mailto:abdulrahmanhabibh@gmail.com"
                  className="text-accent hover:text-primary"
                >
                  abdulrahmanhabibh@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Social Links */}
        <div>
          <h3 className="text-sm font-bold text-secondary">Follow Us</h3>
          <div className="flex flex-col sm:flex-row mt-2 gap-3">
            <div className="flex flex-col lg:flex-row gap-3">
              <a
                className="w-10 h-10 flex items-center justify-center rounded-full bg-bgdark border border-primary text-primary hover:bg-primary hover:text-bgdark hover:border-primary transition-all"
                href="https://www.linkedin.com/in/abdulrahman-habiba-b6a34921a"
                target="_blank"
              >
                <Linkedin size={18} />
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center rounded-full bg-bgdark border border-primary text-primary hover:bg-primary hover:text-bgdark hover:border-primary transition-all"
                href="https://github.com/AbdulrahmanHabiba"
                target="_blank"
              >
                <Github size={18} />
              </a>
            </div>
            <div className="flex flex-col lg:flex-row gap-3">
              <a
                className="w-10 h-10 flex items-center justify-center rounded-full bg-bgdark border border-accent text-accent hover:bg-accent hover:text-bgdark hover:border-accent transition-all"
                href="https://www.facebook.com/abdulrahmanhsan.habiba.3/"
                target="_blank"
              >
                <Facebook size={18} />
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center rounded-full bg-bgdark border border-accent text-accent hover:bg-accent hover:text-bgdark hover:border-accent transition-all"
                href="https://wa.me/201113951795"
                target="_blank"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t mt-6 pt-4 flex flex-col sm:flex-row justify-between text-base text-textmuted">
        <p>&copy; 2025 E-Commerce Inc. All rights reserved.</p>
        <div className="flex space-x-3">
          <a
            href="/"
            className="hover:text-primary hover:bg-bgdark/60 p-1 rounded transition-all"
          >
            F.A.Q
          </a>
          <a
            href="/"
            className="hover:text-primary hover:bg-bgdark/60 p-1 rounded transition-all"
          >
            Privacy Policy
          </a>
          <a
            href="/"
            className="hover:text-primary hover:bg-bgdark/60 p-1 rounded transition-all"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
