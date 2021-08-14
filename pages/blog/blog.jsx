import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Header from "../../components/header/header";
import Footer from '../../components/footer/footer'
import SubscribeForm from  "../../components/subscribe-form/subscribe-form"
import Head from 'next/head'

export const Blog=({posts})=>{
    const [mappedPosts, setMappedPosts] = useState([]);
    
    useEffect(()=>{
        if(posts.length){
            const imgUrlBuilder = imageUrlBuilder({
                projectId: 'qhojha9p',
                dataset: 'production'
            })

            setMappedPosts(
                posts.map(p => {
                    return{
                        ...p,
                        mainImage: imgUrlBuilder.image(p.mainImage).width(250).height(250)
                    }
                })
            )
        }else{
            setMappedPosts([]);
        }
    }, [posts])

    return(
        <>
        <Head>
            <title>ThyFlow - ThyBlog</title>
            <meta name="description" content="ThyBlog,ThyFlow Blog." />
            <link rel="icon" href="/images/ThyFlowlogo.png" />
        </Head>
        <Header />
        <main id="main">
        <section className="blog">
                <h2 className="blog__heading">latest articles</h2> 
                    <div className="blog__list">
                        {mappedPosts.length ? mappedPosts.map((p, index) =>(
                        <div key={index} className="blog__card">
                             <img src={p.mainImage} alt="blog image" className="blog__image"/>
                             <div className="blog__text-content">
                                <h4 className="blog__title">{p.title}</h4>
                                <span className="blog__summary">
                                    {p.summary}
                                </span>
                                <div className="">
                                    <Link href="/post/[slug]" as={`/post/${p.slug.current}`}>
                                    <button className="btn btn--primary blog__button">
                                        <span className="btn__text">continue reading</span>
                                    </button>
                                    </Link>
                                </div>
                        </div>
                        </div>
                        ))  : <>No Post Yet</>}
                </div>
                <SubscribeForm />
            </section>
        </main>
        <Footer />
    </>
    )
}

export const getServerSideProps = async pageContext => {
    const query = encodeURIComponent('*[ _type == "post"]')
    const url = `https://qhojha9p.api.sanity.io/v1/data/query/production?query=${query}`

    const result = await fetch(url).then(res => res.json());


    if(!result.result || !result.result.length){
        return{
            props: {
                posts: []
            }
        }
    }else{
        return{
            props: {
                posts: result.result
            }
        }
    }

};

export default Blog;