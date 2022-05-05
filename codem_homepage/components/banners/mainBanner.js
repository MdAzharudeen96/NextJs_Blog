import { Header } from "../header"

export const MainBanner = ({ headers, mainBanner }) => {
    const mainBannerComp = mainBanner
    // console.log(mainBannerComp)
    return (
        <>
          <Header headers={headers} />
          <div id="wrapper-boxed">
            <div className="site-wrapper">
              <div id="bannerVideo">
                <div className="container-fluid nopadding">
                  <div className="video-overlay bg-opacity-6"></div>
                  <div className="slider_text slider-caption"
                    style={{
                    backgroundImage: `url(${mainBannerComp.bannerImage.fields.file.url})`,
                    height: "100vh",
                    }}
                  >
                    <div className="absolute">
                      <div className="inner">
                        <h2 className="solving">{mainBannerComp.title}</h2>
                        <p className="tech">{mainBannerComp.description}</p>
                        <a className="btn btn-default contact-us us" href="#">
                          {mainBannerComp.contactUs}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
  }