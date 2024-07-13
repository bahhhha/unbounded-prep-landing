import { Collapse } from "antd";

const { Panel } = Collapse;

const faqData = [
  {
    key: "1",
    question: "What is unbounded.prep?",
    answer:
      "Unbounded.prep is a platform designed to connect prospective students with experienced mentors from top global universities, providing direct and affordable access to admission guidance.",
  },
  {
    key: "2",
    question: "How do I choose a mentor?",
    answer:
      "You can choose a mentor based on their university, area of study, and the specific help they offer. Each profile card provides detailed information to help you make the best choice for your needs.",
  },
  {
    key: "3",
    question: "What can I expect from a consultation?",
    answer:
      "Each session is tailored to your specific questions and requirements, whether it's understanding the application process, receiving feedback on your essays, or preparing for interviews.",
  },
  {
    key: "4",
    question: "How much does it cost?",
    answer:
      "Our platform offers a transparent pricing model where you pay per consultation with no hidden fees or mandatory subscriptions.",
  },
  {
    key: "5",
    question: "How does the payment process work?",
    answer:
      "During the scheduling process, you'll be asked to share your contact information. A manager from our team will then reach out to you to facilitate payment using Kaspi. This ensures that all transactions are handled securely and efficiently.",
  },
  {
    key: "6",
    question: "What if I need to reschedule or cancel a session?",
    answer:
      "You can reschedule or cancel your session by contacting our support team at least 24 hours in advance. This allows us to offer the slot to other students and manage our mentors' schedules effectively.",
  },
  {
    key: "7",
    question: "How do I provide feedback about my sessions?",
    answer:
      "After each session, you'll have the opportunity to provide feedback about your experience. This helps us to continually improve our services and ensure our mentors are meeting your expectations.",
  },
];

export const FAQ = (): JSX.Element => (
  <div className="w-full my-16">
    <Collapse accordion className="w-full border-gray-200 bg-white">
      {faqData.map(({ key, question, answer }) => (
        <Panel header={question} key={key} className="text-lg w-full">
          <p>{answer}</p>
        </Panel>
      ))}
    </Collapse>
  </div>
);
