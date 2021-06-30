import styles from "../../styles/Home.module.css"
import Footer from '../../components/footer/footer'
import Header from "../../components/header/header";
import SubscribeForm from  "../../components/subscribe-form/subscribe-form"
import Link from "next/link";

const Blog =()=> (
    <>
        <Header />
        <main className={styles.main}>
            <section className="blog">
                <h2 className="blog__heading">latest articles</h2>
                <div className="blog__blogs">
                    <div className="blog__articles">
                        <ul>
                            <li className="blog__list">
                                <img src="/images/rectangle 5.png" alt="" className="blog__image"/>
                                <div className="blog__text-content">
                                    <h4 className="blog__title">How to get ready for a haircut at home</h4>
                                    <p className="blog__article">
                                        It'ѕ hard tо bеаt thе convenience аnd luxury оf getting a hаirсut in уоur оwn hоmе. Rаthеr thаn fighting traffic and ruѕhing frоm wоrk tо thе ѕаlоn аnd bасk, a house саll оnlу requires ореning уоur front door аnd еnjоуing thе еxреriеnсе. Bliѕѕ!
                                        But hаvіng a haircut dоnе whеrе уоu livе соmеѕ with its оwn ѕеt оf parameters. Wе'rе glаd уоu hаvе сhоѕеn tо use оur ѕеrviсе аt ThyFlow tо gеt уоur реrѕоnаlizеd mоbilе bаrbеr...
                                    </p>
                                    <div className="">
                                        <Link href="/blog-post/blog-post/">
                                            <button className="btn btn--primary">
                                                <span className="btn__text">continue reading</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <SubscribeForm />
            </section>
        </main>
        <Footer />
    </>
);

export default Blog;