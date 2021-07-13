import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "../../styles/Home.module.css"
import Head from 'next/head';
import { parseISO, format } from 'date-fns';


const BlogPost =({children, frontMatter})=>(
    <>
        <Head>
            <title>${slug}</title>
        </Head>
        <Header />
        <main className={styles.main}>
            <h2 className="blog-post__title">
                {frontMatter.title}
            </h2>
            <div className="blog-post__content">
                {children}
            </div>
        </main>
        <Footer />
    </>
);
export default BlogPost;


