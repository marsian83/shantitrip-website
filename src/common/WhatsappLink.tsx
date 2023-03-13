import { ReactNode } from "react";
import { randomChoiceFromArray } from "../utils";

export default function WhatsappLink({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  function openWhatsapp() {
    const waLink = `https:\/\/api.whatsapp.com/send?phone=91${randomChoiceFromArray(
      ["9653594353", "9459668084"]
    )}&text=Hi%20I%20wanted%20to%20travel%20with%20ShantiTrip`;

    window.open(waLink, "_blank_wa_");
  }

  return (
    <button className={className} onClick={openWhatsapp}>
      {children}
    </button>
  );
}
