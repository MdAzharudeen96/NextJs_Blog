import {FaCircle} from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

export const ServiceBlog = ({blog1, blog2, blog3}) => {
    // console.log(blog1)
    // console.log(blog2)
    // console.log(blog3)

    return(
        <section className="sec-padding-4 section-light" data-anim-type="fade-in-right" data-anim-delay="400">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="sec-title-container sec-title-mobile  text-center">
                        <h2 className="font-weight-6 less-mar-1 line-height-5">Our Services</h2>
                        <div className="ce-title-line"></div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 margin-bottom">
                        <div className="clearfix"></div>
                        <div className="tab-content-style-15">
                        <div className="responsive-tabs-content">
                            <div className="sec-bpadding-5 reverse clearfix">
                                <div className="col-md-6 order-2">
                                    <div className="ce-feature-box-65">
                                    <div className="img-box hide-mobile"><img src={blog1.blogImage.fields.file.url} alt="" className="img-responsive"/></div>
                                    </div>
                                </div>
                                <div className="col-md-6 padding-left-4">
                                    <div className="col-sm-12 nopadding">
                                    <div className="sec-title-container less-padding-5 text-left">
                                        <h5 className="font-weight-4 less-mar-1 line-height-3 sec-m-margin-1 ce-title-top-text">{blog1.subtitle}</h5>
                                        <h2 className="font-weight-6 less-mar-1 line-height-4">{blog1.title}</h2>
                                    </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="iconlist-2">
                                    <div className="">{blog1.description1}</div>
                                    </div>
                                    <div className="iconlist-2">
                                    <div className="">{blog1.description2}</div>
                                    </div>
                                    <div className="iconlist-2">
                                        {blog1.descriptionList.map((e,i) => {
                                            return(
                                            <div className="icons-list-1 icon-tiny" key={i}>
                                                <div className="icon dark">
                                                    <FaCircle style={{ fontSize: "8px"}} />
                                                </div>
                                                <div className="text">{e}</div>
                                            </div>
                                            )
                                        })}
                                    </div>
                                    <div className="img-box show-mobile"><img src={blog1.blogImage.fields.file.url} alt="" className="img-responsive"/></div>
                                    <div className="clearfix"></div>
                                    <br/>
                                    <div className="readmore-btn">
                                        <a className="btn btn-dark btn-round btn-medium uppercase" href="ecommerce-tech.html">
                                        <FaPlayCircle className="fa fa-play-circle"/>
                                        Read more
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="divider-line solid light-2"></div>
                            <div className="sec-padding-5 reverse clearfix">
                                <div className="col-md-6 padding-right-3 text-justify">
                                    <div className="col-sm-12 nopadding">
                                    <div className="sec-title-container less-padding-5 text-left">
                                        <h5 className="font-weight-4 less-mar-1 mt-0 line-height-3 sec-m-margin-1 ce-title-top-text">{blog3.subtitle}</h5>
                                        <h2 className="font-weight-6 less-mar-1 line-height-4">{blog3.title}</h2>
                                    </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="iconlist-2">
                                    <div className="">{blog3.description1}</div>
                                    </div>
                                    <div className="iconlist-2">
                                    <div className="">{blog3.description2}</div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="img-box show-mobile"><img src={blog3.blogImage.fields.file.url} alt="" className="img-responsive"/></div>
                                    <br/>
                                    <a className="btn btn-dark btn-round btn-medium uppercase" href="digital-market-entry.html">
                                        <FaPlayCircle className="fa fa-play-circle"/>
                                        Read more
                                    </a>
                                </div>
                                <div className="col-md-6 padding-right-0">
                                    <div className="ce-feature-box-65">
                                    <div className="img-box hide-mobile"><img src={blog3.blogImage.fields.file.url} alt="" className="img-responsive"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="divider-line solid light-2 bottom-divider"></div>
                            <div className="clearfix"></div>
                            <div className="sec-padding-5 reverse clearfix bottom-sec-bpadding-5">
                                <div className="col-md-6 order-2">
                                    <div className="ce-feature-box-65">
                                        <div className="img-box hide-mobile"><img src={blog2.blogImage.fields.file.url} alt="" className="img-responsive"/></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="col-sm-12 nopadding">
                                        <div className="sec-title-container less-padding-5 text-left">
                                            <h5 className="font-weight-4 less-mar-1 line-height-3 ce-title-top-text sec-m-margin-1">{blog2.subtitle}</h5>
                                            <h2 className="font-weight-6 less-mar-1 line-height-4">{blog2.title}</h2>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="iconlist-2">
                                        <div className="">{blog2.description1}</div>
                                    </div>
                                    <div className="iconlist-2">
                                        <div className="">{blog2.description2}</div>
                                    </div>
                                    <div className="iconlist-2">
                                        <div className="">{blog2.description3}</div>
                                    </div>
                                    <div className="img-box show-mobile"><img  alt="" className="img-responsive"/></div>
                                    <div className="clearfix"></div>
                                    <br/>
                                    <a className="btn btn-dark btn-round btn-medium uppercase" href="ecommerce-services.html">
                                        <FaPlayCircle className="fa fa-play-circle"/>
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}