import { $, expect } from '@wdio/globals';

describe('Desktop Calculator - Multiple Operations', () => {
    const isWindows = process.env.DESKTOP_PLATFORM === 'windows';

    const selectors = {
        seven: isWindows
            ? '//Button[@Name="Seven"]'
            : '//XCUIElementTypeButton[contains(@label,"7")]',

        six: isWindows
            ? '//Button[@Name="Six"]'
            : '//XCUIElementTypeButton[contains(@label,"6")]',

        three: isWindows
            ? '//Button[@Name="Three"]'
            : '//XCUIElementTypeButton[contains(@label,"3")]',

        two: isWindows
            ? '//Button[@Name="Two"]'
            : '//XCUIElementTypeButton[contains(@label,"2")]',

        add: isWindows
            ? '//Button[@Name="Plus"]'
            : '//XCUIElementTypeButton[contains(@label,"Add")]',

        subtract: isWindows
            ? '//Button[@Name="Minus"]'
            : '//XCUIElementTypeButton[contains(@label,"Subtract")]',

        multiply: isWindows
            ? '//Button[@Name="Multiply by"]'
            : '//XCUIElementTypeButton[contains(@label,"Multiply")]',

        divide: isWindows
            ? '//Button[@Name="Divide by"]'
            : '//XCUIElementTypeButton[contains(@label,"Divide")]',

        equals: isWindows
            ? '//Button[@Name="Equals"]'
            : '//XCUIElementTypeButton[contains(@label,"Equals")]',

        result: isWindows
            ? '//Text[@AutomationId="CalculatorResults"]'
            : '//XCUIElementTypeScrollView[@label="Input"]//XCUIElementTypeStaticText[@value]'
    };

    it('should calculate 7 × 6 = 42', async () => {
        await $(selectors.seven).click();
        await $(selectors.multiply).click();
        await $(selectors.six).click();
        await $(selectors.equals).click();

        const value = await $(selectors.result).getAttribute(isWindows ? 'Name' : 'value');
        await expect(value).toContain('42');
    });

    it('should calculate 7 + 6 = 13', async () => {
        await $(selectors.seven).click();
        await $(selectors.add).click();
        await $(selectors.six).click();
        await $(selectors.equals).click();

        const value = await $(selectors.result).getAttribute(isWindows ? 'Name' : 'value');
        await expect(value).toContain('13');
    });

    it('should calculate 7 - 6 = 1', async () => {
        await $(selectors.seven).click();
        await $(selectors.subtract).click();
        await $(selectors.six).click();
        await $(selectors.equals).click();

        const value = await $(selectors.result).getAttribute(isWindows ? 'Name' : 'value');
        await expect(value).toContain('1');
    });

    it('should calculate 6 ÷ 2 = 3', async () => {
        await $(selectors.six).click();
        await $(selectors.divide).click();
        await $(selectors.two).click();
        await $(selectors.equals).click();

        const value = await $(selectors.result).getAttribute(isWindows ? 'Name' : 'value');
        await expect(value).toContain('3');
    });
});
