# 皮皮的生活設計診斷室

一個幫助 25-35 歲忙碌職場女性看清現況、邁向微退休的診斷網站。

## 網站功能

- **首頁**：品牌介紹、三個診斷工具入口、常見問題、Footer
- **退休規劃診斷**：10 個問題，計算微退休可行性
- **財經診斷**：12 個問題，評估投資風險承受度
- **副業診斷**：11 個問題，找出副業人格類型

## 技術棧

- HTML5
- CSS3（杏色系設計）
- JavaScript（診斷邏輯計算）
- 完全響應式設計

## 顏色方案

- 主色（杏色）：#F5E6D3
- 深杏色：#D4A574
- 淺杏色：#F9F1E8
- 中性灰：#6B6B6B

## 部署到 GitHub Pages

### 步驟 1：建立 GitHub Repository

1. 登入 GitHub（https://github.com）
2. 點擊右上角的「+」→ 「New repository」
3. Repository 名稱：`pipilab.co`（或任何你想要的名稱）
4. 選擇「Public」
5. 點擊「Create repository」

### 步驟 2：上傳文件

#### 方法 A：使用 GitHub 網頁界面（最簡單）

1. 在新建的 Repository 頁面，點擊「Add file」→ 「Upload files」
2. 將所有文件拖放到上傳區域，或點擊選擇文件
3. 上傳以下文件：
   - index.html
   - styles.css
   - script.js
   - retirement-diagnosis.html
   - retirement-result.html
   - financial-diagnosis.html
   - financial-result.html
   - side-business-diagnosis.html
   - side-business-result.html
4. 點擊「Commit changes」

#### 方法 B：使用 Git 命令行（更專業）

```bash
# 進入網站目錄
cd /home/ubuntu/pipi-diagnosis-website

# 初始化 Git Repository
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Pipi's Life Design Diagnosis Website"

# 添加遠程 Repository（替換 YOUR_USERNAME 和 REPOSITORY_NAME）
git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步驟 3：啟用 GitHub Pages

1. 進入 Repository 的 Settings
2. 在左側菜單找到「Pages」
3. 在「Source」下選擇「Deploy from a branch」
4. 選擇 Branch 為 `main`，Folder 為 `/ (root)`
5. 點擊「Save」
6. 等待幾分鐘，GitHub 會自動部署

### 步驟 4：設定自訂域名（pipilab.co）

#### 如果你已經有 pipilab.co 域名：

1. 登入你的域名提供商（GoDaddy、Namecheap、Google Domains 等）
2. 找到 DNS 設定
3. 添加以下 DNS 記錄：

**A 記錄：**
```
Host: @
Type: A
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**CNAME 記錄：**
```
Host: www
Type: CNAME
Value: YOUR_USERNAME.github.io
```

4. 回到 GitHub Repository Settings → Pages
5. 在「Custom domain」欄位輸入 `pipilab.co`
6. 勾選「Enforce HTTPS」
7. 點擊「Save」

#### 如果你還沒有域名：

1. 購買域名（推薦：Namecheap、Google Domains）
2. 按照上面的步驟設定 DNS
3. 或者直接使用 GitHub 提供的免費域名：`YOUR_USERNAME.github.io`

## 本地測試

如果你想在本地測試網站，可以：

1. 使用 Python：
```bash
cd /home/ubuntu/pipi-diagnosis-website
python3 -m http.server 8000
```

2. 然後在瀏覽器打開 `http://localhost:8000`

## 診斷邏輯說明

### 退休規劃診斷
- 計算目標資產 = 月預算 × 12 × 20（假設 5% 提領率）
- 根據儲蓄、投資報酬率計算預計資產
- 判斷可行性

### 財經診斷
- 根據儲蓄能力和風險承受度分類
- 給出 4 種類型：保守型、穩健型、積極型、迷茫型

### 副業診斷
- 根據時間、執行力、動力分類
- 給出 4 種人格：夢想家、行動者、規劃者、迷茫者

## 自訂修改

### 修改顏色
編輯 `styles.css` 中的 CSS 變數：
```css
:root {
    --primary-apricot: #F5E6D3;
    --dark-apricot: #D4A574;
    /* ... 其他顏色 */
}
```

### 修改內容
編輯各個 HTML 文件中的文字內容

### 修改診斷邏輯
編輯各個 `*-diagnosis.html` 文件中的 JavaScript 代碼

## 常見問題

**Q: 網站上線後多久才能看到？**
A: 通常 5-10 分鐘，有時可能需要 24 小時。

**Q: 如何更新網站內容？**
A: 編輯文件後重新上傳到 GitHub，GitHub Pages 會自動更新。

**Q: 如何添加 Google Analytics？**
A: 在 `index.html` 的 `<head>` 中添加 Google Analytics 代碼。

**Q: 如何收集用戶的 Email？**
A: 目前使用 JavaScript alert，建議後期整合 Mailchimp 或其他 Email 服務。

## 支持

有任何問題，請聯絡：pipiyang.co@gmail.com

---

Made with ❤️ for Pipi's Life Design Diagnosis Room
