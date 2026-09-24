import { test, expect } from "@playwright/test";

test("renders all sections, resolves local assets, and downloads the resume", async ({
  page,
  request,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Purpose in",
  );
  for (const id of [
    "home",
    "about",
    "experience",
    "skills",
    "projects",
    "education",
    "contact",
  ]) {
    await expect(page.locator(`section#${id}`)).toHaveCount(1);
  }
  const assetPaths = await page
    .locator("img")
    .evaluateAll((images) => [...new Set(images.map((image) => image.src))]);
  for (const path of assetPaths)
    expect((await request.get(path)).ok()).toBeTruthy();
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download Resume" }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("Kaviya_Subramani_Resume.pdf");
  expect(errors).toEqual([]);
  await page.screenshot({ path: "test-results/desktop.png", fullPage: true });
});

test("galleries switch independently and update full-size links", async ({
  page,
}) => {
  await page.goto("/");
  const galleries = page.locator(".project-gallery");
  await expect(galleries).toHaveCount(2);
  await galleries
    .nth(0)
    .getByRole("button", { name: "Show Attendance report", exact: true })
    .click();
  await expect(galleries.nth(0).locator(".gallery-preview")).toHaveAttribute(
    "href",
    /\/images\/HRMS4\.png$/,
  );
  await expect(galleries.nth(0).locator("figcaption")).toHaveText(
    "Attendance report",
  );
  await expect(galleries.nth(1).locator("figcaption")).toHaveText(
    "Library dashboard",
  );
  await galleries
    .nth(1)
    .getByRole("button", { name: "Show Book catalogue", exact: true })
    .click();
  await expect(galleries.nth(1).locator(".gallery-preview")).toHaveAttribute(
    "href",
    /\/images\/LMS4\.png$/,
  );
  await expect(
    galleries.nth(0).getByRole("button", { pressed: true }),
  ).toHaveCount(1);
});

test("mobile menu closes on navigation and Escape, without horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu" });
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Work" })
    .click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#projects$/);
  await menu.click();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await page.screenshot({ path: "test-results/mobile.png", fullPage: true });
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBeTruthy();
});
