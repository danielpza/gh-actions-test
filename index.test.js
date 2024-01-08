import { greet } from "./index.js";

test("greet", () => {
	expect(greet("World")).toBe("Hello World");
});
