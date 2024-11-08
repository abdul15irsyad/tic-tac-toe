import { Tiles } from '@/components/tiles/tiles.component';

export default () => {
  return (
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Tiles />
    </div>
  );
};
