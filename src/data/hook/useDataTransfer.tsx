import { useContext } from "react";
import DbContext from "../context/DataBaseContext";
import TransferContext from "../context/DataTransferContext";

const useDataTrasnfer = () => useContext(TransferContext)

export default useDataTrasnfer;