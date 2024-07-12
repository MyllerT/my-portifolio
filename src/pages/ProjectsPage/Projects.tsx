import { useState } from 'react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import Card from '../../components/Card/Card';
import { AnimatedBackground } from '../../components/AnimatedBackground/AnimatedBackground';
import avatarImage from '../../assets/images/Captura de tela de 2024-07-05 20-23-01.png';
import avatarImage1 from '../../assets/images/avatar.jpg'; 

import StyledButton from "../../components/StyledButton/StyledButton";

const Projects: React.FC = () => {
    const [language, setLanguage] = useState('en'); // Estado para alternar entre os idiomas

    const projects = [
        { 
            id: 1, 
            title: "Project 1", 
            description_pt: "Descrição para Projeto 1 - Neste projeto, exploramos tecnologias de ponta e seu impacto nas práticas modernas de desenvolvimento de software.",
            description_en: "Description for Project 1 - In this project, we aimed to explore cutting-edge technologies and their impact on modern software development practices.", 
            image: avatarImage 
        },
        { 
            id: 2, 
            title: "Project 2", 
            description_pt: "Descrição para Projeto 2 - Este projeto focou em criar um ambiente de aprendizado colaborativo para desenvolvedores compartilharem suas experiências e insights.",
            description_en: "Description for Project 2 - This project focused on creating a collaborative learning environment for developers to share their experiences and insights.", 
            image: avatarImage1 
        },
        { 
            id: 2, 
            title: "Project 2", 
            description_pt: "Descrição para Projeto 2 - Este projeto focou em criar um ambiente de aprendizado colaborativo para desenvolvedores compartilharem suas experiências e insights.",
            description_en: "Description for Project 2 - This project focused on creating a collaborative learning environment for developers to share their experiences and insights.", 
            image: avatarImage 
        },
        { 
            id: 2, 
            title: "Project 2", 
            description_pt: "Descrição para Projeto 2 - Este projeto focou em criar um ambiente de aprendizado colaborativo para desenvolvedores compartilharem suas experiências e insights.",
            description_en: "Description for Project 2 - This project focused on creating a collaborative learning environment for developers to share their experiences and insights.", 
            image: avatarImage 
        },
    ];

    const toggleLanguage = () => {
        setLanguage(prevLanguage => prevLanguage === 'en' ? 'pt' : 'en');
    };

    const StyledProjectsPage = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "350vh",
        display: "flex",
        
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",
        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "100px",
        }
    }));

    return (
        <StyledProjectsPage>
            <Container maxWidth="lg">
                <Box position="relative" width="100%">
                    <Box position="absolute" width={"150%"} top={-100} right={0}>
                        <AnimatedBackground />
                    </Box>
                    <Box position="relative" textAlign="center" pb={5}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Projects</Typography>
                        <Box mt={2}>
                            <StyledButton onClick={toggleLanguage}>
                                {language === 'en' ? 'Ver em Português' : 'See in English'}
                            </StyledButton>
                        </Box>
                    </Box>
                </Box>
                <Grid container spacing={2}>
                    {projects.map((project) => (
                        <Grid item xs={12} md={6} key={project.id}>
                            <Card card={{ ...project, description: language === 'en' ? project.description_en : project.description_pt }} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledProjectsPage>
    );
};

export default Projects;
