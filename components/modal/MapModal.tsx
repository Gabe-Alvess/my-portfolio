import { XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { closeModal } from "../../slices/modalSlice";

import React from "react";

type Props = {};

export const MapModal = ({}: Props) => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className=" relative p-[50px] portrait:p-[35px]">
        <button
          onClick={() => {
            dispatch(closeModal());
          }}
          className="h-9 absolute top-0 right-0"
        >
          <XMarkIcon className="h-full" />
        </button>
        <iframe
          className="modal"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.4505882948233!2d4.302393000000009!3d50.845815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c6ac0a083045%3A0xb2d4543f268442d2!2sJean%20Van%20Lierdestraat%2C%201070%20Anderlecht!5e1!3m2!1snl!2sbe!4v1672672287436!5m2!1snl!2sbe"
          width="600"
          height="450"
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
          loading="eager"
        ></iframe>
      </div>
    </aside>
  );
};
