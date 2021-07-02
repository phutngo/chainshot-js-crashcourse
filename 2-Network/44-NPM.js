/**
 * Node Package Manager
NPM, or Node Package Manager, makes it easy to share code across many projects. It does this by keeping a public registry of different packages (also referred to as modules!) that developers have published.

NPM also provides a command-line-utility which allows developers to interact with the registry for easily downloading modules. Each module can have many different versions, which allow the modules to fix bugs and make updates without requiring developers to download these new updates.

 This can be especially helpful when a module pushes up a breaking change, one that does not guarantee backwards compatibility. In this case, the way you used the module may not work in a future version. Generally these are major version changes, which we'll discuss further in semantic versioning.

Getting Started
You can start a new project with NPM rather easily. Create a new folder where you'd like to start your project, then run npm init:

NPM init

This will walk you through the process of creating a file called package.json.

 You don't need to fill out these fields for now. If you hit enter you will provide the default value for the field, which is good enough for our current purposes. If you'd like to learn more about any of the properties you can find the package.json documentation here.

After you complete this process you'll have created a new file within your folder called package.json that looks a bit like this:

{
  "name": "newproject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
Now we can start to install packages in our package.json!

Let's try the popular NPM module faker. You can see this module here. In order to install it you can go to your terminal within your project folder and type npm install faker.

This will update our package.json to add the dependencies property:

{
  "dependencies": {
    "faker": "^4.1.0"
  }
}
You'll notice that the value of the key faker is "^4.1.0". This is the module's version. We can express what version of the module we'd like our project to run with here. We'll discuss this further in the section on semantic versioning.

Let's do something with our new library!

Create a new file called index.js within your project folder and paste in the following code:

const faker = require('faker');
const name = faker.name.findName();
const message = `Hello, ${name}!`;
console.log(message);
This will create a fake name and log a hello to them. Just like in the last lesson we can hit node index to run our script:

Faker Names

 Cool names! What are the names you got?

Semantic Versioning
The versioning system NPM uses is called semantic versioning.

Each number separated by the . signifies a different part of the version. For example, 1.1.5 can be broken down into the following:

1       .        1       .         5
^ Major Version  ^ Minor Version   ^ Patch Version
Major Version upgrades traditionally can include breaking changes, meaning they may not function in a backwards compatible way. After upgrading a package's major version, you should always test to see that it's working properly!

If you don't care about the major version of the package you can simply write * or x in your package.json dependencies version section.

 This is not recommended for any production-grade application! Allowing major changes to the library in a production environment without testing first is recipe for disaster. 

Minor Version upgrades are generally backwards compatible. They may include some new features but will usually not include any breaking changes.

If you want to allow minor version upgrades in your package you can write 1.x or ^1.0.0 in your package.json.

Patch Version upgrades are generally reserved for bug fixes. They should not break any existing functionality unless you were relying on unexpected behavior!

If you want to allow patch version upgrades you can write 1.0.x or ~1.0.0 in your package.json.

 For more information on Semantic Versioning you can read up on the NPM documentation.

 Wrap Up
In this lesson we went over the Node Package Manager, how to start a new project, how to install node modules and use them in our scripts, as well as NPM's versioning system!

MARK COMPLETE
 */

