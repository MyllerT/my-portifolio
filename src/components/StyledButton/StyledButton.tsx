import { styled } from "@mui/material";
import { ReactNode, MouseEventHandler } from "react";

interface StyledButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
    const Button = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        },
    }));

    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    );
};

export default StyledButton;
