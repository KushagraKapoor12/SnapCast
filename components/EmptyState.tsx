import Image from "next/image";

const EmptyState = ({ icon, title, description }: EmptyStateProps) => {
  return (
    <section className="empty-state" role="status" aria-live="polite">
      <div className="flex items-center justify-center p-4 rounded-full bg-gray-40 transition-transform duration-300 hover:scale-110">
        <Image
          src={icon}
          alt=""
          width={46}
          height={46}
          aria-hidden="true"
          className="opacity-70"
        />
      </div>

      <article className="text-center">
        <h1 className="text-2xl font-bold text-dark-100 mb-2">{title}</h1>
        <p className="text-gray-100 text-base">{description}</p>
      </article>
    </section>
  );
};

export default EmptyState;