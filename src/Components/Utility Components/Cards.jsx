import React from "react";
import Card from "./Card";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

import { BiSupport } from "react-icons/bi";

import { MdOutlineAppRegistration } from "react-icons/md";

const cardData = [
  {
    icon: MdOutlineAppRegistration,
    title: "Register Here",
  },
  {
    icon: HiOutlineClipboardDocumentList,
    title: "Service's",
  },
  {
    icon: BiSupport,
    title: "Seek Support",
  },
];

const Cards = () => {
  return (
    <section className="cards flex flex-wrap items-center justify-center px-12 py-16 gap-5 bg-[#242424]">
      {cardData.map((currElem, currIndex) => {
        return <Card text={currElem.title} Icon={currElem.icon} />;
      })}
    </section>
  );
};

export default Cards;
