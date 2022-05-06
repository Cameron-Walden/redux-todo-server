# redux-todo-server

***

## Dependencies

- You can clone down this repo and `npm i` or take a look at each of the individual dependancies below:

- [Nanoid](https://www.npmjs.com/package/nanoid)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Cors](https://www.npmjs.com/package/cors)
- [Express](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)

***
  
## Set up MongoDB

- If you haven't already, create an account at [mongodb.com](https://www.mongodb.com/)
- From the dashboard, in the top left of the screen, click the gray `+ new project` button.
- Name your project and click the `next` button.
- On the next page, either add members, or if none, click the green 'create project' button
- On the next screen, click the green `Build a Database` button.
- For this project, select the `free` tier and click `create`.
- Select yout Cloud Provider and then the region that is closest to you.
- At the bottom of the page, select `Cluster Name` and change to whatever you like. Click the green `Create Cluster` button.
- On the next page, choose you username and password-you will need this for your connection string. Click the green `Create User` button. Setup will take a few minutes.
- Once that has finished, click the `database` tab on the left side of the screen to go back to the Database Deployments page. Click the gray `connect` button.
- Click the green `Add Your Current IP Address` button and then the green `Add IP Address` button. Next, click the green `Choose a connection method` button. Select the `Connect your application` option.
- Now, back in your code editor, create a `.env file` and place the copied connection string into the DB_URL here. Make sure to replace `<password>` with your own password.
- Your `.env` should look something like :
  - DB_URL=`your mongodb connection string here`
- Your application should now be connected to MongoDB!
  