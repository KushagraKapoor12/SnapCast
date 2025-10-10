"use client";
import Image from "next/image";
import ImageWithFallback from "./ImageWithFallback";
import Link from "next/link";
import { useState } from "react";

const VideoCard = ({
  id,
  title,
  thumbnail,
  userImg,
  username,
  createdAt,
  views,
  visibility,
  duration,
}: VideoCardProps) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(`${window.location.origin}/video/${id}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const formattedDate = createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/video/${id}`}
      className="video-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Watch ${title} by ${username}`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={thumbnail}
          width={290}
          height={160}
          alt={`Thumbnail for ${title}`}
          className="thumbnail transition-transform duration-300 group-hover:scale-110"
          priority={false}
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
          aria-hidden="true"
        />
      </div>
      
      <article>
        <div>
          <figure className="flex items-center gap-2">
            <ImageWithFallback
              src={userImg}
              width={34}
              height={34}
              alt={`${username}'s profile picture`}
              className="rounded-full aspect-square transition-transform duration-300 group-hover:scale-110"
            />
            <figcaption className="flex-1 min-w-0">
              <h3 className="truncate transition-colors duration-200 group-hover:text-pink-100">
                {username}
              </h3>
              <p className="capitalize text-xs" aria-label={`Video visibility: ${visibility}`}>
                {visibility}
              </p>
            </figcaption>
          </figure>
          <aside className="flex items-center gap-1.5" aria-label={`${views} views`}>
            <Image
              src="/assets/icons/eye.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
            <span className="text-sm">{views}</span>
          </aside>
        </div>
        <h2 className="line-clamp-2 transition-colors duration-200 group-hover:text-pink-100">
          {title} -{" "}
          <time dateTime={createdAt.toISOString()} className="text-gray-100">
            {formattedDate}
          </time>
        </h2>
      </article>
      
      <button
        onClick={handleCopy}
        className="copy-btn transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-100 focus:ring-offset-2"
        aria-label={copied ? "Link copied to clipboard" : "Copy video link"}
        title={copied ? "Copied!" : "Copy link"}
      >
        <Image
          src={
            copied ? "/assets/icons/checkmark.svg" : "/assets/icons/link.svg"
          }
          alt=""
          width={18}
          height={18}
          aria-hidden="true"
          className="transition-transform duration-200"
        />
      </button>
      
      {duration && (
        <div
          className="duration transition-all duration-300 group-hover:bg-opacity-90"
          aria-label={`Video duration: ${Math.ceil(duration / 60)} minutes`}
        >
          {Math.ceil(duration / 60)}min
        </div>
      )}
    </Link>
  );
};

export default VideoCard;