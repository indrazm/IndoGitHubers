import type { Locator, Page } from '@playwright/test';

export class AppPage {
  emptyState: Locator;
  lastUpdate: Locator;
  faqHeading: Locator;
  searchInput: Locator;

  constructor(private readonly page: Page) {
    this.searchInput = page.getByPlaceholder(/search username/i)
    this.lastUpdate = page.getByText(/last updated at/i)
    this.faqHeading = page.getByRole('heading', { name: /frequently asked questions/i })
    this.emptyState = page.getByText(/no results/i)
  }

  async navigate() {
    await this.page.goto('/')
  }

  async fillAndSearch(username: string) {
    await this.searchInput.fill(username)
  }

  getUsername(username: string) {
    return this.page.getByRole('link', { name: username })
  }
}
