export const SubBanner = ({ subBanner }) => {
    // console.log(subBanner)
    return (
      <div
        className="parallax vertical-align"
        data-parallax-speed="0.9"
        data-parallax-direction="down"
        style={{
          position: "relative",
          background: "transparent none repeat scroll 0% 0%",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <div
          className="parallax-inner"
          style={{
            position: "absolute",
            backgroundImage: `url(${subBanner.bannerImage.fields.file.url})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "1440px",
            height: "1270.06px",
            transform: "translate3d(0px, -384.03px, 0px)",
            zIndex: -1,
          }}
        />
        <div className="parallax-overlay bg-opacity-8">
          <div className="container sec-tpadding-4 sec-bpadding-5">
            <div className="row magento">
              <div className="col-md-12 text-center">
                <div className="col-sm-12">
                  <div className="sec-title-container less-padding-1 text-center">
                    <h2 className="font-weight-6 less-mar-1 line-height-5 text-white">
                      {subBanner.title}
                    </h2>
                    <div className="ce-title-line"></div>
                    <br />
                    <div className="align-center">
                      <img
                        src={subBanner.badgeImage.fields.file.url}
                        alt=""
                        className="img-responsive"
                      />
                    </div>
                    <h6 className="ce-sub-text raleway opacity-6 text-white">
    
                      {subBanner.description}
                    </h6>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }