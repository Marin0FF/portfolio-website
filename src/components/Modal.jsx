import React, {useState, useCallback, useEffect} from 'react'
import { createPortal } from 'react-dom'
import { useHistory, useParams } from 'react-router-dom'
import sanityClient from '../client'
import BlockContent from '@sanity/block-content-to-react'
import YouTube from 'react-youtube'
import getYouTubeID from 'get-youtube-id'

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
    const history = useHistory();
    const { slug } = useParams();
    const [modal, setModal] = useState({isOpen: true,});

    const serializers = {
        types: {
          codepen: props => {
            const splitURL = props.node.url.split('/');
            const [, , , user, , hash] = splitURL;
            const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=500&theme-id=dark&default-tab=result`;
            return (
                <iframe
                    height="500"
                    style={{ width: '100%' }}
                    scrolling="no"
                    title="CodePen Embed"
                    src={embedUrl}
                    frameBorder="no"
                    allowTransparency
                    allowFullScreen
                />
              )
          },
          youtube: ({node}) => {
            const { url } = node
            const id = getYouTubeID(url)
            return (
                <div className="image is-16by9">
                    <YouTube videoId={id} className="has-ratio" />
                </div>
            )
          }
        }
    }

    useEffect(() => {
        if(modal.isOpen === true) {
            sanityClient.fetch(`*[slug.current == "${slug}"]{
                title,
                body,
                technologies,
                link,
            }`).then((data) => setModal(data[0]))
            .catch(console.error);
        }
    }, [modal.isOpen, slug])

    const close = useCallback(() => {
        setModal({isOpen: false});
        history.goBack();
    }, [history])

    const handleEscape = useCallback(event => {
        if (event.keyCode === 27) close()
    }, [close])

    useEffect(() => {
        if (modal) document.addEventListener('keydown', handleEscape, false)
        return () => {
          document.removeEventListener('keydown', handleEscape, false)
        }
    }, [handleEscape, modal])

    return createPortal(
        modal ? (
            <div className="modal">
                <div className="modal-card">
                        <header class="modal-card-head">
                            <h2 className="modal-card-title title has-text-grey">{modal.title}</h2>
                        </header>
                        <section className="modal-card-body has-text-grey">
                            <BlockContent
                                blocks={modal.body}
                                projectId="lpkhcp48"
                                dataset="production"
                                serializers={serializers}
                            />
                            <hr/>
                            <h2 className="title is-5 has-text-grey">Technology summary</h2>
                            <div className="tech-tags">
                                {
                                    Object.values({...modal.technologies})
                                    .map(value => (<span class="tag is-info is-light mx-1">{value}</span>))
                                }
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <a href={modal.link} className="button is-primary">View project</a>
                            <button className="button has-text-grey" onClick={close}>Close</button>
                        </footer>
                </div>
                <div className="modal-background " onClick={close}>
                </div>
            </div>
          ) : null,
          modalRoot)
};

export default Modal