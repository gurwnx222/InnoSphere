import React from "react";

const serviceSection = () => {
  // Benefits data
  const benefits = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full"
        >
          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
          <path
            fillRule="evenodd"
            d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "PRODUCT SHIP FAST",
      description: "GET YOUR PRODUCT UP ANY RUNNING IN JUST 21 DAYS",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
      ),
      title: "SEO READY",
      description: "OUR APPS ARE OPTIMIZED TORANK WELL ON SEARCH ENGINES",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full"
        >
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "FAST, RELIABLE APPS",
      description: "OUR APPLICATIONS ARE BUILT FOR SPEED AND DEPENDABILITY",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A2258] mb-2 relative inline-block">
          WHY CHOOSE US
          <span className="block h-1 w-full bg-blue-600 mt-2"></span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center p-6 rounded-lg">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 text-[#0d2240] rounded-full flex items-center justify-center mx-auto">
                {benefit.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#0d2240] mb-3">
              {benefit.title}
            </h3>
            <p className="text-sm md:text-base text-[#0d2240] font-medium">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default serviceSection;
