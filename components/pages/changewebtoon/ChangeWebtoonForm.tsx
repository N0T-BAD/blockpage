import React, { useEffect, useState } from 'react'
import style from '@/components/pages/changewebtoon/ChangeWebtoonForm.module.css'
import { ChangeWebtoon, authorWebtoonInfoDataType, authorWebtoonInfoStateType } from '@/types/authorWebtoonInfoImgDataType';
import { useRouter } from 'next/router';
import axios from 'axios';
import { webtoonInfoState } from '@/state/webtoon/webtoonInfoState';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { authorNameDataType } from '@/types/authorNameDataType';
import { authornickname } from '@/state/mypage/usernickname';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';

export default function ChangeWebtoonForm() {

  const router = useRouter();
  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');
  const { webtoonId } = router.query;

  const [webtoonInfoData, setWebtoonInfoData] = useState<authorWebtoonInfoDataType>({
    webtoonTitle: '',
    webtoonDescription: '',
    genre: 0,
    publicationDays: 0,
    illustrator: '',
  });

  const [webtoonData, setWebtoonData] = useState<ChangeWebtoon>(
    {
      data: [{
        webtoonId: 0,
        webtoonTitle: '',
        webtoonDescription: '',
        genre: 0,
        publicationDays: 0,
        illustrator: '',
        creator: '',
        webtoonStatus: '',
      }]
    }
  )

  // const [changewebtoonData, setChangeWebtoonData] = useRecoilState<authorWebtoonInfoStateType>(webtoonInfoState);

  const [WebtoonThumbnailImage, setWebtoonThumbnailImage] = useState<File>();
  const [WebtoonMainImage, setWebtoonMainImage] = useState<File>();
  const [WebtoonThumbnailImagePreview, setWebtoonThumbnailImagePreview] = useState<string>();
  const [WebtoonMainImagePreview, setWebtoonMainImagePreview] = useState<string>();
  // const [authorName, setAuthorName] = useRecoilState<authorNameDataType>(authornickname);
  const [authorName, setAuthorName] = useState<authorNameDataType>({
    data: {
      creatorNickname: '',
    },
  });

  useEffect(() => {
    axios.get("https://blockpage.site/webtoon-service/v1/webtoons/creator",
      {
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
      })
      .then((res) => {
        const selectedWebtoon = res.data.data.find((webtoon: any) => webtoon.webtoonId === Number(webtoonId));
        if (selectedWebtoon) {
          setWebtoonData({
            data: [selectedWebtoon],
          })
        }
        console.log(res.data.data)
        console.log(webtoonData)
        if (selectedWebtoon) {
          setAuthorName({
            data: selectedWebtoon.creator,
          });
        }
        console.log(authorName)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(webtoonData)

  const handleInput = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setWebtoonInfoData({
      ...webtoonInfoData,
      [name]: Number(value) || value,
    });
    console.log(webtoonInfoData)
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
    if (!WebtoonThumbnailImagePreview || !WebtoonMainImagePreview) {
      alert('웹툰 이미지를 입력해주세요.')
    } else {
      const selectedWebtoon = webtoonData.data.find((webtoon) => webtoon.webtoonId === Number(webtoonId));
      if (selectedWebtoon) {
        const formData = new FormData();
        if (WebtoonThumbnailImage) {
          formData.append('webtoonThumbnail', WebtoonThumbnailImage);
        }
        if (WebtoonMainImage) {
          formData.append('webtoonMainImage', WebtoonMainImage);
        }

        if (webtoonInfoData.webtoonTitle === '') {
          formData.append('webtoonTitle', selectedWebtoon.webtoonTitle);
        } else {
          formData.append('webtoonTitle', webtoonInfoData.webtoonTitle);
        }
        if (webtoonInfoData.webtoonDescription === '') {
          formData.append('webtoonDescription', selectedWebtoon.webtoonDescription);
        } else {
          formData.append('webtoonDescription', webtoonInfoData.webtoonDescription);
        }
        if (webtoonInfoData.genre === 0) {
          formData.append('genre', String(selectedWebtoon.genre));
        } else {
          formData.append('genre', String(webtoonInfoData.genre));
        }
        if (webtoonInfoData.publicationDays === 0) {
          formData.append('publicationDays', String(selectedWebtoon.publicationDays));
        } else {
          formData.append('publicationDays', String(webtoonInfoData.publicationDays));
        }
        if (webtoonInfoData.illustrator === '') {
          formData.append('illustrator', selectedWebtoon.illustrator);
        } else if (webtoonInfoData.illustrator !== undefined) {
          formData.append('illustrator', webtoonInfoData.illustrator);
        }
        formData.append('creatorNickname', authorName.data.toString());
        formData.append('webtoonId', String(webtoonId));
        axios.post('https://blockpage.site/webtoon-service/v1/demands?target=webtoon&type=modify',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              memberId: session?.email,
              // role: role,
            },
          },
        )
          .then((res) => {
            console.log(res)
            Swal.fire({
              icon: 'success',
              title: '요청 성공!',
              text: '웹툰 수정 요청이 완료되었습니다.',
              showConfirmButton: false,
              timer: 1500
            })
              .then(() => {
                router.back();
              })
          })
      }
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
      {webtoonData.data.map((webtoon) => (
        webtoon.webtoonId === Number(webtoonId) && webtoon.webtoonStatus === "배포중" && (
          <div className={style.WebtoonInfoWrap} key={webtoon.webtoonId}>
            <form onSubmit={handleSubmit}>
              <div className={style.InfoBox}>
                <p>작품명 : </p>
                <input type="text" name="webtoonTitle" defaultValue={webtoon.webtoonTitle} onChange={handleInput} />
              </div>
              <div className={style.InfoBox}>
                <p>줄거리 : </p>
                <input type="text" name="webtoonDescription" defaultValue={webtoon.webtoonDescription} onChange={handleInput} />
              </div>
              <div className={style.InfoBox}>
                <p className={style.sorttxt}>장 르 : </p>
                <select name="genre" onChange={handleInput} defaultValue={webtoon.genre}>
                  <option value="">장르를 선택하세요</option>
                  {genreOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className={style.InfoBox}>
                <p className={style.sorttxt}>요 일 : </p>
                <select name="publicationDays" onChange={handleInput} defaultValue={webtoon.publicationDays}>
                  <option value="">요일을 선택하세요</option>
                  {dayOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {authorName.data && (
                <div className={style.InfoBox}>
                  <p className={style.sorttxt}>작 가 : </p>
                  <p className={style.author}>{authorName.data.toString()}</p>
                </div>
              )}
              <div className={style.InfoillustratorBox}>
                <p>일러스트레이터 : </p>
                <input type="text" name="illustrator" defaultValue={webtoon.illustrator} placeholder='미입력시, 본인으로 등록됩니다.' onChange={handleInput} />
              </div>
              <div className={style.InfoImgBox}>
                <div className={style.labelBox}>
                  <p className={style.mainImg}>메인 이미지</p>
                  <label>
                    <div className={style.uploadbtn}>upload</div>
                    <input type="file" name='file' id="file" accept="image/*" onChange={handleMainImage} />
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
                    <input type="file" name='file' id="file" accept="image/*" onChange={handleThumbnailImage} />
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
          </div>
        )))}
    </>
  )
}
