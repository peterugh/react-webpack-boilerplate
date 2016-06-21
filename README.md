# react-webpack-boilerplate
React Boilerplate with Webpack Hot Module Replacement, CSS Modules, and Redux

## Install Instructions

- Install `node` (tested `4.3.1`) and `npm` (tested `2.14.12`)
- Instlal `gulp` globally: `npm install gulp -g` (may require `sudo`)
- Install `webpack-dev-server` globally: `npm install webpack-dev-server -g` (may require `sudo`)
- Navigate to directory and install dependencies: `npm install`
- To work on project type `gulp dev` then visit `http://localhost:8080/webpack-dev-server/` in your browser
- To prepare for production type `gulp dist`

## Summary

This boilerplate includes a lot of helper `gulp` tasks for running a more robust site. You can add SASS mixins and libraries like `bourbon` or `neat`, as well as add images per component. Subfolders are supported so feel free to organize within the `app/js` folder as desired. Have fun!

## Advanced

This boilerplate also includes a branch that has a basic Redux data store. It includes an example using an AJAX call to show how to use middleware with Redux. Pull down that specific branch in order to use Redux with this boilerplate. Becuase the Redux portion of this boilerplate adds layers of complexity, it hasn't been merged into master.

## Troubleshooting

If you have issues, check your node version. If node looks ok, install dependencies one at a time. Refer to `package.json` for list of dependencies. Instlal with correct version in this format: `npm install package-name@x.x.x` where x.x.x is the listed version number in `package.json`. For example: `npm install react-dom@15.1.0`
