import { takeEvery } from "redux-saga/effects";

import { Actions } from "../constants";

// TODO: change the action Typing
function* sendUsage(action: any) {
    yield console.log("sendUsageSaga", action)
}

export default function* rootSaga(): IterableIterator<any> {
    yield takeEvery(Actions.fillUsage, sendUsage);
}
