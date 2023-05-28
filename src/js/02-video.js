import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const savePlaybackTime = throttle(async (currentTime) => {
  try {
    await localStorage.setItem('videoplayer-current-time', currentTime);
  } catch (error) {
    console.error('Помилка при збереженні часу відтворення:', error);
  }
}, 1000);

const restorePlaybackTime = async () => {
  try {
    const savedTime = await localStorage.getItem('videoplayer-current-time');

    if (savedTime !== null) {
      await player.setCurrentTime(savedTime);
    }
  } catch (error) {
    console.error('Помилка при відновленні часу відтворення:', error);
  }
};

player.on('timeupdate', (data) => {
  const currentTime = data.seconds;
  savePlaybackTime(currentTime);
});

restorePlaybackTime();

