import { useEffect, useState } from "react";

function Machine() {
  const [machines, setMachines] = useState([]);

  async function getMachines() {
    const response = await fetch("http://localhost:3000/machine");
    if (response.ok) {
      const machines = await response.json();
      setMachines(machines);
    } else {
      console.log("Error:", response.status);
    }
  }

  useEffect(() => {
    getMachines();
  }, []);

  return (
    <div className="catalog">
      <div className="machines">
        {machines.map((machine) => (
          <div key={machine._id} className="card" style={{ width: "18rem" }}>
            <img
              src="https://media.self.com/photos/6398b36c72eb56f726777d06/4:3/w_2560%2Cc_limit/weekly-workout-schedule.jpeg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{machine.name}</h5>
              <p className="card-text">{machine.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Price: ${machine.price}</li>
              <li className="list-group-item">
                Quantity in stock: {machine.quantityInStock}
              </li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Machine;
