import {
  Button,
  Divider,
  Drawer,
  List,
  Typography,
  styled,
} from "@mui/material";

import routes from "../../routes/routes";

const HeaderLink = styled("a")`
  text-decoration: none;
  position: relative;
  color: graytext;

  &:hover {
    color: black;
  }
`;

const StyledDrawer = styled(Drawer)({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "300px",
    boxSizing: "border-box",
    backgroundColor: "#fadd75",
    padding: "20px",
    "& .MuiListItemButton-root:hover": {
      backgroundColor: "white",
      color: "white",
    },
  },
});

interface AppDrawerProps {
  open: boolean;
  onClose?: () => void;
}

export default function AppDrawer({ open, onClose }: AppDrawerProps) {
  const services = [
    { linkname: "HOME", url: routes.HOME },
    { linkname: "PRODUCTS", url: routes.PRODUCTS },
    { linkname: "ABOUT", url: routes.ABOUT },
    { linkname: "BLOG", url: routes.BLOG },
    { linkname: "CONTACT", url: routes.CONTACT },
  ];

  return (
    <StyledDrawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Divider />
      <Button
        fullWidth
        style={{
          background: "black",
          color: "white",
          borderRadius: "10px",
          fontSize: "18px",
          textTransform: "none",
          maxWidth: "230px",
          width: "100%",
          padding: "10px",
        }}
      >
        Buy now
      </Button>
      <List>
        {services.map((service, index) => (
          <HeaderLink
            href={service.url}
            // onClick={() => handleMenuClick(service.url)}
            key={index}
            className="service-item"
          >
            <Typography
              fontSize="22px"
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              fontWeight={500}
              padding={2}
              color={"black"}
            >
              {service.linkname}
            </Typography>
          </HeaderLink>
        ))}
      </List>
    </StyledDrawer>
  );
}
