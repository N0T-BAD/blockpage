import React, { useEffect, useState } from 'react'
import style from '@/components/pages/webtooninfo/AuthorWebtoonInfoForm.module.css'
import { authorWebtoonInfoDataType } from '@/types/authorWebtoonInfoImgDataType';
import { useRouter } from 'next/router';
import axios from 'axios';
import { authorNameDataType } from '@/types/authorNameDataType';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { webtoonAuthorState } from '@/state/webtoon/webtoonAuthorState';
import { useSession } from 'next-auth/react';

export default function AuthorWebtoonInfoForm() {

  const router = useRouter();
  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  const [webtoonInfoData, setWebtoonInfoData] = useState<authorWebtoonInfoDataType>({
    webtoonTitle: '',
    webtoonDescription: '',
    genre: '',
    publicationDays: '',
    illustrator: '',
  });

  const [WebtoonThumbnailImage, setWebtoonThumbnailImage] = useState<File | null>(null);
  const [WebtoonMainImage, setWebtoonMainImage] = useState<File | null>(null);
  const [WebtoonThumbnailImagePreview, setWebtoonThumbnailImagePreview] = useState<string>();
  const [WebtoonMainImagePreview, setWebtoonMainImagePreview] = useState<string>();

  const [authorName, setAuthorName] = useState<authorNameDataType>({
    data: {
      creatorNickname: '',
    }
  });

  useEffect(() => {
    axios.get('https://blockpage.site/member-service/v1/members?type=detail', {
      headers: {
        memberId: session?.email || '',
        // role: role,
      },
    })
      .then((res) => {
        setAuthorName(res.data);
        console.log(res.data)
        console.log(authorName)
      })
  }, [])

  // useEffect(() => {
  //     console.log(webtoonInfoData)
  // }, [webtoonInfoData])

  // useEffect(() => {
  //     axios(`api/v1/webtoons`)
  //         .then(res => res.data)
  //         .then(data => setAuthorName(data))
  // }, [setAuthorName])

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
    if (webtoonInfoData.webtoonTitle === '' || webtoonInfoData.webtoonDescription === '' || webtoonInfoData.genre === '' || webtoonInfoData.publicationDays === '') {
      alert('웹툰 정보를 입력해주세요.')
    } else if (!WebtoonThumbnailImagePreview || !WebtoonMainImagePreview) {
      alert('웹툰 이미지를 입력해주세요.')
    } else {
      const formData = new FormData();
      if (WebtoonThumbnailImage) {
        formData.append('webtoonThumbnail', WebtoonThumbnailImage);
      }
      if (WebtoonMainImage) {
        formData.append('webtoonMainImage', WebtoonMainImage);
      }
      formData.append('webtoonTitle', webtoonInfoData.webtoonTitle);
      formData.append('webtoonDescription', webtoonInfoData.webtoonDescription);
      formData.append('genre', webtoonInfoData.genre);
      formData.append('publicationDays', webtoonInfoData.publicationDays);
      if (webtoonInfoData.illustrator === '') {
        formData.append('illustrator', authorName.data.creatorNickname);
      } else if (webtoonInfoData.illustrator !== undefined) {
        formData.append('illustrator', webtoonInfoData.illustrator);
      }
      formData.append('creatorNickname', authorName.data.creatorNickname);
      console.log(formData.get('webtoonTitle'))

      axios.post('https://blockpage.site/webtoon-service/v1/demands?target=webtoon&type=enroll',
        formData,
        {
          headers: {
            email: session?.email,
            // role: role,
          },
        },
      )
        .then((res) => {
          console.log(res)
          alert('웹툰 정보가 등록되었습니다.')

          router.push('/authorworkslist')
        })
    }
  };

  return (
    <>
      <div className={style.WebtoonInfoWrap}>
        <form onSubmit={handleSubmit}>
          <div className={style.InfoBox}>
            <p>작품명 : </p>
            <input type="text" name="webtoonTitle" onChange={handleInput} />
          </div>
          <div className={style.InfoBox}>
            <p>줄거리 : </p>
            <input type="text" name="webtoonDescription" onChange={handleInput} />
          </div>
          <div className={style.InfoBox}>
            <p>장르 : </p>
            <input type="text" name="genre" onChange={handleInput} />
          </div>
          <div className={style.InfoBox}>
            <p>요일 : </p>
            <input type="text" name="publicationDays" onChange={handleInput} />
          </div>
          {authorName.data &&
            <div className={style.InfoBox}>
              <p>작가 : </p>
              <p className={style.author}>{authorName.data.creatorNickname}</p>
            </div>
          }
          <div className={style.InfoillustratorBox}>
            <p>일러스트레이터 : </p>
            <input type="text" name="illustrator" placeholder='미입력시, 본인으로 등록됩니다.' onChange={handleInput} />
          </div>
          <div className={style.InfoImgBox}>
            <div className={style.labelBox}>
              <p>메인 이미지</p>
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
    </>
  )
}
