import { TestBed } from '@angular/core/testing';

import { AuthorResolverResolver } from './author-resolver.resolver';

describe('AuthorResolverResolver', () => {
  let resolver: AuthorResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AuthorResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
