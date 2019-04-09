
echo "Building the application"
set -x
npm run build
set +x

echo "Deploying the application"
# & is neccessary to run app as background process
set -x
npm start &
sleep 1
set +x
