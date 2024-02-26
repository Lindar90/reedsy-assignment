import { vi, describe, it, expect, beforeEach, Mock } from "vitest";
import api from "./api.ts";
describe("api", () => {
  function createFetchResponse(data: unknown, ok: boolean = true) {
    return { json: () => new Promise((resolve) => resolve(data)), ok };
  }

  beforeEach(() => {
    global.fetch = vi.fn() as Mock;
  });

  it("should return the data", async () => {
    const expectedData = { title: "title" };
    (fetch as Mock).mockResolvedValue(createFetchResponse(expectedData));

    const response = await api("books/slug");

    expect(response).toEqual(expectedData);
  });

  it("should throw an error", async () => {
    (fetch as Mock).mockResolvedValue(createFetchResponse({}, false));

    try {
      await api("books/slug");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
