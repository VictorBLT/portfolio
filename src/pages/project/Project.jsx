import './project.css';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import Chip from '../../components/chip/Chip.jsx';
import Title from '../../components/title/Title.jsx';

export default function Project() {
    const { t } = useTranslation();
    const { slug } = useParams();
    const baseUrl = import.meta.env.BASE_URL;
    const projects = t('projects.items', { returnObjects: true });
    const project = projects.find((p) => p.slug === slug);

    return (
        <>
            <div className="parallax">
                <img
                    src={`${baseUrl}${project.banner}`}
                    alt={t('alt.image', { name: project.name })}
                    draggable={false}
                />
            </div>
            <article className="scrolling-content">
                <section>
                    {/*<Link to="/">Retour au portfolio</Link>*/}
                    <div className="project-title">
                        <Title>{project.name}</Title>

                        {project.url && (
                            <a href={project.url} target="_blank" rel="noreferrer">
                                {project.url}
                            </a>
                        )}
                    </div>

                    <div className="project-description">
                        {project.description.long.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </section>
                <section>
                    <div className="project-gallery" data-count={project.gallery.length}>
                        {project.gallery.map((image, index) => (
                            <div key={index} className="bento-item">
                                <img
                                    src={`${baseUrl}${image}`}
                                    alt={t('alt.image', { name: project.name })}
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <div className="chips-container">
                        {project.skills.map((skill, index) => (
                            <Chip key={index} skill={skill} />
                        ))}
                    </div>
                </section>
            </article>
        </>
    );
}
