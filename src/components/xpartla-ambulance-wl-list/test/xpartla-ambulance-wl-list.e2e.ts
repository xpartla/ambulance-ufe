import { newE2EPage } from '@stencil/core/testing';

describe('xpartla-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xpartla-ambulance-wl-list></xpartla-ambulance-wl-list>');

    const element = await page.find('xpartla-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
