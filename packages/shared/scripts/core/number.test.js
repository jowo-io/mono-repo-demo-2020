import { isNumber } from "MM:shared/scripts/core/number.js";

test("single, number", () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(100)).toBe(true);
    expect(isNumber(-100)).toBe(true);
    expect(isNumber(0.25)).toBe(true);
    expect(isNumber(-0.25)).toBe(true);
    expect(isNumber(123.25)).toBe(true);
    expect(isNumber(-123.25)).toBe(true);
});

test("single, NOT number", () => {
    expect(isNumber(false)).toBe(false);
    expect(isNumber("")).toBe(false);
    expect(isNumber("adgadsgas")).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(function() {})).toBe(false);
});

test("multi, number", () => {
    expect(isNumber(1, 2, 3)).toBe(true);
    expect(isNumber(-1, 0, 1)).toBe(true);
    expect(isNumber(100, 200, 300)).toBe(true);
    expect(isNumber(-100, -200, -300)).toBe(true);
    expect(isNumber(0.25, 0.5, 0.75)).toBe(true);
    expect(isNumber(-0.25, -0.5, -0.75)).toBe(true);
    expect(isNumber(123.25, 234.25, 345.25, 456.25, 567.25)).toBe(true);
    expect(isNumber(-123.25, -234.25, -345.25, -456.25, -567.25)).toBe(true);
});

test("multi, NOT number", () => {
    expect(isNumber(false, 1, true, 1, 2)).toBe(false);
    expect(isNumber("", 1, 2)).toBe(false);
    expect(isNumber(1, 2, 3, "adgadsgas")).toBe(false);
    expect(isNumber(-1, {}, 1)).toBe(false);
    expect(isNumber(1, function() {}, 3)).toBe(false);
});
