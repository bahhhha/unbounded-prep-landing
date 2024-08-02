import ReactCountryFlag from "react-country-flag";
import { Mentor } from "../../../interfaces";
import { Button, Rate } from "antd";
import {
  InstagramOutlined,
  LinkedinOutlined,
  SendOutlined,
  GlobalOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

interface MentorCardProps {
  mentor: Mentor;
}

export const MentorCard = ({ mentor }: MentorCardProps): JSX.Element => {
  const { linkedin, instagram, telegram, borderless } = mentor.social_links;
  const handleBook = () => {
    if (mentor.calendly_url) {
      window.open(mentor.calendly_url, "_blank");
    }
  };

  // const truncateBio = (bio: string, maxLength: number) => {
  //   if (bio.length <= maxLength) {
  //     return bio;
  //   }
  //   return `${bio.slice(0, maxLength)}...`;
  // };

  return (
    <div className="flex flex-col items-center lg:flex-row text-sm w-full h-full relative p-4 border shadow-sm rounded-md">
      <div className="md:absolute hidden lg:block md:top-4 md:right-4 py-2 md:py-0">
        {mentor.rating ? (
          <Rate
            count={5}
            className="text-yellow-500"
            allowHalf
            value={mentor.rating}
            disabled
          />
        ) : null}
      </div>
      <div className="flex-shrink-0 relative mb-4 lg:mb-0">
        <img
          src={mentor.profile_image_url}
          alt={mentor.name}
          className="rounded-md w-48 h-48 object-cover"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center space-x-2 p-1 rounded-full">
          <ReactCountryFlag
            countryCode={mentor.university_country_flag}
            svg
            style={{
              width: "2em",
              height: "1.5em",
            }}
            className="rounded-sm"
          />
          <img
            src={mentor.university_logo_url}
            alt="university logo"
            className="w-6 h-6 rounded-sm"
          />
        </div>
      </div>
      <div className="block md:hidden md:absolute md:top-4 md:right-4 py-2 md:py-0">
        {mentor.rating ? (
          <Rate
            count={5}
            className="text-yellow-500"
            allowHalf
            value={mentor.rating}
            disabled
          />
        ) : null}
      </div>
      <div className="flex-grow px-4">
        <p className="font-bold text-lg">{mentor.name}</p>
        <p className="mt-2 text-xs">{mentor.bio}</p>
        <div className="mt-4">
          <p>
            <span className="font-bold">Location:</span>{" "}
            {mentor.university_city_name}, {mentor.university_country_name}
          </p>
          <p>
            <span className="font-bold">University:</span> {mentor.university}
          </p>
          <p>
            <span className="font-bold">Major:</span> {mentor.major}
          </p>
          <div className="mt-4 flex gap-4">
            {mentor.gpa ? (
              <p>
                <span className="font-bold text-yellow-500">GPA:</span>{" "}
                {mentor.gpa.toPrecision(3)}
              </p>
            ) : null}
            {mentor.ielts_score ? (
              <p>
                <span className="font-bold text-yellow-600">IELTS:</span>{" "}
                {mentor.ielts_score}
              </p>
            ) : null}
            {mentor.sat_score ? (
              <p>
                <span className="font-bold text-yellow-700">SAT:</span>{" "}
                {mentor.sat_score}
              </p>
            ) : null}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2 items-center">
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  <InstagramOutlined
                    className="text-zinc-800 duration-100 cursor-pointer hover:text-yellow-500"
                    style={{ fontSize: 20 }}
                  />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinOutlined
                    className="text-zinc-800 duration-100 cursor-pointer hover:text-yellow-500"
                    style={{ fontSize: 20 }}
                  />
                </a>
              )}
              {telegram && (
                <a href={telegram} target="_blank" rel="noopener noreferrer">
                  <SendOutlined
                    className="text-zinc-800 duration-100 cursor-pointer hover:text-yellow-500"
                    style={{ fontSize: 20 }}
                  />
                </a>
              )}
              {borderless && (
                <a href={borderless} target="_blank" rel="noopener noreferrer">
                  <GlobalOutlined
                    className="text-zinc-800 duration-100 cursor-pointer hover:text-yellow-500"
                    style={{ fontSize: 20 }}
                  />
                </a>
              )}
            </div>
            <div>
              <Button
                icon={<RightCircleOutlined style={{ fontSize: 20 }} />}
                onClick={handleBook}
                className="text-lg"
              >
                Book
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
