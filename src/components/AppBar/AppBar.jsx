import AutoForm from 'components/AuthForm/AuthForm';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {
  return (
    <header>
      <Navigation />
      <UserMenu />
      <AutoForm />
    </header>
  );
};

export default AppBar;

// export const MyAppBar = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return (
//       <AppBar>
//       <Toolbar sx={{display: 'flex', fontSize: 18, justifyContent: 'space-between'}}>
//         <Navigation />
//         {isLoggedIn ? <UserMenu /> : <AuthNav />}
//       </Toolbar>
//     </AppBar>
//   );
