import React, {useEffect, useState} from 'react';

import ProjectsGallery from "../UI/organisms/projectsGallery";
import ProjectCard from "../UI/molecules/ProjectCard";
import Loader from "../UI/atoms/Loader";

function ProjectsPage() {
    const [state, setState] = useState({
        loading: true,
        error: null,
        title: "My Personal Projects",
        thumbnail_ctx: require.context('../../assets/projects'),
    })

    const [projectsData,setProjectsData]=useState([]);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        const getData = () => {
            fetch('/projects.json',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    // console.log(response);
                    return response.json();
                })
                .then(allProjects => {
                    // console.log(allProjects);
                    setProjectsData(allProjects);
                })
                // .then(() => sleep(2000))
                .then(() => setState({...state, loading: false}));
        }

        getData()
    }, [state])

    return (
        state.loading ? <Loader/>
            :
            <main role="main" id="projects--page">
                <ProjectsGallery title={state.title}>
                    {Object.entries(projectsData).map(([name, values], idx) => (
                        <ProjectCard key={idx} id={name} data={values} ctx={state.thumbnail_ctx}/>
                    ))}
                </ProjectsGallery>
            </main>
    )
}

export default ProjectsPage;
