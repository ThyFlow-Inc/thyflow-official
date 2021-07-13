import React from 'react'
import Link from 'next/link'


const BlogList =({title, slug})=>(
    <section className="blog-list"> 
        <div className="blog-list__card">
            <img src="/images/rectangle 5.png" alt="" className="blog__image"/>
            <div className="blog__text-content">
                 <h4 className="blog-card__title">{title}</h4>
                 <p className="blog-card__summary">
                    {summary}
                </p>
                <div className="">
                     <Link href={`blog/${slug}`} passHref>
                         <button className="btn btn--primary">
                            <span className="btn__text">continue reading</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
)

export default BlogList
