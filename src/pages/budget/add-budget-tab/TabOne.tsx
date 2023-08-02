import React, { useState } from "react";
import TabTwo from "./TabTwo";

type tabOneProp = { onchange: (num: number) => void };
function TabOne({ onchange }: tabOneProp) {
  const [tabHandleClick] = useState(false);

  return (
    <section>
      {/* first box */}
      <div
        className="border-2 border-#E6EAF2 h-28 w-1/2 cursor-pointer rounded-b-md rounded-r-md"
        onClick={onchange.bind(null, 1)}
      >
        <div className="mt-5 ml-20">
          <p className="text-secondary2">Events</p>
          <p className="text-secondary2">Team Event with multiple Employee</p>
          <div>{tabHandleClick && <TabTwo />}</div>
        </div>
      </div>

      {/* second box */}
      <div className="border-2 border-#E6EAF2 h-28 w-1/2 mt-6 cursor-pointer rounded-b-md rounded-r-md" onClick={onchange.bind(null, 1)}>
      <div className="mt-5 ml-20">
        <p className="text-secondary2 open-sans">Hr</p>
        <p className="text-secondary2 open-sans">Expenses for different department</p>
        <div>{tabHandleClick && <TabTwo />}</div>
      </div>
    </div>

    {/* third box  */}
    <div className="border-2 border-#E6EAF2 h-28 w-1/2 mt-6 cursor-pointer rounded-b-md rounded-r-md" onClick={onchange.bind(null, 1)}>
      <div className="mt-5 ml-20">
        <p className="text-secondary2 open-sans">Department</p>
        <p className="text-secondary2">Team Event with multiple Employee</p>
        
        <div>{tabHandleClick && <TabTwo />}</div>
      </div>
    </div>

    {/* fourth box */}
    <div className="border-2 border-#E6EAF2 h-28 mt-6 w-1/2 cursor-pointer rounded-b-md rounded-r-md" onClick={onchange.bind(null, 1)}>
      <div className="mt-5 ml-20">
        <p className="text-secondary2">Operations</p>
        <p className="text-secondary2">Team Event with multiple Employee</p>
        <div>{tabHandleClick && <TabTwo />}</div>
      </div>
    </div>
    </section>
  );
}

export default TabOne;
