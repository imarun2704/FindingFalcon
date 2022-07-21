import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../Redux/ActionTypes/ActionTypes";
import {
  getPlanetsAction,
  getVehiclesAction,
  getTokenAction,
  getResultAction,
} from "./../../Redux/Actions/Action";
import "./home.css";

const Home = () => {
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [token, setToken] = useState(null);
  const [planetArray, setPlanetArray] = useState([]);
  const [planetObj, setPlanetObj] = useState([]);
  const [vehicleArray, setVehicleArray] = useState([]);
  const [timeTaken, setTimeTaken] = useState(0);
  const [otherVehicles, setOtherVehicles] = useState("");
  const [otherVehicles2, setOtherVehicles2] = useState("");
  const [otherVehicles3, setOtherVehicles3] = useState("");
  const [otherVehicles4, setOtherVehicles4] = useState("");

  const [planetNo, setPlanetNo] = useState([]);
  const [distance, setDistance] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const planetsData = useSelector(
    (state) => state.Reducer && state.Reducer.planetsData
  );
  const vehiclesData = useSelector(
    (state) => state.Reducer && state.Reducer.vehiclesData
  );
  const tokenData = useSelector(
    (state) => state.Reducer && state.Reducer.token
  );

  useEffect(() => {
    getPlanets();
    getVehicles();
    getToken();
  }, []);

  useEffect(() => {
    setPlanets(planetsData);
    setVehicles(vehiclesData);
    setToken(tokenData);
  }, [planetsData, vehiclesData, tokenData]);

  const getPlanets = () => {
    dispatch(getPlanetsAction());
  };

  const getVehicles = () => {
    dispatch(getVehiclesAction());
  };

  const getToken = () => {
    dispatch(getTokenAction());
  };

  const findFalconeAPI = () => {
    const data = {
      token: token,
      planet_names: planetArray,
      vehicle_names: vehicleArray,
    };
    if (data.planet_names.length > 0) {
      dispatch({ type: actionTypes.TIME_TAKEN, payload: timeTaken });
      dispatch(getResultAction(data));
      navigate("/result");
    }
  };

  const handlePlanet = (e, planetInputNo) => {
    setPlanetNo([...planetNo, planetInputNo]);
    setPlanetArray([...planetArray, e.target.value]);

    const planet = planets.filter((el) => el.name === e.target.value);
    setPlanetObj(planet[0]);

    planets.forEach((el) => {
      if (el.name === e.target.value) {
        el["hidden"] = true;
        setDistance(el.distance);
      }
    });
  };

  const handleVehicle = (e, obj, section) => {
    let vehicle = { ...obj };

    vehicles.length > 0 &&
      vehicles.forEach((el, i) => {
        if (el.name === vehicle.name) {
          if (el.total_no > 0) {
            vehicles[i].total_no = vehicles[i].total_no - 1;
            el["hidden"] = true;
            if (section === "1") setOtherVehicles("clicked");
            if (section === "2") setOtherVehicles2("clicked");
            if (section === "3") setOtherVehicles3("clicked");
            if (section === "4") setOtherVehicles4("clicked");
          }
        }
      });

    const distance = planetObj && planetObj.distance;
    const speed = vehicle && vehicle.speed;
    const time = distance / speed;
    setTimeTaken(timeTaken + time);
    setVehicleArray([...vehicleArray, e.target.value]);

  };

  return (
    <div className="Home">
      <div className="title">Select Planets you want to search in</div>
      <div className="planet-div">
        <div>
          <div className="planet">
            <div className="stage">
              <select
                className="ball"
                autoComplete="on"
                onChange={(e) => handlePlanet(e, "1")}
              >
                <option value="" selected disabled>
                  Select Planet
                </option>
                {planets.length > 0
                  ? planets.map((planet, i) => {
                      return (
                        <option
                          key={planet.name}
                          hidden={planet.hidden ? true : false}
                          value={planet.name}
                        >
                          {planet.name}
                        </option>
                      );
                    })
                  : ""}
              </select>
            </div>
          </div>
          {planetNo.includes("1") && (
            <div className="rocket-div">
              {vehicles.length > 0
                ? vehicles.map((vehicle, i) => {
                    return (
                      <div className="rockets radiobtn" key={vehicle.name}>
                         {" "}
                        <input
                          type="radio"
                          disabled={
                            distance > vehicle.max_distance ||
                            vehicle.total_no === 0 ||
                            otherVehicles !== ""
                          }
                          onChange={(e) => handleVehicle(e, vehicle, "1")}
                          id={vehicle.name + "1"}
                          name={"1"}
                          value={vehicle.name}
                        />
                         {" "}
                        <label
                          for={vehicle.name + "1"}
                          className={
                            distance > vehicle.max_distance
                              ? "radio-label-disabled"
                              : vehicle.total_no === 0
                              ? "radio-label-disabled"
                              : otherVehicles !== ""
                              ? "radio-label-disabled"
                              : "radio-label"
                          }
                        >
                          {vehicle.name} ({vehicle.total_no}){" "}
                        </label>
                      </div>
                    );
                  })
                : ""}
            </div>
          )}
        </div>

        <div>
          <div className="planet">
            <div className="stage">
              <select
                disabled={otherVehicles === ""}
                className="ball"
                onChange={(e) => handlePlanet(e, "2")}
              >
                <option value="" selected disabled>
                  Select Planet
                </option>
                {planets.length > 0
                  ? planets.map((planet) => {
                      return (
                        <option
                          key={planet.name}
                          hidden={planet.hidden ? true : false}
                          value={planet.name}
                        >
                          {planet.name}
                        </option>
                      );
                    })
                  : ""}
              </select>
            </div>
          </div>
          {planetNo.includes("2") && (
            <div className="rocket-div">
              {vehicles.length > 0
                ? vehicles.map((vehicle, i) => {
                    return (
                      <div className="rockets radiobtn" key={vehicle.name}>
                         {" "}
                        <input
                          type="radio"
                          disabled={
                            distance > vehicle.max_distance ||
                            vehicle.total_no === 0 ||
                            otherVehicles2 !== ""
                          }
                          onChange={(e) => handleVehicle(e, vehicle, "2")}
                          id={vehicle.name + "2"}
                          name={"2"}
                          value={vehicle.name}
                        />
                         {" "}
                        <label
                          for={vehicle.name + "2"}
                          className={
                            distance > vehicle.max_distance
                              ? "radio-label-disabled"
                              : vehicle.total_no === 0
                              ? "radio-label-disabled"
                              : otherVehicles2 !== ""
                              ? "radio-label-disabled"
                              : "radio-label"
                          }
                        >
                          {vehicle.name} ({vehicle.total_no}){" "}
                        </label>
                      </div>
                    );
                  })
                : ""}
            </div>
          )}
        </div>

        <div>
          <div className="planet">
            <div className="stage">
              <select
                disabled={otherVehicles2 === ""}
                autoComplete="on"
                className="ball"
                onChange={(e) => handlePlanet(e, "3")}
              >
                <option value="" selected disabled>
                  Select Planet
                </option>
                {planets.length > 0
                  ? planets.map((planet, i) => {
                      return (
                        <option
                          key={planet.name}
                          hidden={planet.hidden ? true : false}
                          value={planet.name}
                        >
                          {planet.name}
                        </option>
                      );
                    })
                  : ""}
              </select>
            </div>
          </div>
          {planetNo.includes("3") && (
            <div className="rocket-div">
              {vehicles.length > 0
                ? vehicles.map((vehicle, i) => {
                    return (
                      <div className="rockets radiobtn" key={vehicle.name}>
                         {" "}
                        <input
                          type="radio"
                          disabled={
                            distance > vehicle.max_distance ||
                            vehicle.total_no === 0 ||
                            otherVehicles3 !== ""
                          }
                          onChange={(e) => handleVehicle(e, vehicle, "3")}
                          id={vehicle.name + "3"}
                          name={"3"}
                          value={vehicle.name}
                        />
                         {" "}
                        <label
                          for={vehicle.name + "3"}
                          className={
                            distance > vehicle.max_distance
                              ? "radio-label-disabled"
                              : vehicle.total_no === 0
                              ? "radio-label-disabled"
                              : otherVehicles3 !== ""
                              ? "radio-label-disabled"
                              : "radio-label"
                          }
                        >
                          {vehicle.name} ({vehicle.total_no}){" "}
                        </label>
                      </div>
                    );
                  })
                : ""}
            </div>
          )}
        </div>

        <div>
          <div className="planet">
            <div className="stage">
              <select
                disabled={otherVehicles3 === ""}
                autoComplete="on"
                className="ball"
                onChange={(e) => handlePlanet(e, "4")}
              >
                <option value="" selected disabled>
                  Select Planet
                </option>
                {planets.length > 0
                  ? planets.map((planet, i) => {
                      return (
                        <option
                          key={planet.name}
                          hidden={planet.hidden ? true : false}
                          value={planet.name}
                        >
                          {planet.name}
                        </option>
                      );
                    })
                  : ""}
              </select>
            </div>
          </div>
          {planetNo.includes("4") && (
            <div className="rocket-div">
              {vehicles.length > 0
                ? vehicles.map((vehicle, i) => {
                    return (
                      <div className="rockets radiobtn" key={vehicle.name}>
                         {" "}
                        <input
                          type="radio"
                          disabled={
                            distance > vehicle.max_distance ||
                            vehicle.total_no === 0 ||
                            otherVehicles4 !== ""
                          }
                          onChange={(e) => handleVehicle(e, vehicle, "4")}
                          id={vehicle.name + "4"}
                          name={"4"}
                          value={vehicle.name}
                        />
                         {" "}
                        <label
                          for={vehicle.name + "4"}
                          className={
                            distance > vehicle.max_distance
                              ? "radio-label-disabled"
                              : vehicle.total_no === 0
                              ? "radio-label-disabled"
                              : otherVehicles4 !== ""
                              ? "radio-label-disabled"
                              : "radio-label"
                          }
                        >
                          {vehicle.name} ({vehicle.total_no}){" "}
                        </label>
                      </div>
                    );
                  })
                : ""}
            </div>
          )}
        </div>
      </div>

      <div className="time-taken">Time Taken : {timeTaken}</div>

      <div>
        <button className="find-btn" onClick={findFalconeAPI}>
          {" "}
          Find Falcon{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;
