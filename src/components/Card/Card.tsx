import { Card as MuiCard, CardContent, CardMedia, Typography, styled } from '@mui/material';

interface CardProps {
    card: {
        id: number;
        title: string;
        description: string;
        image: string;
    };
}

const StyledCard = styled(MuiCard)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    margin: theme.spacing(2),
}));

const Card: React.FC<CardProps> = ({ card }) => {
    return (
        <StyledCard>
            <CardMedia
                component="img"
                height="240"
                image={card.image}
                alt={card.title}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {card.description}
                </Typography>
            </CardContent>
        </StyledCard>
    );
};

export default Card;
