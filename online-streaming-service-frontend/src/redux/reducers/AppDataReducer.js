import { UPDATE_USERDATA,UPDATE_UserContentWatchTimeData,UPDATE_COURSE_DATA,UPDATE_UserMyCourseData,LOADING, CLEAR_DATA } from "../actions/types";
const initialState = {
	userData: null,
  courseData: null,
  userContentWatchTimeData: null,
  userMyCourseData: null,
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case UPDATE_USERDATA: {
			console.log(`update user reducer called -> `, action.payload.userData);
			let temp = {...state};
			temp.userData = action.payload.userData;
			temp.loading = false;
			console.log(`update user reducer called -> `,temp);
			return temp;
		}
		case UPDATE_COURSE_DATA: {
			// console.log(`update user reducer called -> `, action.payload.userData);
			return {
				...state,
				courseData: action.payload.courseData,
				loading: false,
			};
		}
		case UPDATE_UserContentWatchTimeData: {
			// console.log(`update user reducer called -> `, action.payload.userData);
			return {
				...state,
				userContentWatchTimeData: action.payload.userContentWatchTimeData,
				loading: false,
			};
		}
		case UPDATE_UserMyCourseData: {
			// console.log(`update user reducer called -> `, action.payload.userData);
			return {
				...state,
				userMyCourseData: action.payload.userMyCourseData,
				loading: false,
			};
		}

		case CLEAR_DATA: {
			// console.log(`update user reducer called -> `, action.payload.userData);
			console.log("CLEAR DATA REDUCER CALLED !!")
			return {
				userData: null,
				courseData: null,
				userContentWatchTimeData: null,
				userMyCourseData: null,
				loading: false,
			};
		}
		case LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}
