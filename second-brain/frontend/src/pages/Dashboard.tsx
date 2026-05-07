import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { Sidebar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent";
import API from "../services/api.js";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [filter, setFilter] = useState("all");

  const { contents = [], refresh, loading } = useContent(); // ✅ SAFE DEFAULT

  useEffect(() => {
    if (!modalOpen) {
      refresh(); // refresh only after closing modal
    }
  }, [modalOpen]);

  // ✅ Share Brain
  async function handleShare() {
    try {
      setSharing(true);

      const response = await API.post("/api/v1/brain/share", {
        share: true,
      });

      const shareUrl = `${window.location.origin}/share/${response.data.hash}`;

      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");

    } catch (err) {
      console.error(err);
      alert("Failed to generate share link");
    } finally {
      setSharing(false);
    }
  }

  // ✅ SAFE FILTER
  const filteredContent = Array.isArray(contents)
    ? contents.filter((item: any) =>
        filter === "all" ? true : item.type === filter
      )
    : [];

  return (
    <div>
      <Sidebar filter={filter} setFilter={setFilter} />

      <div className="p-4 ml-72 min-h-screen bg-slate-400">

        {/* Modal */}
        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          refresh={refresh}
        />

        {/* Top Controls */}
        <div className="flex justify-end items-center mb-6">
          <div className="flex gap-4">

            <Button
              onClick={() => setModalOpen(true)}
              variant="primary"
              text="Add Content"
              startIcon={<PlusIcon />}
            />

            <Button
              onClick={handleShare}
              loading={sharing}
              variant="secondary"
              text={sharing ? "Sharing..." : "Share Brain"}
              startIcon={<ShareIcon />}
            />

            <Button
              text="Logout"
              variant="secondary"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/signin";
              }}
            />

          </div>
        </div>

        {/* Content */}
        <div className="flex gap-4 flex-wrap">

          {loading ? (
            <p className="w-full text-center mt-10">Loading...</p>
          ) : filteredContent.length === 0 ? (
            <p className="text-gray-500 w-full text-center mt-10">
              No content found. Try adding something 🚀
            </p>
          ) : (
            filteredContent.map((item: any) => (
              <Card
                key={item._id}
                id={item._id}
                type={item.type}
                link={item.link}
                title={item.title}
                refresh={refresh}
              />
            ))
          )}

        </div>
      </div>
    </div>
  );
}

export default Dashboard;