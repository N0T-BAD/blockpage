import React, { ChangeEvent, useEffect, useState } from 'react'
import style from '@/components/pages/episodeinfo/EpisodeInfoForm.module.css'
import { useRouter } from 'next/router';
import axios from 'axios';
import { ChangeEpisodeInfo, ChangeepisodeInfoType, UploadFile, episodeInfoFormDataType, episodeInfoType } from '@/types/episodeInfoForm';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { ChangeEpisode, ChangeWebtoon } from '@/types/authorWebtoonInfoImgDataType';
import Swal from 'sweetalert2';

export default function ChangeEpisodeInfoForm() {

  const router = useRouter();
  const { webtoonId } = router.query;
  const { episodeNumber } = router.query;
  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  const [episodeInfo, setEpisodeInfo] = useState<episodeInfoType>({
    episodeTitle: '',
    uploadDate: '',
    authorWords: '',
  });

  const [episodeInfoData, setEpisodeInfoData] = useState<ChangeEpisodeInfo>({
    data: [{
      episodeTitle: '',
      uploadDate: '',
      episodeNumber: 0,
      totalScore: 0,
      participantCount: 0,
      authorWords: '',
      webtoonStatus: '',
    }]
  });

  const [episodeThumbnailImage, setEpisodeThumbnailImage] = useState<File>();
  const [episodeImage, setEpisodeImage] = useState<File[]>([]);
  const [episodeThumbnailImagePreview, setEpisodeThumbnailImagePreview] = useState<string>();
  const [episodeImagePreview, setEpisodeImagePreview] = useState<UploadFile[]>([]);
  const regex = new RegExp("(.*?)\.(exe|sh|zip|alz)$");

  useEffect(() => {
    axios.get(`https://blockpage.site/webtoon-service/v1/episodes/creator?${webtoonId}`,
      {
        headers: {
          memberId: session?.email || '',
        },
        params: {
          webtoonId: webtoonId,
          episodeNumber: episodeNumber,
        },
      })
      .then((res) => {
        setEpisodeInfoData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])



  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEpisodeInfo({
      ...episodeInfo,
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

  const handleEpisodeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const uploadedFiles: File[] = Array.from(files);
      setEpisodeImage(uploadedFiles);

      const filePreviews: UploadFile[] = uploadedFiles.map(file => ({
        name: file.name,
        preview: URL.createObjectURL(file),
        file,
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
    if (!episodeThumbnailImage) {
      alert('웹툰 썸네일 이미지를 입력해주세요.')
    } else if (regex.test(episodeThumbnailImage.name)) {
      alert('해당 파일은 업로드할 수 없습니다.');
    } else if (episodeImage.some((file) => regex.test(file.name))) {
      alert('해당 파일은 업로드할 수 없습니다.');
    } else {
      try {
        const selectedEpisode = episodeInfoData.data.find((episode) => episode.episodeNumber === Number(episodeNumber));
        if (selectedEpisode) {
          const formData = new FormData();
          formData.append('webtoonId', String(webtoonId));
          formData.append('episodeNumber', String(episodeNumber));

          if (episodeInfo.episodeTitle === '') {
            formData.append('episodeTitle', selectedEpisode.episodeTitle);
          } else {
            formData.append('episodeTitle', episodeInfo.episodeTitle);
          }
          if (episodeInfo.uploadDate === '') {
            formData.append('uploadDate', selectedEpisode.uploadDate);
          } else {
            formData.append('uploadDate', episodeInfo.uploadDate);
          }
          if (episodeInfo.authorWords === '') {
            formData.append('authorWords', selectedEpisode.authorWords);
          } else {
            formData.append('authorWords', episodeInfo.authorWords);
          }

          if (episodeThumbnailImage) {
            formData.append('episodeThumbnail', episodeThumbnailImage);
          }

          if (episodeImage) {
            episodeImage.forEach((file) => {
              formData.append('episodeImage', file);
            })
          };

          const res = await axios.post(`https://blockpage.site/webtoon-service/v1/demands?target=episode&type=modify`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              memberId: session?.email || '',
            },
          });
          if (res.status === 201) {
            Swal.fire({
              title: '요청 성공!',
              text: '에피소드 수정 요청이 완료되었습니다.',
              icon: 'success',
              confirmButtonText: '확인',
            });
            router.back();
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      {episodeInfoData.data &&
        episodeInfoData.data.map((episode) => (
          episode.episodeNumber === Number(episodeNumber) && episode.webtoonStatus === "배포중" && (
            <div className={style.WebtoonDeleteInfoWrap} key={episode.episodeNumber}>
              <form onSubmit={handleSubmit}>
                <div className={style.webtoonInfoBox}>
                  <p>에피소드 회차 : </p>
                  <p className={style.episodeNumber}>{episodeNumber} 화</p>
                </div>
                <div className={style.episodeInfoBox}>
                  <p>에피소드 명 : </p>
                  <input type="text" name="episodeTitle" defaultValue={episode.episodeTitle} onChange={handleInput} />
                </div>
                <div className={style.numberBox}>
                  <div className={style.episodeInfoNumberBox}>
                    <p>업로드 일 :</p>
                    <input type="text" name="uploadDate" onChange={handleInput} defaultValue={episode.uploadDate} placeholder='20230408' />
                  </div>
                  <p className={style.info}>숫자만 입력해주세요.</p>
                </div>
                <div className={style.episodeInfoBox}>
                  <p>작가의 말 : </p>
                  <input type="text" name="authorWords" defaultValue={episode.authorWords} onChange={handleInput} />
                </div>
                <div className={style.episodeInfoImgBox}>
                  <div className={style.labelBox}>
                    <p>회차 썸네일 이미지</p>
                    <label>
                      <div className={style.uploadbtn}>upload</div>
                      <input type="file" name='file' id="file" accept="image/*" onChange={handleThumbnailImage} />
                    </label>
                  </div>
                  {episodeThumbnailImagePreview && episodeThumbnailImagePreview.length > 1 ?
                    <div className={style.ThumbnailBox}>
                      <Image src={episodeThumbnailImagePreview} alt="episodeThumbnailImagePreview" width={200} height={200} />
                    </div>
                    : <></>
                  }
                </div>
                <div className={style.episodeInfoImgBox}>
                  <div className={style.labelBox}>
                    <p>에피소드 이미지 </p>
                    <label>
                      <div className={style.uploadbtn}>upload</div>
                      <input type="file" id="file" name='file' accept="image/*" onChange={handleEpisodeImage} multiple />
                    </label>
                  </div>
                  <p className={style.imgInfotxt}>이미지를 수정하시려면 모든 파일을 올려주세요.</p>
                  <div className={style.filelist}>
                    {episodeImagePreview.map((preview, index) => (
                      <div className={style.filename} key={index}>
                        <p>{preview.name}</p>
                        <button type="button" onClick={() => handleRemoveEpisodeImage(index)}>삭제</button>
                      </div>
                    ))}
                  </div>
                  {episodeImagePreview.length > 0 ?
                    <div className={style.ImgPreview}>
                      {episodeImagePreview.map((preview, index) => (
                        <div className={style.episodeImg} key={index}>
                          <Image src={preview.preview} alt={`에피소드 ${index + 1}`} width={200} height={200} />
                        </div>
                      ))}
                    </div>
                    : <></>
                  }
                </div>
                <div className={style.submit}>
                  <button type="submit">등록</button>
                </div>
              </form>
            </div>
          )))
      }

    </>
  )
}