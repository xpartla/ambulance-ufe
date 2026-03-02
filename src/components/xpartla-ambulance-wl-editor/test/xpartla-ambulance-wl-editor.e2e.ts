import { newE2EPage } from '@stencil/core/testing';

describe('xpartla-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xpartla-ambulance-wl-editor></xpartla-ambulance-wl-editor>');

    const element = await page.find('xpartla-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
