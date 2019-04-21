echo "Cloning Repo"
git clone https://github.com/LeviButcher/devops-demo

cd devops-demo/

git pull

docker build --no-cache . --tag lcbutch/calc:latest

docker stop calc
docker rm calc

echo "Deploying the application"
docker run -d --name calc -p 1337:3000 -t lcbutch/calc:latest
