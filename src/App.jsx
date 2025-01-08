import "./App.css";
import MealRateInfo from "./Components/MealRateInfo";
import TodaysMeal from "./Components/TodaysMeal";

function App() {
  return (
    <>
      <div>
        <MealRateInfo />

        {/* todays menu  */}
        <TodaysMeal />

        <marquee
          className="mt-10 font-extrabold font-italic text-red-800"
          behavior="scroll"
          direction="left"
          scrollamount="3"
        >
          10 tar age meal off na korle tor meal off hobe na. ja paris kore nis
          sagoler bassa.
        </marquee>
      </div>
    </>
  );
}

export default App;
