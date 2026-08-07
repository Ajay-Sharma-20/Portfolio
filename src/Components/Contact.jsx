import React, { useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiDownload } from 'react-icons/fi';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitting(true);

    try {
      // 1. Existing local messages fetch karo (agar pehle se hain)
      const existingMessages = JSON.parse(localStorage.getItem('contact_messages')) || [];

      // 2. Naya message with timestamp structure karo
      const newMessage = {
        id: Date.now(),
        name: data.name,
        email: data.email,
        message: data.message,
        date: new Date().toLocaleString()
      };

      // 3. Updated array ko localStorage me wapas save karo
      const updatedMessages = [...existingMessages, newMessage];
      localStorage.setItem('contact_messages', JSON.stringify(updatedMessages));

      toast.success("Message saved locally!");
      
      // 4. Inputs empty/reset karo
      reset();
    } catch (error) {
      console.error("Storage Error:", error);
      toast.error("Failed to save message locally.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section name="Contact" className="py-24 bg-slate-100/70 relative dark:bg-slate-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 ">
          <span className="text-indigo-600 font-bold text-xs tracking-widest uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 dark:text-white">
            Let's Collaborate & Build Together
          </h2>
          <p className="text-slate-600 text-sm mt-3 dark:text-slate-300">
            Have a project in mind, a question, or just want to discuss full-stack & DevOps development? Drop a message!
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Split Grid (Info Cards + Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto dark:bg-slate-900 ">
          
          {/* Left Column: Direct Info & Social Badges */}
          <div className="lg:col-span-5 space-y-6 ">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-md space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
                <p className="text-xs text-slate-600 mt-1 dark:text-white">Feel free to reach out via email or direct social channels.</p>
              </div>

              {/* Info Items */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl dark:border-slate-700/80  text-lg">
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 dark:text-white">Email Me</h4>
                    <a href="mailto:ajasharma9761@gmail.com" className="text-sm font-semibold text-slate-800 dark:text-slate-300 hover:text-indigo-600 transition-colors">
                      ajasharma9761@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl dark:border-slate-700/80  text-lg">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 dark:text-white">Location</h4>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-300">Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-800">
                  Available for Full-Time Opportunities & Projects
                </span>
              </div>

              {/* Social Connect */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 dark:text-white">Follow Me</h4>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/Ajay-Sharma-20" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-xl text-slate-700 transition-all duration-300">
                    <FiGithub size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/ajay-sharma20/" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-xl text-slate-700 transition-all duration-300">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-xl text-slate-700 transition-all duration-300">
                    <FiTwitter size={18} />
                  </a>
                </div>
              </div>

              {/* Resume Quick Action */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="/Sharma_Ajay.pdf"
                  download="Ajay_Sharma_Resume.pdf"
                  className="w-full inline-flex  items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl  shadow-md transition-all dark:text-white dark:border-slate-700/80 dark:bg-green-800"
                >
                  <FiDownload className="text-indigo-400" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/80  dark:bg-slate-900 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-2 dark:text-white">Send Message</h3>
            <p className="text-xs text-slate-600 mb-6 dark:text-white">Fill out the form below and I will get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              
              {/* Name Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 dark:text-white">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ajay Sharma"
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                    errors.name ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-indigo-600"
                  }`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="text-[11px] font-semibold text-red-500 mt-1 block">{errors.name.message}</span>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 dark:text-white">Your Email</label>
                <input
                  type="email"
                  placeholder="e.g. ajaysharma@example.com"
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                    errors.email ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-indigo-600"
                  }`}
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <span className="text-[11px] font-semibold text-red-500 mt-1 block">{errors.email.message}</span>}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 dark:text-white">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="Type your message here..."
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                    errors.message ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-indigo-600"
                  }`}
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && <span className="text-[11px] font-semibold text-red-500 mt-1 block">{errors.message.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-500/20 transition-all disabled:opacity-50 cursor-pointer dark:text-white dark:border-slate-700/80 dark:bg-green-800"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <FiSend className="text-base" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;