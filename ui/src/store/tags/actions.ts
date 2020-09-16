import { createAsyncThunk } from '@reduxjs/toolkit';
import TagsService from '../../services/tags.service';

const ActionTypes = {
  GET_TAGS: '[TAGS] get_tags',
};

const getTags = createAsyncThunk(ActionTypes.GET_TAGS, async () => {
  const response = await TagsService.getTags();
  return response.data;
});

const ActionCreators = {
  getTags,
};

export { ActionTypes, ActionCreators };
