# Kdan Music
![image](https://github.com/daxia-mao/kdan-music/assets/15911310/04237c73-259f-43cf-91ca-268df6eac26a)
## 1. 簡介
待補
## 2. 使用
### 2.1 初始化
```bash
git clone https://github.com/daxia-mao/kdan-music.git
cd kdan-music
yarn install
```
### 2.2 環境變數
在資料夾下新增 `.env.local` 檔案，並在其中填入以下資訊：
```env
SPOTIFY_CLIENT_ID=...
SPOTIFY_CLIENT_SECRET=...
REDIRECT_URL=http://localhost:3000/callback
NEXT_PUBLIC_DEV_URL=http://localhost:3000
```
#### SPOTIFY_CLIENT_ID 與 SPOTIFY_CLIENT_SECRET
你個人 Spotify App 中的 Client Id, Secret。 如果沒有的話，需要到 [Spotify for Developers](https://developer.spotify.com/dashboard) 中註冊。
![image](https://github.com/daxia-mao/kdan-music/assets/15911310/f398e8ad-e00d-4320-b73e-aa2af60324fc)

#### REDIRECT_URL
用於 Authorization Code 授權流程，當 Spoitfy 授權成功後會重定向到的網址。

（注： 要和你 Spotify App 中設定的一致）
![image](https://github.com/daxia-mao/kdan-music/assets/15911310/6564e879-2dbf-43c6-9559-441a23093baa)

#### NEXT_PUBLIC_DEV_URL
開發伺服器的網址

（注：用於讓 Storybook 可以使用 /pages/api 中的 API）

### 2.3 啟動
```shell
# 啟動開發伺服器
yarn dev

# 啟動 Storybook（可選）
yarn storybook
```
## 3. 介紹
待補
