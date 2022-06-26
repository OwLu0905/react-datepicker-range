import { useReducer, useState } from "react";
import DatePicker from "react-datepicker";
import { initialDateState, dateReducer } from "./hook/dateState";
import "react-datepicker/dist/react-datepicker.css";
import Com from "./Com";

function App() {
  const [dateState, dispatch] = useReducer(dateReducer, initialDateState);
  console.log(dateState, "dateState");
  return (
    <div className="App">
      <h1>Date Picker</h1>

      <DatePicker
        selectsRange={true}
        startDate={dateState.start}
        endDate={dateState.end}
        onChange={(update) => {
          dispatch({ type: "dateSelect", date: update });
        }}
        isClearable={true}
      />

      <p>Start time :{dateState.start?.toISOString()}</p>
      <p>End time :{dateState.end?.toISOString()}</p>
      {/* <p>Change Start time :{dateState.changeStart?.toISOString()}</p> */}
      {/* <p>Change End time :{dateState.changeEnd?.toISOString()}</p> */}
      <Com date={dateState} />
    </div>
  );
}

export default App;
