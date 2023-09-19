import { Box } from "@mui/material"
import HeaderProfile from "../../components/HeaderProfile"
import TopicList from "../../components/TopicList"
import { useEffect, useState } from "react"

function TopicPage() {

    const [profile, setProfile] = useState({});

    useEffect(() => {

        fetch('http://localhost:3000/profile')
            .then(res => res.json())
            .then(data => {
                setProfile(data);
            })

    }, [])

    const topics = [
        {
            owner: { fullname: 'Pedro da Silva' },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia sint, dignissimos velit culpa voluptate, esse, tempora ratione atque aut rem nulla minima nemo modi quas magnam! Debitis, nobis dolore!",
            comments: 8991,
            reposts: 68473,
            likes: 859746, 
            createdAt: '2023-08-01 19:23:38'
        },{
            owner: { fullname: 'Marina Silva' },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia sint, dignissimos velit culpa voluptate, esse, tempora ratione atque aut rem nulla minima nemo modi quas magnam! Debitis, nobis dolore!",
            comments: 124,
            reposts: 94,
            likes: 0, 
            createdAt: '2023-05-12 15:05:19'
        },{
            owner: { fullname: 'Lula da Silva' },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia sint, dignissimos velit culpa voluptate, esse, tempora ratione atque aut rem nulla minima nemo modi quas magnam! Debitis, nobis dolore!",
            comments: 46,
            reposts: 86,
            likes: 158, 
            createdAt: '2022-02-15 07:39:12'
        },{
            owner: { fullname: 'Bolsonelson da Silva' },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia sint, dignissimos velit culpa voluptate, esse, tempora ratione atque aut rem nulla minima nemo modi quas magnam! Debitis, nobis dolore!",
            comments: 159,
            reposts: 258,
            likes: 6815, 
            createdAt: '2023-01-21 16:36:26'
        },{
            owner: { fullname: 'Anderson da Silva' },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia sint, dignissimos velit culpa voluptate, esse, tempora ratione atque aut rem nulla minima nemo modi quas magnam! Debitis, nobis dolore!",
            comments: 13,
            reposts: 74,
            likes: 890, 
            createdAt: '2023-06-30 12:16:16'
        },
    ]

    return (
        <Box id="topic-page" display="flex" flexDirection="column"
            alignItems="center" gap={3}>
                
            <HeaderProfile user={profile} />

            <TopicList items={topics} />
        </Box>
    )

}

export default TopicPage