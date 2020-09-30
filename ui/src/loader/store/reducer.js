const CreateLoaderReducer = matches => {
  const initialState = {
    isLoading: false,
  };

  const LOADER_REDUCER = (state = initialState, action) => {
    const isSuccess = action.type.indexOf(matches.SUCCESS);
    const isPending = action.type.indexOf(matches.PENDING);
    const isReject = action.type.indexOf(matches.REJECT);

    if (isSuccess !== -1) {
      return {
        ...state,
        isLoading: false,
      };
    }

    if (isPending !== -1) {
      return {
        ...state,
        isLoading: true,
      };
    }

    if (isReject !== -1) {
      return {
        ...state,
        isLoading: false,
      };
    }

    return state;
  };

  return LOADER_REDUCER;
};

export default CreateLoaderReducer;
