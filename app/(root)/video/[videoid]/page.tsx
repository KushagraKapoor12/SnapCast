import { redirect } from "next/navigation";
import { VideoDetailHeader, VideoInfo, VideoPlayer } from "@/components";
import { getTranscript, getVideoById } from "@/lib/actions/video";

const page = async ({ params }: { params: { videoid: string } }) => {
  const { videoid } = params; 

  const result = await getVideoById(videoid);

  if (!result || !result.video) {
    redirect("/404"); 
  }

  const { user, video } = result;

  const transcript = await getTranscript(videoid);

  return (
    <main className="wrapper page">
      <VideoDetailHeader
        title={video.title}
        createdAt={video.createdAt}
        userImg={user?.image}
        username={user?.name}
        videoId={video.videoId}
        ownerId={video.userId}
        visibility={video.visibility}
        thumbnailUrl={video.thumbnailUrl}
      />

      <section className="video-details">
        <div className="content">
          <VideoPlayer videoId={video.videoId} />
        </div>

        <VideoInfo
          transcript={transcript}
          title={video.title}
          createdAt={video.createdAt}
          description={video.description}
          videoId={videoid}
          videoUrl={video.videoUrl}
        />
      </section>
    </main>
  );
};

export default page;
