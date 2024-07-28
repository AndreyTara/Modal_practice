import { useState } from "react";
import "./App.css";
import CustomModal from "../CustomModal/CustomModal.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <CustomModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <h2>Congrtulation!</h2>
        <p>You are WIN the new Iphone999!</p>
        <div className="box">Iphone999</div>
      </CustomModal>
      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open modal
      </button>
    </div>
  );
}

export default App;
