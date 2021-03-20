import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import _ from 'lodash';

import DetailsContainer from "../templates/detailsContainer";
import Loader from "../UI/atoms/Loader";

function DetailsPage() {
    let { projectId } = useParams();
    const project_ctx = require.context('../../assets/projects', true);
    const [state, setState] = useState({loading: true, error: null});
    const [projectContent,setProjectContent] = useState([]);

    // TODO function cleanup
    // TODO error handling
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
                    setProjectContent(_.get(allProjects, projectId));
                })
                .then(() => setState({loading: false, error: null}))
        }

        getData();
    }, [projectId])
    return (
        state.loading ? <Loader/>
            :
            <main role="main" id="details--page">
                {/* {console.log(projectId, projectContent, state.error)} */}
                <DetailsContainer content={projectContent} ctx={project_ctx}/>
            </main>
    )
}

export default DetailsPage;
