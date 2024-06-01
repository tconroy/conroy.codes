import type { Metadata } from "next";
import content from "./content";

export const metadata: Metadata = {
  title: "Wants",
  description: "Some things I want to do, buy, or learn in the future.",
};

const Category = ({ title, items }) => {
  return (
    <div>
      <hr />
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li>
            <div>
              <a href={item.link}>
                <h4>{item.name}</h4>
              </a>
              <ul>
                {item.description && <li>{item.description}</li>}
                <li>${item.cost}</li>
                {item.quantity && <li>Quantity: {item.quantity}</li>}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function WantsPAge() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        {metadata.description}
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        {content.map((category) => {
          if (category.items.length === 0) return null;
          return <Category {...category} />;
        })}
      </div>
    </section>
  );
}
