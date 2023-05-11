import React, { useEffect, useState } from 'react'
import style from '@/components/pages/webtooninfo/AuthorWebtoonInfoForm.module.css'
import { authorWebtoonInfoDataType } from '@/types/authorWebtoonInfoImgDataType';
import { useRouter } from 'next/router';
import axios from 'axios';
import { authorNameDataType } from '@/types/authorNameDataType';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { webtoonAuthorState } from '@/state/webtoon/webtoonAuthorState';

export default function AuthorWebtoonInfoForm() {

    const router = useRouter();

    const [webtoonInfoData, setWebtoonInfoData] = useState<authorWebtoonInfoDataType>({
        title: '',
        description: '',
        genre: '',
        day: '',
        illustrator: '',
    });

    const [WebtoonThumbnailImage, setWebtoonThumbnailImage] = useState<File>();
    const [WebtoonMainImage, setWebtoonMainImage] = useState<File>();
    const [WebtoonThumbnailImagePreview, setWebtoonThumbnailImagePreview] = useState<string>();
    const [WebtoonMainImagePreview, setWebtoonMainImagePreview] = useState<string>();

    const [authorName, setAuthorName] = useRecoilState<authorNameDataType>(webtoonAuthorState);

    useEffect(() => {
        console.log(webtoonInfoData)
    }, [webtoonInfoData])

    useEffect(() => {
        axios(`api/v1/webtoons`)
            .then(res => res.data)
            .then(data => setAuthorName(data))
    }, [authorName])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setWebtoonInfoData({
            ...webtoonInfoData,
            [name]: value
        });
    };

    const handleMainImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                setWebtoonMainImagePreview(reader.result as string);
            };
            reader.readAsDataURL(e.target.files[0]);
            setWebtoonMainImage(e.target.files[0]);
        }
    };

    const handleThumbnailImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                setWebtoonThumbnailImagePreview(reader.result as string);
            };
            reader.readAsDataURL(e.target.files[0]);
            setWebtoonThumbnailImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (webtoonInfoData.title === '' || webtoonInfoData.description === '' || webtoonInfoData.genre === '' || webtoonInfoData.day === '') {
            alert('웹툰 정보를 입력해주세요.')
        } else if (!WebtoonThumbnailImagePreview || !WebtoonMainImagePreview) {
            alert('웹툰 이미지를 입력해주세요.')
        } else {
            axios.post('/api/v1/webtoons', {
                title: webtoonInfoData.title,
                description: webtoonInfoData.description,
                genre: webtoonInfoData.genre,
                day: webtoonInfoData.day,
                illustrator: webtoonInfoData.illustrator,
                mainImage: WebtoonThumbnailImage,
                thumbnailImage: WebtoonMainImage,
            })
                .then((res) => {
                    console.log(res)
                    alert('웹툰 정보가 등록되었습니다.')
                    router.push('/authorworkslist')
                })
        }
    };

    return (
        <>
            {authorName &&
                <div className={style.WebtoonInfoWrap}>
                    <form onSubmit={handleSubmit}>
                        <div className={style.InfoBox}>
                            <p>작품명 : </p>
                            <input type="text" name="title" onChange={handleInput} />
                        </div>
                        <div className={style.InfoBox}>
                            <p>줄거리 : </p>
                            <input type="text" name="description" onChange={handleInput} />
                        </div>
                        <div className={style.InfoBox}>
                            <p>장르 : </p>
                            <input type="text" name="genre" onChange={handleInput} />
                        </div>
                        <div className={style.InfoBox}>
                            <p>요일 : </p>
                            <input type="text" name="day" onChange={handleInput} />
                        </div>
                        <div className={style.InfoBox}>
                            <p>작가 : </p>
                            <p className={style.author}>{authorName.author}</p>
                        </div>
                        <div className={style.InfoillustratorBox}>
                            <p>일러스트레이터 : </p>
                            <input type="text" name="illustrator" value={authorName.author} placeholder='미입력시, 본인으로 등록됩니다.' onChange={handleInput} />
                        </div>
                        <div className={style.InfoImgBox}>
                            <p>메인 이미지 : </p>
                            <input type="file" accept="image/*" onChange={handleMainImage} />
                            {WebtoonMainImagePreview && <Image src={WebtoonMainImagePreview} alt="WebtoonThumbnailImagePreview" width={200} height={200} />}
                        </div>
                        <div className={style.InfoImgBox}>
                            <p>썸네일 이미지 : </p>
                            <input type="file" accept="image/*" onChange={handleThumbnailImage} />
                            {WebtoonThumbnailImagePreview && <Image src={WebtoonThumbnailImagePreview} alt="WebtoonMainImagePreview" width={200} height={200} />}
                        </div>
                        <div className={style.submit}>
                            <button type="submit">등록</button>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}
