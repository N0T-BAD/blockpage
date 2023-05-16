import React, { useEffect, useState } from 'react'
import style from '@/components/pages/episodeinfo/EpisodeInfoForm.module.css'
import { useRouter } from 'next/router';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { episodeInfoFormDataType } from '@/types/episodeInfoForm';
import { WebToonDetailDataType, WebToonListDataType } from '@/types/webtoonDataType';
import Image from 'next/image';
import { webtoonListData } from '@/data/dummy/webtoonData';

export default function EpisodeInfoForm() {

  const router = useRouter();

  const [episodeInfoData, setEpisodeInfoData] = useState<episodeInfoFormDataType>({
    episodetitle: '',
    episodedescription: '',
    day: '',
    authortalk: '',
  });

  const [webtoonepisode, setWebtoonEpisode] = useState<WebToonDetailDataType>();


  const [episodeThumbnailImage, setEpisodeThumbnailImage] = useState<File>();
  const [episodeImage, setEpisodeImage] = useState<File[]>();
  const [episodeThumbnailImagePreview, setEpisodeThumbnailImagePreview] = useState<string>();
  const [episodeImagePreview, setEpisodeImagePreview] = useState<string[]>([]);

  useEffect(() => {
    console.log(episodeInfoData)
  }, [episodeInfoData])

  // useEffect(() => {
  //   webtoonListData && setWebtoonEpisode({
  //     id: webtoonepisode.id,
  //     title: webtoonepisode.title,
  //   })
  // }, [])

  // useEffect(() => {
  //   axios.post(`/api/authorwebtooninfo/${router.query.id}`)
  //     .then(res => res.data)
  //     .then(data => setWebtoonEpisode(data))
  // }, [webtoonepisode])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEpisodeInfoData({
      ...episodeInfoData,
      [name]: value
    });
  };

  const handleThumbnailImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setEpisodeThumbnailImagePreview(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
      setEpisodeThumbnailImage(e.target.files[0]);
    }
  };

  const handleEpisodeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const images = Array.from(e.target.files).map(file => {
        const reader = new FileReader();
        reader.onload = () => {
          setEpisodeImagePreview(prevState => [...prevState, reader.result as string]);
        };
        reader.readAsDataURL(file);
        return file;
      });
      setEpisodeImage(images);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (episodeInfoData.episodetitle === '' || episodeInfoData.episodedescription === '' || episodeInfoData.day === '' || episodeInfoData.authortalk === '') {
      alert('에피소드 정보를 입력해주세요.')
    } else if (!episodeImage) {
      alert('웹툰 이미지를 입력해주세요.')
    } else if (!episodeThumbnailImage) {
      alert('웹툰 썸네일 이미지를 입력해주세요.')
    } else {
      axios.post('/api/authorwebtooninfo', {
        episodetitle: episodeInfoData.episodetitle,
        episodedescription: episodeInfoData.episodedescription,
        day: episodeInfoData.day,
        authortalk: episodeInfoData.authortalk,
        episodeThumbnailImage: episodeThumbnailImage,
        episodeImage: episodeImage,
      })
        .then((res) => {
          console.log(res)

          if (res.status === 200) {
            alert('웹툰 정보가 등록되었습니다.')
            router.push('/authorworkslist')
          }
        })
    }
  };

  return (
    <>
      <div className={style.WebtoonDeleteInfoWrap}>
        {webtoonListData.map((webtoon) => (
          <div key={webtoon.id}>
            <div className={style.webtoonInfoBox}>
              <p>작품명 : </p>
              <p className={style.title}>{webtoon.title}</p>
            </div>
            <div className={style.webtoonInfoBox} key={webtoon.episodeData[0].id}>
              <p>에피소드 회차 : </p>
              <p className={style.title}>{webtoon.episodeData[0].id} 화</p>
            </div>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <div className={style.episodeInfoBox}>
            <p>에피소드 명 : </p>
            <input type="text" name="episodetitle" onChange={handleInput} />
          </div>
          <div className={style.episodeInfoBox}>
            <p>에피소드 내용 : </p>
            <input type="text" name="episodedescription" onChange={handleInput} />
          </div>
          <div className={style.episodeInfoBox}>
            <p>업로드 일 : </p>
            <input type="text" name="day" onChange={handleInput} />
          </div>
          <div className={style.episodeInfoBox}>
            <p>작가의 말 : </p>
            <input type="text" name="authortalk" onChange={handleInput} />
          </div>
          <div className={style.episodeInfoImgBox}>
            <p>에피소드 썸네일 이미지 : </p>
            <input type="file" accept="image/*" onChange={handleThumbnailImage} />
            {episodeThumbnailImagePreview && <Image src={episodeThumbnailImagePreview} alt="episodeThumbnailImagePreview" width={200} height={200} />}
          </div>
          <div className={style.episodeInfoImgBox}>
            <p>에피소드 이미지 : </p>
            <input type="file" accept="image/*" onChange={handleEpisodeImage} multiple />
            <div className={style.ImgPreview}>
              {episodeImagePreview.map((preview, index) => (
                <Image key={index} src={preview} alt={`episodeImagePreview_${index}`} width={200} height={200} />
              ))}
            </div>
          </div>
          <div className={style.submit}>
            <button type="submit">등록</button>
          </div>
        </form>
      </div>
    </>
  )
}