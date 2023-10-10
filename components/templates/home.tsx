import { cn } from '@/helpers';

interface Props {}

const HomeTemplate = (props: Props) => {
  return (
    <section className={cn('bg-gray-600 p-10')}>
      <header></header>

      {Array(50)
        .fill(null)
        .map((el, i) => (
          <p key={i}>
            Lorem {el} ipsum dolor sit amet, consectetur adipisicing elit.
            Deleniti a dolorem cumque. Eligendi vitae impedit eos labore
            similique earum expedita recusandae quae? Amet soluta dolor rem
            laboriosam beatae officia voluptatum, facere architecto quasi ea at
            reprehenderit nisi ipsam id culpa debitis iste sapiente eveniet ab
            ut consectetur a in quidem!
          </p>
        ))}
    </section>
  );
};

export { HomeTemplate };
