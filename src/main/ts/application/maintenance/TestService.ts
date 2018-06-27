import { AxiosStatic } from 'axios';
import Settings from '../../domain/config/Settings';

export default class TestService {
  private readonly axiosBase: AxiosStatic;
  private readonly settings: Settings;

  constructor(axiosBase: AxiosStatic, settings: Settings) {
    this.axiosBase = axiosBase;
    this.settings = settings;
  }

  public async test() {
    // これはサンプル。ただ単に「チャンネル一覧を取ってくる」だけ。
    const axios = this.axiosBase.create({
      baseURL: this.settings.discordApiUrl,
      responseType: 'json',
      headers: {
        Authorization: `Bot ${this.settings.botToken}`,
        'Content-Type': 'application/json'
      }
    });

    const guildUrl = `/guilds/${this.settings.activeCategoryGuaidId}/channels`;
    const response = await axios.get(guildUrl);
    console.log(response.data);
  }
}
