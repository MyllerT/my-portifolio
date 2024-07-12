
import { Link } from "react-router-dom";
import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }));

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem component={Link} to="/about"></MenuItem>
                    <MenuItem component={Link} to="/skills"></MenuItem>
                    <MenuItem component={Link} to="/projects">Projects</MenuItem>
                    <MenuItem component={Link} to="/">Home</MenuItem> 
                </StyledToolbar>
            </AppBar>
        </>
    );
};

export default NavBar;
