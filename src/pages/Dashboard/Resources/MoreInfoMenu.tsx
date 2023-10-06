import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { Delete, Info, MoreHorizRounded, PlayLesson } from "@mui/icons-material";
import BasicModal from "../../../components/Modal";

export default function MoreInforMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
        <MoreHorizRounded />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <PlayLesson sx={{ marginRight: ".5rem" }} />
          Train
        </MenuItem>
        <MenuItem>
          {" "}
          <Info sx={{ marginRight: ".5rem" }} />
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: "red" }}>
          <Delete sx={{ marginRight: ".5rem" }} /> Delete
        </MenuItem>
      </Menu>
    </div>
  );
}
