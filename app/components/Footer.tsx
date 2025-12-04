import { Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Football AI
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Exploring the transformative impact of artificial intelligence in
              football, from the pitch to the boardroom.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link href="/references">
                <button className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 cursor-pointer">
                  Works Cited
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Football AI. All rights reserved. ENGL& 102 - Fall 2025, Prof. Templeton Final Project
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
