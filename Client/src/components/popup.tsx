interface PopupProps {
  title: string;
  message: string;
  status: boolean;
}

const Popup: React.FC<PopupProps> = ({ title, message, status }) => {
  if (!message || !title) return null;

  return (
    <div role="alert" className={`alert ${status ? "alert-sucess" : "alert-error"}`}>
      <div>
        <h4 className="font-bold">{title}</h4>
        <span>
          {message.split(",").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Popup;
