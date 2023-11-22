import StarIcon from "@mui/icons-material/Star";

export default function BadgeStyle1() {
  return (
    <span
      style={{
        position: "absolute",
        left: 141,
        margin: 35,
        width: 0,
        height: 0,
        borderTop: "70px solid #eb3c70",
        borderRight: "70px solid transparent",
        borderBottom: "20px solid transparent",
      }}
    >
      <StarIcon
        style={{
          color: "white",
          position: "absolute",
          top: "-60px",
          left: "8px",
        }}
      />
    </span>
  );
}
