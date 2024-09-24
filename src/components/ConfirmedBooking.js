function ConfirmedBooking ({ closeModal }) {
    return (
        <>
            <div className="modalBack">
                <div className="modalContainer">
                    <div className="modal">
                        <h2>Thank You</h2>
                        <p>
                            <br />Your reservation has been comfirmed.<br /><br /><br />
                        </p>
                    </div>
                    <button onClick={closeModal}>
                        Close
                    </button>
                </div>
            </div>
        </>
    );
}

export default ConfirmedBooking;