import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

// Mock Next.js hooks and components
const mockPush = jest.fn();
const mockSearchParams = new URLSearchParams();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
  useSearchParams: () => mockSearchParams,
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock utility functions
jest.mock('@/lib/utils', () => ({
  cn: (...classes: any[]) => classes.filter(Boolean).join(' '),
  generatePagination: (current: number, total: number) => {
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    if (current <= 3) {
      return [1, 2, 3, 4, '...', total];
    }
    if (current >= total - 2) {
      return [1, '...', total - 3, total - 2, total - 1, total];
    }
    return [1, '...', current - 1, current, current + 1, '...', total];
  },
  updateURLParams: (params: URLSearchParams, updates: Record<string, string | null>, base: string) => {
    const newParams = new URLSearchParams(params);
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });
    return `${base}?${newParams.toString()}`;
  },
}));

describe('Pagination', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render pagination controls', () => {
      render(<Pagination currentPage={1} totalPages={5} />);

      expect(screen.getByText('Previous')).toBeInTheDocument();
      expect(screen.getByText('Next')).toBeInTheDocument();
    });

    it('should render page numbers', () => {
      render(<Pagination currentPage={1} totalPages={5} />);

      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
      expect(screen.getByText('4')).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('should render ellipsis for large page counts', () => {
      render(<Pagination currentPage={5} totalPages={20} />);

      const ellipses = screen.getAllByText('...');
      expect(ellipses.length).toBeGreaterThan(0);
    });

    it('should use default props when not provided', () => {
      render(<Pagination />);

      // Default is currentPage=1, totalPages=10
      expect(screen.getByText('1')).toBeInTheDocument();
    });
  });

  describe('Current Page Highlighting', () => {
    it('should highlight current page', () => {
      render(<Pagination currentPage={3} totalPages={5} />);

      const currentPageButton = screen.getByText('3');
      expect(currentPageButton).toHaveClass('bg-pink-100 text-white');
    });

    it('should not highlight non-current pages', () => {
      render(<Pagination currentPage={3} totalPages={5} />);

      const otherPageButton = screen.getByText('2');
      expect(otherPageButton).not.toHaveClass('bg-pink-100 text-white');
    });
  });

  describe('Navigation Buttons', () => {
    it('should disable Previous button on first page', () => {
      render(<Pagination currentPage={1} totalPages={5} />);

      const prevButton = screen.getByText('Previous').closest('button');
      expect(prevButton).toBeDisabled();
      expect(prevButton).toHaveAttribute('aria-disabled', 'true');
      expect(prevButton).toHaveClass('pointer-events-none opacity-50');
    });

    it('should enable Previous button when not on first page', () => {
      render(<Pagination currentPage={2} totalPages={5} />);

      const prevButton = screen.getByText('Previous').closest('button');
      expect(prevButton).not.toBeDisabled();
    });

    it('should disable Next button on last page', () => {
      render(<Pagination currentPage={5} totalPages={5} />);

      const nextButton = screen.getByText('Next').closest('button');
      expect(nextButton).toBeDisabled();
      expect(nextButton).toHaveAttribute('aria-disabled', 'true');
      expect(nextButton).toHaveClass('pointer-events-none opacity-50');
    });

    it('should enable Next button when not on last page', () => {
      render(<Pagination currentPage={4} totalPages={5} />);

      const nextButton = screen.getByText('Next').closest('button');
      expect(nextButton).not.toBeDisabled();
    });
  });

  describe('Page Navigation', () => {
    it('should navigate to specific page when page number is clicked', async () => {
      const user = userEvent.setup();
      render(<Pagination currentPage={1} totalPages={5} />);

      const page3Button = screen.getByText('3');
      await user.click(page3Button);

      expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('page=3'));
    });

    it('should navigate to previous page when Previous button is clicked', async () => {
      const user = userEvent.setup();
      render(<Pagination currentPage={3} totalPages={5} />);

      const prevButton = screen.getByText('Previous');
      await user.click(prevButton);

      expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('page=2'));
    });

    it('should navigate to next page when Next button is clicked', async () => {
      const user = userEvent.setup();
      render(<Pagination currentPage={3} totalPages={5} />);

      const nextButton = screen.getByText('Next');
      await user.click(nextButton);

      expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('page=4'));
    });

    it('should not navigate when clicking disabled Previous button', async () => {
      const user = userEvent.setup();
      render(<Pagination currentPage={1} totalPages={5} />);

      const prevButton = screen.getByText('Previous');
      await user.click(prevButton);

      expect(mockPush).not.toHaveBeenCalled();
    });

    it('should not navigate when clicking disabled Next button', async () => {
      const user = userEvent.setup();
      render(<Pagination currentPage={5} totalPages={5} />);

      const nextButton = screen.getByText('Next');
      await user.click(nextButton);

      expect(mockPush).not.toHaveBeenCalled();
    });
  });

  describe('Query Parameters', () => {
    it('should preserve query string in navigation', async () => {
      const user = userEvent.setup();
      render(<Pagination currentPage={1} totalPages={5} queryString="test search" />);

      const page2Button = screen.getByText('2');
      await user.click(page2Button);

      expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('query=test+search'));
    });

    it('should preserve filter string in navigation', async () => {
      const user = userEvent.setup();
      render(<Pagination currentPage={1} totalPages={5} filterString="recent" />);

      const page2Button = screen.getByText('2');
      await user.click(page2Button);

      expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('filter=recent'));
    });

    it('should handle empty query string', async () => {
      const user = userEvent.setup();
      render(<Pagination currentPage={1} totalPages={5} queryString="" />);

      const page2Button = screen.getByText('2');
      await user.click(page2Button);

      expect(mockPush).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes on disabled buttons', () => {
      render(<Pagination currentPage={1} totalPages={5} />);

      const prevButton = screen.getByText('Previous').closest('button');
      expect(prevButton).toHaveAttribute('aria-disabled', 'true');
      expect(prevButton).toHaveAttribute('disabled');
    });

    it('should have proper alt text for icons', () => {
      render(<Pagination currentPage={2} totalPages={5} />);

      expect(screen.getByAltText('Previous')).toBeInTheDocument();
      expect(screen.getByAltText('next')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should handle single page', () => {
      render(<Pagination currentPage={1} totalPages={1} />);

      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('Previous').closest('button')).toBeDisabled();
      expect(screen.getByText('Next').closest('button')).toBeDisabled();
    });

    it('should handle maximum pages', () => {
      render(<Pagination currentPage={50} totalPages={100} />);

      // Should render with ellipsis
      expect(screen.getByText('50')).toBeInTheDocument();
    });

    it('should not navigate beyond boundaries', async () => {
      const user = userEvent.setup();
      render(<Pagination currentPage={5} totalPages={5} />);

      const nextButton = screen.getByText('Next');
      await user.click(nextButton);

      // Should not call router.push because we're at the last page
      expect(mockPush).not.toHaveBeenCalled();
    });
  });
});
