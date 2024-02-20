import { HeaderContainer } from './styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>Best Browser Games </h1>
      <nav>
        <AccountCircleIcon style={{ fontSize: 50 }} />
        <span></span>
      </nav>
    </HeaderContainer>
  );
};
