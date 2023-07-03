import React, { useState } from "react";
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

const HomeScreen = (props) => {
  
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
  const [showContentDetailsModal,setShowContentDetailsModal] = useState(false);
  const [contentModalDetials,setContentModalDetails] = useState({})

  return(
    <div className="homescreen-cont dsp-flx-rw">

      {/* NAVBAR */}
      <div className="navbar">
        <div className="navbar-cont wid-80-cnt">
          <div className="dsp-flx-rw main-logo-nav">
            <img src={MainLogo} className="main-inc-sz"/>
            <p className="clr-white mrg-0 fnt-sz-2 fnt-wt-bold">WATCH</p>
          </div>

          {
            navOptions.map((data,indx) => {
              return(
                <div className="dsp-flx-rw nav-icn-cont">
                  <img src={data.icn} className="nav-inc-sz"/>
                  <p className="clr-white mrg-0 fnt-sz-3">{data.navTxt}</p>
                </div>
              )
            })
          }

          <div className="dsp-flx-rw logout-icn-cnt">
            <img src={NavIcn4} className="nav-inc-sz"/>
            <p className="clr-white mrg-0 fnt-sz-3">Logout</p>
          </div>
        </div>
      </div>

      {/* HOME SCREEN */}
      <div className="main-cont">

        <div className="main-cont-nav">

          <div className="main-cont-nav-rght-sec dsp-flx-rw">

            <div className="search-bar dsp-flx-rw algn-itm-cnt">
              <img src={SearchIcn} className="main-inc-sz"/>
            </div>

            <div className="dsp-flx-rw algn-itm-cnt">
              <img src={UserIcn} className="main-inc-sz" />
              <p className="clr-white mrg-0 fnt-wt-700 fnt-sz-2-3">Chirag</p>
            </div>
          </div>

        </div>

        <div className="main-top-banner">
          <img src={TopBannerImg} className="main-top-banner-img"/>

          <div className="main-top-banner-items-cont">
            <p className="clr-white mrg-0 fnt-sz-0 fnt-wt-bold head-txt-title">Insider</p>
            <p className="clr-gry-light mrg-0 head-txt-desc">2022 | Comedy | 1 Season</p>
            <div className="dsp-flx-rw">
              <PurpleButton 
                buttTxt="WatchNow"
                style={{marginRight:"2vw"}}
              />
              <FavButton />
            </div>
          </div>

        </div>
        
        {
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
        }
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
            <img src={TopBannerImg} />
          </div>
          <div className="flx-1 content-details-modal-deatils-cont">
            <p className="clr-white mrg-0 fnt-sz-0 fnt-wt-bold bottom-modal-txt-title">{contentModalDetials?.contentTitle}</p>
            <p className="clr-white mrg-0 fnt-sz-3 bottom-modal-txt-info">{contentModalDetials?.contentReleaseYear} | {contentModalDetials.contentTags[0]}</p>
            <p className="clr-white mrg-0 fnt-sz-3 bottom-modal-txt-desc">{contentModalDetials?.contentDescription}</p>
            <div className="dsp-flx-rw">
              <PurpleButton 
                buttTxt="WatchNow"
                style={{marginRight:"2vw"}}
              />
              <FavButton />
            </div>
          </div>
        </div>
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
