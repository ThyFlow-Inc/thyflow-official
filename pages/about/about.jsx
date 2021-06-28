import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Link from "next/link";
import styles from "../../styles/Home.module.css"

const About =()=>(
    <>
        <Header />
        <main className={styles.main}>
        <section className="about">
            <h2 className="about__heading-secondary">
                Our mission is to
            </h2>
            <h1 className="about__heading-primary">
                to save you time
            </h1>
            <h2 className="about__heading-secondary align-right">
                while connecting you to
               
            </h2>
            <h2 className="about__heading-secondary align-right">
              
                vetted profesional service providers
            </h2>


            <div className="about__us">
                <h4 className="about__us-title">Our team</h4>
                <p className="about__us-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex mi, pellentesque sed metus sit amet, accumsan vehicula orci. Maecenas fringilla vestibulum sapien, eu cursus diam dignissim ac. Sed quis odio a risus interdum malesuada. Maecenas placerat commodo suscipit. Etiam lobortis eros eu diam commodo vehicula.

                    Integer vitae bibendum quam. Fusce eget feugiat mauris, eget ornare arcu. In porttitor felis erat, vitae semper mi condimentum a. Vivamus id tincidunt dolor, nec sollicitudin odio. Ut mattis nibh sit amet scelerisque posuere. Phasellus ornare orci lacus, non eleifend tortor consectetur a. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                    Phasellus tincidunt dui et euismod sodales. Duis varius justo est, vel molestie quam vestibulum quis.
                </p>
                <h4 className="about__us-title">Philosophy</h4>
                <p className="about__us-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex mi, pellentesque sed metus sit amet, accumsan vehicula orci. Maecenas fringilla vestibulum sapien, eu cursus diam dignissim ac. Sed quis odio a risus interdum malesuada. Maecenas placerat commodo suscipit. Etiam lobortis eros eu diam commodo vehicula.

                    Integer vitae bibendum quam. Fusce eget feugiat mauris, eget ornare arcu. In porttitor felis erat, vitae semper mi condimentum a. Vivamus id tincidunt dolor, nec sollicitudin odio. Ut mattis nibh sit amet scelerisque posuere. Phasellus ornare orci lacus, non eleifend tortor consectetur a. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
                <h4 className="about__us-title">Mission</h4>
                <p className="about__us-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex mi, pellentesque sed metus sit amet, accumsan vehicula orci. Maecenas fringilla vestibulum sapien, eu cursus diam dignissim ac. Sed quis odio a risus interdum malesuada. Maecenas placerat commodo suscipit. Etiam lobortis eros eu diam commodo vehicula.

                    Integer vitae bibendum quam. Fusce eget feugiat mauris, eget ornare arcu. In porttitor felis erat, vitae semper mi condimentum a. Vivamus id tincidunt dolor, nec sollicitudin odio. Ut mattis nibh sit amet scelerisque posuere. Phasellus ornare orci lacus, non eleifend tortor consectetur a. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
            </div>

            <h1 className="about__form-title">
                Stay updated with ThyFlow
            </h1>
            <h2 className="about__heading-secondary">
                Subscribe to our weekly newsletter to get tips sent to your inbox.
            </h2>
            <form action="" className="about__form">
                <input type="text" className="about__input" placeholder="Your Email here"/>
                <div>
            <Link href="">
                <button className="btn btn--primary">
                   <span className="btn__text">Subscribe</span> 
                </button>
            </Link>
        </div>
            </form>
        </section>
        </main>
        <Footer />
    </>
    
);
export default About;