const config = require('../config.json')
const cssnano = require('cssnano');
const fs = require('fs-extra');
const gulp = require('gulp');
const path = require('path');
const postcss = require('postcss');
const atImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');

const compileCss = async (srcPath) => {
    const css = await fs.readFile(srcPath, 'utf-8');

    const plugins = [
        atImport(),
        postcssPresetEnv({
            browsers: ['debug', 'production'].includes(process.env.NODE_ENV) ?
                'defaults' : 'last 2 Chrome versions',
            stage: 0,
            features: {
                customProperties: {
                    warnings: true,
                    preserve: true,
                },
                'nesting-rules': true,
            },
        }),
    ];
    if (process.env.NODE_ENV === 'production') {
        plugins.push(cssnano({preset: [
            'default', {
                discardComments: {removeAll: true},
                // This must be disabled because it breaks postcss-custom-properties:
                // https://github.com/ben-eb/cssnano/issues/448
                mergeLonghand: false,
            }
        ]}));
    }

    const result = await postcss(plugins).process(css, {from: srcPath});

    return result.css;
};

gulp.task('css', async () => {
    try {
        const srcPath = './dev/css/main.css';
        const css = await compileCss(srcPath);
        await fs.outputFile(
          path.join(config.publicDir,path.basename(srcPath)), css
        )
    } catch (err) {
        console.error(err);
    }
});

