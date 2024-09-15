import React, { useState } from "react";

const FAQ_ITEMS = [
  {
    id: 1,
    question:
      "What are the advantages of chartering a private jet with JetLifly?",
    answer:
      "Chartering a private jet with JetLifly offers benefits such as personalized schedules, direct flights to your destination, increased privacy, and a luxurious and comfortable travel experience.",
  },
  {
    id: 2,
    question:
      "How does the booking process work for a private jet with JetLifly?",
    answer:
      "Booking a private jet with JetLifly is easy. You can either contact us directly through our website or speak with our customer service representatives. Provide details such as your travel dates, destination, and any specific requirements, and we'll assist you with the booking process.",
  },
  {
    id: 3,
    question:
      "What types of private jets are available for charter with JetLifly?",
    answer:
      "JetLifly offers a diverse fleet of private jets, including light jets, midsize jets, super-midsize jets, and large jets. Each category caters to different passenger capacities, range, and amenities.",
  },
  {
    id: 4,
    question: "How much does it cost to charter a private jet with JetLifly?",
    answer:
      "The cost of chartering a private jet with JetLifly varies based on factors such as the type of jet, the distance of the flight, and any additional services requested. You can request a quote through our website, and our team will provide you with detailed pricing information.",
  },
  {
    id: 5,
    question:
      "Can I customize the in-flight services and amenities with JetLifly?",
    answer:
      "Absolutely. JetLifly understands that each traveler has unique preferences. You can customize in-flight services, catering options, and amenities to ensure a personalized and enjoyable experience. Simply let us know your preferences during the booking process.",
  },
];

const FaqSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (id) => {
    setActiveAccordion((prevId) => (prevId === id ? null : id));
  };

  return (
    <section>
      <div className="h-full px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-[82rem] ">
        <div className="grid grid-cols-1 gap-6 lg:gap-12 lg:grid-cols-3 ">
          <div className="text-center lg:text-left">
            <div>
              <p className="text-4xl font-semibold tracking-tighter text-zinc-900">
                Frequent questions and answers
              </p>
              <p className="text-base mt-4 text-zinc-500">
                Answers to commonly asked questions about our platform
              </p>
            </div>
          </div>
          <div className="relative w-full mx-auto font-normal lg:col-span-2">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.id}
                className="text-gray-800 cursor-pointer group hover:text-zinc-950 "
              >
                <button
                  className="flex items-center justify-between w-full p-4 pb-1 text-sm text-left select-none lg:text-base"
                  onClick={() => handleAccordionClick(item.id)}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-5 h-5 duration-300 ease-out text-zinc-800 ${
                      activeAccordion === item.id
                        ? "transform rotate-180"
                        : "transform rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 6v12m6-6H6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                {activeAccordion === item.id && (
                  <div className="p-6 pt-2 text-sm text-gray-500 ">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
