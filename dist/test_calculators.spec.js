"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@wdio/globals");
describe("Desktop Calculator - Multiple Operations", () => {
  const isWindows = process.env.DESKTOP_PLATFORM === "windows";
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
      : '//XCUIElementTypeScrollView[@label="Input"]//XCUIElementTypeStaticText[@value]',
  };
  it("should calculate 7 × 6 = 42", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield (0, globals_1.$)(selectors.seven).click();
      yield (0, globals_1.$)(selectors.multiply).click();
      yield (0, globals_1.$)(selectors.six).click();
      yield (0, globals_1.$)(selectors.equals).click();
      const value = yield (0, globals_1.$)(selectors.result).getAttribute(
        isWindows ? "Name" : "value"
      );
      yield (0, globals_1.expect)(value).toContain("42");
    }));
  it("should calculate 7 + 6 = 13", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield (0, globals_1.$)(selectors.seven).click();
      yield (0, globals_1.$)(selectors.add).click();
      yield (0, globals_1.$)(selectors.six).click();
      yield (0, globals_1.$)(selectors.equals).click();
      const value = yield (0, globals_1.$)(selectors.result).getAttribute(
        isWindows ? "Name" : "value"
      );
      yield (0, globals_1.expect)(value).toContain("13");
    }));
  it("should calculate 7 - 6 = 1", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield (0, globals_1.$)(selectors.seven).click();
      yield (0, globals_1.$)(selectors.subtract).click();
      yield (0, globals_1.$)(selectors.six).click();
      yield (0, globals_1.$)(selectors.equals).click();
      const value = yield (0, globals_1.$)(selectors.result).getAttribute(
        isWindows ? "Name" : "value"
      );
      yield (0, globals_1.expect)(value).toContain("1");
    }));
  it("should calculate 6 ÷ 2 = 3", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield (0, globals_1.$)(selectors.six).click();
      yield (0, globals_1.$)(selectors.divide).click();
      yield (0, globals_1.$)(selectors.two).click();
      yield (0, globals_1.$)(selectors.equals).click();
      const value = yield (0, globals_1.$)(selectors.result).getAttribute(
        isWindows ? "Name" : "value"
      );
      yield (0, globals_1.expect)(value).toContain("3");
    }));
});
