import React from "react"

const codepenPreview = ({value}) => {
    const { url } = value;
    if (!url) {
        return <div>Add a CodePen URL</div>
    }
    const splitURL = url.split('/');
    const [, , , user, , hash] = splitURL;
    const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&theme-id=dark&default-tab=result`;

    return (
        <iframe
            height="600"
            style={{ width: '100%' }}
            scrolling="no"
            title="CodePen Embed"
            src={embedUrl}
            frameBorder="no"
            allowTransparency
            allowFullScreen
        />
    )
};

export default {
    name: 'codepen',
    type: 'object',
    title: 'CodePen embed',
    preview: {
        select: {
            url: 'url',
        },
        component: codepenPreview
    },
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'CodePen URL',
        }
    ]
};