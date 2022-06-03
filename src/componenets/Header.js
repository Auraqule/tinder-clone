import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MessageIcon from "@mui/icons-material/Message";
import { IconButton } from "@mui/material";
import "./Header.css";
const Header = () => {
  return (
    <header className="header__container">
      <IconButton>
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <LocalFireDepartmentIcon style={{ color: "red" }} fontSize="large" />
      </IconButton>
      <IconButton>
        <MessageIcon fontSize="large" />
      </IconButton>
    </header>
  );
};

export default Header;
