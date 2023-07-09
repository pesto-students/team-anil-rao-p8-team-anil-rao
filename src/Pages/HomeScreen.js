import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../Css/utils.css";

import "../Css/HomeScreen.css"

import MainLogo from "../assets/MainLogo.png";

import NavIcn1 from "../assets/nav-logo/1.png";
import NavIcn2 from "../assets/nav-logo/2.png";
import NavIcn3 from "../assets/nav-logo/3.png";
import NavIcn4 from "../assets/nav-logo/4.png";

import NavIcnAlt1 from "../assets/nav-logo/1Alt.png";
import NavIcnAlt2 from "../assets/nav-logo/2Alt.png";
import NavIcnAlt3 from "../assets/nav-logo/3Alt.png";
import NavIcnAlt4 from "../assets/nav-logo/4Alt.png";

import TopBannerImg from "../assets/background.png";
import CardImg from "../assets/cardimage.png";
import SearchIcn from "../assets/search.png";
import UserIcn from "../assets/userIcn.png";
import { FavButton, PurpleButton } from "../Components/Button";
import { addToFavouriteApi, getContentDataApi, getSearchDataApi, getTrendingContentDataApi, getUserFavouritesDataApi, removeUserFavouritesDataApi } from "../utils/baseApis";
import VideoPlayer from "./VideoPlayer";
import { SimpleTextInput } from "../Components/TextInput";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const HomeScreen = (props) => {
  const [userData,setUserData] = useState(null);
  const [selectedNavOptions,setSelectedNavOptions] = useState("Home")
  const [navOptions,setNavOptions] = useState([
    {
      icn:NavIcn1,
      icnAlt:NavIcnAlt1,
      navTxt:"Home"
    },
    {
      icn:NavIcn2,
      icnAlt:NavIcnAlt2,
      navTxt:"Favourites"
    },
    {
      icn:NavIcn3,
      icnAlt:NavIcnAlt3,
      navTxt:"Trending"
    },
  ])
  const [sectionData, setSectionData] = useState([
    {
      sectionTitle:"All",
      sectionContentData:[
        {
          contentTitle:"Tokyo Train 1",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: CardImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
        {
          contentTitle:"House Of Wealth 2",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: CardImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
        {
          contentTitle:"Insider 3",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: TopBannerImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
        {
          contentTitle:"Tokyo Train 1",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: CardImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
        {
          contentTitle:"House Of Wealth 2",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: CardImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
        {
          contentTitle:"Insider 3",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: TopBannerImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
        {
          contentTitle:"Tokyo Train 1",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: CardImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
        {
          contentTitle:"House Of Wealth 2",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: CardImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
        {
          contentTitle:"Insider 3",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: TopBannerImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
      ]
    },
    {
      sectionTitle:"Trending",
      sectionContentData:[
        {
          contentTitle:"Tokyo Train",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: CardImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
        {
          contentTitle:"House Of Wealth",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: CardImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
        {
          contentTitle:"Insider",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: TopBannerImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
      ]
    },
    {
      sectionTitle:"Your Favourite",
      sectionContentData:[
        {
          contentTitle:"Tokyo Train",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: CardImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
        {
          contentTitle:"House Of Wealth",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: CardImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
        {
          contentTitle:"Insider",
          contentDescription:"The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
          contentImg: TopBannerImg,
          contentReleaseYear: 2023,
          contentTags:["Drama"],
          contentDuration: 9480,
          contentFileEndpoint:"",
          contentRating: 7.8
        },
      ]
    },
  ])
  const [contentFetched,setContentFetched] = useState(false);
  const [allContentData,setAllContentData] = useState([]);
  const [trendingData,setTrendingData] = useState([]);
  const [userFavouritesData,setUserFavouritesData] = useState([]);
  const [showContentDetailsModal,setShowContentDetailsModal] = useState(false);
  const [contentModalDetials,setContentModalDetails] = useState({});
  
  const [showVideoPlayer,setShowVideoPlayer] = useState(false);
  const [selectedVideoData,setSelectedVideoData] = useState(null);

  const [search,setSearch] = useState("");
  const [showSearch,setShowSearch] = useState(false);
  const [searchData,setSearchData] = useState([]);

  const [showNavbar,setShowNavbar] = useState(false);
  const [screenWidth,setScreenWidth] = useState(getWindowDimensions().width)

  useEffect(() => {
    if(userData == null)
    {
      (async () => {
        let temp = localStorage.getItem("userData");
        if(temp == null)
        {
          window.location.replace("/");
        }
        else
        {
          temp = await JSON.parse(temp);
          setUserData(temp);
        }
      })()
    }
    console.log("WIDTH OF SCREEN -> ",getWindowDimensions());
  },[])
  useEffect(() => {
    if(!contentFetched && userData != null)
    {
      fetchAllContent(1,1000,true);
      fetchUserFavouritesData(1,1000,true)
      fetchTrendingContent(1,1000,true);
    }
  },[userData])
  useEffect(() => {
    if(search?.length > 0)
    {
      fetchSearchData(1,1000,true);
    }
  },[search])
  async function fetchAllContent(page=1,limit=10,refresh=false)
  {
    let temp = await getContentDataApi(page,limit);
    if(refresh)
    {
      setAllContentData(temp);
    }
    else
    {
      setAllContentData([...allContentData,...temp]);
    }
  }
  async function fetchTrendingContent(page=1,limit=10,refresh=false)
  {
    let temp = await getTrendingContentDataApi(page,limit);
    if(refresh)
    {
      setTrendingData(temp);
    }
    else
    {
      setTrendingData([...allContentData,...temp]);
    }
  }
  async function fetchUserFavouritesData(page=1,limit=10,refresh=false)
  {
    let temp = await getUserFavouritesDataApi(userData?._id,page,limit);
    console.log("fetchUserFavouritesData FUNCTION CALLED -> ",temp)
    if(refresh)
    {
      setUserFavouritesData(temp);
    }
    else
    {
      setUserFavouritesData([...allContentData,...temp]);
    }
  }
  async function fetchSearchData(page=1,limit=10,refresh=false)
  {
    let temp = await getSearchDataApi(search,page,limit);
    console.log("fetchSearchData FUNCTION CALLED -> ",temp)
    if(refresh)
    {
      setSearchData(temp);
    }
    else
    {
      setSearchData([...searchData,...temp]);
    }
  }
  return(
    <div className="homescreen-cont dsp-flx-rw">

      {/* NAVBAR */}
      <div className="navbar" style={{display: (showNavbar || screenWidth >= 900) ? "flex" : "none"}}>
        <div className="nav-icn-close" onClick={() => {setShowNavbar(false)}}>
          <img src={require("../assets/close.png")}/>
        </div>
        <div className="navbar-cont wid-80-cnt">
          <div className="dsp-flx-rw main-logo-nav">
            <img src={MainLogo} className="main-inc-sz"/>
            <p className="clr-white mrg-0 fnt-sz-2 fnt-wt-bold">WATCH</p>
          </div>

          {
            navOptions.map((data,indx) => {
              return(
                <div className="dsp-flx-rw nav-icn-cont" onClick={() => {
                  setSelectedNavOptions(data.navTxt)
                }}>
                  <img src={data.icn} className="nav-inc-sz"/>
                  <p className={`clr-white mrg-0 fnt-sz-3 ${selectedNavOptions == data.navTxt && "fnt-wt-bold"}`}>{data.navTxt}</p>
                </div>
              )
            })
          }

          <div className="dsp-flx-rw logout-icn-cnt" onClick={() => {
            localStorage.clear();
            window.location.replace("/login");
          }}>
            <img src={NavIcn4} className="nav-inc-sz"/>
            <p className="clr-white mrg-0 fnt-sz-3">Logout</p>
          </div>
        </div>
      </div>

      {/* HOME SCREEN */}
      <div className="main-cont">

        <div className="main-cont-nav  dsp-flx-rw">
          <div className="main-cont-nav-lft-sec dsp-flx-rw">
            <div className="dsp-flx-rw algn-itm-cnt" onClick={() => {setShowNavbar(true)}}>
              <p className="clr-white mrg-0 fnt-wt-700 fnt-sz-2-3">{selectedNavOptions}</p>
            </div>
          </div>

          <div className="main-cont-nav-rght-sec dsp-flx-rw">
            <div className="search-bar dsp-flx-rw algn-itm-cnt">
              <SimpleTextInput 
                placeholderTxt="Search Here"
                value={search}
                setValue={setSearch}
                inputStyle={{padding: screenWidth >= 900 ? "1vh 1vw" : "0.5vh 2vw",margin:0 ,fontSize:screenWidth >= 900 ? "1.5vw" : "3vw",marginRight:"1vw",display:showSearch ? "flex" : "none"}}
              />
              <img src={SearchIcn} className="main-inc-sz" onClick={() => {
                setShowSearch(!showSearch)
              }}/>
            </div>

            <div className="dsp-flx-rw algn-itm-cnt">
              <img src={UserIcn} className="main-inc-sz" />
              <p className="clr-white mrg-0 fnt-wt-700 fnt-sz-2-3">{(userData != null || userData != undefined) && userData?.userName}</p>
            </div>
          </div>

        </div>

        {(selectedNavOptions === "Home" && search?.length == 0) &&
          <div className="main-top-banner">
            <img src={trendingData[0]?.contentImg} className="main-top-banner-img"/>

            <div className="main-top-banner-items-cont">
              <p className="clr-white mrg-0 fnt-sz-0 fnt-wt-bold head-txt-title">{trendingData[0]?.contentTitle}</p>
              <p className="clr-gry-light mrg-0 head-txt-desc">{trendingData[0]?.contentReleaseYear} | {trendingData[0]?.contentTags[0]}</p>
              <div className="dsp-flx-rw">
                <PurpleButton 
                  buttTxt="WatchNow"
                  style={{marginRight:"2vw"}}
                  onClickFunc={() => {
                    setContentModalDetails(trendingData[0]);
                    setShowContentDetailsModal(true)
                  }}
                />
                <FavButton 
                  isFav={userFavouritesData.findIndex((data) => data.contentData._id === trendingData[0]?._id) != -1}
                  onClickFunc={async () => {
                    if(userFavouritesData.findIndex((data) => data.contentData._id === contentModalDetials?._id) != -1)
                    {
                      console.log("REMOVE FROM FAVOURITE CALLED!! ")
                      await removeUserFavouritesDataApi(userData?._id,contentModalDetials?._id)
                      await fetchUserFavouritesData(1,10,true);
                    }
                    else
                    {
                      console.log("ADD TO FAVOURITE CALLED!! ")
                      await addToFavouriteApi(userData?._id,contentModalDetials?._id)
                      await fetchUserFavouritesData(1,10,true);
                    }
                  }}
                />
              </div>
            </div>

          </div>
        }
        {/* ALL DATA */}
       {(selectedNavOptions == "Home"  && search?.length == 0)&& 
        <div className="content-display-sec-indi wid-95-cnt">
          <p className="mrg-0 fnt-sz-2 fnt-wt-200 clr-white content-display-sec-indi-title">ALL</p>
          <div className={`indi-content-card-cont dsp-flx-rw ${selectedNavOptions != "Home" && "card-disp-grid"}`}> 
            {
              allContentData.map((indiContent,index) => {
                if(indiContent?.active)
                return(
                  <div className="indi-content-card" key={index} onClick={() => {
                    setContentModalDetails(indiContent);
                    setShowContentDetailsModal(true)
                  }}>
                    <img src={indiContent.contentImg} className="indi-content-img"/>
                    <div className="indi-content-card-details-cont bck-clr-purple-light">
                      <p className="mrg-0 fnt-sz-3 fnt-wt-700 clr-white indi-content-card-details-cont-title">{indiContent.contentTitle.substring(0,20)}</p>
                      <p className="mrg-0 fnt-sz-3 clr-gry-light indi-content-card-details-cont-details">{indiContent.contentReleaseYear} | {indiContent.contentTags[0]}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        }

        {/* USER FAVOURITES DATA */}
        {((selectedNavOptions == "Home" || selectedNavOptions == "Favourites") && search?.length == 0) && 
          <div className="content-display-sec-indi wid-95-cnt">
            <p className="mrg-0 fnt-sz-2 fnt-wt-200 clr-white content-display-sec-indi-title">Favourites</p>
            <div className={`indi-content-card-cont dsp-flx-rw ${selectedNavOptions != "Home" && "card-disp-grid"}`}> 
              {
                userFavouritesData.map((indiContent,index) => {
                  console.log("indiContent FAVOURITE -> ",indiContent)
                  if(indiContent?.contentData?.active)
                  return(
                    <div className="indi-content-card" key={index} onClick={() => {
                      setContentModalDetails(indiContent.contentData);
                      setShowContentDetailsModal(true)
                    }}>
                      <img src={indiContent.contentData.contentImg} className="indi-content-img"/>
                      <div className="indi-content-card-details-cont bck-clr-purple-light">
                        <p className="mrg-0 fnt-sz-3 fnt-wt-700 clr-white indi-content-card-details-cont-title">{indiContent.contentData.contentTitle.substring(0,20)}</p>
                        <p className="mrg-0 fnt-sz-3 clr-gry-light indi-content-card-details-cont-details">{indiContent.contentData.contentReleaseYear} | {indiContent.contentData.contentTags[0]}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }
        {/* TRENDING DATA */}
        {((selectedNavOptions == "Home" || selectedNavOptions == "Trending") && search?.length == 0) && 
        <div className="content-display-sec-indi wid-95-cnt">
          <p className="mrg-0 fnt-sz-2 fnt-wt-200 clr-white content-display-sec-indi-title">Trending</p>
          <div className={`indi-content-card-cont dsp-flx-rw ${selectedNavOptions != "Home" && "card-disp-grid"}`}> 
            {
              trendingData.map((indiContent,index) => {
                if(indiContent?.active)
                return(
                  <div className="indi-content-card" key={index} onClick={() => {
                    setContentModalDetails(indiContent);
                    setShowContentDetailsModal(true)
                  }}>
                    <img src={indiContent.contentImg} className="indi-content-img"/>
                    <div className="indi-content-card-details-cont bck-clr-purple-light">
                      <p className="mrg-0 fnt-sz-3 fnt-wt-700 clr-white indi-content-card-details-cont-title">{indiContent.contentTitle.substring(0,20)}</p>
                      <p className="mrg-0 fnt-sz-3 clr-gry-light indi-content-card-details-cont-details">{indiContent.contentReleaseYear} | {indiContent.contentTags[0]}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        }
        
        {/* SEARCH DATA */}
        {(search?.length > 0)&& 
         <div className="content-display-sec-indi wid-95-cnt">
           <p className="mrg-0 fnt-sz-2 fnt-wt-200 clr-white content-display-sec-indi-title">Search Results</p>
           <div className={`indi-content-card-cont dsp-flx-rw ${selectedNavOptions != "Home" && "card-disp-grid"}`}> 
             {
               searchData.map((indiContent,index) => {
                 if(indiContent?.active)
                 return(
                   <div className="indi-content-card" key={index} onClick={() => {
                     setContentModalDetails(indiContent);
                     setShowContentDetailsModal(true)
                   }}>
                     <img src={indiContent.contentImg} className="indi-content-img"/>
                     <div className="indi-content-card-details-cont bck-clr-purple-light">
                       <p className="mrg-0 fnt-sz-3 fnt-wt-700 clr-white indi-content-card-details-cont-title">{indiContent.contentTitle.substring(0,20)}</p>
                       <p className="mrg-0 fnt-sz-3 clr-gry-light indi-content-card-details-cont-details">{indiContent.contentReleaseYear} | {indiContent.contentTags[0]}</p>
                     </div>
                   </div>
                 )
               })
             }
           </div>
         </div>
        }

        {/* {
          sectionData.map((data,indx) => {
            return(
              <div className="content-display-sec-indi wid-95-cnt" key={indx}>
                <p className="mrg-0 fnt-sz-2 fnt-wt-200 clr-white content-display-sec-indi-title">{data.sectionTitle}</p>
                <div className="indi-content-card-cont dsp-flx-rw"> 
                  {
                    data.sectionContentData.map((indiContent,index) => {
                      return(
                        <div className="indi-content-card" key={index} onClick={() => {
                          setContentModalDetails(indiContent);
                          setShowContentDetailsModal(true)
                        }}>
                          <img src={indiContent.contentImg} className="indi-content-img"/>
                          <div className="indi-content-card-details-cont bck-clr-purple-light">
                            <p className="mrg-0 fnt-sz-3 fnt-wt-700 clr-white indi-content-card-details-cont-title">{indiContent.contentTitle.substring(0,20)}</p>
                            <p className="mrg-0 fnt-sz-3 clr-gry-light indi-content-card-details-cont-details">{indiContent.contentReleaseYear} | {indiContent.contentTags[0]}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        } */}
      </div>

      {/* CONTENT DETAILS MODAL */}
      {
        showContentDetailsModal && 
        <div className="content-details-modal dsp-flx-rw">
          <div className="content-details-modal-close-butt" onClick={() => {
            console.log("CLOSE BUTTON CLICKED!!")
            setShowContentDetailsModal(false)
          }}>
            <img src={require("../assets/close.png")}/>
          </div>
          <div className="flx-1 content-details-modal-img-cont">
            <img src={contentModalDetials?.contentImg}/>
          </div>
          <div className="flx-1 content-details-modal-deatils-cont">
            <p className="clr-white mrg-0 fnt-sz-0 fnt-wt-bold bottom-modal-txt-title">{contentModalDetials?.contentTitle}</p>
            <p className="clr-white mrg-0 fnt-sz-3 bottom-modal-txt-info">{contentModalDetials?.contentReleaseYear} | {contentModalDetials.contentTags[0]}</p>
            <p className="clr-white mrg-0 fnt-sz-3 bottom-modal-txt-desc">{contentModalDetials?.contentDescription}</p>
            <div className="dsp-flx-rw">
              <PurpleButton 
                buttTxt="WatchNow"
                style={{marginRight:"2vw"}}
                onClickFunc={() => {
                  setSelectedVideoData(contentModalDetials);
                  setShowVideoPlayer(true);
                }}
              />
              <FavButton 
                isFav={userFavouritesData.findIndex((data) => data.contentData._id === contentModalDetials?._id) != -1}
                onClickFunc={async () => {
                  if(userFavouritesData.findIndex((data) => data.contentData._id === contentModalDetials?._id) != -1)
                  {
                    console.log("REMOVE FROM FAVOURITE CALLED!! ")
                    await removeUserFavouritesDataApi(userData?._id,contentModalDetials?._id)
                    await fetchUserFavouritesData(1,10,true);
                  }
                  else
                  {
                    console.log("ADD TO FAVOURITE CALLED!! ")
                    await addToFavouriteApi(userData?._id,contentModalDetials?._id)
                    await fetchUserFavouritesData(1,10,true);
                  }
                }}
              />
            </div>
          </div>
        </div>
      }

      {showVideoPlayer && 
        <VideoPlayer
          onBackPressedFunc={() => {
            setShowVideoPlayer(false)
          }}
          contentData={selectedVideoData}
          quality={userData?.planSelected}
        />
      }

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    //Here State.post is
    //Coming From -> "./reducers/index.js"
    //where "item" is defined under combineReducers
    appData: state.appData,
  };
};

export default connect(mapStateToProps, {})(HomeScreen);
