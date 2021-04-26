import React, { Component } from "react";
import Swal from "sweetalert2";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
// import Chrome from "./assets/images/Google-Chrome-icon.png";
// import Edge from "./assets/images/edge-icon.png";
// import Firefox from "./assets/images/Firefox-icon.png";
// import Safari from "./assets/images/safari-icon.png";
// import IE from "./assets/images/Internet-Explorer-icon.png";
// const pkgVersion = require("../package.json").version;
import Banner from "./assets/images/banner_register.png";
class App extends Component {
  state = {
    collapseID: "",
    modal: localStorage.getItem("isNoShow")
      ? JSON.parse(localStorage.getItem("isNoShow"))
      : true,
    isShow: false,
    isAdmin: false,
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  closeCollapse = (collID) => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: "" });
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleCheckBox = (event) => {
    if (event.target.checked) {
      localStorage.setItem("isNoShow", JSON.stringify(!event.target.checked));
    }
  };
  checkAdmin = () => {
    let isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin) {
      window.location = "#/reh-risk/showdata";
    } else {
      localStorage.removeItem("isAdmin");
      Swal.fire({
        title: "กรอกรหัสผ่านสำหรับเจ้าหน้าที่",
        input: "password",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "ตกลง",
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return login === "QCC@101"
            ? true
            : Swal.showValidationMessage(`รหัสผ่านสำหรับเจ้าหน้าที่ไม่ถูกต้อง`);
        },
      }).then((result) => {
        if (result.value) {
          localStorage.setItem("isAdmin", true);
          window.location = "#/reh-risk/showdata";
        }
      });
    }
  };
  componentDidMount() {
    let is_admin = localStorage.getItem("isAdmin");
    if (is_admin) {
      this.setState({
        isAdmin: true,
      });
    }
  }
  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className="flyout teal accent-4">
          <main>
            <Routes />
          </main>
          <MDBFooter className="font-small elegant-color-dark">
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                
                &copy; {new Date().getFullYear()} Copyright{" "}
                <a href="http://reh.go.th" rel="noopener">
                  {" "}
                  โรงพยาบาลร้อยเอ็ด
                </a>
                <a href="tel:043518200" className="ml-3">
                  โทร.
                <MDBIcon icon="phone-alt" className="text-white ml-2 mr-1"/>
                043-518200 ต่อ 9000
                </a>
              </MDBContainer>
            </div>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
