import React, { useEffect, useState } from "react";
import axios from "axios";
// import Swal from "sweetalert2";
import config from "../config";
import Select from "react-select";
import DateTimeThai from "../data/DateTimeThai";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBAnimation,
  MDBBtn,
  MDBIcon,
  MDBDataTable,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
} from "mdbreact";

const SearchPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [showRisk, setShowRisk] = useState([]);
  const [dataRisk, setDataRisk] = useState({
    columns: [],
    rows: [],
  });
  const [department, setDepartment] = useState([]);
  const [departMain, setDepartMain] = useState("");
  const [departEvent, setDepartEvent] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [actionMessage, setActionMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (departMain !== "" || departEvent !== "") {
      event.target.className += " was-validated";
      setIsSearch(true);
      const formData = {
        departMain: departMain,
        departEvent: departEvent,
      };
      let base_url = `${config.main_config.APP_URL}/getSearchRisk`;
      const header = {
        "Content-Type": "application/json",
      };
      axios
        .post(base_url, formData, { headers: header })
        .then((resp) => {
          let data = resp.data;
          console.log(data);
          if (data.status === 200) {
            if (data.data.length > 0) {
              setIsSearch(false);
              let arrData = [];
              data.data.map((val) => {
                let link =
                  val.file_attachment !== "null" && val.file_attachment !== ""
                    ? `http://61.19.127.228/RESTfulAPI/service-api-rehapp/uploads/documents/${val.file_attachment}`
                    : "";
                let jsonData = {
                  createdDate: (
                    <p className="text-risk-date">
                      {DateTimeThai(val.createdDate)}
                    </p>
                  ),
                  risk_depart_main_name: (
                    <p className="text-risk-dep">{val.risk_depart_main_name}</p>
                  ),
                  risk_detail: (
                    <p className="text-risk-detail">{val.risk_detail}</p>
                  ),
                  file_attachment:
                    link !== "" ? (
                      <a
                        href={link}
                        rel="noopener noreferrer"
                        className="text-primary"
                        target="_BLANK"
                      >
                        ดาวน์โหลดไฟล์ <i className="fas fa-download ml-1"></i>
                      </a>
                    ) : (
                      ""
                    ),
                  handle: (
                    <div>
                      <MDBBtn
                        outline
                        rounded
                        size="sm"
                        color="info"
                        className="px-2"
                        onClick={showData(val.risk_id)}
                      >
                        <i className="fas fa-eye mt-0"></i>
                      </MDBBtn>
                    </div>
                  ),
                };
                arrData.push(jsonData);
              });
              let optionTable = {
                columns: [
                  {
                    label: "วันที่แจ้ง",
                    field: "createdDate",
                    width: 150,
                  },
                  {
                    label: "หน่วนงานที่บันทึก",
                    field: "risk_depart_main_name",
                    width: 250,
                  },
                  {
                    label: "ประเด็น",
                    field: "risk_detail",
                    width: 350,
                  },
                  {
                    label: "ไฟล์แนบ",
                    field: "file_attachment",
                    width: 150,
                  },
                  {
                    label: "#",
                    field: "handle",
                    sort: false,
                  },
                ],
                rows: arrData,
              };
              const widerData = {
                columns: [
                  ...optionTable.columns.map((col) => {
                    col.width = 200;
                    return col;
                  }),
                ],
                rows: [...optionTable.rows],
              };
              localStorage.setItem(
                "risk-data-search",
                JSON.stringify(data.data)
              );
              setDataRisk(widerData);
            } else {
              setActionMessage("ไม่มีพบข้อมูลที่ค้นหา...");
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setActionMessage("กรุณาเลือกข้อมูลที่ต้องการค้นหา...");
    }
  };

  const toggle = () => {
    setIsShowModal(!isShowModal);
  };

  const showData = (id) => () => {
    let riskData = localStorage.getItem("risk-data-search");
    if (riskData) {
      let arrRisk = JSON.parse(riskData);

      const filteredSets = arrRisk.filter((item) => item.risk_id === id);
      // console.log(filteredSets);
      setShowRisk([...filteredSets]);
    }
    setIsShowModal(true);
  };
  useEffect(() => {
    localStorage.removeItem("department");
    localStorage.removeItem("risk-data");
    let depart = localStorage.getItem("risk-dept");
    if (depart) {
      let dataDepart = JSON.parse(depart);
      let arrDept = [];
      dataDepart.map((val) => {
        let option = {
          value: val.dept_id,
          label: val.dept_name,
        };
        arrDept.push(option);
      });
      setDepartment([...arrDept]);
    }
  }, []);
  return (
    <div>
      <MDBEdgeHeader
        color="white"
        className="sectionPage"
        style={{ height: 100 }}
      />
      <div className="mt-3 mb-5">
        <MDBAnimation type="zoomIn" duration="500ms">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="10"
                className="mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody>
                  <MDBCol md="12">
                    <h5 className="text-primary">
                      ค้นหาข้อมูลรายงานความเสี่ยง
                    </h5>
                    <form className="needs-validation" onSubmit={submitHandler}>
                      <MDBRow>
                        <MDBCol md="6" className="mt-4mb-3">
                          <label className="grey-text">
                            หน่วยงานที่รายงานความเสี่ยง
                          </label>
                          <Select
                            options={department}
                            placeholder="เลือกหน่วยงาน"
                            onChange={(val) => {
                              setDepartMain(val.value);
                            }}
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-3">
                          <label className="grey-text">
                            หน่วยงานที่เกิดอุบัติการณ์
                          </label>
                          <Select
                            options={department}
                            onChange={(val) => {
                              setDepartEvent(val.value);
                            }}
                            placeholder="เลือกหน่วยงาน"
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="12">
                          <MDBBtn className="mt-3" color="blue" type="submit">
                            ค้นหา
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </form>
                  </MDBCol>
                  <hr className="border border-primary" />
                  <MDBRow>
                    <MDBCol md="12 text-center">
                      {isSearch && (
                        <>
                          <MDBIcon icon="spinner" pulse size="3x" fixed />
                          <span className="sr-only">Loading...</span>
                        </>
                      )}
                      {actionMessage !== "" && (
                        <div>
                          <small className="font-weight-bold text-danger">
                            {actionMessage}
                          </small>
                        </div>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <MDBDataTable
                        striped
                        bordered
                        hover
                        scrollX
                        entriesOptions={[5, 20, 25, 100]}
                        entries={5}
                        pagesAmount={4}
                        data={dataRisk}
                        materialSearch
                        info={true}
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
        </MDBAnimation>
      </div>
      <MDBModal isOpen={isShowModal} toggle={toggle} size="lg">
        <MDBModalHeader toggle={toggle}>รายละเอียดความเสี่ยง</MDBModalHeader>
        <MDBModalBody>
          {showRisk.map((val, index) => (
            <table className="table table-bordered" key={index}>
              <thead></thead>
              <tbody>
                <tr>
                  <td width="35%" className="text-right font-weight-bold">
                    เวลาที่รายงาน
                  </td>
                  <td>{DateTimeThai(val.riskDate)}</td>
                </tr>
                <tr>
                  <td width="35%" className="text-right font-weight-bold">
                    หน่วยงานที่รายงาน
                  </td>
                  <td>{val.risk_depart_main_name}</td>
                </tr>
                <tr>
                  <td width="35%" className="text-right font-weight-bold">
                    หน่วยงานที่เกิดอุบัติการณ์
                  </td>
                  <td>{val.risk_depart_event_name}</td>
                </tr>
                <tr>
                  <td width="35%" className="text-right font-weight-bold">
                    วันที่เกิดอุบัติการณ์
                  </td>
                  <td>{DateTimeThai(val.riskDate, 1)}</td>
                </tr>
                <tr>
                  <td width="35%" className="text-right font-weight-bold">
                    เวลาที่เกิดอุบัติการณ์
                  </td>
                  <td>{DateTimeThai(val.riskDate, 2)}</td>
                </tr>
                <tr>
                  <td width="35%" className="text-right font-weight-bold">
                    ประเภทอุบัติการณ์
                  </td>
                  <td>
                    {val.risk_severity !== ""
                      ? val.risk_severity === 1
                        ? "อุบัติการณ์ความเสี่ยงด้านคลินิก"
                        : "อุบัติการณ์ความเสี่ยงทั่วไป"
                      : ""}
                  </td>
                </tr>
                <tr>
                  <td width="35%" className="text-right font-weight-bold">
                    ระดับความรุนแรง
                  </td>
                  <td>
                    {val.severity_name} <br />
                    {val.severity_detail}
                  </td>
                </tr>
                <tr>
                  <td width="35%" className="text-right font-weight-bold">
                    เหตุการณ์ที่เกิดขึ้น
                  </td>
                  <td>{val.risk_detail}</td>
                </tr>
                <tr>
                  <td width="35%" className="text-right font-weight-bold">
                    ผู้ที่ได้รับผลกระทบ
                  </td>
                  <td>{val.impact_name}</td>
                </tr>
                <tr>
                  <td width="35%" className="text-right font-weight-bold">
                    การจัดการเบื้องต้น
                  </td>
                  <td>{val.risk_management}</td>
                </tr>
                <tr>
                  <td width="35%" className="text-right font-weight-bold">
                    ไฟล์แนบ
                  </td>
                  <td>
                    {val.file_attachment !== "null" &&
                    val.file_attachment !== "" ? (
                      <a
                        href={`http://61.19.127.228/RESTfulAPI/service-api-rehapp/uploads/documents/${val.file_attachment}`}
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        ดาวน์โหลดไฟล์ <i className="fas fa-download ml-1"></i>
                      </a>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="danger" onClick={toggle}>
            ปิด
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </div>
  );
};

export default SearchPage;
