import StarIcon from "@mui/icons-material/Star";

export default function BadgeStyle() {
  return (
    <span
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        margin: 0,
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
