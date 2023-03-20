import styles from "@/styles/CalculatorOutput.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { totalCostCalculate } from "./formulas";

const CalculatorOutput = () => {
  const initialInput = {
    edition: "",
    copies: "",
    pages: "",
    perPlateCost: "",
    perRimPageCost: "",
    perCoverBoardCost: "",
    totalCoverPrintCost: "",
    totalBookPrintCost: "",
    coverLaminationCost: "",
    coverCrisingCost: "",
    bookBindingCost: "",
  };

  const [calcInput, setCalcInput] = useState(initialInput);

  const [finalOutput, setFinalOutput] = useState({
    totalPlates: 0,
    totalPlateCost: 0,
    totalRimOfPapers: 0,
    totalPaperCost: 0,
    totalCoverBoards: 0,
    totalCoverBoardCost: 0,
    totalLaminationCost: 0,
    totalCrisingCost: 0,
    totalBookBindingCost: 0,
    totalCost: 0,
    perPieceCost: 0,
  });

  useEffect(() => {
    const data = localStorage.getItem("calculatorInput");
    if (data) {
      setCalcInput(JSON.parse(data));
      const result = totalCostCalculate(JSON.parse(data));
      setFinalOutput(result);
    }
  }, []);

  return (
    <div className={styles.compWrapper}>
      <h2>Book Cost Calculator</h2>
      <div className={styles.formWrapper}>
        {calcInput ? (
          <TableContainer>
            <Table sx={{ maxWidth: 500 }} className={styles.form}>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      color: "#6a63a9",
                      letterSpacing: "0.8px",
                      textTransform: "uppercase",
                    }}
                    align="left"
                  >
                    Items
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      color: "#6a63a9",
                      letterSpacing: "0.8px",
                      textTransform: "uppercase",
                    }}
                    align="right"
                  >
                    Amount
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* total plates */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">Total Plates</TableCell>
                  <TableCell align="right">
                    {finalOutput?.totalPlates}
                  </TableCell>
                </TableRow>
                {/* total plate cost */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">Total Plate Cost </TableCell>
                  <TableCell align="right">
                    {finalOutput?.totalPlateCost}
                  </TableCell>
                </TableRow>
                {/* total rim of papers */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">Total Rim of Papers </TableCell>
                  <TableCell align="right">
                    {finalOutput?.totalRimOfPapers}
                  </TableCell>
                </TableRow>
                {/* total paper cost */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">Total Paper Cost </TableCell>
                  <TableCell align="right">
                    {finalOutput?.totalPaperCost}
                  </TableCell>
                </TableRow>
                {/* cover board */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">Total Cover Boards </TableCell>
                  <TableCell align="right">
                    {finalOutput?.totalCoverBoards}
                  </TableCell>
                </TableRow>
                {/* cover boards cost */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">Total Cover Board Cost </TableCell>
                  <TableCell align="right">
                    {finalOutput?.totalCoverBoardCost}
                  </TableCell>
                </TableRow>
                {/* lamination cost */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">Total Lamination Cost </TableCell>
                  <TableCell align="right">
                    {finalOutput?.totalLaminationCost}
                  </TableCell>
                </TableRow>
                {/* crising cost */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">Total Crising Cost </TableCell>
                  <TableCell align="right">
                    {finalOutput?.totalCrisingCost}
                  </TableCell>
                </TableRow>
                {/* Binding cost */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">Total Binding Cost </TableCell>
                  <TableCell align="right">
                    {finalOutput?.totalBookBindingCost}
                  </TableCell>
                </TableRow>
                {/* Cover print cost */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">Total Cover Print Cost </TableCell>
                  <TableCell align="right">
                    {calcInput?.totalCoverPrintCost}
                  </TableCell>
                </TableRow>
                {/* book print cost */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">Total Book Print Cost </TableCell>
                  <TableCell align="right">
                    {calcInput?.totalBookPrintCost}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : null}
        <div className={styles.result}>
          <div className={styles.resultItem}>
            <h5>Total Cost</h5>
            <p>{finalOutput?.totalCost}</p>
          </div>
          <div className={styles.resultItem}>
            <h5>Per piece Cost</h5>
            <p>{finalOutput?.perPieceCost}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorOutput;

/*
  NOTE: necessary calculations formulas

  let totalPlates = pages/4; // m = (y/4)

  let totalPlateCost = totalPlates * perPlateCost; // m*w1
  
  let totalRimOfPapers = (pages * copies)/8000; // (y*x)/8000
  
  let totalPaperCost = totalRimOfPapers * perRimPageCost; // (y*x*z)/8000
  
  let totalCoverBoards = copies/8; // n = x/8
  
  let totalCoverBoardCost = totalCoverBoards * perCoverBoardCost; // n*w2
  
  let totalLaminationCost = copies * coverLaminationCost; 
  
  let totalCrisingCost = copies * coverCrisingCost;
  
  let totalBookBindingCost = copies * bookBindingCost;

*/
