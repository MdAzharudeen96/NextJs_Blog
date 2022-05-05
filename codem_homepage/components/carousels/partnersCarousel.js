export const Partners = ({ carousels }) => {
  let carouselImage
  carousels.items.map(item => {
    if(item.fields.title === "Our Partners"){
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
          <div className="row">
            <div className="col-sm-12">
              <div id="partners-logo" className="owl-carousel owl-theme customers-list">
                {carouselImage.images.map((image, i) => {
                  return <div className="item" key={i}>
                    <a
                      href=""
                      title="MW2 Consulting"
                      target="_blank"
                    >
                      <img className="partner" src={image.fields.file.url} alt="" />
                    </a>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }