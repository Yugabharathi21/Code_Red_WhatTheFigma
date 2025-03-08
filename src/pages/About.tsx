import React, { useState } from 'react';

export default function About() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-20 py-16">
        <div className="flex gap-36">
          {/* Left Content */}
          <div className="flex flex-col gap-6 max-w-[624px]">
            <h1 className="text-6xl font-bold">About</h1>
            <p className="text-2xl text-[#828282] font-normal leading-9">
              Your trusted source for fresh, organic produce delivered right to your doorstep.
            </p>
            <p className="text-xl text-black font-medium leading-[30px]">
              At FreshHarvest, we believe in bringing the freshest, highest-quality organic produce directly to your table. Our carefully curated selection of fruits, vegetables, and artisanal products ensures that you get the best nature has to offer.
              <br /><br />
              We work directly with local farmers and sustainable producers to maintain the highest standards of quality while supporting our community and protecting the environment.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
              alt="Fresh produce"
              className="w-[508px] h-[657px] rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-8">Contact us</h2>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-8 max-w-[626px]">
            <div className="w-[295px]">
              <label className="block text-black text-base font-medium mb-2">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] shadow-sm focus:ring-2 focus:ring-black/5 outline-none"
                placeholder="Enter your first name"
              />
            </div>

            <div className="w-[297px]">
              <label className="block text-black text-base font-medium mb-2">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] shadow-sm focus:ring-2 focus:ring-black/5 outline-none"
                placeholder="Enter your last name"
              />
            </div>

            <div className="w-full">
              <label className="block text-black text-base font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] shadow-sm focus:ring-2 focus:ring-black/5 outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div className="w-full">
              <label className="block text-black text-base font-medium mb-2">
                Your message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-[146px] px-4 py-3 rounded-lg border border-[#E0E0E0] shadow-sm focus:ring-2 focus:ring-black/5 outline-none resize-none"
                placeholder="Enter your question or message"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-4 bg-black text-white rounded-lg shadow-sm text-xl font-medium hover:bg-black/90 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}