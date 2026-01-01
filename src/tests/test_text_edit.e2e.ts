import { $, expect } from '@wdio/globals';

describe('Desktop Text App Test', () => {

    const isWindows =  process.env.DESKTOP_PLATFORM === 'windows';

    const editorSelector = isWindows
        ? '//Edit'        // Notepad text area
        : '//XCUIElementTypeTextView';   // TextEdit text area

    it('should type a short text in editor', async () => {
        const editor = await $(editorSelector);
        await editor.click();
        await editor.setValue('WELCOME TO THE DESKTOP APPLICATION TESTING, LET\'S START AUTOMATION!');
        await expect(editor).toBeExisting();
    });

    it('should type a longer text in editor', async () => {
        const editor = await $(editorSelector);
        await editor.click();
        await editor.setValue('THIS IS A DETAILED TEST FOR THE DESKTOP APPLICATION EDITOR, ENSURING THAT LARGE TEXT INPUTS ARE HANDLED PROPERLY AND VISIBLE CORRECTLY INSIDE THE EDITOR.');
        await expect(editor).toBeExisting();
    });


});

