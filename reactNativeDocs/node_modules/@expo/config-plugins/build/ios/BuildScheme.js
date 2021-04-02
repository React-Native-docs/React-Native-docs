"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const XML_1 = require("../utils/XML");
const Paths_1 = require("./Paths");
function getSchemesFromXcodeproj(projectRoot) {
    return Paths_1.findSchemeNames(projectRoot);
}
exports.getSchemesFromXcodeproj = getSchemesFromXcodeproj;
async function getApplicationTargetForSchemeAsync(projectRoot, scheme) {
    var _a, _b, _c, _d, _e;
    const allSchemePaths = Paths_1.findSchemePaths(projectRoot);
    const re = new RegExp(`/${scheme}.xcscheme`);
    const schemePath = allSchemePaths.find(i => re.exec(i));
    if (!schemePath) {
        throw new Error(`scheme '${scheme}' does not exist`);
    }
    const schemeXML = (await XML_1.readXMLAsync({ path: schemePath }));
    const buildActionEntry = (_e = (_d = (_c = (_b = (_a = schemeXML.Scheme) === null || _a === void 0 ? void 0 : _a.BuildAction) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.BuildActionEntries) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.BuildActionEntry;
    const targetName = (buildActionEntry === null || buildActionEntry === void 0 ? void 0 : buildActionEntry.length) === 1
        ? getBlueprintName(buildActionEntry[0])
        : getBlueprintName(buildActionEntry === null || buildActionEntry === void 0 ? void 0 : buildActionEntry.find(entry => {
            var _a, _b, _c, _d;
            return (_d = (_c = (_b = (_a = entry.BuildableReference) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b['$']) === null || _c === void 0 ? void 0 : _c.BuildableName) === null || _d === void 0 ? void 0 : _d.endsWith('.app');
        }));
    if (!targetName) {
        const schemeRelativePath = path_1.default.relative(projectRoot, schemePath);
        throw new Error(`${schemeRelativePath} seems to be corrupted`);
    }
    return targetName;
}
exports.getApplicationTargetForSchemeAsync = getApplicationTargetForSchemeAsync;
function getBlueprintName(entry) {
    var _a, _b, _c;
    return (_c = (_b = (_a = entry === null || entry === void 0 ? void 0 : entry.BuildableReference) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b['$']) === null || _c === void 0 ? void 0 : _c.BlueprintName;
}
//# sourceMappingURL=BuildScheme.js.map