import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter py-20">
          Frequently asked questions
        </h2>

        <div className="mt-12">
          <div className="">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="py-2">
                <AccordionTrigger>
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards, PayPal, and various other
                  payment methods depending on your location. Please contact our
                  support team for more information on accepted payment methods
                  in your region.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="py-2">
                <AccordionTrigger>
                  How does the pricing work for teams?
                </AccordionTrigger>
                <AccordionContent>
                  Our pricing is per user, per month. This means you only pay
                  for the number of team members you have on your account.
                  Discounts are available for larger teams and annual
                  subscriptions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="py-2">
                <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes to your plan will be prorated and reflected in your
                  next billing cycle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="py-2">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Security is our top priority. We use state-of-the-art
                  encryption and comply with the best industry practices to
                  ensure that your data is stored securely and accesed only by
                  authorized users.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
