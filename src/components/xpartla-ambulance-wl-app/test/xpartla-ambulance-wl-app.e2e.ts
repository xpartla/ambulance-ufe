import { newE2EPage } from '@stencil/core/testing';

describe('xpartla-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xpartla-ambulance-wl-app></xpartla-ambulance-wl-app>');

    const element = await page.find('xpartla-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
