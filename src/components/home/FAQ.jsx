import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you use preservation?",
      answer:"We don’t use artificial preservatives. Our mangoes are naturally ripened and carefully packed to maintain freshness during transit. For long-distance orders, we use temperature-controlled packaging to ensure they arrive just as juicy and flavorful."
    },
    {
      question: "What if I receive the mangoes tampered or damaged?",
      answer:
        "If your package arrives damaged or the mangoes are spoiled, simply share a photo with us within 24 hours of delivery. We’ll replace your order or issue a full refund — your satisfaction is guaranteed.",
    },
    {
      question: "Are you certified by any known organization?",
      answer:
        "Yes, our farms and packaging facilities are certified by local agricultural authorities and meet international food safety standards. We also follow hygienic harvesting and handling practices approved by the Department of Agriculture.",
    },
  ];

  return (
    <section className="bg-[#EFF5D2]/50 py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-4xl montserrat-700 font-bold text-center text-gray-900 mb-12">
          Looking for answers?
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full montserrat-500 flex justify-between items-center text-left text-xl text-gray-700 font-medium hover:text-[#C6D870] transition"
              >
                {faq.question}
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#C6D870]" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
