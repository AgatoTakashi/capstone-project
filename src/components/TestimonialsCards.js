import Testimonials from "./Testimonials";
import stars from '../images/stars.png';

function TestimonialsCards(props) {
    return (
        <>
            <div className="testimonials-card">
                <img src={stars} alt="Rating" />
                <br />
                <div className="img-name flex">
                    <img src={props.testimonials.img} alt="critic" />
                    <h2>{props.testimonials.name}</h2>
                </div>
                <br />
                <p>{props.testimonials.review}</p>
            </div>
        </>
    );
}

export default TestimonialsCards;