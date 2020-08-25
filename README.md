## Setup

1. Once you clone the repo run `npm install` to install all needed packages.   
2. When the packages are installed create environment files `.env.dev` and `.env.production` inside the root folder. 
3. Done. 

## Working

Run `npm run dev` to start a local dev server that watches for file changes and builds a **dev** distribution. All distribution files are created inside the **/dist** folder.  
If you only need to build the distribution files (without a local server or watcher) run `npm run build:dev` or `npm run build:production`.  

The **dev** build will read entries from the `.env.dev` environment file and will not add any compression or optimization to the final build.   
The **production** build will read entries from the `.env.production` environment file and will optimize the build files. 

## Full description 
This is a small Webpack + Vue + Scss setup. @todo.
