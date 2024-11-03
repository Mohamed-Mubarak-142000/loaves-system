import moment from "moment";
import "moment/locale/ar";
import "moment-hijri";

const RenderFullDate = () => {
  const gregorianDate = moment().format("dddd, MMMM Do YYYY");
  const hijriDate = moment().format("iYYYY/iM/iD");

  return (
    <div>
      <h2>Today's Date</h2>
      <p>Gregorian Date: {gregorianDate}</p>
      <p>Hijri Date: {hijriDate}</p>
    </div>
  );
};

export default RenderFullDate;
