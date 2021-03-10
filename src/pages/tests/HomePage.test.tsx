import { render, screen } from "test-utils/testing-library-utils";

import HomePage from "../HomePage";

describe("Home Page", () => {
  it("should welcome message is visible", async () => {
    render(<HomePage />);

    const title = await screen.findByRole("heading", {
      name: "Welcome to React Query Course 🧑‍🏫 💻",
    });

    expect(title).toBeInTheDocument();
  });
});
