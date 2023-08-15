import { Avatar, Box, Typography } from "@mui/material";
import { CalendarMonthOutlined } from "@mui/icons-material";

import banner from '../../assets/img/profile_banner.png'
import avatar from '../../assets/img/profile_avatar.jpg'

import './style.css';

function HeaderProfile() {
    return(
        <Box id="header-profile">
            <Box className="header-profile-background">
                <img src={banner} className="header-profile-detail-avatar" />
            </Box>

            <Box className="header-profile-detail">
                <Avatar alt="Fulano de Oliveiro de Tal" style={{width: 128, height: 128}} 
                src={avatar} className="header-profile-detail-avatar" />

                <Box className="header-profile-detail-text">
                    <Typography variant="h5" >
                        Fulano de Tal
                    </Typography>

                    <Typography variant="subtitle1" component="h6" >
                        @fulanoDeTal
                    </Typography>

                    <Typography variant="subtitle1" component="p" >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique vero, repellendus, veniam vel unde laboriosam saepe id illo iure voluptatum omnis delectus consequuntur magni magnam architecto sit aut soluta odio?
                    </Typography>

                    <Typography variant="caption">
                        <CalendarMonthOutlined></CalendarMonthOutlined>
                        Entrou em Agosto de 201231928
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default HeaderProfile;