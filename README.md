# Middlemen
The servers in this file are intended to act as intermediaries between the GEC and differnt external applications.

# Install

## Dependencies
Install dependencies for any processes that you want to mange with pm2.

## PM2
1. Install PM2 `npm install pm2 -g`



# Launch

To launch all of the servers using PM2, from the root directory of the repo, run the command

`pm2 start ecosystem.config.js`

This will launch all of the applications in headless mode.

## View CMD Output (Logs)
`pm2 monit`

## Kill all processes
`pm2 kill`

## View process stats
`pm2 status`