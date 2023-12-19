import React, { useState } from "react";

const Problem1 = () => {
    const [show, setShow] = useState("all");
    const [data, setData] = useState([]);
    const [reserveData, setReserveData] = useState([]);

    const handleInputData = (val) => {
      val.preventDefault();
      const form = val.target;
      const inputName = form.inputName.value;
      const inputStatus = form.inputStatus.value;
      setData([...data, { name: inputName, status: inputStatus }]);
      setReserveData([...data, { name: inputName, status: inputStatus }]);

      form.reset();
    };

    const handleClick = (click) => {
      setShow(click);
      if (click === "all") {
        let active = reserveData.filter((item) => item.status === "Active");
        let completed = reserveData.filter(
          (item) => item.status === "Completed"
        );
        let others = reserveData.filter(
          (item) => item.status !== "Active" && item.status !== "Completed"
        );
        setData([...active, ...completed, ...others]);
      } else if (click === "active") {
        let active = reserveData.filter((item) => item.status === "Active");
        setData([...active]);
      } else if (click === "completed") {
        let completed = reserveData.filter(
          (item) => item.status === "Completed"
        );
        setData([...completed]);
      } else {
        let others = reserveData.filter(
          (item) => item.status !== "Active" && item.status !== "Completed"
        );
        setData([...others]);
      }
    };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleInputData}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                name="inputName"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                name="inputStatus"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => (
                <tr key={i}>
                  <th>{item.name}</th>
                  <th>{item.status}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
