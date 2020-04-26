module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    verbose: true,
    snapshotResolver: "./__snapshots__/snapshotResolver.ts",
};
