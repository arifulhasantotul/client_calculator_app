import { CircularProgress } from "@mui/material";

const LoadingBtn = ({ text = "Loading..." }) => {
  const buttonWrapperStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    color: "#6ca2f7",
  };

  const buttonStyle = {
    width: "max-content",
    height: "max-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #6ca2f7",
    borderRadius: "5px",
    padding: "5px 10px",
    marginTop: "20px",
  };
  return (
    <div style={buttonWrapperStyle}>
      <div style={buttonStyle}>
        <CircularProgress
          style={{
            marginRight: "10px",
          }}
          size={20}
        />{" "}
        {text}
      </div>
    </div>
  );
};

export default LoadingBtn;
