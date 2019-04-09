echo "Building the application"
npm run build

echo "Deploying the application"
# & is neccessary to run app as background process
npm start &
