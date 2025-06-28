import { io } from "socket.io-client";
import { BACKEND_END_POINT } from "./constants";

const SOCKET_URL = `${BACKEND_END_POINT}`; 
export const socket = io(SOCKET_URL, { transports: ["websocket"] });
