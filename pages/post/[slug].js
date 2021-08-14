import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header'
import Head from 'next/head'

export const Post =({ title, body, image})=> {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const imgBuilder = imageUrlBuilder({
            projectId: 'qhojha9p',
            dataset: 'production',
        })
        setImageUrl(imgBuilder.image(image))
    }, [image]);

    return(
        <>
         <Head>
            <title>ThyFlow</title>
            <meta name="description" content="ThyBlog,ThyFlow Blog." />
            <link rel="icon" href="/images/ThyFlowlogo.png" />
        </Head>
        <Header />
        <main>
            <section className="post">
                <h2 className="post__title">{title}</h2>
                {imageUrl && <img className="post__image" src={imageUrl}/>}
                <BlockContent className="post__text" blocks={body}/>       
            </section>
        </main>
        <Footer />
        </>
    )
}



export const getServerSideProps = async pageContext =>{
    const pageSlug = pageContext.query.slug
    
    if(!pageSlug){
        return{
            notFound: true
        }
    }
   
    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}"]`);
    const url = `https://qhojha9p.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
   
    const post = result.result[0];

   
    if (!post){
        return{
            notFound: true
        }
    }else{
        return{
            props: {
                body: post.body,
                title: post.title,
                image: post.mainImage
            }
        }
    }
}



export default Post;

