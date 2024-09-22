function ConfirmedBooking ({ closeModal }) {
    return (
        <>
            <div className="modalBack">
                <div className="modalContainer">
                    <div className="modal">
                        <h2>Thank You</h2>
                        <p>
                            Your reservation has been comfirmed.
                        </p>
                    </div>
                    <button onClick={closeModal}>
                        Close Modal
                    </button>
                </div>
            </div>
        </>
    );
}

export default ConfirmedBooking;