export const photoHome = photo => ({
  position: 'relative',
  backgroundColor: 'grey',
  color: '#fff',
  mb: 4,
  mt: 10,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundImage: `url(${photo})`,
  minHeight: 450,
});
