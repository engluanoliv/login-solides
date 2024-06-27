interface ModalProps {
  message: string;
  onClose: () => void;
}

export default function Modal({ message, onClose }: ModalProps) {
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white flex flex-col justify-between p-5 rounded shadow-lg  w-[300px] h-[200px]">
          <p className="text-lg">{message}</p>
          <button
            className="mt-3 p-2 bg-blue-500 text-white rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
