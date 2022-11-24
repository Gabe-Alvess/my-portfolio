import React from "react";

type Props = {};

const MapModal = (props: Props) => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1857.0450641753637!2d4.300700726240396!3d50.84578763954156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c6ac0a083045%3A0xb2d4543f268442d2!2sJean%20Van%20Lierdestraat%2C%201070%20Anderlecht!5e0!3m2!1snl!2sbe!4v1668760607085!5m2!1snl!2sbe"
        width="500"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapModal;
