import { useEffect } from "react";

const BASE_TITLE = "Greenwood Gourmet Grocery";
const BASE_URL = "https://www.greenwoodva.com";

export default function usePageMeta({ title, description, path = "/" }) {
  useEffect(() => {
    const full = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} | Crozet, VA`;
    document.title = full;

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", full);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", `${BASE_URL}${path}`);
    setMeta("name", "twitter:title", full);
    setMeta("name", "twitter:description", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${BASE_URL}${path}`);
  }, [title, description, path]);
}
