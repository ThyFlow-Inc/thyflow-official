import CountdownTimer from "react-component-countdown-timer";
import "react-component-countdown-timer/lib/styles.css";

const Countdown =()=>(
    <section className="countdown">
        <h3 className="countdown__title">We be launching</h3>
        <CountdownTimer count={5432232} border showTitle responsive size={28} color="#fff" backgroundColor="#0b389e"/>
    </section>
);

export default Countdown;