import { MovieCardModule } from './movie-card.module';

describe('MovieCardModule', () => {
  let movieCardModule: MovieCardModule;

  beforeEach(() => {
    movieCardModule = new MovieCardModule();
  });

  it('should create an instance', () => {
    expect(movieCardModule).toBeTruthy();
  });
});
