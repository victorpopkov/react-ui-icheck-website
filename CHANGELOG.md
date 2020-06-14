# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased][]

### Added

- **[maintenance]** Exceptions for the `react/jsx-props-no-spreading` ESLint rule
- **[maintenance]** Integration with "GitHub Actions" for CI building and linting
- **[maintenance]** Integration with "GitHub Actions" for the deploying production
- **[maintenance]** Integration with Prettier
- Checkbox and radio "Functional" examples
- Checkbox and radio "States" examples
- Hot reloading in some missed components
- Sidebar `NavLink` active state

### Changed

- **[maintenance]** Configurations for ESLint to work with Prettier and become simpler
- **[maintenance]** Configurations for stylelint to work with Prettier and become simpler
- Badges to be in the sidebar
- Checkbox and radio examples
- Configurations for the app and the library
- Content of the "Home" page
- Content of the "Installation" page
- Dependencies to match the latest ones
- Deprecated `componentWillReceiveProps` in favour of `getDerivedStateFromProps`
- Extension `JS` to `JSX` where appropriate
- Jumbotron to include the website version and revisions
- Markdown styles to become separated
- Sidebar `NavLink` height
- Use title case where appropriate

### Removed

- **[maintenance]** Integration with "Travis CI" in favour of "GitHub Actions"
- **[maintenance]** Integration with remark in favour of Prettier
- Dependency `better-npm-run` in favour of `cross-env`

### Fixed

- **[maintenance]** Some ESLint code linting issues
- **[maintenance]** Some Prettier code formatting issues
- Issue with Prism.js code highlighting after component updates

## 0.1.0 - 2019-07-15

First release.

[unreleased]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.1.0...HEAD
