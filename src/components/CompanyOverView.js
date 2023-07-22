import React,{useState} from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
// import "../../../../Assets/css/main.css";
// import Logo_sm from "../../../../Assets/images/logo-sm.svg";
// import { Col, Row } from "reactstrap";
// import { InputCommon } from "../../../../Common/FormsCommon";
// import { Nav, NavItem, NavLink } from "reactstrap";

function CompanyOverView() {
  const[activeTab,setActiveTab] = useState("")
  return (
    <div>
      <div className="company_dataParent company_structure">
        <div>
          <h5 className="profile_info">Profile</h5>
          <div style={{ padding: "20px" }} className="company-wrap">
            <div className="lucky_data">
              <div>
                {/* <Icon path={mdiHeatingCoil} size={3} /> */}
                {/* <img src={Logo_sm} alt="" height="24" /> */}
              </div>
              <div>
                <h4 className="company_title">Lucky-Company</h4>
                <span className="company_tag">Company</span>
              </div>
            </div>
            {/* <hr/> */}

            <div>
              {/* <ul className="nav nav-tabs info_tabs">
                <li className="nav-item items_list">
                  <a className="nav-link Nav_info" aria-current="page" href="#">
                    Overview
                  </a>
                </li>
                <li class="nav-item items_list">
                  <a class="nav-link Nav_info" href="#">
                    Financial Info
                  </a>
                </li>
                <li class="nav-item items_list">
                  <a class="nav-link Nav_info" href="#">
                    Details
                  </a>
                </li>
              </ul> */}
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={activeTab == "1" ? "active" : ""}
                    onClick={() => setActiveTab("1")}
                  >
                    Tab 1
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab == "2" ? "active" : ""}
                    onClick={() => setActiveTab("2")}
                  >
                    Tab 2
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab == "2" ? "active" : ""}
                    onClick={() => setActiveTab("2")}
                  >
                    Tab 3
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
        </div>
        <TabContent activeTab={activeTab}>
          <form>
            <row></row>
          </form>
          <TabPane tabId="1">
            <label>Company Name</label>
            <div xs={12} md={6} lg={6} xl={6} xxl={6} sm={12}>
              <input
                name="company_name"
                label="Name"
                isRequired
                type="text"
                // value={form.company_name}
                // onChange={handleInputChange}
                // validationSchema={validationSchema.fields.company_name}
              />
            </div>
          </TabPane>
          <TabPane tabId="2">Tab 2 Content</TabPane>
        </TabContent>

        <div className="table_wrap">
          <form className="companny_table">
            <row>
              <label>Company Name</label>
              <div xs={12} md={6} lg={6} xl={6} xxl={6} sm={12}>
                <input
                  name="company_name"
                  label="Name"
                  isRequired
                  type="text"
                  // value={form.company_name}
                  // onChange={handleInputChange}
                  // validationSchema={validationSchema.fields.company_name}
                />
              </div>
              <div
                xs={12}
                md={6}
                lg={6}
                xl={6}
                xxl={6}
                sm={12}
                style={{ marginTop: "-30px" }}
              >
                <label>Working Schedule </label>

                <row className="mt-0 pt-0">
                  <div xs={12} md={6} lg={6} xl={6} xxl={6} sm={12}>
                    <input
                      name="Days"
                      label="Days"
                      // isRequired
                      type="text"
                      // value={form.company_address}
                      // onChange={handleInputChange}
                      // validationSchema={validationSchema.fields.company_address}
                    />
                  </div>
                  <div xs={12} md={6} lg={6} xl={6} xxl={6} sm={12}>
                    <input
                      name="Time"
                      label="Time"
                      // isRequired
                      type="text"
                      // value={form.company_address}
                      // onChange={handleInputChange}
                      // validationSchema={validationSchema.fields.company_address}
                    />
                  </div>
                </row>
              </div>

              <div xs={12} md={6} lg={6} xl={6} xxl={6} sm={12}>
                <label>Currencies </label>

                <row className="mt-0 pt-0">
                  <div xs={12} md={6} lg={6} xl={6} xxl={6} sm={12}>
                    <input
                      name="Operational"
                      label="Operational"
                      // isRequired
                      type="text"
                      // value={form.company_address}
                      // onChange={handleInputChange}
                      // validationSchema={validationSchema.fields.company_address}
                    />
                  </div>
                  <div xs={12} md={6} lg={6} xl={6} xxl={6} sm={12}>
                    <input
                      name="Transactional"
                      label="Transactional"
                      // isRequired
                      type="text"
                      // value={form.company_address}
                      // onChange={handleInputChange}
                      // validationSchema={validationSchema.fields.company_address}
                    />
                  </div>
                </row>
              </div>
            </row>

            {/* <ul>
            <li className="info_list">
              <lable className="company_name">Company Name</lable>
              <input
                className="info-company"
                name="companyName"
                placeholder="Name"
                type="text"
              />
            </li>

            <li className="info_list">
              <lable className="company_name">Company Name</lable>
              <input
                className="info-company"
                name="companyName"
                placeholder="Name"
                type="text"
              />
            </li>

            <li className="info_list">
              <lable className="company_name">Company Name</lable>
              <input
                className="info-company"
                name="companyName"
                placeholder="Name"
                type="text"
              />
            </li>

            <li className="info_list">
              <lable className="company_name">Company Name</lable>
              <input
                className="info-company"
                name="companyName"
                placeholder="Name"
                type="text"
              />
            </li>

    
          </ul> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyOverView;

{
  /* <li className="info_list">
        <lable>Working Schedule </lable>
        <input className = "info-company" name = "workingSchedule" type = "text" placeholder="Days"/>
    </li> */
}

{
  /* <li >
        <lable></lable>
        <input/>
    </li> */
}
