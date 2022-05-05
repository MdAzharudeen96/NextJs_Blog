export const NewsCarousel = ({ carousels }) => {
    let carouselImage
    carousels.items.map(item => {
      if(item.fields.title === "In the News"){
        carouselImage = item.fields
      }
    })
    // console.log(carouselImage)
    return (
     <section
      className="section-side-image sec-padding-5 clearfix animate-in"
      data-anim-type="fade-in-right"
      data-anim-delay="300"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="sec-title-container text-center">
              <h2 className="font-weight-6 less-mar-1 line-height-5">
                {carouselImage.title}
              </h2>
              <div className="ce-title-line"></div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="row innews">
          <div className="col-md-8 col-md-offset-2">
            <div id="news-section" className="owl-carousel owl-theme news-list flex">
              {carouselImage.images.map((image, i) => <div className="item" key={i}>
                <a href="" target="_blank">
                  <img src={image.fields.file.url} alt="" />
                </a>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }