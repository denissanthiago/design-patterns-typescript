export default interface IVideoProvider {
  getPlayList(code: string): Promise<string[]>;
}
