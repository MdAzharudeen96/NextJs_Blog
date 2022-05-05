export const CustomerCarousel = ({ carousels }) => {
    let carouselImage
    carousels.items.map(item => {
      if(item.fields.title === "Our Customers"){
        carouselImage = item.fields
      }
    })
    // console.log(carouselImage)
    return (
    <section className="sec-padding-5 ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="sec-padding-5 sec-title-container text-center">
              <h2 className="font-weight-6 less-mar-1 line-height-5">
                {carouselImage.title}
              </h2>
              <div className="ce-title-line"></div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="row">
          <div
            id="customers-logo"
            className="owl-carousel owl-theme customers-list"
          >
            <div className="our-customers">
              <div className="item">
                {carouselImage.images.map((e, i) => {
                  return (
                    <img key={i} id="ourcustom" src={e.fields.file.url} alt="image" />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
  }