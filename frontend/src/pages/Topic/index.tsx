import { Box } from "@mui/material";
import TopicList from "../../components/TopicList";

function TopicPage() {

    const profile = {
        fullname: 'Daniel dos Santos Scabeni',
        username: 'scabecini',
        description: 'Lembrar de savar o projeto antes de fazer commit',
        createAt: '2022-08-13'
    }

    const topics = {
        {
            owner: { fullname: 'Pedro da Silva' },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia sint, dignissimos velit culpa voluptate, esse, tempora ratione atque aut rem nulla minima nemo modi quas magnam! Debitis, nobis dolore!",
            comments: 8991,
            reposts: 68473,
            likes: 859746, 
            createdAt: '2023-08-01 19:23:00'
        },{
            owner: { fullname: 'Marina Silva' },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia sint, dignissimos velit culpa voluptate, esse, tempora ratione atque aut rem nulla minima nemo modi quas magnam! Debitis, nobis dolore!",
            comments: 124,
            reposts: 94,
            likes: 0, 
            createdAt: '2023-08-01 19:23:00'
        },{
            owner: { fullname: 'Lula da Silva' },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia sint, dignissimos velit culpa voluptate, esse, tempora ratione atque aut rem nulla minima nemo modi quas magnam! Debitis, nobis dolore!",
            comments: 46,
            reposts: 86,
            likes: 158, 
            createdAt: '2023-08-01 19:23:00'
        },{
            owner: { fullname: 'Bolsonelson da Silva' },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia sint, dignissimos velit culpa voluptate, esse, tempora ratione atque aut rem nulla minima nemo modi quas magnam! Debitis, nobis dolore!",
            comments: 159,
            reposts: 258,
            likes: 6815, 
            createdAt: '2023-08-01 19:23:00'
        },{
            owner: { fullname: 'Anderson da Silva' },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia sint, dignissimos velit culpa voluptate, esse, tempora ratione atque aut rem nulla minima nemo modi quas magnam! Debitis, nobis dolore!",
            comments: 13,
            reposts: 74,
            likes: 890, 
            createdAt: '2023-08-01 19:23:00'
        },
    }

    return(
        <Box id="topic-pages" display="flex" flexDirection="column"
            alignItems="center" gap={3}>

            <HeaderProfile user={profile} />

            <TopicList />

            <TopicList />
        </Box>
    )

}


export default TopicPage