import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "../../styles/Home.module.css"

const BlogPost =()=>(
    <>
        <Header />
        <main className={styles.main}>
            <h2 className="blog-post__title">
                How to get ready for a haircut at home
            </h2>
            <div className="blog-post__content">
                
            </div>
        </main>
        <Footer />
    </>
);
export default BlogPost;