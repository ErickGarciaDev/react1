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
  width: 630,
  height: 630,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '5px',
  p: 4,
  padding: 0,
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
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 140px',
                  alignItems: 'center',
                }}
              >
                <label htmlFor="name">Nome do jogo:</label>
                <input type="text" name="name" id="name" />
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 140px',
                  alignItems: 'center',
                }}
              >
                <label htmlFor="">Categoria:</label>
                <select id="category">
                  <option value="Ação">Ação</option>
                  <option value="Aventura">Aventura</option>
                  <option value="Corrida">Corrida</option>
                  <option value="Estratégia">Estratégia</option>
                  <option value="Esportes">Esportes</option>
                </select>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 140px',
                  alignItems: 'center',
                }}
              >
                <label htmlFor="">Url:</label>
                <input type="text" name="" id="url" />
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 140px',
                  alignItems: 'center',
                }}
              >
                <label htmlFor="">Video:</label>
                <input type="text" name="" id="video" />
              </div>

              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 140px',
                  alignItems: 'center',
                }}
              >
                <label htmlFor="" style={{ textAlign: 'left' }}>
                  Link da imagem:
                </label>
                <input type="text" name="" id="img" />
              </div>

              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 140px',
                  alignItems: 'center',
                  marginTop: '10px',
                }}
              >
                <label
                  htmlFor=""
                  style={{
                    display: 'flex',
                    alignSelf: 'start',
                  }}
                >
                  Descrição:
                </label>
                <textarea
                  name=""
                  id="description"
                  maxLength={150}
                  style={{ marginTop: 0 }}
                ></textarea>
              </div>
              <button
                onClick={handleClose}
                className="saveButtonModal"
                style={{
                  position: 'absolute',
                  bottom: '-40px',
                  width: '210px',
                  right: '130px',
                  padding: '10px',
                  border: 'none',
                  color: 'white',
                  backgroundColor: '#91d722',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              >
                Salvar
              </button>
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
