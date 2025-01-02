import { useState } from "react";

function ChangeAdress({ setAdress, setIsModelOpen }) {
  const [newAddress, setNewAddress] = useState("");
  const onClose = () => {
    setAdress(newAddress);
    setIsModelOpen(false);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter new address"
          className="border p-2 w-full mb-4"
          onChange={(e) => setNewAddress(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
            onClick={() => setIsModelOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangeAdress;
