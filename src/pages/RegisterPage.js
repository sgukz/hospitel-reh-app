import React, { useEffect, useState } from "react";
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
} from "mdbreact";
const RegisterPage = () => {
  const [isData, setIsData] = useState(false);
  const [userId, setUserID] = useState("");
  const [userHN, setUserHN] = useState("");
  const [userAN, setUserAN] = useState("");
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
  const [userBedNumber, setUserBedNumber] = useState("");
  const [dateAssessment, setDateAssessment] = useState("");
  const [roundAssessment, setRoundAssessment] = useState("");
  const [userEvaluationBlood, setUserEvaluationBlood] = useState("");
  const [userEvaluationHeart, setUserEvaluationHeart] = useState("");
  const [userEvaluationBody, setUserEvaluationBody] = useState("");
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

  const handleSearch = (event) => {
    setUserIDCard(event.target.value);
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      handleOnClickSearch(e.target.value);
    }
  };

  const laodData = (userId) => {
    if (userId !== "") {
      const base_url = `${config.main_config.APP_URL}/getUserByUserID/${userId}`;
      const header = {
        "Content-Type": "application/json",
      };
      axios
        .get(base_url, { headers: header })
        .then((resp) => {
          if (resp.data.data.length > 0) {
            resp.data.data.map((val) => {
              setIsData(true);
              setUserPreName(val.pname);
              setUserFirstName(val.fname);
              setUserLastName(val.lname);
              setUserBedNumber(val.bedno);
              setUserHN(val.hn);
              setUserAN(val.an);
              setUserVN(val.vn);
              setUserRegDate(val.regDate);
              setUserDchPlanDate(val.dchDate);
              setUserPhone(val.phone);
            });
          } else {
            Swal.fire({
              title: "แจ้งเตือน",
              text: "ไม่พบข้อมูลของคุณในระบบ กรุณากรอกตรวจสอบเลขบัตรประชาชน",
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
  };

  const handleOnClickSearch = (keyword) => {
    if (keyword !== "") {
      const base_url = `${config.main_config.APP_URL}/getPatientByCID/${keyword}`;
      const header = {
        "Content-Type": "application/json",
      };
      axios
        .get(base_url, { headers: header })
        .then((resp) => {
          if (resp.status === 200) {
            if (resp.data.data.length > 0) {
              // console.log(resp.data.data);
              resp.data.data.map((val) => {
                setIsData(true);
                setUserPreName(val.pname);
                setUserFirstName(val.fname);
                setUserLastName(val.lname);
                setUserBedNumber(val.bedno);
                setUserHN(val.hn);
                setUserAN(val.an);
                setUserVN(val.vn);
                setUserRegDate(val.regdate);
                setUserDchPlanDate(val.dchdate_plan);
              });
            } else {
              setIsData(false);
              setUserBedNumber("");
              Swal.fire({
                title: "ไม่พบข้อมูล!",
                text: "กรุณากรอกเลขบัตรประชาชนให้ถูกต้อง",
                icon: "error",
              });
            }
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
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userPreName !== "") {
      event.target.className += " was-validated";
      let formDataUser = {
        user_id: userId,
        pname: userPreName,
        fname: userFirstName,
        lname: userLastName,
        cid: userIDCard,
        an: userAN,
        hn: userHN,
        vn: userVN,
        bedno: userBedNumber,
        regdate: userRegDate,
        dchdate_plan: userDchPlanDate,
        phone: userPhone,
        created_date: "",
      };

      let formDataUserEvaluation = {
        evaluation_id: roundAssessment,
        user_id: userId,
        user_evaluation_date: dateAssessment,
        user_evaluation_blood: userEvaluationBlood,
        user_evaluation_heart: userEvaluationHeart,
        user_evaluation_body: userEvaluationBody,
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
            Swal.fire({
              title: "เกิดข้อผิดพลาด",
              text: res.data.msg,
              icon: res.data.type,
            });
          }
        })
        .catch((err) => {
          console.log(JSON.stringify(err));
        });
    } else {
      Swal.fire({
        title: "แจ้งเตือน",
        text: "กรุณาตรวจสอบเลขบัตรประชาชน ก่อนบันทึกข้อมูล",
        icon: "warning",
      });
    }
  };

  const InitailizeLiff = () => {
    liff.init(
      {
        liffId: "1655908292-5Y1rqwK3",
      },
      () => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then((profile) => {
            setUserID(profile.userId);
            laodData(profile.userId);
          });
        } else {
          console.log("No login!");
        }
      },
      (err) => console.log(err)
    );
  };

  useEffect(() => {
    InitailizeLiff();
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
                          <small className="red-text pl-2">
                            กรุณากดปุ่มตรวจสอบหลังบันทึกเลขบัตรประชาชน
                          </small>
                          <br />
                          <MDBBtn
                            color="primary"
                            className="mt-1 mb-3"
                            size="sm"
                            onClick={() => handleOnClickSearch(userIDCard)}
                          >
                            ตรวจสอบ
                          </MDBBtn>
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
                            placeholder="กรุณาระบุเบอร์"
                            maxLength="10"
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
                            required
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
                            required
                          />
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
                                หมายเลขเตียง
                              </label>
                              <strong>{`${userBedNumber}`}</strong>
                            </div>
                          )}
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
                                value="1"
                                onChange={(v) =>
                                  setRoundAssessment(v.target.value)
                                }
                              />
                              <label
                                className="custom-control-label"
                                for="evaluation1"
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
                                value="2"
                                onChange={(v) =>
                                  setRoundAssessment(v.target.value)
                                }
                              />
                              <label
                                className="custom-control-label"
                                for="evaluation2"
                              >
                                รอบที่ 2 เวลา 14.00 - 15.00 น.
                              </label>
                            </div>
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="8">
                          <label className="blue-text">
                            ความดันโลหิต (BP) ตัวอย่าง 120/89
                          </label>
                          <input
                            type="text"
                            className="form-control mb-3 col-8"
                            onChange={(v) =>
                              setUserEvaluationBlood(v.target.value)
                            }
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="8">
                          <label className="blue-text">
                            อัตราการเต้นของหัวใจต่อนาที (Pulse per min) ตัวอย่าง
                            98
                          </label>
                          <input
                            type="text"
                            className="form-control mb-3 col-8"
                            onChange={(v) =>
                              setUserEvaluationHeart(v.target.value)
                            }
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="8">
                          <label className="blue-text">
                            อุณหภูมิร่างกาย ( ํC) ตัวอย่าง 36.5
                          </label>
                          <input
                            type="text"
                            className="form-control mb-3 col-8"
                            onChange={(v) =>
                              setUserEvaluationBody(v.target.value)
                            }
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="8">
                          <label className="blue-text">
                            ค่าออกซิเจนในเลือด (SpO2) ตัวอย่าง 99
                          </label>
                          <input
                            type="text"
                            className="form-control col-8"
                            onChange={(v) => {
                              setUserEvaluationOxygen(v.target.value);
                            }}
                          />
                          <small className="orange-text">
                            ค่าออกซิเจนในเลือด ค่าสุงสุดไม่เกิน 100
                          </small>
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
                            />
                            <label
                              className="custom-control-label"
                              for="user_evaluation_fever"
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
                            />
                            <label
                              className="custom-control-label"
                              for="user_evaluation_cough"
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
                            />
                            <label
                              className="custom-control-label"
                              for="user_evaluation_phlegm"
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
                            />
                            <label
                              className="custom-control-label"
                              for="user_evaluation_gasp"
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
                            />
                            <label
                              className="custom-control-label"
                              for="user_evaluation_taste"
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
                            />
                            <label
                              className="custom-control-label"
                              for="user_evaluation_muscle"
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
                            />
                            <label
                              className="custom-control-label"
                              for="user_evaluation_liquid"
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
                            />
                            <label
                              className="custom-control-label"
                              for="user_evaluation_rash"
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
                            />
                            <label
                              className="custom-control-label"
                              for="user_evaluation_snot"
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
                            />
                            <label
                              className="custom-control-label"
                              for="user_evaluation_redeye"
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
                            />
                            <label
                              className="custom-control-label"
                              for="user_evaluation_tired"
                            >
                              {evaluationTired === 1 ? (
                                <small className="pr-3 blue-text">มี</small>
                              ) : (
                                <small className="pr-3 grey-text">ไม่มี</small>
                              )}
                              อ่อนเพลีย
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
