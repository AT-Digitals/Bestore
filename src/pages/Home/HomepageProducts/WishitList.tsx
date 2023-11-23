import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

interface AlignProps {
  right: any;
}

export default function WishtList({ right }: AlignProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <span
      style={{
        position: "absolute",
        top: 0,
      }}
      onClick={handleFavoriteClick}
    >
      {isFavorited ? (
        <FavoriteIcon
          style={{
            color: "red",
            position: "absolute",
            top: "10px",
            right: right,
            cursor: "pointer",
          }}
        />
      ) : (
        <FavoriteBorderOutlinedIcon
          style={{
            position: "absolute",
            top: "10px",
            right: right,
            cursor: "pointer",
          }}
        />
      )}
    </span>
  );
}
