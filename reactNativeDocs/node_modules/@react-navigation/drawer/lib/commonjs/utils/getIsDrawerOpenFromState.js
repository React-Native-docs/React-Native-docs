"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getIsDrawerOpenFromState;

function getIsDrawerOpenFromState(state) {
  if (state.history == null) {
    throw new Error("Couldn't find the drawer status in the state object. Is it a valid state object of drawer navigator?");
  }

  return state.history.some(it => it.type === 'drawer');
}
//# sourceMappingURL=getIsDrawerOpenFromState.js.map