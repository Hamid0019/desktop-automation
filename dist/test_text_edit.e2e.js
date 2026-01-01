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
describe("Desktop Text App Test", () => {
  const isWindows = process.env.DESKTOP_PLATFORM === "windows";
  const editorSelector = isWindows
    ? "//Edit" // Notepad text area
    : "//XCUIElementTypeTextView"; // TextEdit text area
  it("should type a short text in editor", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const editor = yield (0, globals_1.$)(editorSelector);
      yield editor.click();
      yield editor.setValue(
        "WELCOME TO THE DESKTOP APPLICATION TESTING, LET'S START AUTOMATION!"
      );
      yield (0, globals_1.expect)(editor).toBeExisting();
    }));
  it("should type a longer text in editor", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const editor = yield (0, globals_1.$)(editorSelector);
      yield editor.click();
      yield editor.setValue(
        "THIS IS A DETAILED TEST FOR THE DESKTOP APPLICATION EDITOR, ENSURING THAT LARGE TEXT INPUTS ARE HANDLED PROPERLY AND VISIBLE CORRECTLY INSIDE THE EDITOR."
      );
      yield (0, globals_1.expect)(editor).toBeExisting();
    }));
});
