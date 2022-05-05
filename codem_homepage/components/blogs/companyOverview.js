export const CompanyOverview = ({ overview }) => {
    // console.log(overview)
    return (
      <section className="sec-padding-5 section-light back">
        <div className="container compantreview">
          <div className="row">
            <div className="col-md-6 animate-in pull-left" data-anim-type="fade-in-right" data-anim-delay="100">
              <img src={overview.blogImage.fields.file.url} alt="" style={{ width: "568px", height: "417px" }} className="img-responsive overview-img" />
            </div>
            <div
              className="col-md-6 margin-bottom animate-in pull-right"
              data-anim-type="fade-in-left"
              data-anim-delay="150"
            >
              <div className="col-sm-12 nopadding">
                <div className="sec-title-container less-padding-4 text-left">
                  <h2 className="font-weight-6 less-mar-1 line-height-5">
                    {overview.companyOverview}
                  </h2>
                  <div className="ce-title-line align-left"></div>
                </div>
              </div>
              <div className="clearfix"></div>
              <p className="running-text">{overview.description}</p>
              <br />
              <ul className="about-logo">
                {overview.images.map((e, i) => <li key={i}>
                  <img src={e.fields.file.url} alt="Amazon" />
                </li>)}
              </ul>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }