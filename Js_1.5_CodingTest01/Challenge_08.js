function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
    const mergedConfig = {
        ...defaultConfig,
        ...overrideConfig
    };

    if (mergedConfig.retries === undefined) {
        mergedConfig.retries = 0;
    }

    return mergedConfig;
}