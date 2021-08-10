# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased][]

### Added

- Bootstrap usage mentions in examples
- Mobile responsiveness for inline examples
- Mobile responsiveness for tables

### Changed

- Bootstrap from `4.6.0` to `5.1.0`
- Bottom border for `th` and `td` tags
- CSS classes to match the Bootstrap v5
- Common `Jumbotron` component layout
- Dependencies to match the latest ones
- Differences structure in `Home` component
- GitHub buttons to become fixed in height
- Prop `source` to `children` for `react-markdown`

### Removed

- Dependency `optimize-css-assets-webpack-plugin` in favour of `css-minimizer-webpack-plugin`
- Slashes as divisions from SCSS in favour of `sass:math`

### Fixed

- Issue with GitHub link in `NavbarMenu` component

## [0.3.0][] - 2021-04-12

### Added

- **[maintenance]** Scripts `audit:fix` and `deduplicate` in `package.json`
- Common `GitHub` component
- Dependency `react-helmet`
- GitHub buttons in the common `NavbarMenu` component

### Changed

- **[maintenance]** Configurations for "GitHub Actions" CI build and lint jobs
- **[maintenance]** Configurations for "GitHub Actions" deploy production job
- **[maintenance]** Scripts `build` and `watch` in `package.json`
- Common `Navbar` component mobile responsiveness
- CSS loading mode from `global` to `local`
- Dependencies to match the latest ones
- GitHub buttons in the common `Footer` component
- Import of `webpack-merge` in webpack configurations
- Replace `uglifyjs-webpack-plugin` with `terser-webpack-plugin`
- Sidebar to become hidden on tablets
- Webpack aliases to exclude the "Website" prefix

### Removed

- Dependency `node-sass` in favour of `sass`

## [0.2.0][] - 2020-06-23

### Added

- **[maintenance]** Integration with "GitHub Actions" for CI building and linting
- **[maintenance]** Integration with "GitHub Actions" for production deploying
- **[maintenance]** Integration with Prettier
- Checkbox and radio "Functional" examples
- Checkbox and radio "States" examples
- Exceptions for `react/jsx-props-no-spreading` ESLint rule
- Hot reloading in some missed components
- Sidebar `NavLink` active state

### Changed

- App and library configurations
- Badges to be in the sidebar
- Checkbox and radio examples
- Component `App` to become functional
- Configurations for ESLint to work with Prettier
- Configurations for stylelint to work with Prettier
- Content of the "Home" page
- Content of the "Installation" page
- Dependencies to match the latest ones
- Deprecated `componentWillReceiveProps` in favour of `getDerivedStateFromProps`
- Extension `JS` to `JSX` where appropriate
- Jumbotron to include the website version and revision
- Markdown styles to become separated
- Sidebar `NavLink` height
- Use title case where appropriate

### Removed

- **[maintenance]** Integration with "Travis CI" in favour of "GitHub Actions"
- **[maintenance]** Integration with remark in favour of Prettier
- Configurations `.babelrc` in favour of `babel.config.js`
- Deprecated `better-npm-run` in favour of `cross-env`

### Fixed

- Issue with Prism.js code highlighting after component updates
- Some ESLint code linting issues
- Some Prettier code formatting issues

## 0.1.0 - 2019-07-15

First release.

[unreleased]: https://github.com/victorpopkov/react-ui-icheck-website/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/victorpopkov/react-ui-icheck-website/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/victorpopkov/react-ui-icheck-website/compare/v0.1.0...v0.2.0
