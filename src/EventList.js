import supabase from "./supabaseClient";
import React, { useEffect, useState } from "react";
import "./EventList.css";

const EventList = () => {
  const [err, setErr] = useState(null);
  const [events, setEvents] = useState(null);
  const [showComponent, setShowComponent] = useState(true);
  const handleClick = () => setShowComponent(!showComponent);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("events").select();

      if (error) {
        setErr("Coult not fetch events");
        setEvents(null);
        console.log(error);
      }
      if (data) {
        setEvents(data);
        setErr(null);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div sx={{ display: "flex", width: "100%" }}>
      {err && <p>{err}</p>}
      {events && (
        <div key={events} flex>
          {events.map((events) => (
            <p className="Event_Title" onClick={handleClick}>
              {events.id} {events.title}
              {showComponent && (
                <p>
                  add text here and configure specific onclicks according id
                </p>
              )}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
