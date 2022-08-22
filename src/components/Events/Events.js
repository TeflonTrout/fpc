import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../../utils/GQL/useQuery";
import EventCard from "../EventCard/EventCard";
import Helmet from "react-helmet";
import styles from "./Events.module.css";

const Events = () => {
  const [majorEvents, setMajorEvents] = useState([]);
  const [largerEvents, setLargerEvents] = useState([]);
  const [selector, setSelector] = useState("majors");

  const { loading, error, data } = useQuery(GET_EVENTS, {
    variables: { perPage: 150, videogameId: 1 },
  });

  const helmetData = [
    "Genesis 8",
    "Pound 2022",
    "Low Tide City",
    "CEO 2022",
    "Double Down 2022",
  ];

  useEffect(() => {
    console.log(data);
    if (data?.tournaments?.nodes?.length > 1) {
      const checker = (value) => {
        const majorNames = [
          "genesis",
          "double down",
          //   "smash con",
          "pound",
          "riptide",
          "low tide",
          "big house",
          //   "smash world tour",
          "frostbite",
          // "ceo",
          "shine ",
        ];
        for (let index = 0; index < majorNames.length; index++) {
          if (value.name.toLowerCase().indexOf(majorNames[index]) > -1) {
            setMajorEvents((prevState) => [...prevState, value]);
            return value;
          }
        }
      };

      data?.tournaments?.nodes.map((event) => {
        checker(event);
        return null;
      });
      const largerEvents = data?.tournaments?.nodes.filter(
        (item) => item.numAttendees > 100
      );
      setLargerEvents(largerEvents);
    }
  }, [data]);

  return (
    <div className={styles["event-page"]}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Upcoming Events</title>
        <link rel="canonical" href="https://www.wavedash.tech/events" />
        <meta
          property="description"
          content={helmetData[0]}
          key="description"
        />
        <meta
          property="description"
          content={helmetData[1]}
          key="description"
        />
        <meta
          property="description"
          content={helmetData[2]}
          key="description"
        />
        <meta
          property="description"
          content={helmetData[3]}
          key="description"
        />
        <meta
          property="description"
          content={helmetData[4]}
          key="description"
        />
      </Helmet>
      <div className={styles["heading-container"]}>
        <h1 className={styles["heading"]}>
          Upcoming {selector === "majors" ? "Major" : null} Events
        </h1>
        <h3>(I will not be attending all of these, just providing data)</h3>
        <h3>(Events we are attending are marked with a green background!)</h3>
      </div>
      {loading ? <h1>Loading...</h1> : null}
      {error ? <h1>Oops, something isn't right!</h1> : null}
      {data ? (
        <div className={styles["selector"]}>
          <h2
            onClick={() => setSelector("majors")}
            className={
              selector === "majors"
                ? styles["selected"]
                : styles["selector-btn"]
            }
          >
            Majors
          </h2>
          <h2
            onClick={() => setSelector("all")}
            className={
              selector === "all" ? styles["selected"] : styles["selector-btn"]
            }
          >
            All
          </h2>
        </div>
      ) : null}

      {selector === "all"
        ? largerEvents?.map((tournament) => (
            <div key={tournament.id} style={{ width: "90%", margin: "10px" }}>
              <EventCard event={tournament} />
            </div>
          ))
        : null}

      {selector === "majors"
        ? majorEvents?.map((event) => (
            <div key={event.id} style={{ width: "90%", margin: "10px" }}>
              <EventCard event={event} />
            </div>
          ))
        : null}
      <div className={styles["event-footer"]}>
        <h3>
          Data generously provided by
          <a href="smash.gg">
            <img
              src="https://image4.owler.com/logo/smash-gg_owler_20201202_225946_original.png"
              alt="smash.gg"
              width={100}
            />
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Events;
