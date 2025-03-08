import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full h-[264px] bg-white relative">
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="border-t border-[#E6E6E6] pt-12 grid grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-normal leading-9">
              FreshHarvest
            </Link>
            <div className="mt-11 flex gap-2">
              {/* Social Media Icons Placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded flex justify-center items-center"
                >
                  <div className="w-6 h-6 flex justify-center items-center" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-black text-base font-medium leading-6">Support</h3>
            <Link to="/faq" className="text-[#454545] text-base font-medium leading-6">
              FAQ
            </Link>
            <Link to="/contact" className="text-[#454545] text-base font-medium leading-6">
              Contact Us
            </Link>
            <Link to="/returns" className="text-[#454545] text-base font-medium leading-6">
              Returns
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-black text-base font-medium leading-6">Company</h3>
            <Link to="/about" className="text-[#454545] text-base font-medium leading-6">
              About Us
            </Link>
            <Link to="/careers" className="text-[#454545] text-base font-medium leading-6">
              Careers
            </Link>
            <Link to="/blog" className="text-[#454545] text-base font-medium leading-6">
              Blog
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-black text-base font-medium leading-6">Legal</h3>
            <Link to="/privacy" className="text-[#454545] text-base font-medium leading-6">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#454545] text-base font-medium leading-6">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}