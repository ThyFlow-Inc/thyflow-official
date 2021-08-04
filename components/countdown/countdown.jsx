import CountdownTimer from "react-component-countdown-timer";
import "react-component-countdown-timer/lib/styles.css";
import Fade from 'react-reveal/Fade';

const Countdown =()=>(
    <section className="countdown">
        <h3 className="countdown__title">Countdown to the Beta launch!</h3>
        <Fade>
            <CountdownTimer count={5232232} border showTitle responsive size={28} color="#fff" backgroundColor="#0b389e"/>
        </Fade>
    </section>
);

export default Countdown;