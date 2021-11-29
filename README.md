

## Project description

Simple login form with custom validation.

HTML templates are built with [Nunjucks](https://mozilla.github.io/nunjucks/).

CSS written using PostCSS.

Build process of all source files uses techniques from [Philip Walton](https://github.com/philipwalton/blog)
and such tools as Gulp and Webpack.

[View site](https://jolka-ef.github.io/login-form/)

##  Project Structure

```
|── dev
|   └── css
|       └── base
|       └── components
|       └── main.css    
|   └── img
|   └── scripts
|── node_modules
|── tasks
|── templates
|── .gitignore
|── gulpfile.js
|── package.json




``` 
## Viewing the Site Locally


```sh
# Clone the git repository and cd into the cloned directory.
git clone https://github.com/jolka-ef/login-form.git
cd project-form

# Install the dependencies
npm install

# Build and serve the site at http://localhost:8080
npm start
```
