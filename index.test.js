import { greet } from "./index.js";

test("greet", () => {
	expect(greet("World")).toBe("Hello World");
});

test("another passing test", () => {
	expect(1).toBe(1);
});

test("failing test", () => {
	expect(1).toBe(2);
});

test("another failing test", () => {
	expect(1).toBe(3);
});
