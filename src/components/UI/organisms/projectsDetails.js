import React from 'react';

import CenteredTitle from "../atoms/CenteredTitle";
import MainArticle from "../molecules/MainArticle";
import ArticleListing from "../molecules/ArticleListing";
import AsymmetricImage from "../atoms/AsymmetricGallery";
import IconButtons from "../molecules/IconButtons";

import './styles/projectdetails.css';

const ProjectDetails = (props) => {
    const c = props.content;
    const introduction = {
        title: "What is this?",
        subtitle: c.date,
        image: props.ctx(c.thumbnail).default,
        text: c.introduction,
        buttons: [
            {
                title: "See code",
                importance: "btn-outline-light",
                href: "https://github.com/justkahdri/mockconference"
            },
            {
                title: "Go to Demo",
                importance: "btn-primary",
                href: "https://justkahdri.github.io/mockconference/"
            }
        ],
    }
    const learned = {
        title: "Why does it matter?",
        text: c.learned.p,
        list: c.learned.l,
    }
    const gallery = {
        title: "Some Previews",
    }
    const btn_group = {
        title: "Want to see more?",
        buttons: [
            {
                title: "See code",
                custom: "btn btn-outline-primary",
                href: "https://github.com/justkahdri/mockconference"
            },
            {
                title: "Go to Demo",
                custom: "btn btn-primary",
                href: "https://justkahdri.github.io/mockconference/"
            },
            {
                title: "Other projects",
                custom: "btn btn-outline-secondary",
                href: "/projects"
            }
        ]
    }

    return (
        <section id="details--container" className="container-fluid">
            <CenteredTitle title={c.title} />

            <div id="details--content" className="container">
                <MainArticle {...introduction} />
                <ArticleListing {...learned} />

                <article className="row">
                    <h2 className="col-12 text-right">{gallery.title}</h2>

                    {Object.entries(c.screenshots).map(([source, size], idx) => (
                        <AsymmetricImage key={idx} image={props.ctx(source).default}
                                         alt={"Screenshot " + idx} size={size}/>
                    ))}
                </article>

                <article className="text-center py-2">
                        <h2>{btn_group.title}</h2>
                </article>
                <IconButtons buttons={btn_group.buttons}/>
            </div>
        </section>
    );
}

export default ProjectDetails;