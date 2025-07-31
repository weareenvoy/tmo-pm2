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
      windowsHide : false
    },

    /* ───────────── GEC Server ──────── */
    {
      name   : 'GEC Server',
      cwd    : 'C:/_projects/TMO-Docent-App-Schema',
      script : 'cmd',
      args   : '/c timeout /t 12 & uv run run_server.py',
      windowsHide : false
    }
  ]
};
