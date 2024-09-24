function SpecialsCards(props) {
    return (
        <>
        <div className="card">
            <img src={props.specials.img} alt="Daily Specials" />
            <br /><br />
            <div className="card-text">
                <div className="title flex">
                    <h4 className="title">{props.specials.name}</h4>
                    <span className="highlight"><p>{props.specials.price}</p></span>
                </div>
                <br />
                <p>{props.specials.description}.</p>
                <br />
                <p></p>
            </div>
        </div>
        </>
    );
}

export default SpecialsCards;