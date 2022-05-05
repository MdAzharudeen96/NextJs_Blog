import { FaAngleRight } from "react-icons/fa";

export const AboutUs = ({ aboutUs }) => {
  return (
    <div className="col-md-2 col-xs-12 clearfix margin-bottom margins">
      <h4 className="text-white less-mar3 font-weight-5">About Us</h4>
      <div className="clearfix"></div>
      <br />
      <ul className="footer-quick-links-4 white">
        {aboutUs.map((link, i) => <li key={i}>
          <a href="ecommerce-tech.html">
            <FaAngleRight />  {link}
          </a>
        </li>)}

      </ul>
    </div>
  )
}