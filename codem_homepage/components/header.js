
export const Header = ({ headers }) => {
  // console.log(headers)
  return (
    <div className="col-md-12 nopadding" >
      <div className="header-section style1 pin-style pin-start">
        <div className="container">
          <div className="mod-menu">
            <div className="row">
              <div className="col-sm-2 col-xs-5">
                <a href="index.html" className="logo style-2 mar-4">
                  <img src={headers.logo.fields.file.url} alt="" />
                  <span className="reg-icon"> &reg;</span>
                </a>
              </div>
              <div className="col-sm-10 col-xs-7">
                <div className="main-nav">
                  <ul className="nav navbar-nav top-nav">
                    <li className="visible-xs menu-icon">
                      <a
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#menu"
                        aria-expanded="false"
                      >
                        <i aria-hidden="true" className="fa fa-bars"></i>
                      </a>
                    </li>
                  </ul>
                  <div id="menu" className="collapse">
                    <ul className="nav navbar-nav">
                      {headers.menuBar.map((menu, i) => {
                        return(
                          <li key={i}><a href="#"  className="arrow">{menu}</a></li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )



}