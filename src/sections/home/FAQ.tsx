import { Collapse } from "antd";
import { useTranslation } from "react-i18next";

export const FAQ = (): JSX.Element => {
  const { t, ready } = useTranslation("faq");

  if (!ready) {
    return <div>Loading...</div>;
  }

  const faqItems = [
    {
      key: "1",
      label: t("question1.title"),
      children: <p>{t("question1.description")}</p>,
    },
    {
      key: "2",
      label: t("question2.title"),
      children: <p>{t("question2.description")}</p>,
    },
    {
      key: "3",
      label: t("question3.title"),
      children: <p>{t("question3.description")}</p>,
    },
    {
      key: "4",
      label: t("question4.title"),
      children: <p>{t("question4.description")}</p>,
    },
    {
      key: "5",
      label: t("question5.title"),
      children: <p>{t("question5.description")}</p>,
    },
    {
      key: "6",
      label: t("question6.title"),
      children: <p>{t("question6.description")}</p>,
    },
    {
      key: "7",
      label: t("question7.title"),
      children: <p>{t("question7.description")}</p>,
    },
  ];

  return (
    <div className="w-full my-16" id="faq">
      <p className="font-bold text-3xl mb-4">{t("title")}</p>
      <Collapse
        accordion
        items={faqItems}
        className="w-full border-gray-200 bg-white"
      />
    </div>
  );
};
