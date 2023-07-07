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
import { addToFavouriteApi, createNewContentApi, getContentDataApi, getTrendingContentDataApi, getUserFavouritesDataApi, removeUserFavouritesDataApi } from "../utils/baseApis";
import VideoPlayer from "./VideoPlayer";
import ProgressBar from "@ramonak/react-progress-bar";
import { SimpleTextInput } from "../Components/TextInput";
import { datefunction } from "../utils/fucntions";

const AdminHomeScreen = (props) => {
  const [userData,setUserData] = useState(null);
  const [selectedNavOptions,setSelectedNavOptions] = useState("Home")
  const [navOptions,setNavOptions] = useState([
    {
      icn:NavIcn1,
      icnAlt:NavIcnAlt1,
      navTxt:"Upload"
    },
    {
      icn:NavIcn1,
      icnAlt:NavIcnAlt1,
      navTxt:"Home"
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


  const [uploadPercentage,setUploadPercentage] = useState(0);
  const [uploadFileEndPoint,setUploadFileEndPoint] = useState("");
  const [uploadData,setUploadData] = useState(null)
  let url = "http://localhost:8001/";


  const [contentName,setContentName] = useState("");
  const [contentDescription,setContentDescription] = useState("");
  const [contentReleaseYear,setContentReleaseYear] = useState("");
  const [contentTags,setContentTags] = useState("");
  const [contentDuration,setContentDuration] = useState("");
  const [contentRating,setContentRating] = useState("");
  const [contentImg,setContentImg] = useState("");

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
  },[])
  useEffect(() => {
    if(!contentFetched && userData != null)
    {
      fetchAllContent(1,10,true);
      fetchUserFavouritesData(1,10,true)
    }
  },[userData])
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

        <div className="main-cont-nav">

          <div className="main-cont-nav-rght-sec dsp-flx-rw">

            <div className="search-bar dsp-flx-rw algn-itm-cnt">
              <img src={SearchIcn} className="main-inc-sz"/>
            </div>

            <div className="dsp-flx-rw algn-itm-cnt">
              <img src={UserIcn} className="main-inc-sz" />
              <p className="clr-white mrg-0 fnt-wt-700 fnt-sz-2-3">{(userData != null || userData != undefined) && userData?.userName}</p>
            </div>
          </div>

        </div>

        <div className="upload-banner dsp-flx-rw" style={{display: selectedNavOptions == "Upload" ? "flex" : "none"}}>
          <div className="flx-1 upload-banner-lft">
            <p className="clr-white fnt-sz-0 fnt-wt-bold">Upload Here</p>
            <div className="dsp-flx-rw">
              <p className="clr-white fnt-sz-1 fnt-wt-bold mrg-0">Upload Progress:- </p>
              <p className="clr-purple-dark fnt-sz-1 fnt-wt-bold mrg-0">{`(${uploadPercentage} %)`}</p>
            </div>
            <p className="clr-white fnt-sz-2 fnt-wt-bold">File Endpoint:- {uploadFileEndPoint}</p>
            <div className='progress-bar-cont' style={{width:"30%",marginBottom:20}}>
              <ProgressBar 
                completed={uploadPercentage} 
                width='100%'
              />
            </div>
            <input type="file" 
              className="clr-gry-light "
              onChange={async (e) => {
              console.log(e.target.files);
              const file = e.target.files[0];

              let endPoint = await new Promise((resolve,reject) => {
                var formdata = new FormData();
                formdata.append("fileName", e.target.files[0].name.replace(/\.[^\/.]+$/, '').replace(/ +/g, ""));

                var requestOptions = {
                  method: 'POST',
                  body: formdata,
                  redirect: 'follow'
                };

                fetch(`${url}createUploadRequest`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                    console.log(result)
                    setUploadFileEndPoint(result?.endPoint)
                    resolve(result.endPoint)
                  })
                  .catch(error => {
                    console.log('error', error)
                    reject("error")
                  });
              })

              const chunkSize = 20 * 1000000 ;
              // const url = 'https://httpbin.org/post'
              let index = 0;
              let totalNumOfChunksToUpload = Math.floor(file.size/chunkSize) + (file.size%chunkSize > 0 ? 1 : 0);
              for (let start = 0; start < file.size; start += chunkSize) {
                const chunk = file.slice(start, start + chunkSize)
                console.log(`${index}`,await chunk.arrayBuffer())

                var formdata = new FormData();
                formdata.append("endPoint", endPoint);
                // formdata.set('file', chunk)
                formdata.append("file", chunk, `${index}.mp4`);
                let err = true; 
                while(err)
                {
                  await new Promise((resolve) => {
                    console.log("WHILE CALLED !!")
                    var requestOptions = {
                      method: 'POST',
                      body: formdata,
                      redirect: 'follow'
                    };

                    fetch(`${url}uploadUsingChunks`, requestOptions)
                      .then(response => response.text())
                      .then(result => {
                        // console.log(result);
                        err = false;
                        resolve();
                      })
                      .catch(error => {
                        console.log('error', error);
                        err = true;
                        resolve();
                      });
                  })        
                }
                // const fd = new FormData()
                // fd.set('data', chunk)

                // await fetch(url, { method: 'post', body: fd }).then(res => res.text())
                setUploadPercentage( Math.ceil(((index+1)/totalNumOfChunksToUpload) * 100) )
                index++;
              }

              try{

                await new Promise((resolve,reject) => {
                
                  var formdata = new FormData();
                  formdata.append("endPoint", endPoint);
                  formdata.append("totalCount", index);
                
                  var requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                  };
                
                  fetch(`${url}enterTotalChunks`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                      resolve();
                    })
                    .catch(error => {
                      reject();
                    });
                })

              }
              catch(err)
              {
                console.log("ERROR IS -> ",err)
              }

              var formdata = new FormData();
              formdata.append("endPoint", endPoint);
              formdata.append("count", index);

              var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
              };

              // fetch(`${url}concatChunks`, requestOptions)
              //   .then(response => response.text())
              //   .then(result => console.log(result))
              //   .catch(error => console.log('error', error));

              // let buffer =  await readFileDataAsArrayBuffer(e)
              // console.log(buffer);

              // const chunkSize = 40000
              // const url = 'https://httpbin.org/post'

              // for (let start = 0; start < file.size; start += chunkSize) {
              //   const chunk = file.slice(start, start + chunkSize + 1)
              //   const fd = new FormData()
              //   fd.set('data', chunk)

              //   await fetch(url, { method: 'post', body: fd }).then(res => res.text())
              // }

            }}/>
          </div>
          <div className="flx-1  upload-banner-rght">
            <SimpleTextInput
              placeholderTxt="Enter File Name"
              value={contentName}
              setValue={setContentName}
              inputStyle={{width:"60%"}}
            />
            <SimpleTextInput
              placeholderTxt="Enter Content Description"
              value={contentDescription}
              setValue={setContentDescription}
              inputStyle={{width:"60%"}}
            />
            <SimpleTextInput
              placeholderTxt="Enter Content Release Year"
              value={contentReleaseYear}
              setValue={setContentReleaseYear}
              inputStyle={{width:"60%"}}
            />
            <SimpleTextInput
              placeholderTxt="Enter Content Tags"
              value={contentTags}
              setValue={setContentTags}
              inputStyle={{width:"60%"}}
            />
            <SimpleTextInput
              placeholderTxt="Enter Content Duration"
              value={contentDuration}
              setValue={setContentDuration}
              inputStyle={{width:"60%"}}
            />
            <SimpleTextInput
              placeholderTxt="Enter Content Rating"
              value={contentRating}
              setValue={setContentRating}
              inputStyle={{width:"60%"}}
            />
            <div>
              <p className="clr-gry-light fnt-sz-2">Upload Banner Img</p>
              <input 
                type="file"
                className="clr-gry-light "
                onChange={(e) => {
                  console.log("VALUE IS ",e)
                  let date = datefunction();
                  var formdata = new FormData();
                  formdata.append("file", e.target.files[0], date);
                  formdata.append("fileName", "");
                  formdata.append("atPage", "");
                  formdata.append("uploadedAt", "Competishun App");
                  formdata.append("uploadedBy", "Chirag");

                  var requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                  };

                  fetch("https://competishun-api.moneyyapp.in/v1/uploads/create?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                      console.log("Result is ->",result)
                      setContentImg(result?.data?.fileLink)
                    })
                    .catch(error => console.log('error', error));
                }}
              />
            </div>
            <PurpleButton 
              buttTxt="Save"
              style={{width:"60%",marginLeft:"auto",marginRight:"auto",marginTop:"4vh",marginBottom:"2vh"}}
              onClickFunc={async () => {
                if(uploadFileEndPoint == null || uploadFileEndPoint == undefined || uploadFileEndPoint == "")
                {
                  alert("Upload a File First!!")
                  return;
                }
                if(contentName == "" || contentDescription == "" || contentImg == "" || contentReleaseYear == "" || contentTags == "" || contentDuration == "" || uploadFileEndPoint =="" || contentRating=="")
                {
                  alert("Please fill All Entries First!!")
                  return;
                }
                let data = await createNewContentApi(contentName,contentDescription,contentImg,contentReleaseYear,contentTags,contentDuration,uploadFileEndPoint,contentRating)
                alert("File Uploaded SuccessFully")
              }}
            />
          </div>
        </div>

        {/* ALL DATA */}
        {selectedNavOptions == "Home" && 
        <div className="content-display-sec-indi wid-95-cnt">
          <p className="mrg-0 fnt-sz-2 fnt-wt-200 clr-white content-display-sec-indi-title">ALL</p>
          <div className="indi-content-card-cont dsp-flx-rw"> 
            {
              allContentData.map((indiContent,index) => {
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
                    await removeUserFavouritesDataApi(userData?.userId,contentModalDetials?._id)
                    await fetchUserFavouritesData(1,10,true);
                  }
                  else
                  {
                    await addToFavouriteApi(userData?.userId,contentModalDetials?._id)
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

export default connect(mapStateToProps, {})(AdminHomeScreen);
