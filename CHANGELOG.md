# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## 2024-12-14

- Framework and packages:
  - Upgrade to [React 19](https://react.dev/blog/2024/12/05/react-19).
  - Replace `react-router-dom` with `react-router` based on this [guide](https://reactrouter.com/upgrading/v6#upgrade-to-v7).
- Deployment:
  - Move deployment from [GitHub Pages](https://pages.github.com/) to [Netlify](https://www.netlify.com/).
  - Introduce usage of Netlify Functions.
- File and asset management:
  - Remove `client` and `server` folder separation.
  - Change image URLs to local images.
- Testing:
  - Change testing utility from Enzyme to React Testing Library.
  - Change testing framework from Jest to Vitest.

## 2024-01-11

- Migrate Create React App (CRA) to Vite.

## 2022-05-05

- Upgrade to [React 18](https://react.dev/blog/2022/03/29/react-v18).

##

&#169; Ken Tandrian 2024.
