import { Divider, Drawer, List, Typography, styled } from "@mui/material";

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
    { linkname: "ABOUT", url: routes.ABOUT },

    { linkname: "PRODUCTS", url: routes.PRODUCTS },
    { linkname: "CONTACT US", url: routes.CONTACT },
  ];

  return (
    <StyledDrawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Divider />

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
