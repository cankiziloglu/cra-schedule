import linear from "./linear";
import square from "./square";

const selection = { linear, square };

export default selection;

export type SelectionType = "add" | "remove";

export type SelectionSchemeType = "linear" | "square";
