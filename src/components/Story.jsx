import React from "react";
import WheatSprig from "../assets/WheatSprig";

export default function Story() {
  return (
    <section id="story" className="chalkboard text-cream relative overflow-hidden">
      {/* Interior photo background */}
      <div className="absolute inset-0">
        <img
          src="/images/story-interior.jpg"
          alt="Inside Greenwood Gourmet Grocery"
          className="w-full h-full object-cover opacity-[0.07]"
        />
      </div>
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-12 gap-12 relative z-10">
        <div className="md:col-span-4">
          <div className="font-hand text-gold text-2xl mb-3">our story</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            A grocery, a deli, an institution.
          </h2>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-5 text-cream/75 text-base leading-relaxed">
          <p>
            In 1999, Nina Promisel and David Atwell set out to build something
            on the foundations of a roadside fruit stand along Route 250. What
            started small has become a destination — a place where roadtrippers
            pull off the highway and regulars stop by for bread, beer, and the
            best sandwich in the county.
          </p>
          <p>
            Inside, you'll find an Epicurean dream: Albemarle Baking Co. bread,
            Double&nbsp;H&nbsp;Farm pork, Farmstead Ferments kraut, Goodwin
            Creek Farm produce. Hundreds of beers and wines, each with our
            stamp of approval. Artisan cheeses cut to order. Specialty
            provisions from trusted makers near and far.
          </p>
          <p>
            Outside, picnic tables, a small stage for summer music, and a view
            of the mountains that never gets old.
          </p>
          <p className="font-serif italic text-gold text-lg pt-2">
            Sandwiches made to order, every day from open until 4pm.
          </p>
        </div>
      </div>

      <WheatSprig
        className="absolute top-16 left-8 w-10 opacity-10 hidden md:block -rotate-12"
        color="#f5efe0"
      />
    </section>
  );
}
