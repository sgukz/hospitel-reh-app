const DateTimeThai = (datetime, format) => {
  let thmonth = {
    "01": "ม.ค.",
    "02": "ก.พ.",
    "03": "มี.ค.",
    "04": "เม.ย.",
    "05": "พ.ค.",
    "06": "มิ.ย.",
    "07": "ก.ค.",
    "08": "ส.ค.",
    "09": "ก.ย.",
    10: "ต.ค.",
    11: "พ.ย.",
    12: "ธ.ค.",
  };
  let createdDate = "";
  let date = datetime.split(" ");
  let date_str = date[0].split("-");
  let time_str = date[1].split(":");
  let new_date = `${date_str[2]} ${thmonth[date_str[1]]} ${
    parseInt(date_str[0]) + 543
  }`;
  let new_time = `${time_str[0]}:${time_str[1]}`;
  if (format === 1) {
    createdDate = new_date;
  } else if (format === 2) {
    createdDate = new_time;
  }else if (format === 3) {
    createdDate = `${date_str[2]}/${date_str[1]}/${parseInt(date_str[0]) + 543}`
  } else {
    createdDate = new_date + " " + new_time;
  }
  return createdDate;
};

export default DateTimeThai;
