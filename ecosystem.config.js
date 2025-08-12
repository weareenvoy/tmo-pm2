// ecosystem.config.js
module.exports = {
  apps : [
    /* ───────────── Strapi Middle ───────────── */
    {
      name         : 'Strapi Middle',
      cwd          : 'C:/_projects/TMO-GEC-Middleman/Strapi',

      /* open a real CMD window and KEEP it open */
      script       : 'cmd',
      args         : '/c uv run server.py',   // “/k” = keep window after launch
      windowsHide  : false,                   // show the window (default is true)

      /* optional but nice: */
      env          : { PYTHONUNBUFFERED: 1 }, // see logs instantly
      exec_mode    : 'fork',                  // one instance, no clustering
      instances    : 1
    },

    /* ───────────── TSS Web Middle ──────────── */
    {
      name   : 'TSS Web Middle',
      cwd    : 'C:/_projects/TMO-GEC-Middleman/TSSWeb',
      script : 'cmd',
      args   : '/c uv run server.py',
      windowsHide : false
    },

    /* ───────────── Docent App (React) ──────── */
    {
      name   : 'Docent App',
      cwd    : 'C:/_projects/tmo-docent-web',
      script : 'cmd',
      args   : '/c yarn start',
      windowsHide : true
    },

    /* ───────────── GEC Server ──────── */
    {
      name   : 'GEC Server',
      cwd    : 'C:/_projects/TMO-Docent-App-Schema',
      script : 'cmd',
      args   : '/c timeout /t 12 & uv run run_server.py',
      windowsHide : false
    },

    /* ───────────── Solutions Site Server ──────── */
    {
      name   : 'Solutions Sites',
      cwd    : 'C:/_projects/tmo-solutions-web',
      script : 'cmd',
      args   : '/c npm run serve',
      windowsHide : true
    },

    /* ───────────── Network Wall Map Server ────────*/
		{
      name: 'Network Map Server',
      cwd: 'C:/_projects/Regional-Builds/TMO-EBC-Install/Network-Map-Server',
      interpreter: "node",
      script: "server.js",
      windowsHide : true
    },

    /* ───────────── Coffee Frontend ──────── */
    {
      name   : 'Coffee Frontend',
      cwd    : 'C:/_projects/tmo-coffee-web',
      script : 'cmd',
      args   : 'yarn start',
      windowsHide : true
    },

    /* ───────────── Badge Site ──────── */
    {
      name   : 'Badge Site',
      cwd    : 'C:/_projects/tmo-badge-site-web',
      script : 'cmd',
      args   : '/c yarn start',
      windowsHide : true
    },

    /* ───────────── CI Web ──────── */
    {
      name   : 'Connected Individual Web',
      cwd    : 'C:/_projects/tmo-connected-individual-web',
      script : 'cmd',
      args   : '/c yarn run start',
      windowsHide : true
    },
  ]
};
