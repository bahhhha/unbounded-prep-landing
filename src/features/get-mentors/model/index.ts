import { createStore, sample, createEffect } from "effector";
import { createGate } from "effector-react";
import axios from "axios";
import { Mentor } from "../../../interfaces";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const HomeGate = createGate();
const $mentors = createStore<Mentor[]>([]);

const getMentorsFx = createEffect<void, Mentor[]>();

getMentorsFx.use(async () => {
  const data = await api
    .get("https://upprep-production.up.railway.app/mentors/all")
    .then((res) => res.data);
  return data;
});

sample({
  clock: HomeGate.open,
  target: getMentorsFx,
});

sample({
  source: getMentorsFx.doneData,
  target: $mentors,
});

export { HomeGate, $mentors };
