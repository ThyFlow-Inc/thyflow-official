import styles from "../../styles/Home.module.css"
import Footer from '../../components/footer/footer'
import Header from "../../components/header/header";
import SubscribeForm from  "../../components/subscribe-form/subscribe-form"
import BlogList from "../../components/blog-list/blog-post"
import { getAllFilesFrontMatter } from '../../lib/mdx'

export default function Blog({ posts }){
    const filteredBlogPosts = posts
    .sort(
        (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
        frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

    return(
    <>
        <Header />
        <main className={styles.main}>
            <section className="blog">
                <h2 className="blog__heading">latest articles</h2>
                <div className="blog__blogs">
                    <div className="blog__articles">
                    {!filteredBlogPosts.length && 'No posts found :('}
                        {filteredBlogPosts.map((frontMatter) => <BlogList key={frontMatter.title} {...frontMatter} />)}
                    </div>
                </div>
                <SubscribeForm />
            </section>
        </main>
        <Footer />
    </>
);
}


export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')

    return { props: { posts } }
}