# Component Tests

This directory contains comprehensive test suites for the SnapCast components using Jest and React Testing Library.

## Test Files

- **VideoCard.test.tsx** - Tests for the VideoCard component
- **EmptyState.test.tsx** - Tests for the EmptyState component  
- **Pagination.test.tsx** - Tests for the Pagination component

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Coverage

The test suites cover:

### VideoCard Component
- ✅ Rendering with all props
- ✅ Copy link functionality
- ✅ Hover effects and interactions
- ✅ Duration calculation and display
- ✅ Accessibility attributes (ARIA labels)
- ✅ Image alt text
- ✅ Visibility states
- ✅ Date formatting

### EmptyState Component
- ✅ Rendering with different content
- ✅ Icon display
- ✅ Accessibility (ARIA live regions)
- ✅ Semantic HTML structure
- ✅ Edge cases (empty strings, long text)

### Pagination Component
- ✅ Page number rendering
- ✅ Current page highlighting
- ✅ Navigation button states (enabled/disabled)
- ✅ Page navigation functionality
- ✅ Query parameter preservation
- ✅ Ellipsis for large page counts
- ✅ Accessibility (ARIA attributes)
- ✅ Edge cases (single page, boundary navigation)

## Testing Philosophy

All tests follow these principles:

1. **User-Centric**: Tests focus on user interactions and visible behavior
2. **Accessibility**: Verify proper ARIA attributes and semantic HTML
3. **Comprehensive**: Cover happy paths, edge cases, and error scenarios
4. **Maintainable**: Use descriptive test names and clear assertions
5. **Fast**: Mock external dependencies for quick execution

## Best Practices

- Use `screen.getByRole()` for better accessibility testing
- Test user interactions with `@testing-library/user-event`
- Verify ARIA attributes for screen reader support
- Mock Next.js components and hooks appropriately
- Clear mocks between tests with `beforeEach()`

## Troubleshooting

If tests fail:

1. Ensure all dependencies are installed: `npm install`
2. Check that component props match the expected types
3. Verify mock implementations match actual behavior
4. Review error messages for specific assertion failures

## Adding New Tests

When adding new component tests:

1. Create a new `.test.tsx` file next to the component
2. Import necessary testing utilities
3. Mock Next.js components and hooks
4. Write descriptive test cases following the existing patterns
5. Ensure tests are isolated and don't depend on each other
6. Run tests to verify they pass before committing

## Code Coverage Goals

- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

Run `npm run test:coverage` to see current coverage metrics.
