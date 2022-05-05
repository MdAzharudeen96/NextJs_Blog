export const ContactUs = ({ contactInfo, linkedinLogo }) => {
    // console.log(contactInfo)
    return (<div className="col-md-5 col-xs-12 clearfix margin-bottom">
      <h4 className="text-white less-mar3 font-weight-5">Contact Us</h4>
      <div className="clearfix"></div>
      <br />
      <div className="row foot-address">
        <div className="col-md-6 col-xs-12 clearfix margin-bottom" style={{ marginLeft: "1rem" }}>
          <address className="text-light">
            <strong className="text-white">
              {contactInfo[0].companyName}
            </strong> <br />
            {contactInfo[0].address}
          </address>
          <span className="text-light">
            <strong className="text-white">Phone:</strong>
            {contactInfo[0].Phone}
          </span>
          <br />
          <span className="text-light">
            <strong className="text-white">Email:</strong>
            {contactInfo[0].Email}
          </span>
          <ul className="footer-social-icons white left-align icons-plain text-center">
            <li>
              <a href="" target="_blank">
                <img src={linkedinLogo.fields.file.url} className="linkedin" />
                {linkedinLogo.fields.title}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-xs-12 clearfix margin-bottom">
          <address className="text-light" style={{ marginTop: "-2rem" }}>
            <strong className="text-white">
              {contactInfo[1].companyName}
              <br />
              {contactInfo[1].UEN}
            </strong>{" "}
            <br />
            {contactInfo[1].address}
          </address>
          <span className="text-light">
            <strong className="text-white">Phone:</strong>
            {contactInfo[1].Phone}
          </span>
        </div>
      </div>
    </div>)
  }