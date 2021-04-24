import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";
import config from "../config";
import "./ShowData.css";
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
  MDBCard,
  MDBCardHeader,
  MDBDataTable,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
} from "mdbreact";

const ShowDataPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [showRisk, setShowRisk] = useState([]);
  const [dataRisk, setDataRisk] = useState({
    columns: [],
    rows: [],
  });
  const toggle = () => {
    setIsShowModal(!isShowModal);
  };
  const loadData = async (setDataRisk) => {
    let base_url = `${config.main_config.APP_URL}/getRiskAll`;
    const header = {
      "Content-Type": "application/json",
    };
    let result = await axios.get(base_url, { headers: header });
    let arrData = [];
    result.data.dataParse.map((val) => {
      let link =
        val.file_attachment !== "null" && val.file_attachment !== ""
          ? `http://61.19.127.228/RESTfulAPI/service-api-rehapp/uploads/documents/${val.file_attachment}`
          : "";
      let jsonData = {
        createdDate: (
          <p className="text-risk-date">{DateTimeThai(val.createdDate)}</p>
        ),
        risk_depart_main_name: (
          <p className="text-risk-dep">{val.risk_depart_main_name}</p>
        ),
        risk_detail: <p className="text-risk-detail">{val.risk_detail}</p>,
        file_attachment:
          link !== "" ? (
            <a href={link} rel="noopener noreferrer" target="_BLANK" className="text-primary">
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
            <MDBBtn
              outline
              rounded
              size="sm"
              color="danger"
              className="px-2"
              onClick={deleteData(val.risk_id)}
            >
              <i className="fas fa-trash mt-0"></i>
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
        },
        {
          label: "หน่วนงานที่บันทึก",
          field: "risk_depart_main_name",
        },
        {
          label: "ประเด็น",
          field: "risk_detail",
        },
        {
          label: "ไฟล์แนบ",
          field: "file_attachment",
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
    setDataRisk(widerData);
    localStorage.setItem("risk-data", JSON.stringify(result.data.dataParse));
  };
  const showData = (id) => () => {
    let riskData = localStorage.getItem("risk-data");
    if (riskData) {
      let arrRisk = JSON.parse(riskData);

      const filteredSets = arrRisk.filter((item) => item.risk_id === id);
      // console.log(filteredSets);
      setShowRisk([...filteredSets]);
    }
    setIsShowModal(true);
  };
  const deleteData = (id) => () => {
    if (id !== "") {
      Swal.fire({
        title: '<i class="fas fa-trash-alt fa-3x text-danger"></i>',
        text: "ต้องการลบข้อมูลหรือไม่?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ตกลง",
        cancelButtonText: "ยกเลิก",
      })
        .then((result) => {
          if (result.isConfirmed) {
            let base_url = `${config.main_config.APP_URL}/deleteRisk/${id}`;
            const header = {
              "Content-Type": "application/json",
            };
            axios.delete(base_url, { headers: header }).then((resp) => {
              if (resp.data.status === 200) {
                loadData(setDataRisk);
              }
            });
          }
        })
        .catch((error) => console.log(error));
    }
  };
  useEffect(() => {
    loadData(setDataRisk);
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
              <MDBCol md="12">
                <MDBCard narrow>
                  <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                    <h5 className="white-text mx-3">รายงานความเสี่ยง</h5>
                    <div>
                      <a href="http://prs.reh.go.th/export-excel/export-reh-risk.php">
                        <MDBBtn color="white" size="sm">
                          <MDBIcon
                            icon="file-excel"
                            size="2x"
                            className="ml-1 text-success"
                          />
                          <span
                            className="text-primary pl-1 font-weight-bold"
                            style={{ fontSize: 14 }}
                          >
                            Export Excel
                          </span>
                        </MDBBtn>
                      </a>
                    </div>
                  </MDBCardHeader>
                  <MDBCardBody cascade>
                    <MDBDataTable
                      striped
                      bordered
                      hover
                      scrollX
                      entriesOptions={[5, 20, 25, 100]}
                      entries={10}
                      pagesAmount={4}
                      data={dataRisk}
                      materialSearch
                      info={true}
                    />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
        </MDBAnimation>
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
    </div>
  );
};

export default ShowDataPage;
