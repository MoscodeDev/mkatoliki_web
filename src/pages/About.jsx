import React from "react";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="backdrop-blur-lg bg-white/40 dark:bg-blue-800/40 py-16 px-6 md:px-16 rounded-3xl shadow-lg mx-4 md:mx-16 my-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-700 dark:text-blue-300">
          About Mkatoliki
        </h1>
        <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold">Mkatoliki</span> — a
          spiritual and sacred online marketplace for all Catholic and Christian
          devotional items. We believe faith should be easily accessible,
          beautifully expressed, and shared with love.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://jpabmkenwadudyxmsvan.supabase.co/storage/v1/object/public/products/ditachableMagneticCross.jpg"
            alt="Mkatoliki sacred items"
            className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
          />

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
              Our Mission
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              To make sacred items and spiritual gifts easily accessible to
              believers everywhere — while supporting small religious artisans
              and communities that craft them with love and devotion.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
              What We Offer
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Rosaries and Crucifixes</li>
              <li>Prayer Books and Holy Cards</li>
              <li>Religious Art and Decor</li>
              <li>Custom Catholic Gifts</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-300">
            Join Our Mission
          </h3>
          <p className="max-w-xl mx-auto text-lg mb-6">
            Whether you’re buying, gifting, or sharing your faith — Mkatoliki is
            here to help you grow spiritually and stay connected.
          </p>
          <a
            href="https://wa.me/254788883643?text=Hi%20Mkatoliki!%20I%27d%20like%20to%20learn%20more%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

