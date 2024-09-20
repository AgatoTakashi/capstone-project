import '../styles/styles.css';
import photoTwo from '../images/restaurant chef B.jpg'
import photoOne from '../images/restaurant.jpg'

function About() {
    return (
        <>
            <div id="about" className='about-container flex'>
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <br />
                    <p>Velit deserunt eiusmod esse aliquip. Dolor nostrud proident qui cillum exercitation cupidatat et qui dolore aute cupidatat in. Veniam et fugiat pariatur in sunt. Occaecat adipisicing irure proident non aliqua do. Ea dolore labore duis non laborum. Laborum excepteur commodo esse in deserunt amet dolor elit ad ullamco dolor in. Cillum nisi esse officia anim nisi eiusmod ut id sunt ipsum et sint consequat qui.

Commodo pariatur commodo culpa consequat proident adipisicing sit id cillum id proident cillum. Dolor irure do et dolore eiusmod id officia ea veniam deserunt fugiat eu enim. Eu cillum dolore eu cillum duis pariatur ut. Aute consequat adipisicing ea reprehenderit amet in excepteur. Sint laborum duis cillum est reprehenderit ea aliquip aliqua veniam eu. Aute excepteur pariatur dolor ut ullamco eiusmod qui.</p>
                </div>
                <img src={photoOne} alt='About 1' className='photo1 round1' />
                <img src={photoTwo} alt='About 2' className='photo2 round1'/>
            </div>
        </>
    );
}

export default About;