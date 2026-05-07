import { ShareIcon } from "../../icons/ShareIcon";
import { useEffect } from "react";
import API from "../../services/api";
import { Button } from "./Button";

interface CardProps {
  id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube";
  refresh: () => void;
}

export function Card({ id, title, link, type, refresh }: CardProps) {

  // ✅ Fix Twitter embed rendering
  useEffect(() => {
    if (type === "twitter") {
      const timer = setTimeout(() => {
        //@ts-ignore
        if (window.twttr) {
          //@ts-ignore
          window.twttr.widgets.load();
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [link, type]);

  // ✅ Proper YouTube embed generator
  function getYouTubeEmbedLink(url: string) {
    try {
      const urlObj = new URL(url);

      const videoId = urlObj.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }

      if (url.includes("youtu.be")) {
        const id = url.split("/").pop();
        return `https://www.youtube.com/embed/${id}`;
      }

      return url;
    } catch {
      return url;
    }
  }

  // ✅ Delete handler
  async function handleDelete() {
    try {
      if (!window.confirm("Delete this content?")) return;

      await API.delete(`/api/v1/content/${id}`);
      refresh();
    } catch (err) {
      alert("Delete failed");
    }
  }

  return (
    <div className="p-4 rounded-md bg-white border-gray-200 max-w-72 border min-h-48 min-w-72">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        
        {/* Title */}
        <div className="text-md font-medium">
          {title}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          
          {/* Share */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black"
          >
            <ShareIcon />
          </a>

          {/* Delete */}
          <Button
            text="Delete"
            variant="secondary"
            onClick={handleDelete}
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-4">
        
        {/* YouTube */}
        {type === "youtube" && link && (
          <iframe
            className="w-full h-52"
            src={getYouTubeEmbedLink(link)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}

        {/* Twitter */}
        {type === "twitter" && link && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}

      </div>
    </div>
  );
}