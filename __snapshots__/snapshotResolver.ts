module.exports = {
    resolveSnapshotPath: (testPath, snapshotExtension) =>
        testPath
            .replace(/.test.tsx?/, ".test" + snapshotExtension)
            .replace(/src([/\\]components)/, "__snapshots__"),

    resolveTestPath: (snapshotFilePath, snapshotExtension) =>
        snapshotFilePath
            .replace(snapshotExtension, ".tsx")
            .replace("__snapshots__", "src/components"),

    testPathForConsistencyCheck: "src/components/sample.test.tsx",
};
