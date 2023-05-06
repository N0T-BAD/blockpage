import React, { useState } from 'react';
import style from '@/components/pages/webtooninfo/AuthorWebtoonInfoImgBox.module.css';
import { authorWebtoonInfoImgDataType } from '@/types/authorWebtoonInfoImgDataType';

interface Props {
    onUpload: (data: authorWebtoonInfoImgDataType) => void;
    isRequired: boolean;
}

function AuthorWebtoonInfoImgBox({ onUpload, isRequired }: Props) {
    const [mainImage, setMainImage] = useState<File>();
    const [mainPreviewUrl, setMainPreviewUrl] = useState<string>();
    const [thumbnailImage, setThumbnailImage] = useState<File>();
    const [thumbnailPreviewUrl, setThumbnailPreviewUrl] = useState<string>();

    const handleMainImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setMainImage(file);
            setMainPreviewUrl(URL.createObjectURL(file));
            onUpload({
                mainImage: file,
                thumbnailImage,
            });
        }
    };

    const handleThumbnailImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setThumbnailImage(file);
            setThumbnailPreviewUrl(URL.createObjectURL(file));
            onUpload({
                mainImage,
                thumbnailImage: file,
            });
        }
    };

    return (
        <div>
            <div className={style.InfoImgBox}>
                <p>메인 이미지 : </p>
                <input type="file" accept="image/*" name="mainImage" onChange={handleMainImageInputChange} required={isRequired} />
                {mainPreviewUrl && <img src={mainPreviewUrl} alt="Main Preview" />}
            </div>
            <div className={style.InfoImgBox}>
                <p>썸네일 이미지 : </p>
                <input type="file" accept="image/*" name="thumbnailImage" onChange={handleThumbnailImageInputChange} required={isRequired} />
                {thumbnailPreviewUrl && <img src={thumbnailPreviewUrl} alt="Thumbnail Preview" />}
            </div>
        </div>
    );
}

export default AuthorWebtoonInfoImgBox;