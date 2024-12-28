"use client";
import { IconX, IconCheck } from "@tabler/icons-react";

interface PopupProps {
  title: string;
  message: string;
  status: boolean;
}

const Popup: React.FC<PopupProps> = ({ title, message, status = true }) => {
  if (!message || !title) return null;

  return (
    <div>
      {status ? <IconCheck /> : <IconX />}
      {title}
      {message.split(",").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default Popup;
