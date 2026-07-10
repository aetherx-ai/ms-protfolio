import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible>

          <AccordionItem value="item-1">
            <AccordionTrigger>
              How long does it take to build a website?
            </AccordionTrigger>
            <AccordionContent>
              Usually 3–7 days depending on the project size.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Do you build AI applications?
            </AccordionTrigger>
            <AccordionContent>
              Yes. I develop AI chatbots, AI agents, and business automation systems.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can you redesign an existing website?
            </AccordionTrigger>
            <AccordionContent>
              Yes. I can redesign and optimize existing websites.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do you provide support after delivery?
            </AccordionTrigger>
            <AccordionContent>
              Yes. I provide free support after project delivery.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
}