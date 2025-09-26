CREATE TABLE `videos` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`video_url` text NOT NULL,
	`video_id` text NOT NULL,
	`thumbnail_url` text NOT NULL,
	`visibility` text NOT NULL,
	`user_id` text NOT NULL,
	`views` integer DEFAULT 0 NOT NULL,
	`duration` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
