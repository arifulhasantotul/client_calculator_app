import qna from "@/public/qna_logo.png";
import styles from "@/styles/CalculatorOutput.module.css";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdCheck } from "react-icons/md";
import { totalCostCalculate } from "./formulas";

const CalculatorOutput = () => {
  const router = useRouter();
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

  const handleComplete = async () => {
    try {
      localStorage.removeItem("calculatorInput");
      setCalcInput(initialInput);
      setFinalOutput({
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
      router.push("/");
    } catch (err) {
      console.log(
        "🚀 ~ file: CalculatorOutput.js:69 ~ handleComplete ~ err:",
        err
      );
    }
  };

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
      <div className={styles.page_head}>
        <div className={styles.logo}>
          <Image src={qna} alt="qna_logo" layout="fill" />
        </div>
        <h2>Book Cost Calculator</h2>
      </div>
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
                    {calcInput?.edition === 1 ? finalOutput?.totalPlates : 0}
                  </TableCell>
                </TableRow>
                {/* total plate cost */}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">Total Plate Cost </TableCell>
                  <TableCell align="right">
                    {calcInput?.edition === 1 ? finalOutput?.totalPlateCost : 0}
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
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#6a63a9",
            }}
          >
            Want to become our dealer?{" "}
            <a
              href="https://forms.gle/CkabbkoTVSpiEE887"
              target="_blank"
              style={{
                cursor: "pointer",
              }}
            >
              <u>Fill up this form</u>
            </a>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="outlined"
              color="success"
              endIcon={<MdCheck />}
              onClick={handleComplete}
              title="Clear all data and go to home page"
            >
              Complete
            </Button>
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
