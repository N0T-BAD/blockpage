import React, { ChangeEvent, useEffect, useState } from 'react'
import style from '@/components/pages/episodeinfo/EpisodeInfoForm.module.css'
import { useRouter } from 'next/router';
import axios from 'axios';
import { UploadFile, episodeInfoFormDataType } from '@/types/episodeInfoForm';
import Image from 'next/image';

export default function ChangeEpisodeInfoForm() {

  const router = useRouter();

  const [episodeInfoData, setEpisodeInfoData] = useState<episodeInfoFormDataType>({
    id: '',
    title: '',
    episodetitle: '',
    episodedescription: '',
    day: '',
    authortalk: '',
    episodeThumbnail: '',
    episodeImage: '',
  });

  const [episodeThumbnailImage, setEpisodeThumbnailImage] = useState<File>();
  const [episodeImage, setEpisodeImage] = useState<File[]>([]);
  const [episodeThumbnailImagePreview, setEpisodeThumbnailImagePreview] = useState<string>();
  const [episodeImagePreview, setEpisodeImagePreview] = useState<UploadFile[]>([]);
  const regex = new RegExp("(.*?)\.(exe|sh|zip|alz)$");

  useEffect(() => {
    axios(`/api/authorwebtooninfo/${router.query.id}`)
      .then(res => res.data)
      .then(data => {
        setEpisodeInfoData(data);
        setEpisodeThumbnailImagePreview(data.episodeThumbnail);
        setEpisodeImagePreview(data.episodeImage.map((url: string, index: number) => ({
          name: `Episode ${index + 1}`,
          preview: url,
          file: null,
        })));
      })
  }, [episodeInfoData, router.query.id])

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
    if (episodeInfoData.episodetitle === '' || episodeInfoData.episodedescription === '' || episodeInfoData.day === '' || episodeInfoData.authortalk === '') {
      alert('에피소드 정보를 입력해주세요.')
    } else if (!episodeThumbnailImage) {
      alert('웹툰 썸네일 이미지를 입력해주세요.')
    } else if (regex.test(episodeThumbnailImage.name)) {
      alert('해당 파일은 업로드할 수 없습니다.');
    } else if (episodeImage.some((file) => regex.test(file.name))) {
      alert('해당 파일은 업로드할 수 없습니다.');
    } else {
      try {
        const formData = new FormData();
        formData.append('episodetitle', episodeInfoData.episodetitle);
        formData.append('episodedescription', episodeInfoData.episodedescription);
        formData.append('day', episodeInfoData.day);
        formData.append('authortalk', episodeInfoData.authortalk);

        if (episodeThumbnailImage && episodeInfoData.episodeThumbnail !== episodeThumbnailImagePreview) {
          formData.append('episodeThumbnailImage', episodeThumbnailImage);
        } else {
          formData.append('episodeThumbnailImage', episodeInfoData.episodeThumbnail);
        }

        episodeImagePreview.forEach((preview) => {
          if (preview.file) {
            formData.append('episodeImage', preview.file);
          } else {
            formData.append('episodeImagePreview', preview.preview);
          }
        });

        const res = await axios.post(`/api/authorwebtooninfo/${router.query.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log(res);
        if (res.status === 200) {
          alert('웹툰 정보가 등록되었습니다.');
          router.push('/authorworkslist');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      {episodeInfoData &&
        <div className={style.WebtoonDeleteInfoWrap}>
          <form onSubmit={handleSubmit}>
            <div className={style.webtoonInfoBox}>
              <p>작품명 : </p>
              <p className={style.title}>{episodeInfoData.title}</p>
            </div>
            <div className={style.webtoonInfoBox}>
              <p>에피소드 회차 : </p>
              <p className={style.title}>{episodeInfoData.id}화</p>
            </div>
            <div className={style.episodeInfoBox}>
              <p>에피소드 명 : </p>
              <input type="text" name="episodetitle" defaultValue={episodeInfoData.episodetitle} onChange={handleInput} />
            </div>
            <div className={style.episodeInfoBox}>
              <p>에피소드 내용 : </p>
              <input type="text" name="episodedescription" defaultValue={episodeInfoData.episodedescription} onChange={handleInput} />
            </div>
            <div className={style.episodeInfoBox}>
              <p>업로드 일 : </p>
              <input type="text" name="day" defaultValue={episodeInfoData.day} onChange={handleInput} />
            </div>
            <div className={style.episodeInfoBox}>
              <p>작가의 말 : </p>
              <input type="text" name="authortalk" defaultValue={episodeInfoData.authortalk} onChange={handleInput} />
            </div>
            <div className={style.episodeInfoImgBox}>
              <div className={style.labelBox}>
                <p>회차 썸네일 이미지</p>
                <label>
                  <div className={style.uploadbtn}>upload</div>
                  <input type="file" name='file' id="file" accept="image/*" onChange={handleThumbnailImage} defaultValue={episodeInfoData.episodeThumbnail} />
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
                  <input type="file" id="file" name='file' defaultValue={episodeInfoData.episodeImage} accept="image/*" onChange={handleEpisodeImage} multiple />
                </label>
              </div>
              <p className={style.episodeinfo}>이미지를 수정하시려면 모든 파일을 올려주세요.</p>
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
      }
    </>
  )
}