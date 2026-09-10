// Run: node --test src/app/notion/CopyEmailButton.test.mjs
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

test("email copy handles success, denied permission, and unavailable clipboard", async () => {
  let message = "";
  let copied;
  const navigator = { clipboard: { writeText: async (text) => { copied = text; } } };
  const require = createRequire(import.meta.url);
  const exports = {};
  const { outputText } = ts.transpileModule(
    readFileSync(new URL("./CopyEmailButton.tsx", import.meta.url), "utf8"),
    { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS } },
  );
  runInNewContext(outputText, {
    exports,
    navigator,
    require: (name) => name === "react"
      ? { useState: () => [message, (value) => { message = value; }] }
      : require(name),
  });
  const click = exports.default().props.children[0].props.onClick;
  await click();
  assert.equal(copied, "bean3260@naver.com");
  assert.equal(message, "이메일 복사 완료");
  navigator.clipboard.writeText = async () => { throw new Error("Permission denied"); };
  await click();
  assert.equal(message, "복사하지 못했어요. 직접 복사해 주세요: bean3260@naver.com");
  message = "";
  delete navigator.clipboard;
  await click();
  assert.equal(message, "복사하지 못했어요. 직접 복사해 주세요: bean3260@naver.com");
});
