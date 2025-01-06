
import { Box, styled, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Banner = styled(Box)`
    background-image: url(https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">VAIBHAV's BLOG</Typography>
                <Text variant="h5">“this is a platform for sharing stories, ideas, and experiences. Create, edit, and comment on posts, engage with others, and enjoy a seamless writing experience with modern technology.”.
                
                </Text>
                <Text variant="h5">
                    want to connect or have a chat ? click on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/vaibhav-gupta-701987272/" color="inherit" target="_blank">
                            <LinkedInIcon />
                        </Link>
                    </Box>  
                        
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;