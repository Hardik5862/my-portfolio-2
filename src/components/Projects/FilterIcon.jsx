import { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from "@material-ui/icons/FilterList";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const FilterIcon = ({ handleTitle }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (text) => {
    handleTitle(text);
    handleClose();
  };

  return (
    <>
      <IconButton
        aria-label="filter projects"
        aria-controls="simple-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        <FilterListIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSelect("Top Projects")}>
          Top Projects
        </MenuItem>
        <MenuItem onClick={() => handleSelect("Web Development")}>
          Web Development
        </MenuItem>
        <MenuItem onClick={() => handleSelect("Graphic Design")}>
          Graphic Design
        </MenuItem>
      </Menu>
    </>
  );
};

export default FilterIcon;
