import produce from 'immer';

const INITIAL_STATE = {
  student: null,
  signed: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/SIGN_IN_SUCCESS': {
        draft.student = action.payload.student;
        draft.signed = true;
        break;
      }

      case '@student/SIGN_OUT': {
        draft.student = null;
        draft.signed = false;
        break;
      }

      default:
    }
  });
}
