import { Player } from '@lottiefiles/react-lottie-player';
import graphAnimation from '@/assets/loader/Loader1.json';

const GraphLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div style={{ height: '300px', width: '300px' }}>
        <Player
          autoplay
          loop
          src={graphAnimation}
          style={{ height: '100%', width: '100%' }}
        >
          {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
        </Player>
      </div>
    </div>
  );
};

export default GraphLoader;