import { getDb } from '../drizzle/db';
import { videos, user } from '../drizzle/schema-postgres';

async function seed() {
  const db = getDb();
  if (!db) throw new Error("Database not initialized");

  // First, create a test user
  const testUser = {
    id: 'test-user-1',
    name: 'Test User',
    email: 'test@example.com',
    emailVerified: true,
    image: '/assets/images/dummy.jpg',
  };

  try {
    await db.insert(user).values(testUser);
    console.log('Test user created');
  } catch (error) {
    console.log('Test user already exists, continuing...');
  }

  // Then insert test videos
  try {
    await db.insert(videos).values([
      {
        title: "Test Video 1",
        description: "This is a test video description",
        videoUrl: "https://iframe.mediadelivery.net/embed/496452/test-video-1",
        videoId: "test-video-1",
        thumbnailUrl: "/assets/samples/thumbnail (1).png",
        visibility: "public",
        userId: testUser.id,
        views: 0,
        duration: 120,
      },
      {
        title: "Test Video 2",
        description: "Another test video description",
        videoUrl: "https://iframe.mediadelivery.net/embed/496452/test-video-2",
        videoId: "test-video-2",
        thumbnailUrl: "/assets/samples/thumbnail (2).png",
        visibility: "public",
        userId: testUser.id,
        views: 10,
        duration: 180,
      }
    ]);
    console.log('Test videos created');
  } catch (error) {
    console.error('Error creating test videos:', error);
  }

  console.log('Database seeded!');
}

seed().catch(console.error);