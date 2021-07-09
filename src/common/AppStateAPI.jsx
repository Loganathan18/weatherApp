import { useAppState, StateActionTypes } from "./AppState";

export const useAppStateAPI = () => {
    const { state, dispatch } = useAppState();

    return {
        fromDate: state.fromDate,
        toDate: state.toDate,
        filterType: state.filterType,
        filterId: state.filterId,
        fromPage: state.fromPage,
        
        setFromDate: (fromDate) => dispatch({type:StateActionTypes.SET_FROM_DATE, fromDate:fromDate}),
        setToDate: (toDate) => dispatch({type:StateActionTypes.SET_TO_DATE, toDate:toDate}),
        setFilterType: (filterType) => dispatch({type:StateActionTypes.SET_FILTER_TYPE, filterType:filterType}),
        setFilterId: (filterId) => dispatch({type:StateActionTypes.SET_FILTER_ID, filterId:filterId}),
        setFromPage: (fromPage) => dispatch({type:StateActionTypes.SET_FROM_PAGE, fromPage:fromPage}),
        
    }
}

