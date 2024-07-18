import { Card } from "antd";

export const HowItWorks = (): JSX.Element => {
  const data = [
    {
      title: "Explore Student Profiles",
      description:
        "Browse through a list of profile cards from our student mentors enrolled in the world's leading universities.",
    },
    {
      title: "Book Your Call",
      description:
        "Select the mentor you resonate with and schedule a one-on-one consultation at your convenience.",
    },
    {
      title: "Get Personalized Guidance",
      description:
        "Receive tailored advice on everything from application strategies to essay writing and interview preparation.",
    },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 mt-4">
      {data.map((point, index) => (
        <Card
          key={index}
          className="flex flex-col gap-2 text-lg border border-gray-200 shadow-sm rounded-lg p-4 w-full lg:w-1/3"
        >
          <p className="font-bold text-xl">{point.title}</p>
          <p className="text-gray-700">{point.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default HowItWorks;
