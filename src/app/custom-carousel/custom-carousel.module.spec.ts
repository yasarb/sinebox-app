import { CustomCarouselModule } from './custom-carousel.module';

describe('CustomCarouselModule', () => {
  let customCarouselModule: CustomCarouselModule;

  beforeEach(() => {
    customCarouselModule = new CustomCarouselModule();
  });

  it('should create an instance', () => {
    expect(customCarouselModule).toBeTruthy();
  });
});
