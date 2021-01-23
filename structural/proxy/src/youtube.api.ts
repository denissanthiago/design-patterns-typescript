import IVideoProvider from "./video-provider.interface";

export default class YouTubeApi implements IVideoProvider {
  private playList: any = {
    courses: [
      "https://www.youtube.com/watch?v=DKNVMILZDks",
      "https://www.youtube.com/watch?v=Ph4SLROqSEQ",
      "https://www.youtube.com/watch?v=Tvs3r0TVcRI",
    ],
  };

  async getPlayList(code: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = this.playList[code] || null;
        resolve(result);
      }, 3000);
    });
  }
}
