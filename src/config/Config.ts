let MODE = "live";
const STAGGING_ROOT = "https://dev.finosell.link/api/v2";
const LIVE_ROOT = "https://finosell.link/api/v2";

let ROOT_ADDRESS;
if (MODE === "staging") {
  ROOT_ADDRESS = STAGGING_ROOT;
} else {
  ROOT_ADDRESS = LIVE_ROOT;
}
export const CONFIG = {
  ROOT_ADDRESS: ROOT_ADDRESS,
};
