import React, { useState } from 'react'
import style from '@/components/pages/authorworkslist/AuthorWorksList.module.css'
import { TransactionHistoryData } from '@/data/transactionHistoryData'
import Image from 'next/image';
import { authorWorksListData } from '@/data/authorWorksListData';
import AuthorCash from './AuthorCash';
import { useRouter } from 'next/router';

const AuthorWorksList = () => {

  const [active, setActive] = useState('');

  const handleCategoryClick = (name: string) => {
    setActive(name);
  }

  const router = useRouter();

  const handlewebttoninfo = () => {
    router.push("/webtooninfo");
  }

  return (
    <>
      <div className={style.HistoryCategory}>
        <nav>
          <ul>
            {authorWorksListData.map((category) => (
              <li
                key={category.id}
                className={category.name === active ? `${style.active}` : ""}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {authorWorksListData.map((category) => (
        <div className={category.name === active ? `${style.Clickactive}` : `${style.NoClickactive}`}>
          {
            category.name === '웹툰 조회' ?
              <>
                <div className={style.webtoonBox}>
                  <div className={style.ImgWrap}>
                    <Image src={'/assets/images/Best/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
                  </div>
                  <div className={style.contentWrap}>
                    <div className={style.option}>
                      <div className={style.views}>
                        <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                        <p className={style.viewstxt}>{category.webtoonsubcategories[1].views}</p>
                      </div>
                      <div className={style.likes}>
                        <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                        <p className={style.likestxt}>{category.webtoonsubcategories[1].likes}</p>
                      </div>
                    </div>
                    <p className={style.title}>{category.webtoonsubcategories[1].title}</p>
                    <p className={style.author}>{category.webtoonsubcategories[1].author}</p>
                  </div>
                </div>
                <footer className={style.AuthorFooterWrap}>
                  <div className={style.footerBtn}>
                    <Image
                      src={'/assets/images/icons/plus.svg'}
                      alt="footerBtnIcon"
                      width={50}
                      height={50}
                      priority
                      onClick={handlewebttoninfo}
                    />
                  </div>
                </footer>
              </>
              :
              category.name === '정산 & 통계' ?
                <>
                  <AuthorCash />
                  <div className={style.webtoonBox}>
                    <div className={style.ImgWrap}>
                      <Image src={'/assets/images/Best/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
                    </div>
                    <div className={style.contentWrap}>
                      <div className={style.option}>
                        <div className={style.views}>
                          <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                          <p className={style.viewstxt}>{category.webtoonsubcategories[1].views}</p>
                        </div>
                        <div className={style.likes}>
                          <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                          <p className={style.likestxt}>{category.webtoonsubcategories[1].likes}</p>
                        </div>
                      </div>
                      <p className={style.title}>{category.webtoonsubcategories[3].title}</p>
                      <p className={style.author}>{category.webtoonsubcategories[3].author}</p>
                    </div>
                  </div>
                </>
                : <></>
          }
        </div>
      ))}
    </>
  )
}

export default AuthorWorksList;