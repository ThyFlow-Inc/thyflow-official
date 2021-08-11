import Fade from 'react-reveal/Fade';
import FlipCountdown from '@rumess/react-flip-countdown';

const Countdown =()=>(
    <section className="countdown">
        <h3 className="countdown__title">Countdown to the Beta launch!</h3>
        <Fade>
        <FlipCountdown
                dayTitle='Days'
                hourTitle='Hours'
                minuteTitle='Minutes'
                secondTitle='Seconds'
                hideYear
                hideMonth
                // hideDay
                // hideHour
                // hideMinute
                // hideSecond
                size='large'
                endAt={'2021-09-10 12:00:58'} // Date/Time
            />
        </Fade>
    </section>
);

export default Countdown;