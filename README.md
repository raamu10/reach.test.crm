# Reach CRM Portal

A web app with CRM portal 

## Stack

- TypeScript
- React

## Local Development

- **Prerequisites**

  - Node (`v14.x`)
  - IDE (Webstorm / Visual Studio Code)

- Clone repository `git clone git@bitbucket.org:datami/reach-crm-portal.git`
- Switch project directory `cd reach-crm-portal`
- Configuration
  - Create local environment file `cp .env.development .env.local`
- Setup
  - Install packages `npm install`
- Run
  - Start web server: `npm start` (http://localhost:3000)

## Production Deployment

- **Prerequisites**

  - Node (`v14.x`)

- Clone repository `git clone git@bitbucket.org:datami/reach-crm-portal.git`
- Switch project directory `cd reach-crm-portal`
- Configuration
  - Create local environment file `cp .env.production .env.local`
- Setup
  - Install packages `npm install`
- Build
  - Build for production: `npm run build` (output is created in `/build` directory)
- Serve
  - `build` directory contains the production build of your app. Set up any HTTP server so that a visitor to your site is served `index.html`

## Update App Verion - MWEB

`npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]`

## Update Tag name on origin

- Do this after Updating App Version
  `git push origin [ <version-name> ]`
