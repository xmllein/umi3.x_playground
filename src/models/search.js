import { getLists } from '../services/search';
export default {
  namespace: 'search',
  state: {
    text: 'dva',
    lists: [],
  },
  // 同步
  reducers: {
    updateText(state, { payload }) {
      return { ...state, ...payload };
    },
    // 获取列表
    getLists(state, { payload }) {
      return { ...state, lists: Array(10).fill(payload) };
    },
  },
  effects: {
    *updateTextAsync({ payload }, { call, put }) {
      yield put({
        type: 'updateText',
        payload,
      });
    },

    *getListsAsync({ payload }, { call, put }) {
      const result = yield call(getLists, payload);

      yield put({
        type: 'getLists',
        payload: result.lists,
      });
    },
  },
};
