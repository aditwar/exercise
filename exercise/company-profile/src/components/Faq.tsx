"use client";

import * as React from 'react';
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";

const items = [
  {
    question: "What is website monitoring?",
    answer:
      "Website monitoring is a catch-all term that describes any online service that checks a website for its abailability, function, speed, and performance..",
  },
  {
    question: "What are the Best Website monitoring services?",
    answer:
      "The best website monitoring sercive monitor your websites from multiple testing nodes across different locations like SmartBear Alertsite",
  },
  {
    question: "Should you use website monitoring tools?",
    answer:
      "It's a much better idea to use website monitoring tools instead. Website monitoring is a catch-all term that describes any online service",
  },
  {
    question: "Why do you need a website monitoring solution?",
    answer:
      "Effortlessly monitor your websites & API's for complete visibility, speed & reliability from anywhere",
  }  
];

export function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          People Also Ask
        </h1>        
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>                      
                      <Image alt="included"
                      src="/Plus.svg"                  
                      width="300"
                      height="200"
                      className="h-10 w-10 lg:w-6 lg:h-6" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
