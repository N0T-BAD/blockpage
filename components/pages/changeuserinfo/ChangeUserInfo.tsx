import React, { useState } from 'react'
import style from '@/components/pages/changeuserinfo/ChangeUserInfo.module.css'
import { profileskinDataType } from '@/types/changeUserDataType'
import { profileskinData } from '@/data/profileskinData'
import ChangeUserProfileImg from './ChangeUserProfileImg';

interface ChildProps {
    profileSkinColor: profileskinDataType;
    setProfileSkinColor: React.Dispatch<React.SetStateAction<profileskinDataType>>;
}

export default function ChangeUserInfo({ profileSkinColor, setProfileSkinColor }: ChildProps) {


    return (
        <>
            <div className={style.ChangeUserIntoWrap}>
                <div className={style.profileSkinWrap}>
                    <p className={style.profileSkintxt}>프로필 스킨 변경</p>
                    <div className={style.profileSkinBox}>
                        <div className={style.ProfileSkinButtonBox}>
                            <button className={style.profileSkinItemPurple}></button>
                        </div>
                        <div className={style.ProfileSkinButtonBox}>
                            <button className={style.profileSkinItemPink}></button>
                        </div>
                        <div className={style.ProfileSkinButtonBox}>
                            <button className={style.profileSkinItemGreen}></button>
                        </div>
                        <div className={style.ProfileSkinButtonBox}>
                            <button className={style.profileSkinItemblue}></button>
                        </div>
                    </div>
                </div>
                <div className={style.certificationBox}>
                    <p className={style.certificationtxt}>성인 인증을 하시면 다양한 작품을 감상할 수 있습니다.</p>
                    <button className={style.certificationBtn}>성인 인증</button>
                </div>
                <div className={style.ChangeButtonBox}>
                    <button className={style.ChangeButton}>변경</button>
                </div>
            </div>
        </>
    )
}
