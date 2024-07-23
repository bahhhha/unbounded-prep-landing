import { useUnit } from "effector-react";
import { $mentors } from "../../features/get-mentors/model";
import { MentorCard } from "../../components/home/mentors/mentor-card";

export const Mentors = (): JSX.Element => {
  const mentors = useUnit($mentors);
  return mentors && mentors.length > 0 ? (
    <div>
      <p className="font-bold text-3xl my-8">Explore available mentors</p>
      <div className="flex flex-col md:flex-row gap-4 w-full my-4">
        {/* {mentors.map((mentor) => ( */}
        <MentorCard mentor={mentors[0]} />
        <MentorCard mentor={mentors[0]} />
        {/* ))} */}
      </div>
    </div>
  ) : (
    <></>
  );
};
