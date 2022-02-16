import { Box, TextField, Typography } from "@mui/material";
import { Container } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import ModalWhitMovieDetails from "../ModalWhitMovieDetails";

export default function Main() {
  const [openModal, setOpenModal] = useState(false);
  const [titleMovie, setTitleMovie] = useState("");

  function handleChangeTitleMovie(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const titleMovie: HTMLInputElement = event.currentTarget;
    setTitleMovie(titleMovie.value.replace(" ", "+"));
  }
  function handleOpenModal() {
    if (titleMovie === "") {
      return alert("Preencha com algum filme.");
    }
    setOpenModal(true);
  }
  function hadleCloseModal() {
    setOpenModal(false);
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: 800,
        padding: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 3,
        flexDirection: "column",
      }}
    >
      <Typography variant="h6">Digite o nome do filme:</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          id="outlined-basic"
          placeholder="Digite aqui"
          variant="outlined"
          color="secondary"
          defaultValue={titleMovie}
          onChange={handleChangeTitleMovie}
          sx={{ margin: "20px 0" }}
        />
        <LoadingButton
          onClick={handleOpenModal}
          // loading={}
          variant="outlined"
          color="secondary"
          sx={{
            height: 50,
          }}
        >
          Buscar
        </LoadingButton>
      </Box>
      {openModal && (
        <ModalWhitMovieDetails
          open={openModal}
          handleCloseModal={hadleCloseModal}
          movieTitle={titleMovie}
        />
      )}
    </Container>
  );
}
