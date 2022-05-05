import { FaAngleRight } from "react-icons/fa"

export const QuickLink = ({ links }) => {
  return (
  <div className="col-md-2 col-xs-12 clearfix margin-bottom" style={{ marginLeft: "1rem" }}>
    <h4 className="text-white less-mar3 font-weight-5">Quick Links
    </h4>
    <div className="clearfix"></div>
    <br />
    <ul className="footer-quick-links-4 white">
      {links.map((e, i) => <li key={i}>
        <a href="contact.html">
          <FaAngleRight /> {e}
        </a>
      </li>)}
    </ul>
  </div>
  )
}