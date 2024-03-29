import React from 'react';

import CenteredTitle from "../UI/atoms/CenteredTitle";
import MainArticle from "../UI/molecules/MainArticle";
import ArticleListing from "../UI/molecules/ArticleListing";
import IconButtons from "../UI/molecules/IconButtons";
import Attributions from "../UI/atoms/Attributions";

import './styles/projectdetails.css';

const DetailsContainer = ({content}) => {
    const buttons = [
        {
            title: "See code",
            custom: (content.demo || content.download) ? "btn btn-outline-secondary" : "btn btn-primary",
            href: content.repository
        },
        (content.demo || content.download) &&
        {
            title: (content.demo ? "Go to Demo" : "Download"),
            custom: "btn btn-primary",
            href: content.demo || content.download
        }
    ].filter(x => x !== undefined); // Avoids second button to be undefined

    const state = {
        introduction: {
            title: "What is this?",
            subtitle: content.date,
            image: content.thumbnail,
            text: content.introduction,
            buttons: buttons,
        },
        learned: {
            title: "Why does it matter?",
            text: content.learned.p,
            list: content.learned.l,
        },
        gallery: {
            title: "Some Previews",
        },
        btn_group: {
            title: "Want to see more?",
            buttons: [
                ...buttons,
                {
                    title: "Other projects",
                    custom: "btn btn-outline-secondary",
                    href: "/projects"
                }
            ]
        },
    }

    return (
        <section id="details--container" className="container-fluid">
            <CenteredTitle title={content.title} custom="text-light" />

            <div id="details--content" className="container">
                <MainArticle {...state.introduction} />
                <ArticleListing {...state.learned} />

                {content.screenshots &&
                    <article className="row">
                        <h2 className="col-12 text-right">{state.gallery.title}</h2>
                        {content.screenshots.length === 1 ?
                            <img src={content.screenshots[0].source} className="img-fluid" alt={content.screenshots[0].alt}/>
                            :
                            <div className="details--masonry">
                                {content.screenshots.map(({source, alt}) => <img key={alt} src={source} className="masonry" alt={alt} />)}
                            </div>
                            // <Carousel content={content.screenshots} custom="col-12"/>
                        }
                    </article>
                }

                <article className="mt-5 bg-light shadow rounded">
                    <h2 className="bg-primary text-center text-light py-2 rounded-top">{state.btn_group.title}</h2>
                    <IconButtons buttons={state.btn_group.buttons}/>
                </article>
            </div>

            <Attributions content={[content.attribution]} />
        </section>
    );
}

export default DetailsContainer;
