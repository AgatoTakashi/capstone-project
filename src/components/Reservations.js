function Reservations ({ closeReservation })  {
    return (
        <div className="modalBack">
            <div className="modalContainer">
                <div className="modal">
                    <h2>Modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi. Dolorem est
                        esse iste perferendis.
                    </p>
                </div>
                <button onClick={closeReservation}>
                    Close Modal
                </button>
            </div>
        </div>
    );
};

export default Reservations;