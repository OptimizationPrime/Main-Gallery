# What image do you want to start building on?
FROM node:latest

# Make a folder in your image where your app's source code can live
    # mkdir: creates a directory
    # -p: make all necessary parent folders automatically
    # /src/app: The path of the directory you are creating
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
    # Which directory is the working directory?
WORKDIR /src/app

# What source code do you what to copy, and where to put it?
    # src/app refers to the directory inside the of the image that we just made, the working directory
    # where we want the app's source code to live and where the source code is going to be copied to
# COPY . /src/app
COPY package*.json ./

# copy everything on this root, to the root on the contianer
COPY . .

# Does your app have any dependencies that should be installed?
    # installs all the dependencies to run our node app using yarn package manager
RUN npm install

# What port will the container talk to the outside world with once created?
    # mapped to a port on the host when spun into a container by using the -p option with "docker run" command
EXPOSE 8040

# How do you start your app?
CMD ["npm", "start", "run webpack"]
