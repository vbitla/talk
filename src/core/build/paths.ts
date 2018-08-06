import fs from "fs";
import path from "path";

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = (relativePath: string) =>
  path.resolve(appDirectory, relativePath);

const resolveSrc = (relativePath: string) =>
  path.resolve(__dirname, "../../", relativePath);

export default {
  appPostCssConfig: resolveSrc("core/build/postcss.config.js"),
  appLoaders: resolveSrc("core/build/loaders"),
  appSrc: resolveSrc("."),
  appTsconfig: resolveSrc("core/client/tsconfig.json"),
  appPolyfill: resolveSrc("core/build/polyfills.js"),
  appLocales: resolveSrc("locales"),
  appThemeVariables: resolveSrc("core/client/ui/theme/variables.ts"),
  appThemeVariablesCSS: resolveSrc("core/client/ui/theme/variables.css"),
  appStreamHTML: resolveSrc("core/client/stream/index.html"),
  appStreamLocalesTemplate: resolveSrc("core/client/stream/locales.ts"),
  appStreamIndex: resolveSrc("core/client/stream/index.tsx"),
  appEmbedIndex: resolveSrc("core/client/embed/index.ts"),
  appEmbedHTML: resolveSrc("core/client/embed/index.html"),

  appDistStatic: resolveApp("dist/static"),
  appPublic: resolveApp("public"),
  appPackageJson: resolveApp("package.json"),
  appNodeModules: resolveApp("node_modules"),
};