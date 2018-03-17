//Saga functions




export function* watchEntity() {
    yield [
      //LOGIN
      //takeEvery(types.LOGIN_REQUEST, login)
      // takeEvery( constants.common.INIT_SIGN_IN, login),
      // takeEvery( constants.common.ADD_NEW_USER, addNewUser)
    ];
  }