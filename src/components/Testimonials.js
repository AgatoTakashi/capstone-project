import '../styles/styles.css';
import TestimonialsCards from './TestimonialsCards';
import scarlet from '../images/scarlet.jpg'
import jasmine from '../images/jasmine.jpg'
import colin from '../images/colin.jpg'
import naomi from '../images/naomi.jpg'

function Testimonials() {
    const testimonials = [
        {
            name: "Scarlet",
            review: "Proident aliqua aute elit sint minim. Lorem ut do nostrud proident officia laboris quis velit sint ex fugiat adipisicing. Sunt cupidatat occaecat nulla aliquip consequat sint minim. Adipisicing Lorem labore consequat ut proident sint cillum enim.",
            img: scarlet
        },
        {
            name: "Yasmine",
            review: "Ea minim labore esse commodo elit. Ad excepteur quis irure elit non ipsum laboris minim cupidatat est id deserunt. Fugiat elit et in anim voluptate qui ut minim ipsum. Veniam deserunt cupidatat ipsum laborum ut qui cillum officia anim excepteur laborum. Deserunt quis minim culpa magna velit ad deserunt consequat ex voluptate.",
            img: jasmine
        },
        {
            name: "Colin",
            review: "Nostrud eu ullamco quis sit esse velit velit proident labore in reprehenderit. Non eu laborum minim mollit culpa. Mollit non Lorem laboris esse labore velit ullamco. Consequat minim non reprehenderit officia eiusmod laborum adipisicing ea. Consequat ullamco sunt cupidatat anim esse pariatur incididunt nulla occaecat.",
            img: colin
        },
        {
            name: "Naomi",
            review: "Irure cupidatat sint incididunt minim enim irure deserunt. Ea deserunt irure dolore minim voluptate consectetur consectetur ullamco. Lorem aliquip magna aliqua mollit minim quis tempor id consectetur aute ad tempor est nulla. Proident deserunt nostrud commodo occaecat Lorem tempor commodo do. Voluptate irure sint velit cupidatat quis culpa Lorem consequat. Ut enim nostrud magna aliquip exercitation.",
            img: naomi
        }
    ];

    return (
        <>
            <div className='testimonials-container'>
                <center><h2>Testimonials</h2></center>
                <div className='t-card-container flex'>
                    {testimonials.map(testimonials => {
                        return (<TestimonialsCards testimonials={testimonials} />)}
                    )}
                </div>
            </div>
        </>
    );
}

export default Testimonials;