export const InvestmentBlog = ({blog}) => {
    // console.log(blog)
    return(
        <section className="sec-padding-4">
            <div className="container">
                <div className="row align-centered">
                    <div className="col-sm-6 col-md-6 margin-bottom" data-anim-type="fade-in-left" data-anim-delay="150">
                        <div className="col-sm-12 nopadding">
                        <div className="sec-title-container less-padding-4 text-left">
                            <h2 className="font-weight-6 less-mar-1 line-height-5">{blog.title}</h2>
                            <div className="ce-title-line align-left"></div>
                        </div>
                        </div>
                        <div className="clearfix"></div>
                        <p className="running-text">{blog.description}</p>
                    </div>
                    <div className="col-sm-6 col-md-6 margin-bottom" data-anim-type="fade-in-right" data-anim-delay="100"> 
                        <img src={blog.teamImage.fields.file.url} alt="" className="img-responsive" /> 
                    </div>
                </div>
            </div>
        </section>
    )
}