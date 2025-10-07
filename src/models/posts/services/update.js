import { updatedById } from "../db/index.js";

const updatedData = (id,data) => {
updatedById(id,data);
}

export { updatedData };