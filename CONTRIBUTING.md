# Contributing to SnapCast

Thank you for your interest in contributing to SnapCast! 🎉

We love contributions from the community and are excited to have you here. This document provides guidelines for contributing to the project.

## 🤝 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## 🚀 Ways to Contribute

There are many ways you can contribute to SnapCast:

- 🐛 **Report Bugs** - Found a bug? Let us know!
- ✨ **Suggest Features** - Have an idea? We'd love to hear it!
- 📝 **Improve Documentation** - Help make our docs better
- 🧪 **Write Tests** - Help us improve code coverage
- 🎨 **Improve UI/UX** - Make SnapCast look and feel better
- 💻 **Submit Code** - Fix bugs or implement features

## 📋 Getting Started

### 1. Fork the Repository

Click the "Fork" button at the top right of the repository page.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/SnapCast.git
cd SnapCast
```

### 3. Set Up Development Environment

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Set up database
npm run db:push

# Start development server
npm run dev
```

### 4. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/add-dark-mode`
- `fix/video-upload-bug`
- `docs/update-readme`
- `refactor/optimize-queries`

## 💻 Development Guidelines

### Code Style

- Follow the existing code style
- Use TypeScript for type safety
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Naming Conventions

- **Files**: Use kebab-case (e.g., `video-player.tsx`)
- **Components**: Use PascalCase (e.g., `VideoPlayer`)
- **Functions**: Use camelCase (e.g., `getUserVideos`)
- **Constants**: Use UPPER_SNAKE_CASE (e.g., `MAX_VIDEO_SIZE`)

### Component Structure

```typescript
// 1. Imports
import { useState } from 'react';
import { Button } from '@/components';

// 2. Types/Interfaces
interface VideoPlayerProps {
  videoId: string;
  autoplay?: boolean;
}

// 3. Component
export default function VideoPlayer({ videoId, autoplay = false }: VideoPlayerProps) {
  // State
  const [isPlaying, setIsPlaying] = useState(autoplay);
  
  // Handlers
  const handlePlay = () => {
    setIsPlaying(true);
  };
  
  // Render
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}
```

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(video): add video upload progress indicator
fix(auth): resolve Google OAuth redirect issue
docs(readme): update installation instructions
refactor(api): optimize database queries
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write tests for new features
- Update tests when modifying existing code
- Aim for high code coverage
- Test edge cases and error scenarios

### Test Structure

```typescript
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard';

describe('VideoCard', () => {
  it('should render video title', () => {
    render(<VideoCard title="Test Video" />);
    expect(screen.getByText('Test Video')).toBeInTheDocument();
  });
  
  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<VideoCard onClick={handleClick} />);
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalled();
  });
});
```

## 📝 Pull Request Process

### Before Submitting

1. ✅ Ensure your code follows the style guidelines
2. ✅ Update documentation if needed
3. ✅ Add or update tests
4. ✅ Run `npm run lint` and fix any issues
5. ✅ Run `npm run build` to ensure it builds successfully
6. ✅ Test your changes thoroughly

### Submitting a PR

1. Push your changes to your fork
2. Go to the original repository
3. Click "New Pull Request"
4. Select your branch
5. Fill out the PR template completely
6. Link related issues
7. Request review from maintainers

### PR Review Process

- Maintainers will review your PR
- Address any requested changes
- Keep the PR focused and small
- Be responsive to feedback
- Once approved, your PR will be merged!

## 🐛 Bug Reports

When reporting bugs, include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, etc.)
- Error messages or logs

## ✨ Feature Requests

When suggesting features, include:

- Clear description of the feature
- Use cases and benefits
- Possible implementation approach
- Mockups or examples (if applicable)

## 📚 Documentation

Help us improve our documentation:

- Fix typos and grammatical errors
- Clarify confusing sections
- Add examples and use cases
- Update outdated information
- Translate documentation

## 🎯 Priority Labels

We use labels to prioritize issues and PRs:

- 🔴 **critical** - Urgent, blocks users
- 🟡 **high** - Important, should be addressed soon
- 🟠 **medium** - Standard priority
- 🟢 **low** - Nice to have, low priority

## 💬 Communication

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - Questions and community discussions
- **Pull Requests** - Code contributions

## 🙏 Recognition

Contributors will be:

- Listed in the contributors section
- Mentioned in release notes (for significant contributions)
- Celebrated in our community discussions

## ❓ Questions?

If you have questions about contributing:

1. Check existing documentation
2. Search existing issues and discussions
3. Create a new discussion
4. Ask in the PR/issue comments

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to SnapCast! Your efforts help make this project better for everyone.** 🎉

Happy coding! 💻
