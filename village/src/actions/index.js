import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => {
  const smurfsEndpoint = "http://localhost:3000/smurfs";
  const smurfs = axios.get(smurfsEndpoint);
  return {
    type: GET_SMURFS,
    payload: smurfs
  };
};

export const addSmurf = smurf => {
  const promise = axios.post("http://localhost:5000/new-friend", smurf);
  return {
    type: ADD_SMURF,
    payload: promise
  };
};
