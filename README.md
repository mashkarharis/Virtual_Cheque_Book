# online_cheque 

__introduction__
this project is to automate all the teadius steps in traditional chaque system.

__install__

___local installation___
_prerequisites:_
- Node installed and configure to run on terminal
- React installed and configured to run on node server
- MySQL installed and configured environment variable to access through terminal
-	npm installed

Sequence of steps
i.	 go to directory to clone the project folder
$`cd online_cheque/`
ii.	clone project
$`git clone https://github.com/SE-Project-08-Cheque/backend--nodejs-mongodb-.git`   
iii.	 go into project folder 
$`cd backend--nodejs-mongodb-`     
iv.	access VScode for further process 
$`code .`  
v.	 initiate npm service in current directory
$`npm init -y`  
vi.	check node server  
$`node server`  
vii.	run application localhost & go to URL shows in the result log.
$`npm run client`  
viii.	build deployment files.
$`npm run client:build` 




Heroku deployment

Prerequisites
-	Heroku CLI installed
-	npm installed

Sequence of steps
i.	Build the application
$`npm run client:build`
ii.	Login to heroku user account
$`heroku login`
iii.	Configure remote repository to heroku scrub
$`heroku git:remote -a online-cheque`
iv.	Cache all the changes
$`git add –all`
v.	Commit all the changes to deploy
$`git commit -m “Deploy: push build model to Heroku”`
vi.	Deploy build in the heroku scrub
$`git push heroku master
