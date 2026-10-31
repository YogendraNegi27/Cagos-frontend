import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { FerrisWheelGallery } from "./ferris-wheel-gallery";

const items = ["Compliance", "Client CRM", "Billing"].map((title) => ({
  title,
  alt: title,
}));

beforeEach(() => {
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
  vi.stubGlobal(
    "requestAnimationFrame",
    vi.fn(() => 0),
  );
  vi.stubGlobal("cancelAnimationFrame", vi.fn());
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("practice wheel input", () => {
  it("advances one tool per scroll and ignores the rest of a scroll burst", () => {
    let now = 0;
    vi.spyOn(performance, "now").mockImplementation(() => now);
    render(<FerrisWheelGallery items={items} />);
    const wheel = screen.getByLabelText("Browse CAGOS practice tools");
    const gallery = screen.getByRole("region");
    expect(fireEvent.wheel(wheel, { deltaY: 120, cancelable: true })).toBe(
      false,
    );
    expect(gallery.getAttribute("data-active")).toBe("1");
    now = 50;
    fireEvent.wheel(wheel, { deltaY: 120, cancelable: true });
    expect(gallery.getAttribute("data-active")).toBe("1");
    now = 800;
    fireEvent.wheel(wheel, { deltaY: 120, cancelable: true });
    expect(gallery.getAttribute("data-active")).toBe("2");
    now = 1600;
    fireEvent.wheel(wheel, { deltaY: -120, cancelable: true });
    expect(gallery.getAttribute("data-active")).toBe("1");
  });

  it("leaves page scrolling and trackpad zoom outside its gesture unchanged", () => {
    const view = render(<FerrisWheelGallery items={items} />);
    const wheel = screen.getByLabelText("Browse CAGOS practice tools");
    expect(
      fireEvent.wheel(document.body, { deltaY: 120, cancelable: true }),
    ).toBe(true);
    expect(
      fireEvent.wheel(wheel, { deltaY: 120, ctrlKey: true, cancelable: true }),
    ).toBe(true);
    expect(screen.getByRole("region").getAttribute("data-active")).toBe("0");
    view.unmount();
    expect(fireEvent.wheel(wheel, { deltaY: 120, cancelable: true })).toBe(
      true,
    );
  });

  it("keeps keyboard and button navigation immediate with reduced motion", () => {
    render(<FerrisWheelGallery items={items} />);
    const gallery = screen.getByRole("region");
    fireEvent.keyDown(screen.getByLabelText("Browse CAGOS practice tools"), {
      key: "ArrowRight",
    });
    expect(gallery.getAttribute("data-visible")).toBe("1");
    expect(gallery.getAttribute("data-phase")).toBe("idle");
    fireEvent.click(screen.getByRole("button", { name: "Previous tool" }));
    fireEvent.click(screen.getByRole("button", { name: "Previous tool" }));
    expect(gallery.getAttribute("data-visible")).toBe("2");
  });
});
