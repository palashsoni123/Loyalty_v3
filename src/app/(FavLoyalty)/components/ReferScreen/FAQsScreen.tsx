"use client";

import AccordionFAQ from "../../Asset/Accordian_FAQs";

export default function FAQs() {
  return (
    <>
      <div className="FAQ-Area">
        <div className="wrapper">
          <AccordionFAQ title="How long does it take for the referral points to be credited to my account?">
            The time frame for points to be credited can vary. Typically, points
            are credited once your referred friend successfully signs up and
            completes their first order.
          </AccordionFAQ>
          <AccordionFAQ title="What happens if my friend returns or cancels their order?">
            In the event that your referred friend returns or cancels their
            order, the referral points may be reversed.
          </AccordionFAQ>
          <AccordionFAQ title="How can I track the status of my referred friends and earned points?">
            Once your friend successfully joins through your code and places his
            first order, you will get notification here and via email.
          </AccordionFAQ>
        </div>
      </div>
    </>
  );
}
