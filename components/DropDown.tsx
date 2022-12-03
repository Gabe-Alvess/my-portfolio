import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { v4 } from "uuid";

type Props = {};

export default function Dropdown({}: Props) {
  const router = useRouter();

  const flag =
    router.locale === "en"
      ? "/images/US_FLAG.svg"
      : router.locale === "nl"
      ? "/images/NL_FLAG.svg"
      : router.locale === "fr"
      ? "/images/FR_FLAG.svg"
      : router.locale === "pt"
      ? "/images/BR_FLAG.svg"
      : "";

  const lang =
    router.locale === "en"
      ? "en"
      : router.locale === "nl"
      ? "nl"
      : router.locale === "fr"
      ? "fr"
      : router.locale === "pt"
      ? "pt"
      : "";

  const [countryFlag, setCountryFlag] = useState(flag);
  const [selectedLang, setSelectedLang] = useState(lang);
  const [open, setOpen] = useState(false);

  let menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const languages = [
    {
      id: v4(),
      name: "en",
      imgUrl: "/images/US_FLAG.svg",
      alt: "English",
    },
    {
      id: v4(),
      name: "nl",
      imgUrl: "/images/NL_FLAG.svg",
      alt: "Dutch",
    },
    {
      id: v4(),
      name: "fr",
      imgUrl: "/images/FR_FLAG.svg",
      alt: "French",
    },

    {
      id: v4(),
      name: "pt",
      imgUrl: "/images/BR_FLAG.svg",
      alt: "Portuguese",
    },
  ];

  const langList = languages.filter((item) => item.imgUrl !== countryFlag);

  return (
    <div className="dropdown" ref={menuRef}>
      <div className="selected" onClick={() => setOpen(!open)}>
        <Image
          src={countryFlag}
          alt={"English"}
          width={"30px"}
          height={"30px"}
        />
        <p>{selectedLang}</p>
      </div>
      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        {langList.map((language) => (
          <Link href="/" locale={language.name} key={language.id}>
            <div
              onClick={() => {
                setCountryFlag(language.imgUrl);
                setSelectedLang(language.name);
                setOpen(false);
              }}
              className="dropdown-item"
            >
              <Image
                src={language.imgUrl}
                alt={language.alt}
                width={"30px"}
                height={"30px"}
              />
              <p>{language.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
