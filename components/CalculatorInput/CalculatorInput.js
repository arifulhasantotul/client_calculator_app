import LoadingBtn from "@/components/LoadingBtn/LoadingBtn";
import styles from "@/styles/CalculatorInput.module.css";
import { saveToLocalStorage } from "@/utils/temporarySave";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdClear, MdSend } from "react-icons/md";
import CustomAlert from "../CustomAlert/CustomAlert";

const CalculatorInput = () => {
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
  const [errorCalcInput, setErrorCalcInput] = useState(initialInput);

  const [isLoading, setIsLoading] = useState(false);
  const [finalErr, setFinalErr] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCalcInput((prev) => ({ ...prev, [name]: value ? parseInt(value) : 0 }));
  };

  const checkValidation = (e) => {
    const { name, value } = e.target;
    let errMsg =
      name === "edition"
        ? "Please select an edition!"
        : "Please provide positive amount!";
    if (value === "") {
      setErrorCalcInput((prev) => ({ ...prev, [name]: "Required!" }));
    } else if (value <= 0) {
      setErrorCalcInput((prev) => ({
        ...prev,
        [name]: errMsg,
      }));
    } else {
      setErrorCalcInput((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleReset = () => {
    setCalcInput(initialInput);
    setErrorCalcInput(initialInput);
    localStorage.removeItem("calculatorInput");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    try {
      // checking for any error
      const allErrors = Object.values(errorCalcInput);
      allErrors.forEach((err) => {
        if (err !== "") {
          hasError = true;
          return;
        }
      });
      // checking for any empty input
      const allValues = Object.values(calcInput);
      allValues.forEach((val) => {
        if (val === "" || val <= 0) {
          hasError = true;
          return;
        }
      });
      // if no error then proceed
      saveToLocalStorage("calculatorInput", calcInput);
      if (!hasError) {
        router.push("/output");
      }
    } catch (err) {
      console.log(
        "🚀 ~ file: CalculatorInput.js:91 ~ handleSubmit ~ err:",
        err
      );
      setFinalErr(true);
    } finally {
      !hasError ? setShowSuccess(true) : setFinalErr(true);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("calculatorInput");
    if (data) {
      setCalcInput(JSON.parse(data));
    }
  }, []);

  return (
    <div className={styles.compWrapper}>
      <h2>Book Cost Calculator</h2>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        {/* edition */}
        <div className={styles.formGroup}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Edition</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="edition"
              value={calcInput?.edition || ""}
              label="Edition"
              onChange={handleChange}
              onBlur={checkValidation}
              error={errorCalcInput?.edition ? true : false}
            >
              <MenuItem value={1}>1st Edition</MenuItem>
              <MenuItem value={2}>Next Edition</MenuItem>
            </Select>
          </FormControl>
        </div>
        {errorCalcInput?.edition && (
          <p className={styles.error}>&#9888; {errorCalcInput?.edition}</p>
        )}
        {/* copies */}
        <div className={styles.formGroup}>
          <TextField
            fullWidth
            id="standard-number"
            label="Number of copies"
            type="number"
            name="copies"
            value={calcInput?.copies || ""}
            variant="outlined"
            onChange={handleChange}
            onBlur={checkValidation}
            error={errorCalcInput?.copies ? true : false}
          />
        </div>
        {errorCalcInput?.copies && (
          <p className={styles.error}>&#9888; {errorCalcInput?.copies}</p>
        )}
        {/* pages */}
        <div className={styles.formGroup}>
          <TextField
            fullWidth
            id="standard-number"
            label="Number of pages"
            type="number"
            name="pages"
            value={calcInput?.pages || ""}
            variant="outlined"
            onChange={handleChange}
            onBlur={checkValidation}
            error={errorCalcInput?.pages ? true : false}
          />
        </div>
        {errorCalcInput?.pages && (
          <p className={styles.error}>&#9888; {errorCalcInput?.pages}</p>
        )}
        {/* plate cost */}
        <div className={styles.formGroup}>
          <TextField
            fullWidth
            id="standard-number"
            label="Per plate cost"
            type="number"
            name="perPlateCost"
            value={calcInput?.perPlateCost || ""}
            variant="outlined"
            onChange={handleChange}
            onBlur={checkValidation}
            error={errorCalcInput?.perPlateCost ? true : false}
          />
        </div>
        {errorCalcInput?.perPlateCost && (
          <p className={styles.error}>&#9888; {errorCalcInput?.perPlateCost}</p>
        )}
        {/* rim page cost */}
        <div className={styles.formGroup}>
          <TextField
            fullWidth
            id="standard-number"
            label="Paper cost per rim"
            type="number"
            name="perRimPageCost"
            value={calcInput?.perRimPageCost || ""}
            variant="outlined"
            onChange={handleChange}
            onBlur={checkValidation}
            error={errorCalcInput?.perRimPageCost ? true : false}
          />
        </div>
        {errorCalcInput?.perRimPageCost && (
          <p className={styles.error}>
            &#9888; {errorCalcInput?.perRimPageCost}
          </p>
        )}
        {/* cover board cost */}
        <div className={styles.formGroup}>
          <TextField
            fullWidth
            id="standard-number"
            label="Cover board cost (Per piece)"
            type="number"
            name="perCoverBoardCost"
            value={calcInput?.perCoverBoardCost || ""}
            variant="outlined"
            onChange={handleChange}
            onBlur={checkValidation}
            error={errorCalcInput?.perCoverBoardCost ? true : false}
          />
        </div>
        {errorCalcInput?.perCoverBoardCost && (
          <p className={styles.error}>
            &#9888; {errorCalcInput?.perCoverBoardCost}
          </p>
        )}
        {/* cover print */}
        <div className={styles.formGroup}>
          <TextField
            fullWidth
            id="standard-number"
            label="Cover printing cost (Total)"
            type="number"
            name="totalCoverPrintCost"
            value={calcInput?.totalCoverPrintCost || ""}
            variant="outlined"
            onChange={handleChange}
            onBlur={checkValidation}
            error={errorCalcInput?.totalCoverPrintCost ? true : false}
          />
        </div>
        {errorCalcInput?.totalCoverPrintCost && (
          <p className={styles.error}>
            &#9888; {errorCalcInput?.totalCoverPrintCost}
          </p>
        )}
        {/* book printing cost */}
        <div className={styles.formGroup}>
          <TextField
            fullWidth
            id="standard-number"
            label="Book printing cost (Total)"
            type="number"
            name="totalBookPrintCost"
            value={calcInput?.totalBookPrintCost || ""}
            variant="outlined"
            onChange={handleChange}
            onBlur={checkValidation}
            error={errorCalcInput?.totalBookPrintCost ? true : false}
          />
        </div>
        {errorCalcInput?.totalBookPrintCost && (
          <p className={styles.error}>
            &#9888; {errorCalcInput?.totalBookPrintCost}
          </p>
        )}
        {/* cover lamination */}
        <div className={styles.formGroup}>
          <TextField
            fullWidth
            id="standard-number"
            label="Cover lamination cost (Per piece)"
            type="number"
            name="coverLaminationCost"
            value={calcInput?.coverLaminationCost || ""}
            variant="outlined"
            onChange={handleChange}
            onBlur={checkValidation}
            error={errorCalcInput?.coverLaminationCost ? true : false}
          />
        </div>
        {errorCalcInput?.coverLaminationCost && (
          <p className={styles.error}>
            &#9888; {errorCalcInput?.coverLaminationCost}
          </p>
        )}
        {/* cover cruising cost */}
        <div className={styles.formGroup}>
          <TextField
            fullWidth
            id="standard-number"
            label="Cover crising cost (Per piece)"
            type="number"
            name="coverCrisingCost"
            error={errorCalcInput?.coverCrisingCost ? true : false}
            value={calcInput?.coverCrisingCost || ""}
            variant="outlined"
            onChange={handleChange}
            onBlur={checkValidation}
          />
        </div>
        {errorCalcInput?.coverCrisingCost && (
          <p className={styles.error}>
            &#9888; {errorCalcInput?.coverCrisingCost}
          </p>
        )}
        {/* book binding cost */}
        <div className={styles.formGroup}>
          <TextField
            fullWidth
            id="standard-number"
            label="Book binding cost (Per piece)"
            type="number"
            name="bookBindingCost"
            error={errorCalcInput?.bookBindingCost ? true : false}
            value={calcInput?.bookBindingCost || ""}
            variant="outlined"
            onChange={handleChange}
            onBlur={checkValidation}
          />
        </div>
        {errorCalcInput?.bookBindingCost && (
          <p className={styles.error}>
            &#9888; {errorCalcInput?.bookBindingCost}
          </p>
        )}
        {!isLoading ? (
          <div className={styles.btnGroup}>
            <Button
              variant="outlined"
              color="error"
              startIcon={<MdClear />}
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button type="submit" variant="contained" endIcon={<MdSend />}>
              Proceed
            </Button>
          </div>
        ) : (
          <LoadingBtn />
        )}
      </form>
      {finalErr ? (
        <CustomAlert
          type="error"
          msg={"Please fill all the fields!"}
          open={finalErr}
          setOpen={setFinalErr}
        />
      ) : null}
      {showSuccess ? (
        <CustomAlert
          type="success"
          msg="Submitted successfully!"
          open={showSuccess}
          setOpen={setShowSuccess}
        />
      ) : null}
    </div>
  );
};

export default CalculatorInput;
