import { useEffect, useState } from 'react';
import { GameCards } from '../components/GameCards';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  textAlign: 'center',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Home = () => {
  const session = window.localStorage.getItem('session');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [games, setGames]: any = useState([]);
  const [user, setUser]: any = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => {
        const userAdmin = data.find((user) => user.email === session);
        setUser(userAdmin);
      });
  }, [session]);

  useEffect(() => {
    function loadGames() {
      fetch('http://localhost:3000/games')
        .then((response) => response.json())
        .then((data) => setGames(data));
    }
    loadGames();
  }, []);

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              style={{ padding: '40px 0', fontWeight: '600' }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Cadastre o Jogo abaixo
            </Typography>
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <label htmlFor="name">
                  Nome do jogo:
                  <input type="text" name="name" id="name" />
                </label>
              </div>
              <label htmlFor="">
                Categoria:
                <select id="category">
                  <option value="Ação">Ação</option>
                  <option value="Aventura">Aventura</option>
                  <option value="Corrida">Corrida</option>
                  <option value="Estratégia">Estratégia</option>
                  <option value="Esportes">Esportes</option>
                </select>
              </label>
              <div>
                <label htmlFor="">
                  Url:
                  <input type="text" name="" id="url" />
                </label>
              </div>
              <label htmlFor="">
                Video:
                <input type="text" name="" id="video" />
              </label>

              <label htmlFor="">
                Link da imagem:
                <input type="text" name="" id="img" />
              </label>
              <label
                htmlFor=""
                style={{
                  display: 'flex',
                  alignItems: 'start',
                }}
              >
                Descrição:
                <textarea
                  name=""
                  id="description"
                  maxLength={150}
                  style={{ marginTop: 0 }}
                ></textarea>
              </label>
              <button>Salvar</button>
            </form>
          </Box>
        </Modal>
      </div>
      {user.userType === 'admin' ? (
        <div className="addGame" onClick={handleOpen}>
          <AddIcon /> Adicionar Jogo
        </div>
      ) : (
        ''
      )}
      <div className="cardsContainer">
        {games &&
          games.map((game: any) => <GameCards key={game.name} props={game} />)}
      </div>
    </>
  );
};
