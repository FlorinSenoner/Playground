# Learning the basics of Webpack
- `$ npm init`

### Installing Webpack
- `$ npm i webpack -savae-dev`
- create files: index.js and index.html (basic structure)
- `$ webpack` (` $ webpack -w`)

### Create a config file
- create file: webpack.config.js
	module.exports = {
		    entry: './main.js',
		    output: {
		        filename: './bundle.js'
		    },
		    watch: true
	};

### Loaders
- use babel to convert ES6 into JavaScript
- `$ npm install --save-dev babel-loader babel-core babel-preset-es2015`
- add to the config:
	module: {
		    loaders: [
		        {
		            test: /\.js$/,
		            exclude: /node_modules/,
		            loader: 'babel',
		            query: {
		                presets: ['es2015']
		            }
		        }
		    ],
		}

### Loading CSS
`$ npm install --save-dev css-loader style-loader`
- change the module to:
	module: {
	    loaders: [
	      {
	        loader: "babel-loader",
	        // Skip any files outside of your project's `src` directory
	        include: [
	          path.resolve(__dirname, "src"),
	        ],
	        // Only run `.js` and `.jsx` files through Babel
	        test: /\.jsx?$/,
	        // Options to configure babel with
	        query: {
	          plugins: ['transform-runtime'],
	          presets: ['es2015', 'react'],
	        }
	      },
	      {
	        test: /\.css$/,
	        exclude: /node_modules/,
	        loader: 'style!css'
	      }
	    ]
	  }

### Server for Development
- watches files and reloads browser
- `$ npm install webpack-dev-server -g`
- `$ webpack-dev-server`
- project —\> `http://localhost:8080/webpack-dev-server/`

### Optimizing Output
- `$ webpack -p` —\> short for `$ webpack --optimize-minimize`


- npm i react -save
- npm i react-dom -save