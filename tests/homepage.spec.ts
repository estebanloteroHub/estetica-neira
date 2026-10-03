import { expect, test } from '@playwright/test';

test('la portada presenta las cuatro secciones principales', async ({ page }, testInfo) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Estética Neira/);
  await expect(page.getByRole('heading', { name: /Un lugar para volver a ti/ })).toBeVisible();
  await expect(page.locator('main > section')).toHaveCount(4);
  await expect(page.getByRole('heading', { name: /¿Qué te gustaría sentir hoy/ })).toBeVisible();
  const heroOrder = await page.locator('.hero__inner').evaluate((hero) =>
    Array.from(hero.children).map((child) =>
      child.classList.contains('hero__visual') ? 'imagen' : 'contenido',
    ),
  );
  expect(heroOrder).toEqual(['imagen', 'contenido']);
  await page.screenshot({
    path: testInfo.outputPath('landing.png'),
    fullPage: true,
    animations: 'disabled',
  });
});

test('los tratamientos preparan una consulta de WhatsApp con el servicio elegido', async ({ page }) => {
  await page.goto('/');

  const bookingLink = page.getByRole('link', {
    name: 'Reservar Masaje descontracturante por WhatsApp',
  });
  const href = await bookingLink.getAttribute('href');

  expect(href).toContain('https://wa.me/');
  expect(new URL(href ?? '').searchParams.get('text')).toContain('masaje descontracturante');
});

test('la navegación móvil se abre, se anuncia y se cierra al elegir una sección', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes('mobile'), 'Comprobación específica del menú móvil.');
  await page.goto('/');

  const menuButton = page.locator('.menu-toggle');
  const navigation = page.getByRole('navigation', { name: 'Navegación principal' });

  await expect(menuButton).toHaveAttribute('aria-label', 'Abrir menú');
  await expect(navigation).toBeHidden();
  await menuButton.click();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  await expect(menuButton).toHaveAttribute('aria-label', 'Cerrar menú');
  await expect(navigation).toBeVisible();
  await navigation.getByRole('link', { name: 'Tratamientos' }).click();
  await expect(navigation).toBeHidden();
});

test('la llamada a reservar permanece visible en móvil y no hay desbordamiento horizontal', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes('mobile'), 'Comprobación específica del viewport móvil.');
  await page.goto('/');

  await expect(page.getByRole('link', { name: 'Reservar cita por WhatsApp' })).toBeVisible();
  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});
