const platform = process.env.DESKTOP_PLATFORM || 'mac';

const macCapability = {
    platformName: 'mac',
    'appium:automationName': 'mac2',
    'appium:bundleId': 'com.apple.TextEdit',
    // 'appium:bundleId': 'com.apple.calculator',
};

const windowsCapability = {
    platformName: 'windows',
    'appium:automationName': 'Windows',
    'appium:app': 'C:\\Windows\\System32\\notepad.exe'
};

// @ts-ignore
export const config: WebdriverIO.Config = {
    onPrepare: function () {
        const platform = process.env.DESKTOP_PLATFORM?.toLowerCase() || 'unknown';
        const platformName = platform === 'mac' ? 'MacOS' :
            platform === 'windows' ? 'Windows' :
                'Unknown Platform';

        // Length of the full banner
        const bannerLength = 70; // You can adjust to 60, 80, etc.
        console.log('='.repeat(60));

        const message = ` Running tests on ${platformName} `;
        const totalLength = 60;
        const padding = Math.floor((totalLength - message.length) / 2);
        const centeredMessage = ' '.repeat(padding) + message + ' '.repeat(padding);
        console.log(centeredMessage);
        console.log('='.repeat(60));
    },
    runner: 'local',
    tsConfigPath: './test/tsconfig.json',
    port: 4723,

    specs: ['./src/tests/**/*.ts'],

    maxInstances: 1,

    capabilities: [
        platform === 'windows' ? windowsCapability : macCapability
    ],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['appium'],

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
