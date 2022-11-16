import supabase from "./supabaseClient";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EventList = () => {
  const [err, setErr] = useState(null);
  const [events, setEvents] = useState(null);

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
    <Box sx={{ width: "100%" }}>
      {err && <p>{err}</p>}
      {events && (
        <Stack
          spacing={0.5}
          minWidth={250}
          maxWidth={400}
          className="Event_List"
        >
          {events.map((events) => (
            <Item>{events.title}</Item>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default EventList;
