import React, { useState } from 'react';
import '@components/image/image.css'
import SubTitle from '@components/subTitle/SubTitle';
import LoaderCard from '@components/loaderCard/LoaderCard';

interface ImageProp {
    src: string;
    caption: string;
    copyright: string;
}

const ImageComponent: React.FC<ImageProp> = ({ src, caption, copyright }) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    const handleImageError = () => {
        setLoading(false);
    };

    return (
        <div className='image-wrapper'>
            {loading && <LoaderCard />}
            <img
                src={src}
                alt={caption}
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ display: loading ? 'none' : 'block' }} />
            <span>
                <i>
                    <SubTitle>{caption}</SubTitle>
                    {copyright && <b>
                        <SubTitle>{`© ${copyright} All rights reserved. `}</SubTitle>
                    </b>}
                </i>
            </span>
        </div>
    )
}

export default ImageComponent;