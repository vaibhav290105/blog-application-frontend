
import { Box, styled, Typography, Link } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Banner = styled(Box)`
    background-image: url(https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
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


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on
                    <Link href="https://www.linkedin.com/in/vaibhav-gupta-701987272/" color="inherit" target="_blank">
                        <LinkedInIcon/>
                    </Link>
                    
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;