function Menu ({ closeModal })  {
    return (
        <div className="modalBack">
            <div className="modalContainer">
                <div className="modal">
                    <h2>Sorry</h2>
                    <p>
                    <br />This feature has not been implemented.<br /><br /><br />
                    </p>
                </div>
                <button onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Menu;