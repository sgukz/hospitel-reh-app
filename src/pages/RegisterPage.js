import React, { Fragment, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";
import config from "../config";
import liff from "@line/liff";
import Banner from "../assets/images/banner_register.png";

import {
  MDBFreeBird,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBAnimation,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import "./RegisterPage.css";
import SYSandDIA from "../assets/images/pluse_oximeter.png";
import BodyTemp from "../assets/images/body_temp.jpg";
import DateTimeThai from "../data/DateTimeThai";
function toDay() {
  const toTwoDigits = (num) => (num < 10 ? "0" + num : num);
  let strDate = new Date();
  let day = toTwoDigits(strDate.getDate());
  let month = toTwoDigits(parseInt(strDate.getMonth()) + 1);
  let year = strDate.getFullYear();
  return `${year}-${month}-${day}`;
}

function newDayAdd(inputDate, addDay) {
  let d = new Date(inputDate);
  d.setDate(d.getDate() + addDay);
  let mkMonth1 = d.getMonth() + 1;
  let mkMonth2 = new String(mkMonth1);
  if (mkMonth2.length === 1) {
    mkMonth2 = "0" + mkMonth2;
  }
  let mkDay1 = d.getDate();
  let mkDay2 = new String(mkDay1);
  if (mkDay2.length === 1) {
    mkDay2 = "0" + mkDay2;
  }
  let mkYear = d.getFullYear();
  return `${mkYear}-${mkMonth2}-${mkDay2}`;
}

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const today = toDay();

const RegisterPage = () => {
  const [isData, setIsData] = useState(false);
  const [dataPatient, setDataPatient] = useState([]);
  const [userId, setUserID] = useState("");
  const [userHN, setUserHN] = useState("");
  const [userVN, setUserVN] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [userRegDate, setUserRegDate] = useState("");
  const [userDchPlanDate, setUserDchPlanDate] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPreName, setUserPreName] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userIDCard, setUserIDCard] = useState("");
  const [userBirthday, setUserBirthday] = useState("");
  const [userYearOld, setUserYearOld] = useState("");
  const [userBedNumber, setUserBedNumber] = useState("");
  const [dateAssessment, setDateAssessment] = useState(today);
  const [roundAssessment, setRoundAssessment] = useState("");
  const [userSYS, setUserSYS] = useState("");
  const [userDIA, setUserDIA] = useState("");
  const [userPR, setUserPR] = useState("");
  const [userEvaluationTemp, setUserEvaluationTemp] = useState("");
  const [userEvaluationOxygen, setUserEvaluationOxygen] = useState("");
  const [evaluationCough, setEvaluationCough] = useState(0);
  const [evaluationPhlegm, setEvaluationPhlegm] = useState(0);
  const [evaluationGasp, setEvaluationGasp] = useState(0);
  const [evaluationTaste, setEvaluationTaste] = useState(0);
  const [evaluationMuscle, setEvaluationMuscle] = useState(0);
  const [evaluationLiquid, setEvaluationLiquid] = useState(0);
  const [evaluationRash, setEvaluationRash] = useState(0);
  const [evaluationFever, setEvaluationFever] = useState(0);
  const [evaluationSnot, setEvaluationSnot] = useState(0);
  const [evaluationRedEye, setEvaluationRedEye] = useState(0);
  const [evaluationTired, setEvaluationTired] = useState(0);
  const [wantConsultDoctor, setWantConsultDoctor] = useState(0);
  const [errorSPO2, setErrorSPO2] = useState("");
  const handleSearch = (event) => {
    setUserIDCard(event.target.value);
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      handleOnClickSearch(e.target.value);
    }
  };

  const handleClearData = () => {
    setIsData(false);
    setUserHN("");
    setUserVN("");
    setUserWeight("");
    setUserHeight("");
    setUserRegDate("");
    setUserDchPlanDate("");
    setUserPhone("");
    setUserPreName("");
    setUserFirstName("");
    setUserLastName("");
    setUserIDCard("");
    setUserBirthday("");
    setUserYearOld("");
    setUserBedNumber("");
    setRoundAssessment("");
    setUserSYS("");
    setUserDIA("");
    setUserPR("");
    setUserEvaluationTemp("");
    setUserEvaluationOxygen("");
    setEvaluationCough(0);
    setEvaluationPhlegm(0);
    setEvaluationGasp(0);
    setEvaluationTaste(0);
    setEvaluationMuscle(0);
    setEvaluationLiquid(0);
    setEvaluationRash(0);
    setEvaluationFever(0);
    setEvaluationSnot(0);
    setEvaluationRedEye(0);
    setEvaluationTired(0);
    setWantConsultDoctor(0);
  };

  const loadData = (userId) => {
    let baseUrl = `${config.main_config.APP_URL}/getUserByUserID/${userId}`;
    const header = {
      "Content-Type": "application/json",
    };
    axios.get(baseUrl, { headers: header }).then((resp) => {
      let data = resp.data;
      // console.log(data);
      if (data.status === 200) {
        if (data.data.length > 0) {
          if (data.data.length === 1) {
            setDataPatient([]);
            handleOnClickSearch(data.data[0].cid);
          } else {
            setDataPatient(data.data);
          }
        } else {
          Swal.fire({
            title: "คุณเข้าใช้งานครั้งแรก",
            text: "กรุณากรอกเลขบัตรประชาชนเพื่อตรวจสอบข้อมูล หากไม่พบข้อมูลกรุณาติดต่อเจ้าหน้าที่ผ่านช่องทางไลน์ 101 COVID CARE หรือโทร. 1669",
            icon: "warning",
            confirmButtonText: "ปิด",
          });
        }
      } else {
        Swal.fire({
          title: "Error",
          text: JSON.stringify(resp.data.msg),
          icon: "error",
        });
      }
    });
  };

  const handleOnClickSearch = (keyword) => {
    if (keyword !== "") {
      let baseUrl = `${config.main_config.APP_URL}/getUserByCIDNew/${keyword}`;
      const header = {
        "Content-Type": "application/json",
      };
      axios
        .get(baseUrl, { headers: header })
        .then((resp) => {
          if (resp.data.status === 200) {
            if (resp.data.data.length > 0) {
              setDataPatient([]);
              resp.data.data.map((val) => {
                setIsData(true);
                setUserHN(val.hn);
                setUserVN(val.vn);
                setUserWeight(val.weight !== null ? val.weight : "");
                setUserHeight(val.height !== null ? val.height : "");
                setUserRegDate(val.regDate);
                setUserDchPlanDate(val.dchDate);
                setUserPhone(val.phone !== null ? val.phone : "");
                setUserPreName(val.pname);
                setUserFirstName(val.fname);
                setUserLastName(val.lname);
                setUserIDCard(keyword);
                setUserBirthday(val.birthDay);
                setUserYearOld(val.year_old);
                setUserBedNumber(val.bedno !== null ? val.bedno : "");
                setDateAssessment(
                  val.dateAssessment !== null ? val.dateAssessment : today
                );
                setRoundAssessment(
                  val.evaluation_id !== null ? val.evaluation_id : ""
                );
                setUserSYS(
                  val.user_evaluation_sys !== null
                    ? val.user_evaluation_sys
                    : ""
                );
                setUserDIA(
                  val.user_evaluation_dia !== null
                    ? val.user_evaluation_dia
                    : ""
                );
                setUserPR(
                  val.user_evaluation_pr !== null ? val.user_evaluation_pr : ""
                );
                setUserEvaluationTemp(
                  val.user_evaluation_temp !== null
                    ? val.user_evaluation_temp
                    : ""
                );
                setUserEvaluationOxygen(
                  val.user_evaluation_oxygen !== null
                    ? val.user_evaluation_oxygen
                    : ""
                );
                setEvaluationCough(
                  val.user_evaluation_cough !== null
                    ? val.user_evaluation_cough
                    : 0
                );
                setEvaluationPhlegm(
                  val.user_evaluation_phlegm !== null
                    ? val.user_evaluation_phlegm
                    : 0
                );
                setEvaluationGasp(
                  val.user_evaluation_gasp !== null
                    ? val.user_evaluation_gasp
                    : 0
                );
                setEvaluationTaste(
                  val.user_evaluation_taste !== null
                    ? val.user_evaluation_taste
                    : 0
                );
                setEvaluationMuscle(
                  val.user_evaluation_muscle !== null
                    ? val.user_evaluation_muscle
                    : 0
                );
                setEvaluationLiquid(
                  val.user_evaluation_liquid !== null
                    ? val.user_evaluation_liquid
                    : 0
                );
                setEvaluationRash(
                  val.user_evaluation_rash !== null
                    ? val.user_evaluation_rash
                    : 0
                );
                setEvaluationFever(
                  val.user_evaluation_fever !== null
                    ? val.user_evaluation_fever
                    : 0
                );
                setEvaluationSnot(
                  val.user_evaluation_snot !== null
                    ? val.user_evaluation_snot
                    : 0
                );
                setEvaluationRedEye(
                  val.user_evaluation_redeye !== null
                    ? val.user_evaluation_redeye
                    : 0
                );
                setEvaluationTired(
                  val.user_evaluation_tired !== null
                    ? val.user_evaluation_tired
                    : 0
                );
                setWantConsultDoctor(
                  val.want_consult_doctor !== null ? val.want_consult_doctor : 0
                );
                return true;
              });
            } else {
              const base_url = `${config.main_config.APP_URL}/getPatientByCIDNew/${userIDCard}`;
              const header = {
                "Content-Type": "application/json",
              };
              axios
                .get(base_url, { headers: header })
                .then((resp) => {
                  if (resp.data.data.length > 0) {
                    setDataPatient([]);
                    console.log(today);
                    resp.data.data.map((val) => {
                      setIsData(true);
                      setUserIDCard(keyword);
                      setUserPreName(val.pname);
                      setUserFirstName(val.fname);
                      setUserLastName(val.lname);
                      setUserBedNumber(val.cc === null ? "" : val.cc);
                      setDateAssessment(today);
                      setUserHN(val.hn);
                      setUserVN(val.vn);
                      setUserBirthday(val.birthday);
                      setUserYearOld(val.yearOld);
                      setUserRegDate(val.vstDate);
                      setUserDchPlanDate(newDayAdd(val.vstDate, 11));
                      setUserWeight(val.weight);
                      setUserHeight(val.height);
                      setUserPhone(val.hometel);
                      return true;
                    });
                  } else {
                    setDataPatient([]);
                    setIsData(false);
                    Swal.fire({
                      title: "ไม่พบข้อมูล!!!",
                      text: "กรุณาระบุเลขบัตรประชาชนให้ถูกต้อง หากไม่พบข้อมูลกรุณาติดต่อเจ้าหน้าที่ผ่านช่องทางไลน์ 101 COVID CARE หรือโทร. 1669",
                      icon: "warning",
                    });
                  }
                })
                .catch((error) => {
                  const error_code = "Network";
                  if (("" + error).indexOf(error_code) > -1) {
                    Swal.fire({
                      title: "Can't connect service!",
                      text: "Please try again.",
                      icon: "error",
                    });
                  } else {
                    Swal.fire({
                      title: "Error",
                      text: "" + error,
                      icon: "error",
                    });
                  }
                });
            }
          } else {
            Swal.fire({
              title: "Error",
              text: JSON.stringify(resp.data.msg),
              icon: "error",
            });
          }
        })
        .catch((error) => {
          const error_code = "Network";
          if (("" + error).indexOf(error_code) > -1) {
            Swal.fire({
              title: "Can't connect service!",
              text: "Please try again.",
              icon: "error",
            });
          } else {
            Swal.fire({
              title: "Error",
              text: "" + error,
              icon: "error",
            });
          }
        });
    } else {
      Swal.fire({
        title: "แจ้งเตือน",
        text: "โปรดระบุเลขบัตรประชาชน 13 หลัก ก่อนตรวจสอบข้อมูล",
        icon: "error",
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userIDCard !== "") {
      if (roundAssessment !== null) {
        if (userWeight !== "" && userHeight !== "") {
          event.target.className += " was-validated";
          let formDataUser = {
            user_id: userId,
            pname: userPreName,
            fname: userFirstName,
            lname: userLastName,
            cid: userIDCard,
            hn: userHN,
            vn: userVN,
            birthday: userBirthday,
            year_old: userYearOld,
            bedno: userBedNumber,
            regdate: userRegDate,
            dchdate_plan: userDchPlanDate,
            weight: userWeight,
            height: userHeight,
            phone: userPhone,
            created_date: "",
          };

          let formDataUserEvaluation = {
            evaluation_id: roundAssessment,
            user_id: userId,
            user_evaluation_date: dateAssessment,
            user_evaluation_sys: userSYS,
            user_evaluation_dia: userDIA,
            user_evaluation_pr: userPR,
            user_evaluation_temp: userEvaluationTemp,
            user_evaluation_oxygen: userEvaluationOxygen,
            user_evaluation_cough: evaluationCough,
            user_evaluation_phlegm: evaluationPhlegm,
            user_evaluation_gasp: evaluationGasp,
            user_evaluation_taste: evaluationTaste,
            user_evaluation_muscle: evaluationMuscle,
            user_evaluation_liquid: evaluationLiquid,
            user_evaluation_rash: evaluationRash,
            user_evaluation_fever: evaluationFever,
            user_evaluation_snot: evaluationSnot,
            user_evaluation_redeye: evaluationRedEye,
            user_evaluation_tired: evaluationTired,
            want_consult_doctor: wantConsultDoctor,
            created_date: "",
          };
          // console.log({
          //   formDataUser: formDataUser,
          //   formDataUserEvaluation: formDataUserEvaluation,
          // });
          const base_url = `${config.main_config.APP_URL}/saveData`;
          axios
            .post(base_url, {
              formDataUser: formDataUser,
              formDataUserEvaluation: formDataUserEvaluation,
            })
            .then((res) => {
              if (res.data.status_code === 200) {
                Swal.fire({
                  title: res.data.msg,
                  text: "ขอบคุณค่ะ",
                  showDenyButton: false,
                  showCancelButton: false,
                  confirmButtonText: `ตกลง`,
                  icon: res.data.type,
                }).then((result) => {
                  if (result.isConfirmed) {
                    liff.closeWindow();
                  }
                });
              } else {
                console.log(res.data);
                // Swal.fire({
                //   title: "เกิดข้อผิดพลาด",
                //   text: JSON.stringify(res.data.msg),
                //   icon: res.data.type,
                // });
              }
            })
            .catch((error) => {
              console.log(error);
              const error_code = "Network";
              if (("" + error).indexOf(error_code) > -1) {
                Swal.fire({
                  title: "Can't connect service!",
                  text: "Please try again.",
                  icon: "error",
                });
              } else {
                Swal.fire({
                  title: "Error",
                  text: "" + error,
                  icon: "error",
                });
              }
            });
        } else {
          Swal.fire({
            title: "แจ้งเตือน",
            text: "โปรดระบุน้ำหนัก(kg),ส่วนสูง(cm) ของคุณ ก่อนบันทึกข้อมูล",
            icon: "warning",
          });
        }
      } else {
        Swal.fire({
          title: "แจ้งเตือน",
          text: "กรุณาเลือกรอบประเมิน ก่อนบันทึกข้อมูล",
          icon: "warning",
        });
      }
    } else {
      Swal.fire({
        title: "แจ้งเตือน",
        text: "กรุณาตรวจสอบเลขบัตรประชาชน ก่อนบันทึกข้อมูล",
        icon: "warning",
      });
    }
  };

  const InitailizeLiff = () => {
    // loadData(userId);
    liff.init(
      {
        liffId: "1655908292-8K1PQdNe",
      },
      () => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then((profile) => {
            Toast.fire({
              icon: "success",
              title: "Login successfuly",
            });
            setUserID(profile.userId);
            loadData(profile.userId);
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "No login!",
          });
        }
      },
      (err) => console.log(err)
    );
  };

  const renderImage = (sourceImage) => {
    Swal.fire({
      imageUrl: sourceImage,
      imageWidth: 600,
      imageHeight: 250,
      imageAlt: "Custom image",
      confirmButtonText: "ปิด",
    });
  };

  useEffect(() => {
    InitailizeLiff();
    document.title = "ประเมินตนเองประจำวัน - 101 COVID CARE";
  }, []);
  return (
    <div className="flyout">
      <img src={Banner} alt="โรงพยาบาลสนามร้อยเอ็ด" />
      <div className="ml-2 mr-2 mb-3" style={{ marginTop: "118px" }}>
        <MDBAnimation type="zoomIn" duration="500ms">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="12"
                className="mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody>
                  <MDBCol md="12">
                    <div className="blue-text">
                      <MDBRow>
                        <MDBCol md="12">
                          <h5
                            className="text-center font-weight-bold blue lighten-5 py-2"
                            style={{ borderRadius: "20px" }}
                          >
                            ข้อมูลผู้ประเมิน
                          </h5>
                        </MDBCol>
                      </MDBRow>
                    </div>
                    <form className="needs-validation" onSubmit={submitHandler}>
                      <MDBRow>
                        <MDBCol md="12" className="mb-3">
                          {dataPatient.length > 0 && (
                            <Fragment>
                              <strong className="font-weight-bold">
                                เลือกคนที่ต้องการประเมิน
                              </strong>
                              {dataPatient.map((val) => {
                                return (
                                  <div
                                    key={val.cid}
                                    className="text-primary patient-list pl-3 mb-1"
                                    onClick={() => handleOnClickSearch(val.cid)}
                                  >{`${val.fullname}`}</div>
                                );
                              })}
                            </Fragment>
                          )}
                        </MDBCol>
                        <MDBCol md="12">
                          <label className="grey-text">
                            เลขบัตรประชาชน
                            <span className="text-danger ml-1">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="เลขบัตรประชาชน"
                            value={userIDCard}
                            onKeyDown={keyPress}
                            onChange={(val) => {
                              handleSearch(val);
                            }}
                            required
                          />
                          <small className="text-warning pl-2">
                            กรุณากดปุ่ม&nbsp;<kbd>ตรวจสอบ</kbd>
                            &nbsp;เพื่อตรวจสอบข้อมูล
                          </small>
                          <br />
                          <MDBBtn
                            color="primary"
                            className="mt-1 mb-3"
                            size="sm"
                            onClick={() => handleOnClickSearch(userIDCard)}
                            type="button"
                          >
                            ตรวจสอบ
                          </MDBBtn>
                          <MDBBtn
                            color="grey"
                            className="mt-1 mb-3"
                            size="sm"
                            onClick={handleClearData}
                            type="button"
                          >
                            ล้างข้อมูล
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol className="col-12">
                          {isData && (
                            <div>
                              <label className="grey-text mr-3">
                                เลขบัตรประชาชน
                              </label>
                              <strong>{userIDCard}</strong>
                              <br />
                              <label className="grey-text mr-3">HN</label>
                              <strong>{userHN}</strong>
                              <br />
                              <label className="grey-text mr-3">
                                ชื่อ - นามสกุล
                              </label>
                              <strong>{`${userPreName}${userFirstName} ${userLastName}`}</strong>
                              <br />
                              <label className="grey-text mr-3">
                                วัน/เดือน/ปีเกิด
                              </label>
                              <strong>{`${DateTimeThai(
                                userBirthday,
                                1
                              )}`}</strong>
                              <br />
                              <label className="grey-text mr-3">อายุ</label>
                              <strong>{`${userYearOld} ปี`}</strong>
                              <br />
                              <label className="grey-text mr-3">
                                หมายเลขเตียง
                              </label>
                              <strong>{`${userBedNumber}`}</strong>
                            </div>
                          )}
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="8">
                          <label className="grey-text">
                            เบอร์โทร
                            <span className="text-danger ml-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control mb-3 col-8"
                            onChange={(v) => setUserPhone(v.target.value)}
                            value={userPhone}
                            placeholder="กรุณาระบุเบอร์โทร"
                            required
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol className="col-6">
                          <label className="grey-text">
                            น้ำหนัก (กก.)
                            <span className="text-danger ml-1">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control mb-3 col-12"
                            onChange={(v) => setUserWeight(v.target.value)}
                            value={userWeight}
                            placeholder="น้ำหนัก"
                            maxLength="5"
                          />
                        </MDBCol>
                        <MDBCol className="col-6">
                          <label className="grey-text">
                            ส่วนสูง (ซม.)
                            <span className="text-danger ml-1">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control mb-3 col-12"
                            onChange={(v) => setUserHeight(v.target.value)}
                            value={userHeight}
                            placeholder="ส่วนสูง"
                            maxLength="3"
                          />
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <div className="blue-text">
                        <MDBRow>
                          <MDBCol md="12">
                            <h5
                              className="text-center font-weight-bold blue lighten-5 py-2"
                              style={{ borderRadius: "20px" }}
                            >
                              ฟอร์มประเมิน
                            </h5>
                          </MDBCol>
                        </MDBRow>
                      </div>
                      <MDBRow>
                        <MDBCol md="12" className="mb-3">
                          {/* {dateAssessment} */}
                          <label className="grey-text">
                            วันที่ประเมิน
                            <span className="text-danger ml-1">*</span>
                          </label>
                          <input
                            type="date"
                            name="regis_date"
                            className="form-control"
                            onChange={(v) => setDateAssessment(v.target.value)}
                            value={dateAssessment}
                            required
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="12" className="mb-3">
                          <label className="grey-text">
                            รอบประเมิน
                            <span className="text-danger ml-1">*</span>
                          </label>
                          <div>
                            {/* {roundAssessment} */}
                            <div className="custom-control custom-checkbox mb-2 ">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="evaluation1"
                                name="evaluation"
                                onClick={() => setRoundAssessment(1)}
                                checked={roundAssessment === 1}
                                onChange={(e) => {
                                  return e.target.value;
                                }}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="evaluation1"
                              >
                                รอบที่ 1 เวลา 07.00 - 08.30 น.
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="evaluation2"
                                name="evaluation"
                                onClick={() => setRoundAssessment(2)}
                                checked={roundAssessment === 2}
                                onChange={(e) => {
                                  return e.target.value;
                                }}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="evaluation2"
                              >
                                รอบที่ 2 เวลา 14.00 - 15.00 น.
                              </label>
                            </div>
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol className="col-12">
                          <span className="mr-2">
                            (<span className="text-danger mr-1">*</span>
                            หากมีการวัด)
                          </span>
                          <span
                            className="img-exmple blue-text mb-3"
                            onClick={() => renderImage(SYSandDIA)}
                          >
                            ดูภาพตัวอย่าง <MDBIcon far icon="images" />
                          </span>
                        </MDBCol>
                        <MDBCol className="col-6">
                          <label className="blue-text">SYS / DIA (mmHg)</label>
                          <input
                            type="number"
                            className="form-control text-center mb-3 col-12"
                            onChange={(v) => setUserSYS(v.target.value)}
                            placeholder="SYS"
                            value={userSYS}
                          />
                        </MDBCol>
                        <MDBCol>
                          <label className="blue-text">
                            <span className="gray-text small-text">
                              (ความดันโลหิต)
                            </span>
                          </label>
                          <input
                            type="number"
                            className="form-control text-center mb-3 col-12"
                            onChange={(v) => setUserDIA(v.target.value)}
                            placeholder="DIA"
                            value={userDIA}
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol className="col-6">
                          <label className="blue-text">
                            Pulse (bpm)
                            <br />
                            <span className="gray-text small-text">
                              (อัตราการเต้นหัวใจ)
                            </span>
                          </label>
                          <input
                            type="number"
                            className="form-control text-center mb-3 col-12"
                            onChange={(v) => setUserPR(v.target.value)}
                            value={userPR}
                          />
                        </MDBCol>
                        <MDBCol className="col-6">
                          <label className="blue-text">
                            %SpO2
                            <br />
                            <span className="gray-text small-text">
                              (ออกซิเจนปลายนิ้ว)
                            </span>
                          </label>
                          <input
                            type="number"
                            className="form-control text-center col-12"
                            onChange={(v) => {
                              if (+v.target.value <= 100) {
                                setUserEvaluationOxygen(v.target.value);
                                setErrorSPO2("");
                              } else {
                                setErrorSPO2(
                                  "ค่าออกซิเจนในเลือด ค่าสุงสุดไม่เกิน 100"
                                );
                              }
                            }}
                            placeholder=""
                            value={userEvaluationOxygen}
                          />
                          <span className="text-danger small-text">
                            {errorSPO2}
                          </span>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="12">
                          <span
                            className="img-exmple blue-text"
                            onClick={() => renderImage(BodyTemp)}
                          >
                            ดูภาพตัวอย่าง <MDBIcon far icon="images" />
                          </span>
                        </MDBCol>
                        <MDBCol md="6">
                          <label className="blue-text">
                            อุณหภูมิร่างกาย ( ํC) ตัวอย่าง 36.5
                          </label>
                          <input
                            type="text"
                            className="form-control text-center mb-3 col-12"
                            onChange={(v) =>
                              setUserEvaluationTemp(v.target.value)
                            }
                            value={userEvaluationTemp}
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="8" className="mt-4">
                          <label className="blue-text">
                            ท่านมีอาการเหล่านี้หรือไม่
                          </label>
                          <div className="custom-control custom-switch mb-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="user_evaluation_fever"
                              name="user_evaluation_fever"
                              onClick={(e) => {
                                if (e.target.checked) {
                                  setEvaluationFever(1);
                                } else {
                                  setEvaluationFever(0);
                                }
                              }}
                              checked={evaluationFever === 1}
                              onChange={(e) => {
                                return e.target.value;
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="user_evaluation_fever"
                            >
                              {evaluationFever === 1 ? (
                                <small className="pr-3 blue-text">มี</small>
                              ) : (
                                <small className="pr-3 grey-text">ไม่มี</small>
                              )}
                              มีไข้
                            </label>
                          </div>
                          <div className="custom-control custom-switch mb-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="user_evaluation_cough"
                              name="user_evaluation_cough"
                              onClick={(e) => {
                                if (e.target.checked) {
                                  setEvaluationCough(1);
                                } else {
                                  setEvaluationCough(0);
                                }
                              }}
                              checked={evaluationCough === 1}
                              onChange={(e) => {
                                return e.target.value;
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="user_evaluation_cough"
                            >
                              {evaluationCough === 1 ? (
                                <small className="pr-3 blue-text">มี</small>
                              ) : (
                                <small className="pr-3 grey-text">ไม่มี</small>
                              )}
                              ไอ
                            </label>
                          </div>
                          <div className="custom-control custom-switch mb-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="user_evaluation_phlegm"
                              name="user_evaluation_phlegm"
                              onClick={(e) => {
                                if (e.target.checked) {
                                  setEvaluationPhlegm(1);
                                } else {
                                  setEvaluationPhlegm(0);
                                }
                              }}
                              checked={evaluationPhlegm === 1}
                              onChange={(e) => {
                                return e.target.value;
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="user_evaluation_phlegm"
                            >
                              {evaluationPhlegm === 1 ? (
                                <small className="pr-3 blue-text">มี</small>
                              ) : (
                                <small className="pr-3 grey-text">ไม่มี</small>
                              )}
                              มีเสมหะ
                            </label>
                          </div>
                          <div className="custom-control custom-switch mb-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="user_evaluation_gasp"
                              name="user_evaluation_gasp"
                              onClick={(e) => {
                                if (e.target.checked) {
                                  setEvaluationGasp(1);
                                } else {
                                  setEvaluationGasp(0);
                                }
                              }}
                              checked={evaluationGasp === 1}
                              onChange={(e) => {
                                return e.target.value;
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="user_evaluation_gasp"
                            >
                              {evaluationGasp === 1 ? (
                                <small className="pr-3 blue-text">มี</small>
                              ) : (
                                <small className="pr-3 grey-text">ไม่มี</small>
                              )}
                              หอบเหนื่อย
                            </label>
                          </div>
                          <div className="custom-control custom-switch mb-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="user_evaluation_taste"
                              name="user_evaluation_taste"
                              onClick={(e) => {
                                if (e.target.checked) {
                                  setEvaluationTaste(1);
                                } else {
                                  setEvaluationTaste(0);
                                }
                              }}
                              checked={evaluationTaste === 1}
                              onChange={(e) => {
                                return e.target.value;
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="user_evaluation_taste"
                            >
                              {evaluationTaste === 1 ? (
                                <small className="pr-3 blue-text">มี</small>
                              ) : (
                                <small className="pr-3 grey-text">ไม่มี</small>
                              )}
                              ไม่ได้กลิ่น / รับรส
                            </label>
                          </div>
                          <div className="custom-control custom-switch mb-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="user_evaluation_muscle"
                              name="user_evaluation_muscle"
                              onClick={(e) => {
                                if (e.target.checked) {
                                  setEvaluationMuscle(1);
                                } else {
                                  setEvaluationMuscle(0);
                                }
                              }}
                              checked={evaluationMuscle === 1}
                              onChange={(e) => {
                                return e.target.value;
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="user_evaluation_muscle"
                            >
                              {evaluationMuscle === 1 ? (
                                <small className="pr-3 blue-text">มี</small>
                              ) : (
                                <small className="pr-3 grey-text">ไม่มี</small>
                              )}
                              ปวดกล้ามเนื้อ
                            </label>
                          </div>
                          <div className="custom-control custom-switch mb-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="user_evaluation_liquid"
                              name="user_evaluation_liquid"
                              onClick={(e) => {
                                if (e.target.checked) {
                                  setEvaluationLiquid(1);
                                } else {
                                  setEvaluationLiquid(0);
                                }
                              }}
                              checked={evaluationLiquid === 1}
                              onChange={(e) => {
                                return e.target.value;
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="user_evaluation_liquid"
                            >
                              {evaluationLiquid === 1 ? (
                                <small className="pr-3 blue-text">มี</small>
                              ) : (
                                <small className="pr-3 grey-text">ไม่มี</small>
                              )}
                              ถ่ายเหลว
                            </label>
                          </div>
                          <div className="custom-control custom-switch mb-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="user_evaluation_rash"
                              name="user_evaluation_rash"
                              onClick={(e) => {
                                if (e.target.checked) {
                                  setEvaluationRash(1);
                                } else {
                                  setEvaluationRash(0);
                                }
                              }}
                              checked={evaluationRash === 1}
                              onChange={(e) => {
                                return e.target.value;
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="user_evaluation_rash"
                            >
                              {evaluationRash === 1 ? (
                                <small className="pr-3 blue-text">มี</small>
                              ) : (
                                <small className="pr-3 grey-text">ไม่มี</small>
                              )}
                              ผื่น
                            </label>
                          </div>
                          <div className="custom-control custom-switch mb-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="user_evaluation_snot"
                              name="user_evaluation_snot"
                              onClick={(e) => {
                                if (e.target.checked) {
                                  setEvaluationSnot(1);
                                } else {
                                  setEvaluationSnot(0);
                                }
                              }}
                              checked={evaluationSnot === 1}
                              onChange={(e) => {
                                return e.target.value;
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="user_evaluation_snot"
                            >
                              {evaluationSnot === 1 ? (
                                <small className="pr-3 blue-text">มี</small>
                              ) : (
                                <small className="pr-3 grey-text">ไม่มี</small>
                              )}
                              มีน้ำมูก
                            </label>
                          </div>
                          <div className="custom-control custom-switch mb-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="user_evaluation_redeye"
                              name="user_evaluation_redeye"
                              onClick={(e) => {
                                if (e.target.checked) {
                                  setEvaluationRedEye(1);
                                } else {
                                  setEvaluationRedEye(0);
                                }
                              }}
                              checked={evaluationRedEye === 1}
                              onChange={(e) => {
                                return e.target.value;
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="user_evaluation_redeye"
                            >
                              {evaluationRedEye === 1 ? (
                                <small className="pr-3 blue-text">มี</small>
                              ) : (
                                <small className="pr-3 grey-text">ไม่มี</small>
                              )}
                              ตาแดง
                            </label>
                          </div>
                          <div className="custom-control custom-switch mb-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="user_evaluation_tired"
                              name="user_evaluation_tired"
                              onClick={(e) => {
                                if (e.target.checked) {
                                  setEvaluationTired(1);
                                } else {
                                  setEvaluationTired(0);
                                }
                              }}
                              checked={evaluationTired === 1}
                              onChange={(e) => {
                                return e.target.value;
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="user_evaluation_tired"
                            >
                              {evaluationTired === 1 ? (
                                <small className="pr-3 blue-text">มี</small>
                              ) : (
                                <small className="pr-3 grey-text">ไม่มี</small>
                              )}
                              อ่อนเพลีย
                            </label>
                          </div>
                          <div className="custom-control custom-switch mb-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="want_consult_doctor"
                              name="want_consult_doctor"
                              onClick={(e) => {
                                if (e.target.checked) {
                                  setWantConsultDoctor(1);
                                } else {
                                  setWantConsultDoctor(0);
                                }
                              }}
                              checked={wantConsultDoctor === 1}
                              onChange={(e) => {
                                return e.target.value;
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="want_consult_doctor"
                            >
                              {wantConsultDoctor === 1 ? (
                                <small className="pr-3 blue-text">
                                  ต้องการ
                                </small>
                              ) : (
                                <small className="pr-3 grey-text">
                                  ไม่ต้องการ
                                </small>
                              )}
                              ต้องการปรึกษาแพทย์
                            </label>
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBBtn color="info" type="submit" className="mt-4">
                        บันทึก
                      </MDBBtn>
                    </form>
                  </MDBCol>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
        </MDBAnimation>
      </div>
    </div>
  );
};

export default RegisterPage;
