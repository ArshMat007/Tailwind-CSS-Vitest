
import React from "react";


export default function PricingStats() {
  return (
    <section className="py-20 bg-gray-50  text-gray-900 ">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6">
          Pricing & Stats
        </h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Choose the plan that fits your workflow and see how we help boost productivity.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-15">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300 text-center">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p className="text-3xl font-bold mb-4 animate-pulse">9 Rs<span className="text-base">/mo</span></p>
            <ul className="mb-6 space-y-2">
              <li>Task Management</li>
              <li>Email Support</li>
            </ul>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-black font-bold px-6 py-3 rounded-lg transition-transform transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-indigo-500 text-white p-8 rounded-xl shadow-2xl transform scale-105 hover:scale-110 transition-transform duration-300 text-center">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p className="text-3xl font-bold mb-4 animate-pulse">29 Rs<span className="text-base">/mo</span></p>
            <ul className="mb-6 space-y-2">
              <li>Everything in Basic</li>
              <li>Priority Support</li>
              <li>Advanced Analytics</li>
            </ul>
            <button className="bg-white text-indigo-500 font-bold px-6 py-3 rounded-lg transition-transform transform hover:scale-105">
              Upgrade Now
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white  p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300 text-center">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-3xl font-bold mb-4 animate-pulse">99 Rs<span className="text-base">/mo</span></p>
            <ul className="mb-6 space-y-2">
              <li>Everything in Pro</li>
              <li>Dedicated Account Manager</li>
              <li>Custom Integrations</li>
            </ul>
            <button className="bg-gray-800 hover:bg-gray-900 text-black font-bold px-6 py-3 rounded-lg transition-transform transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300">
            <p className="text-5xl font-bold text-indigo-500 animate-pulse">10K+</p>
            <p className="mt-2">Active Users</p>
          </div>
          <div className="bg-white  p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300">
            <p className="text-5xl font-bold text-purple-500 animate-pulse">250+</p>
            <p className="mt-2">Projects Completed</p>
          </div>
          <div className="bg-white 0 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300">
            <p className="text-5xl font-bold text-pink-500 animate-pulse">95%</p>
            <p className="mt-2">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
