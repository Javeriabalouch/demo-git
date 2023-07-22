import React, { useState } from "react";
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Sidebar.css";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export default function Sideabar() {
  const [tabSelect, setTabSelect] = useState("");
  const [sideBarTab, setSideBarTab] = useState([
    {
      name: "Dashboard!",
      route: "/dashboard",
      // icon: "mdi mdi-home-account",
      children: [],
    },
    {
      name: "Home",
      route: "/home",
      // icon: "mdi mdi-home-account",
      children: [],
    },
    {
      name: "Area System",
      // icon: "mdi mdi-home-account",
      route: "expanded",
      children: [{ name: "Area today", route: "/areatoday" }],
    },
    {
      name: "Company System",
      // icon: "mdi mdi-home-account",
      route: "expanded",
      children: [{ name: "Company today", route: "/companytoday" }],
    },

    {
      name: "Business System",
      // icon: "mdi mdi-home-account",
      route: "expanded",
      children: [{ name: "Business today", route: "/Businesstoday" }],
    },
    {
      name: "Gallery System",
      // icon: "mdi mdi-home-account",
      route: "expanded",
      children: [{ name: "Gallery today", route: "/Gallerytoday" }],
    },
  ]);

  // const handleActive = (index) => {
  //   const tabSelectValue = tabSelect.includes(index);

  //   if (tabSelectValue) {
  //     const newTAB = tabSelect.filter((tab) => tab != index);
  //     setTabSelect(newTAB);
  //   } else {
  //     setTabSelect((prev) => [...prev, index]);
  //   }
  // };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <div className="container" style={{ display: "flex", flex: 1 }}>
        <div className="text-wrapper">
          <h4 className="text">Lucky</h4>
          <i
            style={{ marginBottom: "60px", marginRight: "20px" }}
            className="fa fa-list"
          ></i>
        </div>
        {sideBarTab.map((sideBar) => {
          return (
            <div>
              <ul>
                <li
                // key={key}
                >
                  <li>
                    <a>{sideBar.name}</a>
                  </li>
                </li>
                <ul>
                  {sideBar.children.map((dataItem) => {
                    return (
                      <>
                        <li key={sideBar}>
                          <NavLink
                            // className={({ isActive }) =>
                            //   isActive ? "active" : ""
                            // }
                            to={dataItem.route}
                          >
                            {dataItem.name}
                          </NavLink>{" "}
                        </li>
                      </>
                    );
                  })}
                </ul>
              </ul>
            </div>

            // <li key={key} style={{ cursor: "pointer" }}>
            //   <NavLink to={sideBar.route} className="">
            //     {" "}
            //     {/* <i
            //       className={sideBar.icon}
            //       style={{ marginRight: "10px" }}
            //     ></i>{" "} */}
            //     <span>{sideBar.name}</span>
            //   </NavLink>
            // </li>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flex: 2,
          background: "green",
          color: "white",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
