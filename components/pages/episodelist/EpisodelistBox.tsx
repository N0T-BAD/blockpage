// // import Image from 'next/image'
// // import React, { useEffect, useState } from 'react'
// // import style from '@/components/pages/authorworkslist/AuthorSubCategory.module.css';
// // import { useRouter } from 'next/router'
// // import { episodeListData } from '@/data/episodeListData';
// // import { episodeListDataType } from '@/types/episodeListDataType';
// // import axios from 'axios';
// // import { WebToonListDataType } from '@/types/webtoonDataType';

// // interface EpisodeMiddleSectionProps {
// //     episodedata: WebToonListDataType;
// //   }

// // export default function EpisodelistBox(props: { episodedata: WebToonListDataType }) {

// //     const episodedata = props.episodedata.data;

// //     const [episodeList, setEpisodeList] = useState<episodeListDataType[]>([]);

// //     const router = useRouter();

// //     // // episodeListData를 복사하여 정렬할 수 있도록 합니다.
// //     // const sortedEpisodeList = [...episodeListData];

// //     // // rating을 기준으로 오름차순으로 정렬합니다.
// //     // episodeListData.sort((a, b) => b.id - a.id);

// //     episodeList.sort((a, b) => b.id - a.id);

// //     useEffect(() => {
// //         axios.get("`${baseUrl}/api/v1/product/get?categoryLarge=${props.categoryLarge}`", { timeout: 10000 })
// //             .then(res =>
// //                 res.data.data
// //             )
// //             .then(data => setEpisodeList(data))
// //     }, [])

// //     episodeList.sort((a, b) => b.id - a.id);

// //     const handleDeleteClick = (episodeId: number) => {
// //         router.push(`/epdisodedelete/${episodeId}`)
// //     }

// //     return (
// //         <>
// //             {
// //                 <>
// //                     <div className={style.webtoonBox} key={episodedata.episodeViewList}>
// //                         <div className={style.webtoonInfoWrap}>
// //                             <div className={style.ImgWrap}>
// //                                 <Image src={'/assets/images/Best/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
// //                             </div>
// //                             <div className={style.contentWrap}>
// //                                 <p className={style.episodetitle}>{category.id}화 {category.title}</p>
// //                                 <div className={style.option}>
// //                                     <div className={style.views}>
// //                                         <Image src={'/assets/images/icons/star.svg'} alt={'평점'} width={10} height={10} />
// //                                         <p className={style.viewstxt}>{category.rating}</p>
// //                                     </div>
// //                                     <div className={style.likes}>
// //                                         <p className={style.likestxt}>{category.day}</p>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div className={style.webtoonButton}>
// //                             <button onClick={() => router.push('/changeepisode')}>수정</button>
// //                             <button onClick={() => handleDeleteClick(category.id)}>삭제</button>
// //                         </div>
// //                     </div>
// //                 </>
// //             ))}
// //         </>
// //     )
// // }

// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import style from '@/components/pages/authorworkslist/AuthorSubCategory.module.css';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import { WebToonListDataType } from '@/types/webtoonDataType';

// interface EpisodeMiddleSectionProps {
//     episodedata: WebToonListDataType;
// }

// export default function EpisodelistBox(props: EpisodeMiddleSectionProps) {
//     const episodedata = props.episodedata.data;
//     console.log(episodedata);

//     const router = useRouter();



//     const handleDeleteClick = (episodeId: number) => {
//         router.push(`/epdisodedelete/${episodeId}`);
//     };

//     return (
//         <>
//             {
//                 <div className={style.webtoonBox} key={episodedata.episodeViewList}>
//                     <div className={style.webtoonInfoWrap}>
//                         <div className={style.ImgWrap}>
//                             <Image src={'/assets/images/Best/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
//                         </div>
//                         <div className={style.contentWrap}>
//                             <p className={style.episodetitle}>{category.id}화 {category.title}</p>
//                             <div className={style.option}>
//                                 <div className={style.views}>
//                                     <Image src={'/assets/images/icons/star.svg'} alt={'평점'} width={10} height={10} />
//                                     <p className={style.viewstxt}>{category.rating}</p>
//                                 </div>
//                                 <div className={style.likes}>
//                                     <p className={style.likestxt}>{category.day}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={style.webtoonButton}>
//                         <button onClick={() => router.push('/changeepisode')}>수정</button>
//                         <button onClick={() => handleDeleteClick(category.id)}>삭제</button>
//                     </div>
//                 </div>
//             }
//         </>
//     );
// }

import React from 'react'

export default function EpisodelistBox() {
    return (
        <div>EpisodelistBox</div>
    )
}
