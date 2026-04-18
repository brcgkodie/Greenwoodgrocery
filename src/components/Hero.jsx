import React, { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import MountainRidge from "../assets/MountainRidge";
import WheatSprig from "../assets/WheatSprig";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 1;
    const handleSeek = () => {
      if (v.currentTime < 1) v.currentTime = 1;
    };
    v.addEventListener("seeked", handleSeek);
    v.addEventListener("playing", handleSeek);
    return () => {
      v.removeEventListener("seeked", handleSeek);
      v.removeEventListener("playing", handleSeek);
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-forest/10 min-h-[70vh] flex items-center">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-storefront.jpg"
          className="w-full h-full object-cover opacity-15"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-cream/60" />
      </div>

      <div className="max-w-6xl mx-auto px-5 pt-16 pb-28 md:pt-24 md:pb-36 relative z-10">
        <div className="font-hand text-gold text-2xl mb-4 -rotate-2 inline-block">
          since 1999
        </div>
        <h1 className="font-serif text-forest text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
          Sandwiches,<br />
          <span className="italic text-gold">made to order,</span><br />
          on Route 250.
        </h1>
        <p className="mt-8 max-w-xl text-forest/75 text-base md:text-lg leading-relaxed">
          A roadside grocery born from a fruit stand, built by Nina&nbsp;Promisel
          &amp; David&nbsp;Atwell on the road from Charlottesville to the Blue Ridge.
          Local meats, Albemarle Baking Co. bread, gourmet everything. Order
          ahead&nbsp;&mdash; we'll have it ready when you pull in.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/menu"
            className="bg-forest text-cream px-7 py-4 rounded-lg text-sm tracking-wide hover:bg-forest/90 transition-colors inline-flex items-center gap-2"
          >
            See the menu <ChevronDown size={16} />
          </Link>
          <Link
            to="/visit"
            className="text-forest text-sm underline underline-offset-4 decoration-gold decoration-2"
          >
            6701 Rockfish Gap Tpk
          </Link>
        </div>
      </div>

      {/* Decorative wheat sprigs */}
      <WheatSprig className="absolute top-12 right-8 w-10 opacity-30 hidden md:block z-10" />
      <WheatSprig className="absolute top-32 right-20 w-8 opacity-20 hidden lg:block rotate-12 z-10" />

      {/* Mountain ridge background */}
      <MountainRidge className="absolute bottom-0 left-0 w-full h-48 md:h-60 z-10" />

      {/* Corner mark */}
      <div className="absolute top-8 right-8 hidden md:block opacity-20 z-10">
        <div className="font-hand text-forest text-lg">no. 01</div>
        <div className="w-12 h-px bg-forest mt-1" />
      </div>
    </section>
  );
}
