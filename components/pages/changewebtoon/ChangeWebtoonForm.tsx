import React, { useEffect, useState } from 'react'
import style from '@/components/pages/changewebtoon/ChangeWebtoonForm.module.css'
import { authorWebtoonInfoDataType, authorWebtoonInfoStateType } from '@/types/authorWebtoonInfoImgDataType';
import { useRouter } from 'next/router';
import axios from 'axios';
import { webtoonInfoState } from '@/state/webtoon/webtoonInfoState';
import { useRecoilState } from 'recoil';
import Image from 'next/image';

export default function ChangeWebtoonForm() {

  const router = useRouter();

  const [webtoonInfoData, setWebtoonInfoData] = useState<authorWebtoonInfoDataType>({
    webtoonTitle: '',
    webtoonDescription: '',
    genre: 0,
    publicationDays: 0,
    illustrator: '',
  });

  const [changewebtoonData, setChangeWebtoonData] = useRecoilState<authorWebtoonInfoStateType>(webtoonInfoState);

  const [WebtoonThumbnailImage, setWebtoonThumbnailImage] = useState<File>();
  const [WebtoonMainImage, setWebtoonMainImage] = useState<File>();
  const [WebtoonThumbnailImagePreview, setWebtoonThumbnailImagePreview] = useState<string>();
  const [WebtoonMainImagePreview, setWebtoonMainImagePreview] = useState<string>();

  useEffect(() => {
    axios(`api/webtooninfo/${router.query.id}`)
      .then(res => res.data)
      .then(data => setChangeWebtoonData(data))
  }, [router.query.id, setChangeWebtoonData])

  const handleInput = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setWebtoonInfoData({
      ...webtoonInfoData,
      [name]: Number(value) || value,
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
    if (webtoonInfoData.webtoonTitle === '' || webtoonInfoData.webtoonDescription === '' || !webtoonInfoData.genre || !webtoonInfoData.publicationDays) {
      alert('웹툰 정보를 입력해주세요.')
    } else if (!WebtoonThumbnailImagePreview || !WebtoonMainImagePreview) {
      alert('웹툰 이미지를 입력해주세요.')
    } else {
      axios.post('/api/authorwebtooninfo', {
        title: webtoonInfoData.webtoonTitle,
        description: webtoonInfoData.webtoonDescription,
        genre: webtoonInfoData.genre,
        day: webtoonInfoData.publicationDays,
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

  const genreOptions = [
    { label: '판타지 드라마', value: 0 },
    { label: '로맨스', value: 1 },
    { label: '판타지', value: 2 },
    { label: '로맨스 판타지', value: 3 },
    { label: '액션', value: 4 },
    { label: '드라마', value: 5 },
    { label: '공포', value: 6 },
    { label: '코믹', value: 7 },
  ];

  const dayOptions = [
    { label: '월', value: 0 },
    { label: '화', value: 1 },
    { label: '수', value: 2 },
    { label: '목', value: 3 },
    { label: '금', value: 4 },
    { label: '토', value: 5 },
    { label: '일', value: 6 },
  ];

  return (
    <>
      <div className={style.WebtoonInfoWrap}>
        {changewebtoonData &&
          <form onSubmit={handleSubmit}>
            <div className={style.InfoBox}>
              <p>작품명 : </p>
              <input type="text" name="title" defaultValue={changewebtoonData.title} onChange={handleInput} />
            </div>
            <div className={style.InfoBox}>
              <p>줄거리 : </p>
              <input type="text" name="description" defaultValue={changewebtoonData.description} onChange={handleInput} />
            </div>
            <div className={style.InfoBox}>
              <p>장르 : </p>
              <select name="genre" onChange={handleInput}>
                <option value="">장르를 선택하세요</option>
                {genreOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={style.InfoBox}>
              <p>요일 : </p>
              <select name="publicationDays" onChange={handleInput}>
                <option value="">요일을 선택하세요</option>
                {dayOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={style.InfoBox}>
              <p>작가 : </p>
              <p className={style.author}>{changewebtoonData.author}</p>
            </div>
            <div className={style.InfoillustratorBox}>
              <p>일러스트레이터 : </p>
              <input type="text" name="illustrator" defaultValue={changewebtoonData.illustrator} placeholder='미입력시, 본인으로 등록됩니다.' onChange={handleInput} />
            </div>
            <div className={style.InfoImgBox}>
              <div className={style.labelBox}>
                <p>메인 이미지</p>
                <label>
                  <div className={style.uploadbtn}>upload</div>
                  <input type="file" name='file' id="file" accept="image/*" onChange={handleMainImage} defaultValue={changewebtoonData.mainImageData} />
                </label>
              </div>
              {WebtoonMainImagePreview && WebtoonMainImagePreview.length > 1 ?
                <div className={style.ImageBox}>
                  <Image src={WebtoonMainImagePreview} alt="WebtoonMainImagePreview" width={200} height={200} />
                </div>
                : <></>
              }
            </div>
            <div className={style.InfoImgBox}>
              <div className={style.labelBox}>
                <p>썸네일 이미지</p>
                <label>
                  <div className={style.uploadbtn}>upload</div>
                  <input type="file" name='file' id="file" accept="image/*" onChange={handleThumbnailImage} defaultValue={changewebtoonData.thumbnailImageData} />
                </label>
              </div>
              {WebtoonThumbnailImagePreview && WebtoonThumbnailImagePreview.length > 1 ?
                <div className={style.ImageBox}>
                  <Image src={WebtoonThumbnailImagePreview} alt="WebtoonThumbnailImagePreview" width={200} height={200} />
                </div>
                : <></>
              }
            </div>
            <div className={style.submit}>
              <button type="submit">등록</button>
            </div>
          </form>
        }
      </div>
    </>
  )
}
