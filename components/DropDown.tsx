import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

type Props = {};

export default function Dropdown({}: Props) {
  const [selected, setSelected] = useState("/images/US_FLAG.svg");
  const [selectedLang, setSelectedLang] = useState("EN");
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

  const flags = [
    {
      id: 0,
      imgUrl: "/images/US_FLAG.svg",
      lang: "EN",
      alt: "English",
    },
    {
      id: 1,
      imgUrl: "/images/NL_FLAG.svg",
      lang: "NL",
      alt: "Dutch",
    },
    {
      id: 2,
      imgUrl: "/images/FR_FLAG.svg",
      lang: "FR",
      alt: "French",
    },
    {
      id: 3,
      imgUrl: "/images/BR_FLAG.svg",
      lang: "PT",
      alt: "Portuguese",
    },
  ];

  const flagList = flags.filter((item) => item.imgUrl !== selected);

  return (
    <div className="dropdown" ref={menuRef}>
      <div className="selected" onClick={() => setOpen(!open)}>
        <Image src={selected} alt={"English"} width={"30px"} height={"30px"} />
        <p>{selectedLang}</p>
      </div>
      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        {flagList.map((id) => (
          <Link href={`#${id.lang}`} key={id.id}>
            <div
              onClick={() => {
                setSelected(id.imgUrl);
                setSelectedLang(id.lang);
                setOpen(false);
              }}
              className="dropdown-item"
            >
              <Image
                src={id.imgUrl}
                alt={id.alt}
                width={"30px"}
                height={"30px"}
              />
              <p>{id.lang}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
