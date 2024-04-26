await Bun.build({
    entrypoints: ['./index.ts'],
    outdir: './build',
    target: 'browser',
    splitting: true,
    // format: "esm",
    // sourcemap: "external",
    minify: {
        whitespace: true,
        identifiers: true,
        syntax: true,
    },
});