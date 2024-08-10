import { Card } from "antd";
import { useTranslation } from "react-i18next";

export const HowItWorks = (): JSX.Element => {
  const { t } = useTranslation("howItWorks");
  const data = [
    {
      title: t("explore"),
      description: t("exploreDesc"),
    },
    {
      title: t("book"),
      description: t("bookDesc"),
    },
    {
      title: t("guidance"),
      description: t("guidanceDesc"),
    },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 mt-4">
      {data.map((point, index) => (
        <Card
          key={index}
          className="flex flex-col gap-2 text-lg border border-gray-200 shadow-sm rounded-lg p-4 w-full lg:w-1/3"
        >
          <p className="font-bold text-xl">
            {index + 1}. {point.title}
          </p>
          <p className="text-gray-700">{point.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default HowItWorks;
