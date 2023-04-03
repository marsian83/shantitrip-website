interface PicturesProps {
  pictures: string[];
}

export default function Pictures(props: PicturesProps) {
  return (
    <section className="p-page flex flex-wrap justify-between gap-y-5">
      {props.pictures.map((pic) => (
        <img
          className="w-[32%] aspect-square object-cover rounded-xl"
          src={pic}
          alt={pic.slice(0, 5)}
        />
      ))}
    </section>
  );
}
