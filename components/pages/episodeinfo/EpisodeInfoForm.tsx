import React, { ChangeEvent, useEffect, useState } from 'react';
import style from '@/components/pages/episodeinfo/EpisodeInfoForm.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { UploadedFile, episodeInfoData, episodeInfoFormDataType } from '@/types/episodeInfoForm';
import { EpisodeViewListType } from '@/types/webtoonDataType';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';

export default function EpisodeInfoForm() {
  const router = useRouter();
  const { data: session } = useSession();
  const { webtoonId } = router.query;

  const [episodeInfoData, setEpisodeInfoData] = useState<episodeInfoData>({
    episodeNumber: 0,
    episodeTitle: '',
    uploadDate: '',
    authorWords: '',
  });

  const [episodeInfo, setEpisodeInfo] = useState<episodeInfoFormDataType>({
    data: [{
      episodeTitle: '',
      uploadDate: '',
      episodeNumber: 0,
      totalScore: 0,
      participantCount: 0,
    }]
  });

  const [episodeThumbnailImage, setEpisodeThumbnailImage] = useState<File | null>(null);
  const [episodeImage, setEpisodeImage] = useState<File[]>([]);
  const [episodeThumbnailImagePreview, setEpisodeThumbnailImagePreview] = useState<string>();
  const [episodeImagePreview, setEpisodeImagePreview] = useState<UploadedFile[]>([]);

  useEffect(() => {
    axios.get(`https://blockpage.site/webtoon-service/v1/episodes/creator?${webtoonId}`,
      {
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
        params: {
          webtoonId: webtoonId,
        },
      })
      .then((res) => {
        setEpisodeInfo(res.data)
        console.log(res.data)
        console.log(episodeInfo)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEpisodeInfoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  const handleEpisodeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const uploadedFiles: File[] = Array.from(files);
      setEpisodeImage(uploadedFiles);

      const filePreviews: UploadedFile[] = uploadedFiles.map((file) => ({
        name: file.name,
        preview: URL.createObjectURL(file),
      }));
      setEpisodeImagePreview(filePreviews);
    }
  };

  const handleRemoveEpisodeImage = (index: number) => {
    const updatedFiles = [...episodeImage];
    updatedFiles.splice(index, 1);
    setEpisodeImage(updatedFiles);

    const updatedPreviews = [...episodeImagePreview];
    updatedPreviews.splice(index, 1);
    setEpisodeImagePreview(updatedPreviews);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      episodeInfoData.episodeNumber === 0 ||
      episodeInfoData.episodeTitle === '' ||
      episodeInfoData.uploadDate === '' ||
      episodeInfoData.authorWords === ''
    ) {
      alert('에피소드 정보를 입력해주세요.');
    } else if (!episodeImage.length) {
      alert('에피소드 이미지를 입력해주세요.');
    } else if (!episodeThumbnailImage) {
      alert('웹툰 썸네일 이미지를 입력해주세요.');
    } else {
      const formData = new FormData();
      formData.append('webtoonId', String(webtoonId));
      formData.append('episodeNumber', String(episodeInfoData.episodeNumber));
      formData.append('episodeTitle', episodeInfoData.episodeTitle);
      formData.append('uploadDate', episodeInfoData.uploadDate);
      formData.append('authorWords', episodeInfoData.authorWords);
      if (episodeThumbnailImage) {
        formData.append('episodeThumbnail', episodeThumbnailImage);
      }
      if (episodeImage) {
        episodeImage.forEach((file) => {
          formData.append('episodeImage', file);
        })
      };
      try {
        const response = await axios.post(
          `https://blockpage.site/webtoon-service/v1/demands?target=episode&type=enroll`,
          formData,
          {
            headers: {
              memberId: session?.email,
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        if (response) {
          Swal.fire({
            title: '등록 성공!',
            text: '에피소드 등록이 완료되었습니다.',
            icon: 'success',
            confirmButtonText: '확인',
          })
          router.back();
          console.log(response)
        }
      } catch (error) {
        console.error(error);
        console.log(session?.email)
      }
    }
  };

  return (
    <>
      {/* {episodeInfo.data &&
        episodeInfo.data.map((episode) => (
          episode.episodeNumber && ( */}
      <div className={style.WebtoonDeleteInfoWrap}>
        <form onSubmit={handleSubmit}>
          {/* <div className={style.webtoonInfoBox}>
                  <p>에피소드 회차 : </p>
                  <p className={style.episodeNumber}>{episode.episodeNumber} 화</p>
                </div> */}
          <div className={style.numberBox}>
            <div className={style.episodeInfoNumberBox}>
              <p>에피소드 회차 :</p>
              <div className={style.episodeInputBox}>
                <input type="text" name="episodeNumber" onChange={handleInput} />
                <p>화</p>
              </div>
            </div>
            <p className={style.info}>숫자만 입력해주세요.</p>
          </div>
          <div className={style.episodeInfoBox}>
            <p>에피소드 명 :</p>
            <input type="text" name="episodeTitle" onChange={handleInput} />
          </div>
          <div className={style.numberBox}>
            <div className={style.episodeInfoNumberBox}>
              <p>업로드 일 :</p>
              <input type="text" name="uploadDate" onChange={handleInput} placeholder='20230408' />
            </div>
            <p className={style.info}>숫자만 입력해주세요.</p>
          </div>
          <div className={style.episodeInfoBox}>
            <p>작가의 말 :</p>
            <input type="text" name="authorWords" onChange={handleInput} />
          </div>
          <div className={style.episodeInfoImgBox}>
            <div className={style.labelBox}>
              <p>에피소드 썸네일 이미지</p>
              <label>
                <div className={style.uploadbtn}>upload</div>
                <input type="file" name="file" id="file" accept="image/*" onChange={handleThumbnailImage} />
              </label>
            </div>
            {episodeThumbnailImagePreview && episodeThumbnailImagePreview.length > 1 ? (
              <div className={style.ThumbnailBox}>
                <Image src={episodeThumbnailImagePreview} alt="episodeThumbnailImagePreview" width={200} height={200} />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={style.episodeInfoImgBox}>
            <div className={style.labelBox}>
              <p>에피소드 이미지 </p>
              <label>
                <div className={style.uploadbtn}>upload</div>
                <input type="file" id="file" name="file" accept="image/*" onChange={handleEpisodeImage} multiple />
              </label>
            </div>
            <div className={style.filelist}>
              {episodeImagePreview.map((preview, index) => (
                <div className={style.filename} key={index}>
                  <p>{preview.name}</p>
                  <button type="button" onClick={() => handleRemoveEpisodeImage(index)}>
                    삭제
                  </button>
                </div>
              ))}
            </div>
            {episodeImagePreview.length > 0 ? (
              <div className={style.ImgPreview}>
                {episodeImagePreview.map((preview, index) => (
                  <div className={style.episodeImg} key={index}>
                    <Image src={preview.preview} alt={`에피소드 ${index + 1}`} width={200} height={200} />
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={style.submit}>
            <button type="submit">등록</button>
          </div>
        </form >
      </div >
      {/* )
        ))} */}
    </>
  );
}