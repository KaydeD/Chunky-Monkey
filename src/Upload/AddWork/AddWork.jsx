import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import styles from "./AddWork.module.css";

const AddWork = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [workItems, setWorkItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch existing work items
  useEffect(() => {
    fetchWorkItems();
  }, []);

  const fetchWorkItems = async () => {
    const { data, error } = await supabase
      .from("work_items")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching work items:", error);
    } else {
      setWorkItems(data);
    }
    setLoading(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setMessage("");

    try {
      let imageUrl = "";

      // Upload image to Supabase Storage
      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}_${Math.random()}.${fileExt}`;
        const filePath = fileName;

        // Upload the file
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("work-images")
          .upload(filePath, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) {
          console.error("Upload error:", uploadError);
          throw uploadError;
        }

        // Get public URL
        const { data: urlData } = supabase.storage
          .from("work-images")
          .getPublicUrl(filePath);

        imageUrl = urlData.publicUrl;
        console.log("Image uploaded successfully:", imageUrl);
      }

      // Insert into database
      const { data: insertData, error: insertError } = await supabase
        .from("work_items")
        .insert([
          {
            image: imageUrl,
            title: formData.title,
            description: formData.description,
          },
        ])
        .select();

      if (insertError) {
        console.error("Insert error:", insertError);
        throw insertError;
      }

      console.log("Work item added:", insertData);
      setMessage("Work item added successfully!");
      setFormData({ title: "", description: "" });
      setImageFile(null);

      const imageInput = document.getElementById("imageInput");
      if (imageInput) imageInput.value = "";

      // Refresh the list
      await fetchWorkItems();
    } catch (error) {
      setMessage("Error: " + error.message);
      console.error("Full error:", error);
    }

    setUploading(false);
  };

  const handleDelete = async (id, imageUrl) => {
    if (!confirm("Are you sure you want to delete this work item?")) {
      return;
    }

    try {
      // Delete from database
      const { error: dbError } = await supabase
        .from("work_items")
        .delete()
        .eq("id", id);

      if (dbError) throw dbError;

      // Delete image from storage
      if (imageUrl) {
        const fileName = imageUrl.split("/").pop();
        const { error: storageError } = await supabase.storage
          .from("work-images")
          .remove([fileName]);

        if (storageError)
          console.error("Storage deletion error:", storageError);
      }

      setMessage("Work item deleted successfully!");
      fetchWorkItems();
    } catch (error) {
      setMessage("Error deleting: " + error.message);
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add New Work</h2>

      {message && (
        <div
          className={message.includes("Error") ? styles.error : styles.success}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Image File</label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.input}
            required
          />
          {imageFile && (
            <p style={{ color: "#4ade80", marginTop: "5px", fontSize: "14px" }}>
              Selected: {imageFile.name}
            </p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className={styles.input}
            placeholder="Dark Knight Helmet"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Description</label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className={styles.textarea}
            placeholder="High-poly character asset with detailed topology"
            required
          />
        </div>

        <button type="submit" disabled={uploading} className={styles.button}>
          {uploading ? "Uploading..." : "Add Work Item"}
        </button>
      </form>

      {/* Existing Work Items */}
      <div className={styles.workList}>
        <h3 className={styles.listTitle}>Existing Work Items</h3>

        {loading ? (
          <p className={styles.loadingText}>Loading...</p>
        ) : workItems.length === 0 ? (
          <p className={styles.emptyText}>
            No work items yet. Add your first one above!
          </p>
        ) : (
          <div className={styles.grid}>
            {workItems.map((item) => (
              <div key={item.id} className={styles.card}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <p className={styles.cardDescription}>{item.description}</p>
                  <button
                    onClick={() => handleDelete(item.id, item.image)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddWork;
