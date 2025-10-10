import { render, screen } from '@testing-library/react';
import EmptyState from './EmptyState';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('EmptyState', () => {
  const defaultProps: EmptyStateProps = {
    icon: '/assets/icons/video.svg',
    title: 'No Videos Found',
    description: 'Try adjusting your search.',
  };

  describe('Rendering', () => {
    it('should render with all props', () => {
      render(<EmptyState {...defaultProps} />);

      expect(screen.getByText('No Videos Found')).toBeInTheDocument();
      expect(screen.getByText('Try adjusting your search.')).toBeInTheDocument();
    });

    it('should render icon with correct src', () => {
      render(<EmptyState {...defaultProps} />);

      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toHaveAttribute('src', '/assets/icons/video.svg');
    });

    it('should have proper accessibility attributes', () => {
      render(<EmptyState {...defaultProps} />);

      const section = screen.getByRole('status');
      expect(section).toHaveAttribute('aria-live', 'polite');
    });

    it('should render icon as decorative (aria-hidden)', () => {
      render(<EmptyState {...defaultProps} />);

      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Content Variations', () => {
    it('should render different titles', () => {
      render(<EmptyState {...defaultProps} title="No Results" />);

      expect(screen.getByText('No Results')).toBeInTheDocument();
    });

    it('should render different descriptions', () => {
      render(<EmptyState {...defaultProps} description="Please try again later." />);

      expect(screen.getByText('Please try again later.')).toBeInTheDocument();
    });

    it('should render with different icon paths', () => {
      render(<EmptyState {...defaultProps} icon="/assets/icons/search.svg" />);

      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toHaveAttribute('src', '/assets/icons/search.svg');
    });
  });

  describe('Styling', () => {
    it('should apply empty-state class to section', () => {
      const { container } = render(<EmptyState {...defaultProps} />);

      const section = container.querySelector('.empty-state');
      expect(section).toBeInTheDocument();
    });

    it('should apply text-center class to article', () => {
      const { container } = render(<EmptyState {...defaultProps} />);

      const article = container.querySelector('article.text-center');
      expect(article).toBeInTheDocument();
    });
  });

  describe('Semantic HTML', () => {
    it('should use h1 for title', () => {
      render(<EmptyState {...defaultProps} />);

      const heading = screen.getByRole('heading', { level: 1, name: 'No Videos Found' });
      expect(heading).toBeInTheDocument();
    });

    it('should use p tag for description', () => {
      const { container } = render(<EmptyState {...defaultProps} />);

      const description = container.querySelector('p');
      expect(description).toHaveTextContent('Try adjusting your search.');
    });

    it('should use section with status role', () => {
      render(<EmptyState {...defaultProps} />);

      const section = screen.getByRole('status');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty strings gracefully', () => {
      render(<EmptyState icon="" title="" description="" />);

      // Component should still render without crashing
      const section = screen.getByRole('status');
      expect(section).toBeInTheDocument();
    });

    it('should handle long titles', () => {
      const longTitle = 'This is a very long title that might wrap to multiple lines in the UI';
      render(<EmptyState {...defaultProps} title={longTitle} />);

      expect(screen.getByText(longTitle)).toBeInTheDocument();
    });

    it('should handle long descriptions', () => {
      const longDescription = 'This is a very long description that provides detailed information about why the content is empty and what the user should do next to find what they are looking for.';
      render(<EmptyState {...defaultProps} description={longDescription} />);

      expect(screen.getByText(longDescription)).toBeInTheDocument();
    });
  });
});
