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
    <div className="flex w-full gap-4 mt-4">
      {data.map((point, index) => (
        <div key={index}>
          <Card className="flex flex-col gap-2 text-lg border-gray-200">
            <p className="font-bold">{point.title}</p>
            <p>{point.description}</p>
          </Card>
        </div>
      ))}
    </div>
  );
};
