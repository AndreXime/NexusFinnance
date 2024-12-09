import '../styles/popup.css';

interface PopupProps {
  message: string; // Mensagem exibida no popup
  onClose: () => void; // Função chamada ao fechar o popup
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className='popup'>
      <div className='popup-content'>
        <p>
          {message.split(',').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <button className='btn btn-primary' onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Popup;
