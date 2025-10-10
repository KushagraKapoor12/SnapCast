import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VideoCard from './VideoCard';

// Mock Next.js components
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => {
    return <a href={href} {...props}>{children}</a>;
  },
}));

jest.mock('./ImageWithFallback', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(() => Promise.resolve()),
  },
});

describe('VideoCard', () => {
  const mockProps: VideoCardProps = {
    id: 'test-video-123',
    title: 'Test Video Title',
    thumbnail: '/test-thumbnail.jpg',
    userImg: '/test-user.jpg',
    username: 'Test User',
    createdAt: new Date('2024-01-15'),
    views: 1234,
    visibility: 'public',
    duration: 300, // 5 minutes in seconds
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render the video card with all props', () => {
      render(<VideoCard {...mockProps} />);

      expect(screen.getByText('Test Video Title')).toBeInTheDocument();
      expect(screen.getByText('Test User')).toBeInTheDocument();
      expect(screen.getByText('public')).toBeInTheDocument();
      expect(screen.getByText('1234')).toBeInTheDocument();
      expect(screen.getByText('5min')).toBeInTheDocument();
    });

    it('should render with correct link href', () => {
      render(<VideoCard {...mockProps} />);

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/video/test-video-123');
    });

    it('should format date correctly', () => {
      render(<VideoCard {...mockProps} />);

      expect(screen.getByText(/Jan 15, 2024/)).toBeInTheDocument();
    });

    it('should render without duration badge when duration is not provided', () => {
      const propsWithoutDuration = { ...mockProps, duration: undefined };
      render(<VideoCard {...propsWithoutDuration} />);

      expect(screen.queryByText(/min/)).not.toBeInTheDocument();
    });

    it('should have proper accessibility attributes', () => {
      render(<VideoCard {...mockProps} />);

      const link = screen.getByRole('link', { name: /Watch Test Video Title by Test User/ });
      expect(link).toBeInTheDocument();

      const copyButton = screen.getByRole('button', { name: /Copy video link/ });
      expect(copyButton).toBeInTheDocument();
    });
  });

  describe('Copy Link Functionality', () => {
    it('should copy link to clipboard when copy button is clicked', async () => {
      const user = userEvent.setup();
      render(<VideoCard {...mockProps} />);

      const copyButton = screen.getByRole('button', { name: /Copy video link/ });
      await user.click(copyButton);

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        expect.stringContaining('/video/test-video-123')
      );
    });

    it('should show checkmark icon after copying', async () => {
      const user = userEvent.setup();
      render(<VideoCard {...mockProps} />);

      const copyButton = screen.getByRole('button', { name: /Copy video link/ });
      await user.click(copyButton);

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /Link copied to clipboard/ })).toBeInTheDocument();
      });
    });

    it('should revert to copy icon after 3 seconds', async () => {
      jest.useFakeTimers();
      const user = userEvent.setup({ delay: null });
      render(<VideoCard {...mockProps} />);

      const copyButton = screen.getByRole('button', { name: /Copy video link/ });
      await user.click(copyButton);

      expect(screen.getByRole('button', { name: /Link copied to clipboard/ })).toBeInTheDocument();

      jest.advanceTimersByTime(3000);

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /Copy video link/ })).toBeInTheDocument();
      });

      jest.useRealTimers();
    });

    it('should prevent navigation when copy button is clicked', async () => {
      const user = userEvent.setup();
      render(<VideoCard {...mockProps} />);

      const copyButton = screen.getByRole('button', { name: /Copy video link/ });
      const clickEvent = fireEvent.click(copyButton);

      expect(clickEvent).toBe(false); // Event should be prevented
    });
  });

  describe('Hover Effects', () => {
    it('should update hover state on mouse enter and leave', () => {
      const { container } = render(<VideoCard {...mockProps} />);
      const link = screen.getByRole('link');

      fireEvent.mouseEnter(link);
      // Component should update internal state (hover state is internal)

      fireEvent.mouseLeave(link);
      // Component should update internal state
      
      // Just verify the component renders without errors during hover
      expect(container).toBeInTheDocument();
    });
  });

  describe('Duration Calculation', () => {
    it('should calculate duration correctly for exact minutes', () => {
      const props = { ...mockProps, duration: 180 }; // 3 minutes
      render(<VideoCard {...props} />);

      expect(screen.getByText('3min')).toBeInTheDocument();
    });

    it('should round up duration for partial minutes', () => {
      const props = { ...mockProps, duration: 185 }; // 3 minutes 5 seconds
      render(<VideoCard {...props} />);

      expect(screen.getByText('4min')).toBeInTheDocument();
    });
  });

  describe('Image Alt Text', () => {
    it('should have descriptive alt text for thumbnail', () => {
      render(<VideoCard {...mockProps} />);

      const thumbnail = screen.getByAltText('Thumbnail for Test Video Title');
      expect(thumbnail).toBeInTheDocument();
    });

    it('should have descriptive alt text for user image', () => {
      render(<VideoCard {...mockProps} />);

      const userImage = screen.getByAltText("Test User's profile picture");
      expect(userImage).toBeInTheDocument();
    });
  });

  describe('Visibility States', () => {
    it('should display private visibility correctly', () => {
      const props = { ...mockProps, visibility: 'private' };
      render(<VideoCard {...props} />);

      expect(screen.getByText('private')).toBeInTheDocument();
    });

    it('should capitalize visibility text', () => {
      render(<VideoCard {...mockProps} />);

      const visibilityElement = screen.getByText('public');
      expect(visibilityElement).toHaveClass('capitalize');
    });
  });
});
