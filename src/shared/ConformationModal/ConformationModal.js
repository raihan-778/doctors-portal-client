import React from "react";

const ConformationModal = ({
  title,
  message,
  cancelDeleteDoctor,
  successAction,
  modalData,
}) => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="conformation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="conformation-modal"
              className="btn"
            >
              Confirm
            </label>
            <label
              onClick={cancelDeleteDoctor}
              htmlFor="conformation-modal"
              className="btn"
            >
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConformationModal;
