import { CLEAR_DATA,UPDATE_USERDATA,UPDATE_UserContentWatchTimeData,UPDATE_COURSE_DATA,UPDATE_UserMyCourseData,LOADING } from "./types";

export const updateUserData = (userData) => async (dispatch) => {
	dispatch(setLoading());
	await dispatch({
		type: UPDATE_USERDATA,
		payload: {
			userData,
		},
	});
};
export const updateUserContentWatchTimeData = (userContentWatchTimeData) => async (dispatch) => {
	dispatch(setLoading());
	await dispatch({
		type: UPDATE_UserContentWatchTimeData,
		payload: {
			userContentWatchTimeData,
		},
	});
};
export const updateCourseData = (courseData) => async (dispatch) => {
	dispatch(setLoading());
	await dispatch({
		type: UPDATE_COURSE_DATA,
		payload: {
			courseData,
		},
	});
};
export const updateUserMyCourseData = (userMyCourseData) => async (dispatch) => {
	dispatch(setLoading());
	await dispatch({
		type: UPDATE_UserMyCourseData,
		payload: {
			userMyCourseData,
		},
	});
};
export const clearData = () => async (dispatch) => {
	await dispatch({
		type: CLEAR_DATA,
		payload: {
		},
	});
};
export const setLoading = () => {
	return {
		type: LOADING,
	};
};
