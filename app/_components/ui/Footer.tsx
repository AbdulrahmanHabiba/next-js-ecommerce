import React from "react";
import { Linkedin, Github, Facebook, MessageCircle, Mail } from "lucide-react";

const socials = [
  {
    href: "https://www.linkedin.com/in/abdulrahman-habiba-b6a34921a",
    icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn"
  },
  {
    href: "https://github.com/AbdulrahmanHabiba",
    icon: <Github className="w-5 h-5" />, label: "GitHub"
  },
  {
    href: "https://www.facebook.com/abdulrahmanhsan.habiba.3/",
    icon: <Facebook className="w-5 h-5" />, label: "Facebook"
  },
  {
    href: "https://wa.me/201113951795",
    icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp"
  },
  {
    href: "mailto:abdulrahmanhabibh@gmail.com",
    icon: <Mail className="w-5 h-5" />, label: "Email"
  },
];


const Footer = () => (
  <footer className="w-full bg-bgdark/80 border-t border-primary-dark/20 backdrop-blur-md py-6 ">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
      <div className="text-textmuted text-sm">
        &copy; {new Date().getFullYear()} E-Commerce Inc. All rights reserved.
      </div>
      <div className="flex gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label={s.label}
          >
            {s.icon}
          </a>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        <a href="/" className="hover:text-primary">Home</a>
        <a href="/#products" className="hover:text-primary">Products</a>
        <a href="/cart" className="hover:text-primary">Cart</a>
      </div>
    </div>
  </footer>
);

export default Footer;
