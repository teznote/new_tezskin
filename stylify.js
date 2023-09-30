const { Bundler } = require('@stylify/bundler')

const bundler = new Bundler({
	watchFiles: process.argv[process.argv.length - 1] === '--w',
})

bundler.bundle([
	{
		outputFile: './res/main.css',
		files: ['./_layouts/**/*.html','./res/**/*.html',],
	},
])