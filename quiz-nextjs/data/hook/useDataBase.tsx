import { useContext } from "react";
import DbContext from "../context/DataBaseContext";

const useDataBase = () => useContext(DbContext)

export default useDataBase