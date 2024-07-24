import React from "react";
import { CgSandClock } from "react-icons/cg";
import { FiWatch } from "react-icons/fi";
import { GrCertificate } from "react-icons/gr";
import { LiaUniversalAccessSolid } from "react-icons/lia";
import { MdOutlineHighQuality } from "react-icons/md";
const RegistrationCard = () => {
  return (
    <div className="registration-card bg-white p-5 rounded-md shadow-lg block text-black mlg:fixed mlg:top-[27%] mlg:right-[1.5%]">
      <div className="reg-content flex flex-col gap-y-3">
        <h1 className="font-semibold text-lg">
          Getting Started with Front-End Dev
        </h1>
        <p>
          Slots Available <span>30/30</span>
        </p>
        {regContent.map((currElem, currIndex) => {
          return (
            <p key={currIndex}>
              <span>{<currElem.icon className="inline-block" />}</span>{" "}
              {currElem.text}
            </p>
          );
        })}
      </div>
      <div className="reg-btn py-3">
        <button className="py-2 rounded-md text-center w-full bg-primary text-white hover:bg-white hover:text-primary hover:border hover:border-primary transition duration-300 ease-in-out ">
          Join Us
        </button>
      </div>
    </div>
  );
};

const regContent = [
  {
    text: "4.5 Months",
    icon: CgSandClock,
  },
  {
    text: "8 hours per week",
    icon: FiWatch,
  },
  {
    text: "8 hours per week",
    icon: FiWatch,
  },
  {
    text: "Digital and physical Certificate when Eligible [Paid]",
    icon: GrCertificate,
  },
  {
    text: "Course Access:Free",
    icon: LiaUniversalAccessSolid,
  },
  {
    text: "Course Quality:Advanced",
    icon: MdOutlineHighQuality,
  },
];

export default RegistrationCard;
