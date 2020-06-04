#How to Make a RESTful API in Node 12 in Fewer than 10 Minutes

This code goes with my YouTube video with the above title.

## Links
- Video: (still shooting it)
- Code: https://github.com/MadDevSkilz/how-to-make-a-restful-api-in-node-12-in-fewer-than-10-minutes
- Twitter: @DevSkilz
- LinkedIn: [https://www.linkedin.com/in/brucevanhorn2/](https://www.linkedin.com/in/brucevanhorn2/)
- My Website:  [https://maddevskilz.com](https://maddevskilz.com)
- Postman tutorial video: [https://youtu.be/NNABlHyVcYc](https://youtu.be/NNABlHyVcYc)


##Transcript
If you saw my video on creating a restful api with Python in fewer than 10 minutes, then you know what I”m going to say first.  To keep this at 10 minutes or fewer, I’m not going to give you a dissertation on what an API is or why you might want to make one.  What I am going to do is to show you how easy it is to make an API in Node using Express library and a few pieces of middleware.  If you’ve made API’s before in other languages and are curious how it works in Node, then this will be a great video for you.  If you’ve dabbled with Node and want to learn to make a web api quickly, this will be a great video for you as well.

Let’s lead off with why would we want to make an API in Node versus some other language like C# or Java?  I can give you three reasons I find working with Node and Express very attractive.

First, you can actually do this in five minutes! Working with Express is extremely easy and straight forward when compared with .NET’s MVC API framework.  Which brings me to the next selling point, Node’s comparatively small dependency graph.  Since this is pretty much what Node is made to do, you don’t have to deal with 100 dependencies before you even write one line of code.  The third reason, node makes it incredibly easy to use remote debugging.  If you want to debug your API while it is running on the production server you can.  If you want to do this in C# you need to install special software on the server.  Python, which is usually awesome is comparatively complicated, and the debugging experience isn’t what I would expect it to be coming from a Visual Studio background where debugging is great.  Remote debugging is useful when you run into the occasional crazy bug that only happens in production. 

I’m assuming at this stage you have Node JS and the node package manager, NPM, installed on your computer and that you have some sort of code editor you can use.  My favorite is webstorm, which isn’t free, but my second favorite, the one I use to teach full stack bootcamps at Southern Methodist University, go ponies, is Visual Studio Code, which is free and runs on all major operating systems.

I could use some simple project templates that are part of webstorm, but this isn’t about web storm, so I’ll do it all manually with a terminal.  Most of the good editors have a terminal in them, web storm and visual studio code certainly do.  If your favorite doesn’t have a terminal window in it, just launch your terminal program, which is called terminal on MacOS and Linux, and Powershell on Windows.  The commands I’ll show you work in all three environments.

Here I am in the Mac terminal and the first thing I want to do is to create a folder to hold my project.  I keep all my work in a project folder in my home directory, so I’ll CD into that and make a new directory called mds-express-demo.  Next, I’ll cd into this folder and initialize my project with npm init -y.  This will generate a package.json file for me, and I need this to track my dependencies, which are the libraries I’ll use like Express.

Next, I’ll install those dependencies.  I’ll type in NPM install express.  After a minute or so it’ll be installed.

Now I’ll open this project folder in an editor.  Remember, the editor isn’t important.  You can use anything that is capable of editing a text file.  You can find the code we’re about to write on github.  The link is listed in the video description.

I’ll create a new javascript file.  I’ll call it server.js.  

The first few lines, I’ll import my  required libraries.  I’m using ES6 syntax on my declarations, so these first two are constants.  I’ll bring in Express, and path which is part of node, which explains why we only installed express earlier with NPM.

Next, I’ll set up the express app itself.  I’ll create another constant called app and use the express constructor to create an instance of express.

Next I need to install some middleware.  Middleware translates the binary data stream coming into node in the form of a request into something we can work with in javascript, namely, text.  I’ll include two.  First I’ll add url encoded which as you might guess handles url encoding.

Next, I’ll add the json middleware that lets us work with JavaScript Object Notation, or JSON.


My express app is all set up.  The next thing I need is a route.  A route is just a url for your site.  In a minute we’ll run this on localhost, which is your computer; the one you’re sitting in front of right now.  Most apps have lots of routes.  You can think of a route as a function, but instead of calling it in your software, you call it over the network using http requests.

We’ll make two GET routes just so you can see what I mean.  A GET route refers to a route that responds to the HTTP verb GET.  There are quite a few verbs in the HTTP spec, but this is probably the most common, since a get request is what gets issued from your browser when you browse to a particular URL.  We call these urls in our routes endpoints.

Every site has a root.  For example if you go to www.maddevskilz.com and you don’t type anything after that, you’re going to the root of my web site.  Your API also has a root route, except generally, it serves JSON instead of HTML, though it doesn’t HAVE to.  Let’s stay on track though.  After the route, the second argument needed by app.get is the function you want to execute in response to that route.  So I’ll add an anonymous function here with two arguments, request and response.  Request is the incoming request from your users, and the response will be what you send back.

To make a GET route, just type app.get, open parenthesis and then enter a string corresponding to the route you're responding to, in this case forward slash for the root.  When our API consumers hit this route, I’m going to give them some json with the API’s versioning information in it.  You could get really fancy and have this feed off your build system, but let’s keep it simple and I’ll make  an object like this.

So I have this object stored in a constant, and I want to return this constant as JSON.  Easy peasy.  Just type return res.json and pass in the constant as an argument to the json function.

That’s it.  This is what I was alluding to earlier.  You can make an API very quickly in Node.  Often you’ll be working with a database like MySQL, and perhaps an object relational mapper like sequelize.  When you build an API this way, all your routes, even ones with database work can often be accomplished in just a few lines of code, and remember, all this is debuggable remotely from a capable tool like web storm or visual studio code.

Let’s make one more route so we’re sure you’ve got the concept.  This time, I’m going to create a route called users, so I’ll add app.get, then the route that I’m responding to.  It’s a best practice to preface your routes in an api with the characters api, and its even smarter to include some sort of versioning on your routes so later on, when. You want to rebuild your API, and you know you will…. You can have two api versions up at the same time and slowly transition from one to the other.  Trust me, you’ll thank me for this later.

So my full route is /api/v1/users.  I’ll add my anonymous function like before, and this time I’ll make a fake array of users to simulate a database call.  I’ll return this array as I did before by passing it into response.json.

You would continue from here adding as many routes as you want.  If you have a lot, you can split them up into different files and require them at the top of our server js file.  This helps you stay organized by avoiding a codebase with thousands of lines in one file.

Ultimately you’re going to want to use more HTTP verbs like POST, PUT and DELETE, but that’s just as easy.  You just change the method you call on app when you create your route.

Let’s finish this off by adding the code at the bottom of the file that allows us to run this API in node.  That’s app.listen, parenthesis, the port you want to run on, I’ll tell it to run on port 3000, and a simple anonymous function which will just write to the console that the app is running.  Save your work and let’s try it out.

I’ll go back to my terminal and start the server.  I can see it’s listening per that last line we added.  Now I just need to call the api.  Since we used GET methods, we can do this with any browser.  For a more capable, and free, tool check out my video titled Introduction to Postman.

From the browser, I’ll type in localhost:3000 and press enter.  This is hitting my root route, so I get back my versioning information.  Let’s try the other one.  I’ll add /api/v1/users and just like that, you can see the response json.

Wasn’t that easy?  You’ve now got a start on building an API with Node and express.  If you’d like to see more videos on software development and DevOps from a developers point of view, visit my site at maddevskilz.com.  If you feel like this was ten minutes well spent, be sure to click like and subscribe so you can be notified of future videos.  You can also follow me on twitter at devskilz, and on LinkedIn, the link for that is in the description.