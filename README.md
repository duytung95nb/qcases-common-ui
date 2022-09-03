# Pre-requisites
- Nodejs: https://nodejs.org/en/download/package-manager/
- Yarn: npm i yarn -g
# Build project
- Install dependencies: yarn
- Run: yarn build
# Publish to the qcases organization
- Login to npmjs from cli: yarn login
- Test if successfully logged in: npm whoami
- Publish package: yarn publish --access public
- Login to npmjs on browser and check in the organzation:
    https://www.npmjs.com/settings/qcases/packages

NOTE: need to run build before publish


