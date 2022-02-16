import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useQuery } from "react-query";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
interface ModalWhitMovieDetailsProps {
  open: boolean;
  handleCloseModal: () => void;
  movieTitle: string;
}

export default function ModalWhitMovieDetails({
  open,
  handleCloseModal,
  movieTitle,
}: ModalWhitMovieDetailsProps) {
  const [resultsMovies, setResultsMovies] = useState([]);

  useQuery(
    "/movie",
    () => {
      return fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=9c58fa52cd7497f1876ce300486c469e&language=pt-BR&query=${movieTitle}&page=1`
      ).then((response) => response.json());
    },
    {
      onSuccess: (data) => {
        setResultsMovies(data.results);
      },
    }
  );
  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleCloseModal}
            sx={{ position: "fixed", right: 5, top: 5, cursor: "pointer" }}
          />
          {resultsMovies.length > 0 ? (
            resultsMovies.map((movie) => {
              return (
                <div
                  key={movie.id}
                  style={{
                    padding: "30px 0",
                    width: "400px",
                    borderBottom: "1px solid #c2c2c2",
                  }}
                >
                  <Typography
                    align="left"
                    variant="h6"
                    sx={{ margin: "5px 0" }}
                  >
                    <strong>Título: </strong>
                    {movie.title}
                  </Typography>
                  {movie.overview && (
                    <Typography align="left" sx={{ margin: "5px 0" }}>
                      <strong>Descrição: </strong>
                      {movie.overview}
                    </Typography>
                  )}
                  <Typography align="left" sx={{ margin: "5px 0" }}>
                    <strong>Avaliação de 0 à 10: </strong>
                    {movie.vote_average}
                  </Typography>
                  <Typography align="left" sx={{ margin: "5px 0" }}>
                    <strong>Total de avaliação: </strong>
                    {movie.vote_count}
                  </Typography>
                  {movie.backdrop_path && (
                    <img
                      style={{ width: 400 }}
                      src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                      alt={`${movie.title} imagem`}
                    />
                  )}
                </div>
              );
            })
          ) : (
            <Typography>
              Nenhum filme encontrado, volte e pesquise novamente.
            </Typography>
          )}
        </Box>
      </Modal>
    </>
  );
}
