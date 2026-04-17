import { describe, it, expect } from "vitest";
import { ZendeskQaPlaybooks } from "../src";

describe("ZendeskQaPlaybooks", () => {
  it("should create an instance with default options", () => {
    const instance = new ZendeskQaPlaybooks();
    expect(instance).toBeDefined();
  });

  it("should accept custom options", () => {
    const instance = new ZendeskQaPlaybooks({ verbose: true });
    expect(instance).toBeDefined();
  });

  it("should run successfully", async () => {
    const instance = new ZendeskQaPlaybooks();
    const result = await instance.run();
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});
