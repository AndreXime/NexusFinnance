import '../styles/popup.css';

interface PopupProps {
  isOpen: boolean; // Controla a visibilidade do popup
  message: string; // Mensagem exibida no popup
  onClose: () => void; // Função chamada ao fechar o popup
}

const Popup: React.FC<PopupProps> = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='popup'>
      <div className='popup-content'>
        <p>
          {message.split('\n').map((line, index) => (
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
