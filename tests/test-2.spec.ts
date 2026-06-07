import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://acmeqa.egnitehealth.app/appv3/patient-lists/mtstr/patientlist(patient:dashboard/0bd8f324cd26ab0da5112f967a0b1560/therapy)?viewName=Patient%20List&viewType=0');
  await page.goto('https://acmeqa.egnitehealth.app/account');
  await page.goto('https://acmeqa.egnitehealth.app/account/efederated');
  await page.getByRole('option', { name: 'AF Ablation Transcatheter -' }).click();
  await page.getByRole('option', { name: 'AF Ablation Transcatheter -' }).click();
  await page.locator('.therapy-type > .ng-select-container > .ng-arrow-wrapper').click();
  await page.getByRole('button', { name: 'Today' }).click();
  await page.getByRole('button', { name: '" / "' }).nth(3).click();
  await page.getByRole('button', { name: 'Tomorrow' }).click();
  await page.locator('app-procedure-form textarea').fill('notes');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('https://acmeqa.egnitehealth.app/appv3/patient-lists/mtstr/patientlist(patient:dashboard/0bd8f324cd26ab0da5112f967a0b1560/therapy)?viewName=Patient%20List&viewType=0');
  await page.getByPlaceholder('Email').press('ControlOrMeta+z');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('automation_nurse@yopmail.com');
  await page.getByRole('button', { name: '" / " Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('JR9MtLSyKw2nFjx764Uapd$');
  await page.getByRole('button', { name: '" / " Login' }).click();
});