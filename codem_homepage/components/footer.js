import { AboutUs } from "./footer/aboutUs";
import { QuickLink } from "./footer/quickLinks";
import { ContactUs } from "./footer/contactUs";

export const FooterMain = ({ footer }) => {
    // console.log(footer)
  return (
    <div className="section-dark sec-padding-5">
        <div className="container">
            <div className="footers">
                <div className="col-md-3  colmargin clearfix margin-bottom">
                    <div className="fo-map">
                        <div className="footer-logo">
                        <img src={footer.logo.fields.file.url} alt="" />
                        <span className="reg-icon"> &reg;</span>
                        </div>
                        <p className="text-light">
                        {footer.description1}
                        </p>
                        <p className="text-light">
                        {footer.description2}
                        </p>
                    </div>
                </div>

                <AboutUs aboutUs={footer.aboutUs} />
                <QuickLink links={footer.quickLinks} />
                <ContactUs contactInfo= {footer.contactUs} linkedinLogo={footer.linkedinLogo} />
            </div>
        </div>
    </div>
  )
}