# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased][]

### Added

- Add website version in footer

### Changed

- Bump dependencies
- Change versions in jumbotron
- Improve mobile responsiveness

## [0.5.0][] - 2021-08-18

### Added

- Add CSS license mentions

### Changed

- Bump dependencies
- Disable unused Bootstrap components
- Migrate to webpack asset modules
- Rename output CSS and JS
- Replace CSS classes `mb-4 mt-4` with `my-4`
- Replace `styleName` with `className`
- Separate `vendor` and `app` output CSS

### Removed

- Remove [webpack][] build size warning
- Remove `babel-plugin-react-css-modules`
- Remove `file-loader`
- Remove `precss`

## [0.4.0][] - 2021-08-10

### Added

- Add Bootstrap usage mention in examples
- Add inline examples mobile responsiveness
- Add tables mobile responsiveness

### Changed

- Bump dependencies
- Change "Home" page content
- Change `<th />` and `<td />` bottom border
- Change jumbotron layout
- Make [GitHub][] buttons fixed in height
- Migrate Bootstrap from `4.6.0` to `5.1.0`
- Replace SCSS division slashes with `sass:math`
- Replace `optimize-css-assets-webpack-plugin` with `css-minimizer-webpack-plugin`
- Replace `react-markdown` `source` prop with children

### Fixed

- Fix navbar [GitHub][] link issue

## [0.3.0][] - 2021-04-12

### Added

- **[maintenance]** Add `audit:fix` and `deduplicate` scripts
- Add `react-helmet`
- Add navbar [GitHub][] buttons

### Changed

- **[maintenance]** Change [GitHub Actions][] jobs configurations
- **[maintenance]** Change `build` and `watch` scripts
- Bump dependencies
- Change `css-loader` mode from `global` to `local`
- Change footer [GitHub][] buttons
- Exclude the "website" prefix in [webpack][] aliases
- Hide sidebar on tablets
- Improve navbar mobile responsiveness
- Reorder `webpack-merge` import
- Replace deprecated `node-sass` with `sass`
- Replace deprecated `uglifyjs-webpack-plugin` with `terser-webpack-plugin`

## [0.2.0][] - 2020-06-23

### Added

- Add "Functional" and "States" examples
- Add `react/jsx-props-no-spreading` [ESLint][] exception
- Add hot reloading for some missed components
- Add jumbotron website version and revision
- Add sidebar links active state

### Changed

- **[maintenance]** Replace [Travis CI][] with [GitHub Actions][] to build, lint and deploy
- **[maintenance]** Replace [remark][] with [Prettier][]
- Bump dependencies
- Change "Home" and "Installation" content
- Change [ESLint][] and [stylelint][] configurations to work with [Prettier][]
- Change `App` component to become functional
- Change app and library configurations
- Change examples
- Change sidebar links height
- Move badges to the sidebar
- Replace `.babelrc` with `babel.config.js`
- Replace `JS` extension with `JSX` where appropriate
- Replace deprecated `better-npm-run` with `cross-env`
- Replace deprecated `componentWillReceiveProps` with `getDerivedStateFromProps`
- Separate markdown styles
- Use title case where appropriate

### Fixed

- Fix [ESLint][] code linting issues
- Fix [Prettier][] code formatting issues
- Fix code highlighting issues

## 0.1.0 - 2019-07-15

First release.

[unreleased]: https://github.com/victorpopkov/react-ui-icheck-website/compare/v0.5.0...HEAD
[0.5.0]: https://github.com/victorpopkov/react-ui-icheck-website/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/victorpopkov/react-ui-icheck-website/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/victorpopkov/react-ui-icheck-website/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/victorpopkov/react-ui-icheck-website/compare/v0.1.0...v0.2.0
[eslint]: https://eslint.org/
[github actions]: https://github.com/features/actions
[github]: https://github.com/
[prettier]: https://prettier.io/
[remark]: https://remark.js.org/
[stylelint]: https://stylelint.io/
[travis ci]: https://travis-ci.org/
[webpack]: https://webpack.js.org/
