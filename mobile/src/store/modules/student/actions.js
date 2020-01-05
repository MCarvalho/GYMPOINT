export function signInRequest(id) {
  return {
    type: '@student/SIGN_IN_REQUEST',
    payload: { id },
  };
}

export function signInSuccess(student) {
  return {
    type: '@student/SIGN_IN_SUCCESS',
    payload: { student },
  };
}

export function signOut() {
  return {
    type: '@student/SIGN_OUT',
  };
}
