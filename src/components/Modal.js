function Menu ({ closeModal })  {
    return (
        <div className="modalBack">
            <div className="modalContainer">
                <div className="modal">
                    <h2>Sorry</h2>
                    <p>
                        This feature has not been implemented.
                    </p>
                </div>
                <button onClick={closeModal}>
                    Close Modal
                </button>
            </div>
        </div>
    );
};

export default Menu;