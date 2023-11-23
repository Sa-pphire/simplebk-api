# simplebk-api

This repository contains a simple Node API server for getting orders, deleting orders and updating seller information using a mongodb database

## Prerequisites

To build and run this project, you need Node.js version 10 or later and
a compatible version of NPM (Node Package Manager) installed. For 
information on how to check your version of Node and NPM, see the [NPMJS
page on downloading and installing Node.js and
npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Getting Started

The following instructions explain how to run this project.

### 1. Download the Repository

To get started with this project, download this repository to your
programming environment. You can clone this project using Git version control:

```
git clone https://github.com/Sa-pphire/simplebk-api.git
```

Or you can download the ZIP archive using your browser. If you download
this project as a ZIP archive, 
[unzip the archive](https://www.wikihow.com/Unzip-a-File) before proceeding.

### 2. Install Depedencies

Navigate to the directory containing the project in your shell or open it
in your preferred IDE.

Then, use the NPM dependency file that we included in the project
directory called `package.json` to download and install your dependencies:

```shell
npm install
```

This command reads the `package.json` file and downloads and saves the
dependencies defined within it to a directory called `node_modules`. It
also creates a `package-lock.json` file that sets the version information for
each of the modules required to build your project.


### 3. Configure your Mongodb Atlas Credentials

1. create a `.env` file.

2. add the `URI` variable in the .env file and set the value with the connection
   string for your Atlas cluster. For more information on finding the
   connection string, see [Connect via
   Driver](https://docs.atlas.mongodb.com/driver-connection/) in the Atlas
   documentation.

```js
    URI = 
      "<Your Atlas Connection String>";
```

3. Save the changes to your `.env` file.

### 4. Run the Project

If you are running from the shell, you can run the application from the
directory that contains it with the following command:

```shell
node index.js
```

If you are running it from the IDE, use the appropriate command to run the
contents of the `index.js` file.


## Test

For testing the project, import the postman collection inside the test folder into postman and run the collection.