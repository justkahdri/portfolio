import React, {useEffect, useState} from 'react';

import ProjectsGallery from "../UI/organisms/projectsGallery";
import ProjectCard from "../UI/molecules/ProjectCard";
import Loader from "../UI/atoms/Loader";
import Alert from "../UI/atoms/Alert";

function ProjectsPage() {
    const [state, setState] = useState({
        loading: true,
        error: null,
        title: "My Personal Projects",
    })

    const [projectsData,setProjectsData]=useState([]);

    useEffect(() => {
        let isMounted = true;
        const getData = async () => {
          try {
            const response = await fetch(process.env.REACT_APP_PROJECTS,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
            if (isMounted) {
                let parsedData = await response.json();
                setProjectsData(parsedData);
                setState({...state, loading: false, error: null});
            }
          } catch (err) {
            setState({...state, loading: false, error: err});
          }
        }

        getData();
        return () => {
          isMounted = false;
        };
    }, [state])

    return (
        state.loading ? <Loader/>
            :
            <main role="main" id="projects--page">
                {state.error && <Alert/>}
                <ProjectsGallery title={state.title}>
                    {Object.entries(projectsData).map(([name, values], idx) => (
                        <ProjectCard key={idx} id={name} data={values}/>
                    ))}
                </ProjectsGallery>
            </main>
    )
}

export default ProjectsPage;
