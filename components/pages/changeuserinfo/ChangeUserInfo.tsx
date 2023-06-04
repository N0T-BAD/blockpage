import React, { useEffect, useState } from 'react'
import style from '@/components/pages/changeuserinfo/ChangeUserInfo.module.css'
import { ChangeUserDataType, UserImgData, changeProfileSkin, profileskinDataType } from '@/types/changeUserDataType'
import Image from 'next/image';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { useSession } from 'next-auth/react';
import { userprofile } from '@/state/mypage/userprofile';
import { usernickname } from '@/state/mypage/usernickname';
import { profileskin } from '@/state/mypage/profileskin';
import { useRouter } from 'next/router';
import UserIcon from '../mypage/UserIcon';


export default function ChangeUserInfo() {
  const { data: session } = useSession()

  const [userprofileSkin, setUserProfileSkin] = useRecoilState<profileskinDataType>(profileskin)
  const [userNickname, setUserNickname] = useRecoilState<ChangeUserDataType>(usernickname);
  const [userImg, setUserImg] = useRecoilState<UserImgData>(userprofile);
  const router = useRouter();
  const [userProfileImage, setUserProfileImage] = useState<File>();
  const [userProfileImagePreview, setUserProfileImagePreview] = useState<string>();

  const [changeProfileSkin, setChangeProfileSkin] = useState<changeProfileSkin>({
    data: [{
      memberHasProfileSkinId: 0,
      profileSkinDetail: {
        profileSkinImage: "",
      }
    }]
  });

  const [changeProfileSkinbox, setChangeProfileSkinbox] = useState<changeProfileSkin>({
    data: [{
      memberHasProfileSkinId: 0,
      profileSkinDetail: {
        profileSkinImage: "",
      }
    }]
  });

  useEffect(() => {
    if (session) {
      axios.get('https://blockpage.site/member-service/v1/members?type=detail', {
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
      })
        .then((res) => {
          const profileImage = res.data.data.profileImage;
          const nickname = res.data.data.nickname;
          const profileSkin = res.data.data.profileSkin;
          setUserImg({
            data: {
              profileImage,
            }
          });
          setUserNickname({
            data: {
              nickname,
            },
          });
          setUserProfileSkin({
            data: {
              profileSkin,
            }
          });
          console.log(res.data)
        })

      axios.get("https://blockpage.site/purchase-service/v1/purchases?type=profileSkin", {
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
      })
        .then((res) => {
          setChangeProfileSkin(res.data);
          console.log(res.data.data)
        }
        )
    }

  }, [session])

  const handleProfileSkinColor = (memberHasProfileSkinId: number, profileSkinImage: string) => {
    setChangeProfileSkinbox({
      data: [
        {
          memberHasProfileSkinId: memberHasProfileSkinId,
          profileSkinDetail: {
            profileSkinImage: profileSkinImage,
          },
        },
      ],
    });
  };

  const handleuserProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserProfileImagePreview(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
      setUserProfileImage(e.target.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNickname({
      data: {
        nickname: e.target.value,
      }
    });
  };

  const handleBasicImageChange = () => {
    setUserProfileImagePreview("https://storage.googleapis.com/blockpage-bucket/c1ad0198-d375-4297-a7ce-e1e67a48c0a6%20.png");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userNickname.data.nickname) {
      alert("닉네임을 입력해주세요.")
    } else {
      const formData = new FormData();
      if (userProfileImage) {
        formData.append('newProfileImage', userProfileImage);
      } else if (userProfileImagePreview === "https://storage.googleapis.com/blockpage-bucket/c1ad0198-d375-4297-a7ce-e1e67a48c0a6%20.png") {
        formData.append('profileImage', String("https://storage.googleapis.com/blockpage-bucket/c1ad0198-d375-4297-a7ce-e1e67a48c0a6%20.png"));
      } else {
        formData.append('profileImage', userImg.data.profileImage);
      }
      formData.append('nickname', userNickname.data.nickname);

      axios.put('https://blockpage.site/member-service/v1/members?type=member',
        formData,
        {
          headers: {
            memberId: session?.email || '',
            // role: role,
          },
        })
        .then((res) => {
          console.log(res.data)
        })

      // axios.put('https://blockpage.site/member-service/v1/members?type=member', {
      //   headers: {
      //     memberId: session?.email || '',
      //     // role: role,
      //   },
      //   data: {
      //     profileSkin: changeProfileSkinbox.data[0].memberHasProfileSkinId,
      //   },
      // })
      //   .then((res) => {
      //     console.log(res.data)
      //   })
    }
  }

  return (
    <div className={style.userInfoWrap}>
      <section className={style.ChangeUserInfoTopSection}>
        <form onSubmit={handleSubmit}>
          <div className={style.usernicknameImgBox}>
            <div className={style.usernicknameImg}>
              <p className={style.profileSkintxt}>회원 정보</p>
              <div className={style.changeuserinfobox}>
                <>
                  <div className={style.profileskin}>
                    {!userProfileImagePreview ?
                      <Image src={userImg.data.profileImage} className={style.userProfileImagePreview} alt="userImg" width={70} height={70} />
                      :
                      <>
                        {userProfileImagePreview &&
                          <Image src={userProfileImagePreview} className={style.userProfileImagePreview} alt="userProfileImagePreview" width={70} height={70} />
                        }
                      </>
                    }

                    {changeProfileSkinbox.data ? (
                      changeProfileSkinbox.data.map((item) => (
                        <Image
                          key={item.memberHasProfileSkinId}
                          className={style.profileskinbox}
                          src={item.profileSkinDetail.profileSkinImage}
                          alt={item.profileSkinDetail.profileSkinImage}
                          width={70}
                          height={70}
                        />
                      ))
                    ) : (
                      <>
                        {
                          userprofileSkin.data.profileSkin &&
                          <Image className={style.profileskinbox} src={userprofileSkin.data.profileSkin} alt={userprofileSkin.data.profileSkin} width={70} height={70} />
                        }
                      </>
                    )}

                    <UserIcon />
                  </div>

                  <div className={style.infobox}>
                    <div className={style.btn_input_box}>
                      <label className={style.uploadBtn}>
                        <input type="file" accept="image/*" onChange={handleuserProfileImage} />
                        <p>upload</p>
                      </label>
                      <p className={style.basicimg} onClick={handleBasicImageChange}>기본 이미지 변경</p>
                    </div>
                    <div className={style.btn_input_box}>
                      <p>닉네임</p>
                      {userNickname.data.nickname && userNickname.data.nickname.length > 0 ?
                        <input className={style.usernickname2} type='text' defaultValue={userNickname.data.nickname} onChange={handleChange} />
                        :
                        <input className={style.usernickname2} type='text' onChange={handleChange} />
                      }
                    </div>
                  </div>
                </>
              </div>
              <button type="submit" className={style.changebtn}>변경</button>
            </div>
          </div>
        </form>
      </section>


      <section className={style.ChangeUserInfoMiddleSection}>
        <div className={style.usernicknameImgBox}>
          <div className={style.usernicknameImg}>
            <p className={style.profileSkintxt}>프로필 스킨</p>
            <div className={style.profileSkinWrap}>
              <div className={style.profileSkinBox}>
                <div className={style.ProfileSkinButtonBox}>
                  {changeProfileSkin.data.map((skinData) => (
                    <button
                      key={skinData.memberHasProfileSkinId}
                      onClick={() => handleProfileSkinColor(skinData.memberHasProfileSkinId, skinData.profileSkinDetail.profileSkinImage)}
                    >
                      <Image
                        src={skinData.profileSkinDetail.profileSkinImage}
                        alt={skinData.profileSkinDetail.profileSkinImage}
                        width={50}
                        height={50}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button type="submit" className={style.changebtn}>변경</button>
          </div>
        </div>
      </section>
      <section className={style.ChangeUserInfoMiddleSection}>
        <div className={style.usernicknameImgBox}>
          <div className={style.usernicknameImg}>
            <p className={style.profileSkintxt}>성인 인증</p>
            <div className={style.certificationBox}>
              <p className={style.certificationtxt}>성인 인증을 하시면 다양한 작품을 감상할 수 있습니다.</p>
              <button className={style.changebtn}>인증</button>
            </div>
          </div>
        </div>
      </section>
      <section className={style.ChangeUserInfoBottomSection}>
        <div className={style.ChangeButtonBox}>
          <button className={style.ChangeButton} onClick={() => router.push("/mypage")}>완료</button>
        </div>
      </section>
    </div>
  )
}