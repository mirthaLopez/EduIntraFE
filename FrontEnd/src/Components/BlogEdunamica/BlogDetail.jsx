import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetBlogs from "../../Services/Blog/GetBlogs";
import PatchLikes from "../../Services/Blog/PatchLikes"; // Servicio para actualizar likes
import "../../Styles/Blog/BlogDetail.css";
import { ThumbUp, Share } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Button, Modal, Box, Typography, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const BlogDetails = () => {
  const { id } = useParams(); // Extraer el ID de la URL
  const [blog, setBlog] = useState(null);
  const [likes, setLikes] = useState(0);
  const [openModal, setOpenModal] = useState(false); // Estado para el modal de compartir

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await GetBlogs();
        const selectedBlog = data.find((b) => b.id === parseInt(id));
        setBlog(selectedBlog);
        setLikes(selectedBlog?.likes_count || 0);
      } catch (error) {
        console.error("Error al obtener el blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleLike = async () => {
    const updatedLikes = likes + 1;
    setLikes(updatedLikes); // Actualiza el estado local optimistamente

    try {
      await PatchLikes(id, updatedLikes); // Actualiza los likes en el backend
    } catch (error) {
      console.warn("Error al actualizar los likes en el servidor:", error.message);
      setLikes(likes); // Revertir el cambio local si ocurre un error
    }
  };

  const handleShareClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (!blog) return <div className="blog-detail-loading">Cargando...</div>;

  return (
    <>
      {/* Contenedor Principal */}
      <div className="blog-detail-main-container">
        {/* Lado Izquierdo - Título y Autor */}
        <div className="blog-detail-text">
          <h1 className="blog-detail-main-title">{blog.title}</h1>
          <p className="blog-detail-author">Por: {blog.creator}</p>
        </div>

        {/* Lado Derecho - Imagen */}
        <div className="blog-detail-image-container">
          <img
            src={blog.image_url}
            alt={blog.title}
            className="blog-detail-image"
          />
        </div>
      </div>

      {/* Sección Secundaria */}
      <div className="blog-detail-secondary">
        <div>
        <h2 className="blog-detail-secondary-title">{blog.title}</h2>
        <p className="blog-detail-introduction">{blog.introduction}</p>
        <div className="blog-detail-content">
          {blog.content.split("#").map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>
        </div>
        {/* Acciones */}
        <div className="blog-detail-actions">
          <div><span className="blog-detail-likes-count">{likes} Likes</span></div>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ThumbUp />}
            onClick={handleLike}
          >
            Like
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<Share />}
            onClick={handleShareClick}
          >
            Share
          </Button>
        </div>
      </div>

      {/* Modal para compartir */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="share-blog-modal"
        aria-describedby="modal-to-share-blog-on-social-media"
      >
        <Box className="share-modal">
          <IconButton onClick={handleCloseModal} className="close-modal-button">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" gutterBottom>
            Compartir "{blog.title}"
          </Typography>

          <div
            className="whatsapp-button"
            onClick={() =>
              window.open(
                `https://wa.me/?text=${encodeURIComponent(blog.title)} ${encodeURIComponent(
                  blog.image_url
                )}`
              )
            }
          >
            <WhatsAppIcon /> Compartir en WhatsApp
          </div>
          <div
            className="facebook-button"
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  blog.image_url
                )}`
              )
            }
          >
            <FacebookIcon /> Compartir en Facebook
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default BlogDetails;



