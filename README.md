# Kdan Music
![image](https://github.com/daxia-mao/kdan-music/assets/15911310/04237c73-259f-43cf-91ca-268df6eac26a)
## 1. 簡介
嗨，這個專案主要是用於練習 React 前端技術而展開的，這是 [Demo](kdan-music.vercel.app)。

它受啟發於 Kdan Mobile 所提供的[面試作業](https://hackmd.io/@on7LKsFXRgusGofpyrHmjg/SyhX4WXJi)，並在基礎上增加了一些在規格之外的功能，它具有以下的特徵：
- 搜尋曲目、專輯、藝人、合輯
- 精選、熱門類別下的曲目
- 相互關聯的曲目、專輯、藝人、合輯頁
- 根據當前頁面的內容，來推薦曲目
- 個人音樂資料庫
- 收藏功能

### 技術摘要
1. UI 部分參考 Figma 設計稿依規格打造而成，並額外增加了 8 個 Page，以及多個 Component 用於讓整個 Website 更豐富且具有意義。
2. 使用 Styled-components 實現元件的 Style 及 RWD，並定義一組 Theme 用以復用實作上需要的設計元素，如：排版、顏色、斷點。
3. 使用 Storybook 作為開發時的工作坊，並深受 Storybook 開發哲學上的啟發，以元件驅動（CDD）的方式由下至上的開發 React 元件。
4. 使用 Typescript 定義元件及 API 請求與回應的 Interface，使程式碼在維護上更加健壯，並增加開發上的體驗。
5. 使用 Next.js 作為 React Full Stack 框架，運用如 API Router, Dynamic Router 等功能來建構服務。
6. 使用 React Functional Component & Hooks 實現所有元件。
7. 使用 Axios 與 SWR 作為前端資料獲取的函式庫。
8. 使用 Redux 管理全域狀態，並使用 Redux-Thunk 中間件來處理非同步邏輯。（Redux-Toolkit）
9. 串接 Spotify API 來存取約 20 個端點的 Spotfiy 資源 ，並將敏感資訊如 Id, Secret 存於 Server 端。
10. 串接 Spotify 的其中兩種 OAuth 2.0 認證流程，分別是 Client Credentials Flow 與 Authorization Code Flow，後者可以讓 User 主動授權 Spotfiy 帳號給網站，來存取個人化 API。
11. 使用 Tailwind CSS 在專案內作為快速開發、試驗 Style 原型的工具。
12. 使用 Git, Github 進行版本控制，並將專案部屬於 Next.js 官方提供的 Vercel。
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
## 3. 參考資源
1. [Kdan Mobile 所提供的技術規格](https://hackmd.io/@on7LKsFXRgusGofpyrHmjg/SyhX4WXJi)
2. [Figma 設計稿](https://www.figma.com/file/C0cxEy9XvTffDC0cQ2deNM/Sounds-effect-library---responsive-landing-page-(Community)?type=design&node-id=264-713&mode=design)
3. [Spotify Web API](https://developer.spotify.com/documentation/web-api)
