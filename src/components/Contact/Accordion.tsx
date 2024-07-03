"use client";
import { Disclosure } from "@headlessui/react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "What game are you currently obsessed with, and why?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet porro ad at possimus modi beatae minima id facere tempora enim distinctio inventore adipisci ullam soluta, non",
  },
  {
    question: "What game are you currently obsessed with, and why?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet porro ad at possimus modi beatae minima id facere tempora enim distinctio inventore adipisci ullam soluta, non",
  },
  {
    question: "What game are you currently obsessed with, and why?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet porro ad at possimus modi beatae minima id facere tempora enim distinctio inventore adipisci ullam soluta, non",
  },
];

const Accordion = () => {
  return (
    <div className="">
      {faqs.map((faq) => (
        <Disclosure
          as="div"
          key={faq.question}
          className="py-3 my-4 border-y-[0.5px] border-activeColor"
        >
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left ">
                  <span className="text-lg font-semibold leading-7">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? <FaMinus /> : <FaPlus />}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-gray-400">
                  {faq.answer}
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default Accordion;
