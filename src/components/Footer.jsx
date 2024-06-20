import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[var(--primary-red)] text-[var(--primary-gold)] text-center py-16'>
        <div className='max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-5'>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[var(--primary-purple)] inline-block mt-4'>Costumes</h3>
                <ul>
                    <a href='https://www.amazon.com.mx/California-Costumes-Adult-Caesar-Standard-Costume/dp/B000UMQB1U/ref=sr_1_5?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=36V7MLCI8ZTVD&dib=eyJ2IjoiMSJ9.5l_zAjeLc142mdflDjt0b1WBAFRyXYyO10dzzURUHtZ0soGRbkL9BMHn-AUtWn5JNLZa0s5jW2STLWKX3JzBQz_3Tv-O-N-SMw3imC7E1wAMeyl2cM_XVfISv3bJiQB4hPQcJNT8PHGy1o5apjDjEFq32EPMr7Xq4QxYU6MzYScN2HIe-hjmhyH3YH6OL_fc_DvuGR3BDm1pS5KX4TcMx3y-IVESAiG-cg6uz0XM1g-gz4QLis-X0ITXeh30vB7lne0Q6ibFt5ULIp5jPp2vyM-rVLLvrm5CehjBZQbM2y4.NN5ToKdA79SbVF76pl0ID8-fifnmKKWqh96-NbFjomM&dib_tag=se&keywords=roman%2Bcostume&qid=1718591212&sprefix=roman%2Bcostum%2Caps%2C124&sr=8-5&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c&th=1' target='blank'>
                        <li>Man's Costume</li>
                    </a>
                    <a href='https://www.amazon.com.mx/California-Costumes-Empress-Costume-Burgundy/dp/B002NR1YG2/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2V8GN2AK5PZQ0&dib=eyJ2IjoiMSJ9.wgeJh9RTZhjcY8Y0eANlwVQIMNsn0XaPEpwRpTKt76V39_MNutWU7raWndHdJf7CjRoHIbH7JkUPXFge9CpBkcX5q0HKrdt_wUda7kY2c0DAQuRdp5NShf6VuTNqDC09JkbNWC8xfi4a8ubopY8OzvoH180g0ulMon3Ay-alEmfZJoyIcLifQsaaxvNFNqgHgj4JCfG4LhM3mfoOZCjycLeVIz9uD64loXF7f0mN7LUgBZcyk9IBdA0mjgWTeiJj7zWcQsgVy3tXECTq_BV0IVcJ_c4oA3i3_62qsJinNnE.WDBGZx0XE4C-Xtt0VVpjRi6K7j_GJLeno_4AWgE8QGM&dib_tag=se&keywords=roman+dress&qid=1718591312&sprefix=roman+dress%2Caps%2C121&sr=8-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='blank'>
                        <li>Woman's Costume</li>
                    </a>
                    <a href='https://www.amazon.com.mx/Forum-Novelties-Warrior-Costume-Mediano/dp/B003M1LAFS/ref=sr_1_9?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.84WAogTSJ2FJu6oi06f5CfWZtAr-Qs_SJj1I66csOBYkdfDQ80e6PgzeCDkRziX6uKEjH3n0j9TCsTgn3jv5-PW5MTeAOt17a3VoJbRbbQ8vYE4hmCa7uLGaIxxjuf2xiTr7nf--ykTmEfu-7H8wFS7Yaqx6a6_Iz-h0C--ONW0v9gUFzgxUS3Jl-o0Z0lrtSzms0f7itZ_xLgU8CR9CUzFg-GR8WzsqwBFxB-GsEonSxoECyYT1Se1LAi75cvnZPEnqAc4POcj4yxm5la6JH-tksfJtGE1HrFeASCBtpRs.W8-V3gElbi9yqn06Rdts6KbHF2SUc3Jro1S31hFpg9k&dib_tag=se&keywords=roman%2Bboy&qid=1718592158&sr=8-9&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c&th=1' target='blank'>
                        <li>Boy's Costume</li>
                    </a>
                    <a href='https://www.amazon.com.mx/California-Costumes-Princess-Costume-X-large/dp/B007O3THZU/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1FJYJEPBORTBR&dib=eyJ2IjoiMSJ9.hGqC4cX6HCfvCwd08th4FU21DhpMGlDN5bFqOGSE8zb4nWDjYPiLs7rjZmiV6SWGXMSH36WY02zs8oxoAn4MkdaboiEyFmtB_0iTAToAw0lhlpAll2--kyNZrf623dvr3jrdBCqJ9o-XSnCINs4WDm0cD25krbwf3gRuv8pd4ePvaJQ4IIzmzVUNHIpAC2WQkgoVg99BINAuD9BGUIVaHEQ6us77Inw0g8mfXWeL_jeCA5QupdTqV-uv2zxESupTPiv2p8LcRil36-u00SkGLGfp6U9iEL5dQi_yU7atW4Q.ETWlF7U-JKvyn5dxatVYoFV2wpYPBZz9v-04BxJaj9k&dib_tag=se&keywords=roman+costume+girl&qid=1718592356&sprefix=roman+costume+girl%2Caps%2C118&sr=8-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='blank'>
                        <li>Girl's Costume</li>
                    </a>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[var(--primary-purple)] inline-block mt-4'>Accessories</h3>
                <ul>
                    <a href='https://www.amazon.com.mx/Western-Roman-Empire-SPQR-Pancarta/dp/B09N7QWGQ9/ref=sr_1_2?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2W1X7FBCIKF9Y&dib=eyJ2IjoiMSJ9.TLrnfm5iPuZynIiTbV9BHgjZbs-TCC93gRm4ZKnd74-cNv3GzOXuTzLiBW2a60fok7FauPjH2pGKMGoR_5BJR3EnK_lnNE-_89useLaC_skylrt2hkr8qJVLeE90GYkq8bk8YlXc_0ondAcQiCGIn9p9Vs3Ja54otQLGNzQQ6E3g0FfVawdNqccvQXL8zhTTbbzse_QOw9mWUL2fKk_hcgNaknIJ0oyRQz3pQA_-bc3FMXdArgt4otxPyN6WZFEVmVqfhn1rETvDxDw5NJe1-4ViwY4-QM_L5gBsymB2_n8.Z_8FG0Cp49-8F8MVa7xt-okh45X4fwZWXbU-_GQqllc&dib_tag=se&keywords=roman%2Bbanner&qid=1718592328&sprefix=roman%2Bbanner%2Caps%2C144&sr=8-2&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c&th=1' target='blank'>
                        <li>Banner</li>
                    </a>
                    <a href='https://www.amazon.com.mx/Fyon-Bandera-grande-Senado-Imperio/dp/B01NASKE6K/ref=sr_1_4?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1KIHS1M97ANF1&dib=eyJ2IjoiMSJ9.ILy7EXHUq3SV-kjtlPcdvDEmFfuxwfTrq5axEDp17sAnKlEKBHFAvlYHaiLn0oNUKwryovJndy_lnYsGSsKsTuTtC-9yiV00pfR4csSFV0ZFFY2Dk1n7RC-KOz144sszFqZ6ao_FsfGUM9TQ6dwR2jcJaxfx28DuvznQYALQwGjKEEvx1zesXVOpGASjWEMBeNP0Y7E-ZZNsTGuXkYj11bml1w5Ni5YBtmKQWpRkEv3VJ9phFCcb38hMAnFJ7owzN5unr8w65Ox6rAB9kz3CBfnj0FgJrr3NO0zHdDjlATg.zLqhsOxoSrzeuKtSZ8e5qKW1W0xu7D_TTK9jE1e3FzU&dib_tag=se&keywords=roman+flag&qid=1718592398&sprefix=roman+flag%2Caps%2C121&sr=8-4&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='blank'>
                        <li>Flag</li>
                    </a>    
                    <a href='https://www.amazon.com.mx/Forum-Novelties-Party-Supplies-65228/dp/B004S777C0/ref=sr_1_5?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=6M0LRX8LLT93&dib=eyJ2IjoiMSJ9.Y26x6sRMDgmkeHwAw702hpy1AVRS_DO78ufdbfgnkaHBfzYZePasd4w913Sha29E3QUt7vrJxQOae6xUSoqb-DOUWfnDzhPQiT1xDRSQ90ZZGzkt7bt4cvz4qp7DhEWfbsaavFkeiS7gIPp3bkZXXu6hvLPAKsl4Bo_VhIn7Lkazf42LVtlKgklSaQ9lJyOzEiL3mJdaC3Cq9O14yPzgzR-oAl6Uco5XZ_rImoWu1E8JQ8OfZA8b-QW72uNhncU_DmDHhrxARBYmotFhKxgxjiItJUqwIQ1KQp7GD03enEE.WUOewGrkmQUvkUgWBd-INAKGRqAMmRYZDL35NZNzY1M&dib_tag=se&keywords=roman+crown&qid=1718592422&sprefix=roman+crown%2Caps%2C114&sr=8-5&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='blank'>
                        <li>Crown</li>
                    </a>
                    <a href='https://www.amazon.com.mx/THORINSTRUMENTS-device-Officer-Centurion-Historical/dp/B00OGO8PIK/ref=sr_1_1?crid=2RBJ9VCD8FI4&dib=eyJ2IjoiMSJ9.vrVNID95gB3GVYYSJX310U5Tqe61NUmUyxI6oCOoO1lEVlrHPuKmDHU9EwaIwITVqjwT6pfYTfCGfJv96Xoq4czmQ_bNnPP5WGXajFvEQBnPgyqR48o7XiAK_IBvEYMuEYJLQCV-f2NiGJgSjK1wxQgdlmw7c21KJtZmVnA226UXrputWZkLEoYcTqJq0sniem_BxkirgMWx0_fYVJPfMySRk2Bal0stqO66iV4GR9yFea5IoqklLS6-gw0BbBwM4lS9pGrDS6C8zqH0s9VprcihkKUNqZW1HAWk-4W65j0.B683XeJ-v9Et3LAIP7TT-WzB35S5cpVuFZtI9BZiNZc&dib_tag=se&keywords=roman+helmet&qid=1718592541&sprefix=roman+helm%2Caps%2C119&sr=8-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='blank'>
                        <li>Helmet</li>
                    </a>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[var(--primary-purple)] inline-block mt-4'>Toys</h3>
                <ul>
                    <a href='https://www.amazon.com.mx/PLAYMOBIL%C3%83%C3%82%C2%AE-PLAYMOBIL-5393-Roman-Troop/dp/B01EKG4BM2/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=17XSNGQUY8YZC&dib=eyJ2IjoiMSJ9.QCbLi4cLcKvaX5u4sF4LqXsBpxwL51OrLWCurBNTylcV4gLXJeSDGrLbPDnv-PcH-uK-EY2ucsGncMFeXDzPVvdmOdOPZKk-i1qNmks-cVUGu_x003Hx_wd88qVaXOomxsEUfQHpVg03Fmf5fWthUCQpyrdmkWZEFjNUZG12fmA-axy-otfK27XjM4jspd5SDGfi5Z7kKbEJbqlwqIF9FOhPloscz6oekwPBfvQMiMeW-wWODu2L3GDjRbeKoqJcOtsvlo4H8xoMbJtXetcztsaMePTvVA3bQu5wYEkgSmw.i5A_TSg2DjR5zj_NRAOnGFLrCkVtMGfWjJMflvvS_GA&dib_tag=se&keywords=roman+troop&qid=1718594155&sprefix=roman+troop%2Caps%2C117&sr=8-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='blank'>
                        <li>Roman Troop</li>
                    </a>
                    <a href='https://www.amazon.com.mx/Italeri-Cesars-Wars-Roman-Infantry/dp/B000BMV6GO/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=12E02FI78Z29S&dib=eyJ2IjoiMSJ9.OdgmgynymjhieuH80-zU3jOpfMAHghBMr2Ibh1TvVGouUhYfJ5nIO343PuZy__7nPN0q8I8dXINd5vQDdQmhw1z2BSpLVrq18eZ-XQX4cYmLFApUgEnYHAojTzdxGrBe78mlpqKhW5Jei16LtqGutXkQEbAizcVMo_annI30Gp8sRTxFIdGPP8DG8oSFkQ8ULPSpTAhPCwEO6xJx8h7mYcFAug5TBz-NH-cOIaQH_Twl_Na7C-4g_K9OWzzgyJZ-NcbCutcW2IMmtn924Ja1ZCtq_LdUcmqwFq1Ok5KACSg.MAM3_E3Ad8wB2_73oZefseIGXN-sux6rzdek06hwSwU&dib_tag=se&keywords=roman+infantry&qid=1718594339&sprefix=roman+infantry%2Caps%2C117&sr=8-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='blank'>
                        <li>Roman Infantry</li>
                    </a>
                    <a href='https://www.amazon.com.mx/Safari-Ltd-Antigua-Roma-Super/dp/B00Q6ZG0A2/ref=sr_1_12?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1BISMUT8649H7&dib=eyJ2IjoiMSJ9.MWbLRtiHDsCRpLFtdjSefpIOsdUSKAyAyz2DDhzo_dfqRfzqMu_V4hryNGr0wC-Fliyw1LVhDJvKG0sme-2VqEnpoQE8IG9iMtQdOc7cR03-zZeF4D3kCTuJKrVw9A3pTgv7CD5pTUdng-gqRU4Qk3OcV9EyN2wMDJlOq1IyVSACqRFu9EUenkL_olDjd6IXtaZeInnhq5t6TRostcn5a3dh2pXi8PjrH2botCyn3dHeEd3BFXFApuMU5KMT0-bRIdjo554HsCQSapw_GY9rkkly992o3mKLiZ-jSRy2pgs.QdYXuZDgewEAIznRcBvz3Fl8Z5u5C299r-qTwTFRvjg&dib_tag=se&keywords=roman+soldier&qid=1718594442&sprefix=roman+soldie%2Caps%2C117&sr=8-12&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='blank'>
                        <li>Roman Toys</li>
                    </a>
                    <a href='https://www.amazon.com.mx/Lego-Minifigures-6-Roman-Soldier/dp/B006XK7400/ref=pd_sim_d_sccl_2_1/131-2893744-6846967?pd_rd_w=HsphF&content-id=amzn1.sym.87185f66-0040-404d-af24-e8e9ffa80f6d&pf_rd_p=87185f66-0040-404d-af24-e8e9ffa80f6d&pf_rd_r=YCNKG3QNYW9BH6NXD5JD&pd_rd_wg=uEOPM&pd_rd_r=f130f4af-e0ce-4757-bf16-2bb76288c62e&pd_rd_i=B006XK7400&psc=1' target='blank'>
                        <li>LEGO Soldier</li>
                    </a>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[var(--primary-purple)] inline-block mt-4'>Books</h3>
                <ul>
                    <a href='https://www.amazon.com.mx/Conquerors-Roman-Empire-Goths-English-ebook/dp/B07571GK7G/ref=sr_1_5?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3NEGTD1A5WSKQ&dib=eyJ2IjoiMSJ9.fEVnSzLa8mixYTiq0iIZ8Yhmoi2AZI3VFoqIskhjHf-0i0ciUtLMUy3mRpicV8jHCstSfehwqjGuEiC3CwboOOGWRZ0tDFePjw7igXWmfUhhdZW4fua4z7qaqfZcIet6Pm7jwtQXNhpWjEMHMgaCDjStUm_ZnrRm0DjVP2GZpwT4VQ8bkS2mXrSIoULiUfYJ1PKUu1b_o4znnXzpnIQjopRX9ykm2CpDX6NDuBVOxJSe_6N4MNa3N7_dOr2Cc1q580CR2kZCdL0LZOUb-y85FOhehlsnkh7Cy_J_SuHwv00.6jZbjt1slQau9CEK2ijm540nSaukqZA1pDDDKyV8xMI&dib_tag=se&keywords=roman+goths&qid=1718594550&sprefix=roman+goths%2Caps%2C119&sr=8-5' target='blank'>
                        <li>The Goths</li>
                    </a>
                    <a href='https://www.amazon.com.mx/New-Roman-Empire-History-Byzantium/dp/0197549322/ref=sr_1_11?crid=14NXG9VBFPOJM&dib=eyJ2IjoiMSJ9.Nr08GLRXKUfhFNA7G69ONbbTDY48ja3dKA3dpcdoplqmqSDnqrIxXaH3dik2rRuowH83lDlZkvA0QVGw0HYcphPWhbAVYnJQ0FYJn4NUV6YCoTn1-0kyiqnUiMYzgCz7epK4pSU2A6zkaOvNMqoHo_J5w5Dw11eypO9FrCCsY_VCev5ZfIkmhBCl93fJkS3XQADGiJrMF2WzwLP0VPetKtQfXtoqfPXgQ0CTwh6LBzLlOBZFQ-F1h0eKCMIl81Hk8nphFfpGQzpMqplfWlY96fqxfUUwMoa4G3Pq8MWS9Vc.wIickX5JUaTF-j6emiL6rVj2fS5l29RUWIjKpQhNzZY&dib_tag=se&keywords=roman+empire&qid=1718594669&sprefix=roman+em%2Caps%2C125&sr=8-11&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='blank'>
                        <li>The New Rome</li>
                    </a>
                    <a href='https://www.amazon.com.mx/Roman-Revolution-English-Nick-Holmes-ebook/dp/B0B6QHWDZD/ref=sr_1_2?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31GEF9LGV9H8W&dib=eyJ2IjoiMSJ9.pHe2RntpBERTPtrkhhMt3AwcH1upHxwOWae8H5s4uhH6sX79Wz6f8JF3UIe4I306KKWLW90X59Yzt382Zf_mr3vj29NlbxHsek37sQzftKndtAqeRxvwXCToPi3exsDo3A_ws391jsEijC1_NgLB9jZ6LmD2ZZYBxsQOxoCAybMvryxpo50ULd2LRFoWOhE8fEnfD6bypB6foWrMldfefkkJTZFeGirkAl9d-hZqA0UOemcpZVyxHGqhD6cME_5DK-yIigedRG2JjS3znvSux-BxO3giM-hLiW_R36GHMDM.8RcHHhmEpSyLFgs4bY5PAEmu6TJwGi5zq7xr3H2w4no&dib_tag=se&keywords=roman+revolution&qid=1718594735&sprefix=roman+revolution%2Caps%2C123&sr=8-2' target='blank'>
                        <li>The Roman Revolution</li>
                    </a>
                    <a href='https://www.amazon.com.mx/Roman-Soldier-Operations-Manual-Equipment/dp/1785215655/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=R03E1Y4BOZVE&dib=eyJ2IjoiMSJ9.Z06gx28ckIconmdV85Mkr-YZFbTRszM4semYflrN4K90xhEgS2sJVAONILpE9D4I1lLdY-3jYMjvQSPlMn-kMn8_TVHvtXbEhTUcf58EF6WpM0vGCKo7Ocg1RGzOsBoaKF7lZL8aEcDDssml2l5we8uKKYX1SH3wmUR8u5acS7rgc5tQmdn-Tx7o2WvXngYwkH_oQ0BFJDPOxdH3F-uuYQ.d6Din-awxQ2XH7MAYoJ_HnChcFz8PDWtub1r36Smvgg&dib_tag=se&keywords=roman+operations+manual&qid=1718783766&sprefix=roman+operations+manual%2Caps%2C122&sr=8-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='blank'>
                        <li>Soldier's Manual</li>
                    </a>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[var(--primary-purple)] inline-block mt-4'>Others</h3>
                <ul>
                <a href='https://www.amazon.com.mx/Holy-Grail-Caesars-Empire-Multicolor/dp/B099NW7BCN/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1CM2CCNJGEEO6&dib=eyJ2IjoiMSJ9.wpPtyBR-X9A-GCjwvAzq3ezMbSELBcpTSrs9oq74w5I9HLcyb0MFOtJNYoUazK-d0ofJEsKibqEoCziIJHcltCxSzL9RDodswSISFDaGWGA7MWRl97mUUSfxVYMWAnkuI50ibpotMNjQfiLlbxJ8XKqPFSYq43OeufeVNU93KPCkEDd01OZsXfe1WAG2BNvpVNByKR0-xtD8nalMP7GGyaL5Wo5jcbdYkiqobdhjXCWhZSyk9hLhStf7vGVUUUXno3LvpIbP7RG6pGGBlIPdcbFCnrcNudU_VoOu0NGXEa4.gbxAIc_mNjRmLIhGEvnSJLT9eW1SnMu4CCzDs3MzLmw&dib_tag=se&keywords=caesars+empire&qid=1718594763&sprefix=caesars+empire%2Caps%2C120&sr=8-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='blank'>
                        <li>Caesar's Empire</li>
                    </a>
                    <a href='https://www.amazon.com.mx/LOOYAR-Centurion-Ornamento-Decoraci%C3%B3n-Escritorio/dp/B087PXBMQS/ref=sr_1_28?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=13KZ3PKELS0MA&dib=eyJ2IjoiMSJ9.EaGeycYksnymQXKtUoR6gpwRH4mlKVzLSRXw0JRNbS4wUn1kV-Xn93Ag598FQ-1qzx0XDYQMDoREERLHXPlAIvF-J3iS35K55vEPZlD4PY-M67FAtKBdqnnB8uaCEjT0VZVU2bAkWjA8YWDfIdTDJjBBYRNvicOTF1eJ2v94NnpmoLly29jKO669pMw9UNRohV718Lj-Jgp9YaOOhhTLk5z7gh8W1tCA1ryM1GI4XyhMFV1StKtq-KQLjyJj1U5rUDP8JnaGz7-Vai1nZZymRCA0h-ZiSXfXEkofh2XjfZE.Pe36QaqMxVXRXY5kMOSX3Hfri0dUo8l_aBKJllzCFv8&dib_tag=se&keywords=roman+empire&qid=1718778042&refinements=p_36%3A100000-180000&rnid=9590949011&sprefix=roman+empire%2Caps%2C121&sr=8-28&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='blank'>
                        <li>Sculpture</li>
                    </a>
                    <a href='https://www.amazon.com.mx/Soldier-Javelin-Shield-Bronze-Figurine/dp/B00KVTVA54/ref=sr_1_3?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3QQL0RJ5JNDIS&dib=eyJ2IjoiMSJ9.lFOjBxjTjZ1_803EHVw5gIfkY58XJM-cM3fvISQau6wv0vMXMFNOyYUN80_cQcX-MB2sc6ytH3XIWyjTLz50lVomOieoimUiLZ9gjEKch0xoDmJGog29VtV9BTilpW90LCY0MaTmpfPrA5DsBm8HU5koYt8Syhwe5LYgxzl7DVBGURiLQC14n4DIMkUELPDIlAkZW8qEKF_HVZYT8x4snruh_SGIOafd58hteDltPw3h6qopUtczYbcxuyOHsDM4oavKZqroF0_CfPXfjk00iUA_Fp58_QIVxoLk_ki5ZCI.sCo8SRWW1PWxCIYVmukscXgZJdaxoYizbdv0laYyYXs&dib_tag=se&keywords=bronze+figurine&qid=1718594802&sprefix=bronze+figurine%2Caps%2C119&sr=8-3&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='blank'>
                        <li>Bronze Figurine</li>
                    </a>
                    <a href='https://www.amazon.com.mx/Hicarer-Cuarzo-n%C3%BAmero-Romano-Mecanismo/dp/B0791DR1ZV/ref=sr_1_36?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=39DJFFTQG9CRI&dib=eyJ2IjoiMSJ9.DcYo_75x6Tbj5bCDTWeCh5tiLKzCVXmlV2XRNrN77UGvcfdoCY9NCdDcgoxG6eUEiQgIheHDMEhtx_9Ij2QsH-HAuUmOKVxT7A78tPhp6eZ496wXDEr-MVEWEzrb7nhsvN8xKZ2oVyTo9j22tCaPoGZBIbj9VdNMEm2py7FPSuguNhOH1nZTDCjov0z1OnP3FHzSVh4C7rge6NSgfHKqp3GRcRWUePdbKHEtOLYeZMbii4NLykzqxMrv3lf0i3RxJ3lrfvpxjY_YjwaWWnokna6mhIJ44Ju9wmu0WHkbYnQ.4InLHhobTKgvvwzcd_EwtpkBcEh-hsBM2ELdzrqCYSQ&dib_tag=se&keywords=roman%2Bclock&qid=1718595025&sprefix=roman%2Bclock%2Caps%2C116&sr=8-36&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c&th=1' target='blank'>
                        <li>Clock</li>
                    </a>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer