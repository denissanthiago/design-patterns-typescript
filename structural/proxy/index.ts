import VideoProxy from "./src/video-proxy";
import YouTubeApi from "./src/youtube.api";
import IVideoProvider from "./src/video-provider.interface";

const proxy: IVideoProvider = new VideoProxy(new YouTubeApi());

(async () => {
  await getPlayList();
  await getPlayList();
})();

async function getPlayList() {
  const startDate = new Date();
  await proxy.getPlayList("courses");

  const endDate = new Date();

  console.log(
    `Process completed on ${endDate.getTime() - startDate.getTime()} seconds`
  );
}
