import React from "react";
import usePageMeta from "../hooks/usePageMeta";
import WheatSprig from "../assets/WheatSprig";

export default function StoryPage() {
  usePageMeta({
    title: "Our Story",
    description:
      "Since 1999, Greenwood Gourmet Grocery has served Crozet, VA from a roadside fruit stand turned destination grocery. Founded by Nina Promisel & David Atwell.",
    path: "/our-story",
  });

  return (
    <>
      {/* Hero header */}
      <section className="chalkboard text-cream relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/story-interior.jpg"
            alt="Inside Greenwood Gourmet Grocery"
            className="w-full h-full object-cover opacity-[0.07]"
          />
        </div>
        <div className="max-w-6xl mx-auto px-5 pt-20 pb-16 md:pt-28 md:pb-20 relative z-10">
          <div className="font-hand text-gold text-2xl mb-3">chapter 02</div>
          <h1 className="font-serif text-cream text-5xl md:text-7xl leading-tight mb-6">
            A grocery, a deli,<br />an institution.
          </h1>
          <p className="font-serif italic text-gold text-xl max-w-lg">
            On the road from Charlottesville to the Blue Ridge since 1999.
          </p>
        </div>
        <WheatSprig className="absolute top-12 right-10 w-10 opacity-10 hidden md:block" color="#f5efe0" />
      </section>

      {/* Story content */}
      <section className="border-b border-forest/10">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-28 space-y-8 text-forest/80 text-lg leading-relaxed">
          <p>
            In 1999, Nina Promisel and David Atwell set out to build something on the
            foundations of a roadside fruit stand along Route 250. The land had history —
            generations of Albemarle County farmers had sold their harvest from this very
            spot. Nina and David saw what it could become.
          </p>
          <p>
            What started as a small provisions shop has grown into a destination.
            Roadtrippers on their way to Wintergreen pull off for a sandwich and stay for
            the beer selection. Locals stop by for Albemarle Baking Co. bread, a wedge of
            something from the cheese case, or a bottle they've been meaning to try.
          </p>
          <p>
            The sandwich menu — each one named after a heritage breed — uses ingredients
            from people we know. Double&nbsp;H&nbsp;Farm pork goes into the Berkshire.
            Farmstead Ferments kraut tops the Brahma. Goodwin Creek Farm wheat makes the
            kids' PB&amp;J something worth ordering.
          </p>
          <p>
            Our beer and wine selection is hand-picked, every bottle earning its place on
            the shelf. We carry hundreds of craft beers and wines, local and international,
            each with our stamp of approval. The cheese case rotates with the seasons.
            The pantry shelves hold specialty condiments, preserves, and provisions from
            makers we trust.
          </p>
          <p>
            Outside, there are picnic tables under the trees, a small stage for summer
            music, and a view of the mountains that never gets old. Inside, it's the kind
            of place where the person behind the counter knows what you ordered last time.
          </p>
          <p className="font-serif italic text-gold text-xl pt-4">
            Sandwiches made to order, every day from open until 4pm.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section>
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
          <div className="font-hand text-gold text-xl mb-4">our partners</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Albemarle Baking Co.", role: "Bread & pastries" },
              { name: "Double H Farm", role: "Heritage pork" },
              { name: "Farmstead Ferments", role: "Kraut & ferments" },
              { name: "Goodwin Creek Farm", role: "Wheat & produce" },
            ].map((p) => (
              <div key={p.name} className="card-rustic p-5">
                <div className="font-serif text-forest text-lg">{p.name}</div>
                <div className="text-forest/50 text-sm italic mt-1">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
