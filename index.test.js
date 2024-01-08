import { greet } from "./index.js";

test("greet", () => {
	expect(greet("World")).toBe("Hello World");
});

test.skip("failing test", () => {
	expect(1).toBe(2);
});

test.skip("another failing test", () => {
	expect(1).toBe(3);
});
