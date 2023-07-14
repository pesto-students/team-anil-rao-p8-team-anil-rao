// let url = "http://localhost:8001/";
let url = "https://online-streaming-service-backend.moneyyapp.in/"
export const getUserDataApi = (email="",password="") => {
  return new Promise ((resolve,reject) => {var formdata = new FormData();
    formdata.append("password", password);
    formdata.append("email", email);
    formdata.append("page", "1");
    formdata.append("limit", "10");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${url}v1/users/readAll?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds`, requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      // console.log('error', error)
      reject("error");
    });
  })
}
export const createNewUserApi = (userName="",email="",password="",planSelected="standard") => {
  return new Promise ((resolve,reject) => {var formdata = new FormData();
    formdata.append("userName", userName);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("planSelected", planSelected);
    formdata.append("isAdmin", "false");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${url}v1/users/create?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds`, requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      // console.log('error', error)
      reject("error");
    });
  })
}
export const getContentDataApi = (page=1,limit=10) => {
  return new Promise ((resolve,reject) => {var formdata = new FormData();
    formdata.append("page", page);
    formdata.append("limit", limit);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${url}v1/content/readAll?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds`, requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      // console.log('error', error)
      reject("error");
    });
  })
}
export const getTrendingContentDataApi = (page=1,limit=10) => {
  return new Promise ((resolve,reject) => {var formdata = new FormData();
    formdata.append("page", page);
    formdata.append("limit", limit);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${url}v1/content/readAllTrending?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds`, requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      // console.log('error', error)
      reject("error");
    });
  })
}
export const getUserFavouritesDataApi = (userId="",page=1,limit=10) => {
  return new Promise ((resolve,reject) => {var formdata = new FormData();
    formdata.append("userId", userId);
    formdata.append("page", page);
    formdata.append("limit", limit);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${url}v1/favourites/readAll?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds`, requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      // console.log('error', error)
      reject("error");
    });
  })
}
export const removeUserFavouritesDataApi = (userId="",contentId="") => {
  return new Promise ((resolve,reject) => {
    var formdata = new FormData();
    formdata.append("userId", userId);
    formdata.append("contentId", contentId);
    console.log("DELETE API CALLED WITH DATA -> ",formdata)
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${url}v1/favourites/delete?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds`, requestOptions)
    .then(response =>
      { 
        console.log(response)
        resolve()
      })
    .catch(error => {
      // console.log('error', error)
      reject("error");
    });
  })
}
export const addToFavouriteApi = (userId="",contentId="") => {
  return new Promise ((resolve,reject) => {
    var formdata = new FormData();
    formdata.append("userId", userId);
    formdata.append("contentId", contentId);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${url}v1/favourites/create?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      console.log('error', error)
      reject("error");
    });
  })
}
export const createNewContentApi = (contentTitle="",contentDescription="",contentImg="",contentReleaseYear="",contentTags="",contentDuration="",contentFileEndpoint="",contentRating="") => {
  return new Promise ((resolve,reject) => {var formdata = new FormData();
    formdata.append("contentTitle", contentTitle);
    formdata.append("contentDescription", contentDescription);
    formdata.append("contentImg", contentImg);
    formdata.append("contentReleaseYear", contentReleaseYear);
    formdata.append("contentTags", contentTags);
    formdata.append("contentDuration", contentDuration);
    formdata.append("contentFileEndpoint", contentFileEndpoint);
    formdata.append("contentRating", contentRating);
    formdata.append("active", false);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${url}v1/content/create?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds`, requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      // console.log('error', error)
      reject("error");
    });
  })
}
export const getFileEntryDataApi = () => {
  return new Promise ((resolve,reject) => {
    var formdata = new FormData();
    formdata.append("page", "1");
    formdata.append("limit", "1000000");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://online-streaming-service-backend.moneyyapp.in/v1/fileEntry/readAll", requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      // console.log('error', error)
      reject("error");
    });
  })
}
export const inactiveContentApi = (contentId="") => {
  return new Promise ((resolve,reject) => {var formdata = new FormData();
    formdata.append("active", "false");
    formdata.append("_id", contentId);
    console.log("INACTIVATE CONTENT API CALLED WITH -> ",contentId);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${url}v1/content/update?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      console.log('error', error)
      reject("error");
    });
  })
}
export const activateContentApi = (contentId="") => {
  return new Promise ((resolve,reject) => {var formdata = new FormData();
    formdata.append("active", "true");
    formdata.append("_id", contentId);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${url}v1/content/update?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds`, requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      // console.log('error', error)
      reject("error");
    });
  })
}
export const getSearchDataApi = (searchString="",page=1,limit=1000) => {
  return new Promise ((resolve,reject) => {var formdata = new FormData();
    formdata.append("page", page);
    formdata.append("limit", limit);
    formdata.append("searchString", searchString);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${url}v1/content/readAll?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds`, requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      // console.log('error', error)
      reject("error");
    });
  })
}
export const updateContentViewApi = (contentId,contentView=null) => {
  if(contentView == null || contentView == undefined)
  {
    return;
  }
  return new Promise ((resolve,reject) => {var formdata = new FormData();
    formdata.append("_id", contentId);
    formdata.append("contentViews", contentView);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${url}v1/content/update?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds`, requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      // console.log('error', error)
      reject("error");
    });
  })
}
export const checkEmailExistsApi = (email="") => {
  return new Promise ((resolve,reject) => {var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("page", "1");
    formdata.append("limit", "10");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${url}v1/users/readAll?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOiI4NjE5ODgzNjYzIiwiaWF0IjoxNjQ3MjYwMDY0fQ.fOYX04YwCJCbH1Zs3V5OMV6BaXAzyYhK7uVDANUf_Ds`, requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      // console.log('error', error)
      reject("error");
    });
  })
}
export const baseTemplate = () => {
  return new Promise ((resolve,reject) => {
    fetch()
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      resolve(result.data)
    })
    .catch(error => {
      // console.log('error', error)
      reject("error");
    });
  })
}