import { Mail, MapPin, Phone, SendHorizontal } from "lucide-react";
import { useMemo } from "react";

function Contact() {
  const gallery: string[] = useMemo(
    () => [
      
    ],
    []
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow border-1 border-gray-200 dark:border-gray-700 p-6">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-sm mb-1">First Name</label>
                <input className="w-full rounded-xl border-1 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm mb-1">Last Name</label>
                <input className="w-full rounded-xl border-1 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm mb-1">Email</label>
                <input type="email" className="w-full rounded-xl border-1 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm mb-1">Message</label>
                <textarea rows={5} className="w-full rounded-2xl border-1 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help?" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full sm:w-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-blue-900 text-white px-6 py-2 font-semibold">
                  <SendHorizontal className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow border-1 border-gray-200 dark:border-gray-700 p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-100/60 dark:bg-pink-900/20"><Phone className="text-pink-600"/></span>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">+251 999 9999</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow border-1 border-gray-200 dark:border-gray-700 p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100/60 dark:bg-blue-900/20"><Mail className="text-blue-600"/></span>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">support@b-shop.et</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow border-1 border-gray-200 dark:border-gray-700 p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100/60 dark:bg-purple-900/20"><MapPin className="text-purple-600"/></span>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Addis Ababa, Ethiopia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {gallery.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {gallery.map((src, idx) => (
                <img key={idx} src={src} alt={`gallery-${idx+1}`} className="w-full h-40 object-cover rounded-xl border-1 border-gray-200 dark:border-gray-700" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;


