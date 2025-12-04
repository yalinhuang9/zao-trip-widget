// app.js

// -----------------------------
// 行程資料：滑 2 休 1 滑 2
// -----------------------------

const itinerary = [
  {
    id: "day1",
    label: "Day 1",
    date: "1/8",
    title: "抵達日本 · 前往藏王溫泉 · 入住吉田屋",
    note: "機場 → 包車上山，晚上先熟悉溫泉街與旅館動線。",
    items: [
      {
        type: "transport",
        title: "機場 → 蔵王溫泉 吉田屋（包車）",
        time: "下午〜傍晚",
        desc: "抵達後由包車接送，沿途留意天氣與路面狀況。上山前可先在機場便利商店補水與小點心。",
        tags: ["交通", "包車"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Yoshidaya+Ryokan+Zao+Onsen"
      },
      {
        type: "info",
        title: "Check-in & 行李確認",
        time: "抵達藏王後",
        desc: "辦理入住、確認宅急便行李是否順利送達。簡單整理房間，先找好雪具收納區與泡湯動線。",
        tags: ["入住", "宅急便"]
      },
      {
        type: "onsen",
        title: "第一晚溫泉與早睡",
        time: "夜間",
        desc: "洗去搭機與移動的疲勞。留意泉質偏酸，剛開始泡可以先縮短時間、多起身休息。",
        tags: ["溫泉", "休息"]
      }
    ]
  },
  {
    id: "day2",
    label: "Day 2",
    date: "1/9",
    title: "滑雪 Day 1 · Rossignol 租板 · 初探雪場",
    note: "第一天以熟悉雪況與地形為主，下午視體力安排樹冰纜車。",
    items: [
      {
        type: "rental",
        title: "Rossignol Rental Station 租借雪具",
        time: "早上",
        desc: "提前 30–45 分鐘抵達中央纜車站旁的 Rossignol 租借店。若有教練課程，教練會協助確認裝備。",
        tags: ["租借 / 裝備", "Rossignol"],
        mapsUrl: "https://maps.app.goo.gl/WZNJ9rCxh6GkUKrA8"
      },
      {
        type: "ski",
        title: "中央口練功 · 熟悉雪感",
        time: "上午〜午後",
        desc: "選適合的綠線 / 藍線反覆滑，熟悉板子與雪況。以『穩定止滑、轉向』為主，不急著挑戰太多路線。",
        tags: ["滑雪", "練功"]
      },
      {
        type: "ropeway",
        title: "樹冰纜車（含優先搭乘票）",
        time: "午後〜傍晚（依天氣）",
        desc: "視天氣與視線狀況安排上山。若已購買 ZAO Ropeway 優先搭乘票，記得提早到山麓站，並預留排隊彈性。",
        tags: ["樹冰", "纜車", "優先票"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Zao+Ropeway+Sanroku+Station"
      },
      {
        type: "onsen",
        title: "回吉田屋泡湯 · 早睡",
        time: "夜間",
        desc: "滑雪第一天腿會特別有感，睡前再泡一次溫泉，伸展小腿與臀部，隔天比較不容易鐵腿。",
        tags: ["溫泉", "恢復"]
      }
    ]
  },
  {
    id: "day3",
    label: "Day 3",
    date: "1/11",
    title: "休息日 · 山形市區散步與美食",
    note: "滑 2 休 1：讓腿休息、順便把城市與胃好好逛一圈。",
    items: [
      {
        type: "transport",
        title: "藏王溫泉 → 山形站",
        time: "早上",
        desc: "搭巴士或包車下山至山形站，行李可簡單背小包，其餘物品留在吉田屋。",
        tags: ["交通"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Yamagata+Station"
      },
      {
        type: "food",
        title: "午餐：そば処 三津屋（S-PAL 山形）",
        time: "中午",
        desc: "車站直結的在地蕎麥麵名店，招牌是山形名物冷肉蕎麥（冷たい肉そば），很適合作為城市小旅行的起點。",
        tags: ["必吃", "午餐", "蕎麥麵"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E6%B4%A5%E5%B1%8B%20%E3%82%A8%E3%82%B9%E3%83%91%E3%83%AB%E5%B1%B1%E5%BD%A2%E5%BA%97"
      },
      {
        type: "spot",
        title: "霞城公園（山形城跡）散步",
        time: "午後",
        desc: "沿著護城河與石牆散步，感受雪地城跡的安靜。若有開放館舍，也可順道參觀鄉土館或博物館。",
        tags: ["散步", "城跡", "景點"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kajo+Park+Yamagata"
      },
      {
        type: "spot",
        title: "文翔館 · 七日町商店街",
        time: "午後〜傍晚",
        desc: "紅磚老縣廳、鐘樓、大階梯都很上鏡，之後再一路走到七日町商店街與御殿堰，找一間喜歡的咖啡或小店坐下。",
        tags: ["建築", "街道", "拍照"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bunshokan+Yamagata"
      },
      {
        type: "food",
        title: "晚餐：山形長屋酒場 或 其他郷土居酒屋",
        time: "晚上",
        desc: "一次把芋煮鍋、山形牛、小菜與地酒吃好吃滿。建議事先預約座位。",
        tags: ["晚餐", "郷土料理", "地酒", "必吃"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Yamagata+Nagaya+Sakaba"
      },
      {
        type: "transport",
        title: "山形站 → 藏王溫泉（回吉田屋）",
        time: "夜間",
        desc: "搭巴士或預約計程車回藏王溫泉，睡前簡單伸展與早睡，準備迎接後半段滑雪。",
        tags: ["交通", "返回"]
      }
    ]
  },
  {
    id: "day4",
    label: "Day 4",
    date: "1/12",
    title: "滑雪 Day 2 · 長線路線與樹冰景觀",
    note: "腿重新充電後，可以安排較長的路線與樹冰側拍。",
    items: [
      {
        type: "ski",
        title: "長線巡迴 · 串接不同區域",
        time: "上午",
        desc: "依照前兩天的熟悉程度，選擇安全但風景好的路線，慢慢串接滑過不同區域。",
        tags: ["滑雪", "路線探索"]
      },
      {
        type: "ropeway",
        title: "樹冰纜車第二回合（視天氣）",
        time: "午後",
        desc: "若前一次天候不佳，可利用這天再安排一次樹冰纜車。持優先票仍需預留排隊時間，避免壓縮下山與泡湯時段。",
        tags: ["樹冰", "纜車", "優先票"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Zao+Ropeway+Sanroku+Station"
      },
      {
        type: "spot",
        title: "三五郎小屋 · 中途休息",
        time: "滑雪中段",
        desc: "在山中的小屋喝杯熱飲、吃點輕食，整理一下今天的路線與雪況觀察。",
        tags: ["山屋", "中繼休息"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sangoro+Onsen+Lodge+Zao+Onsen"
      },
      {
        type: "onsen",
        title: "晚間溫泉 & 行程檢討",
        time: "夜間",
        desc: "回吉田屋泡湯、寫下今天覺得最順的轉向與最想再滑一次的那條線。",
        tags: ["溫泉", "紀錄"]
      }
    ]
  },
  {
    id: "day5",
    label: "Day 5",
    date: "1/13",
    title: "滑雪 Day 3 · 收官 · 回程前最後一滑",
    note: "選最喜歡的雪道多滑幾趟，收集最滿意的一組照片。",
    items: [
      {
        type: "ski",
        title: "最愛雪道回放日",
        time: "全天",
        desc: "挑選這幾天最喜歡、最有成就感又安全的路線反覆滑，專心享受雪感與速度感。",
        tags: ["滑雪", "收官"]
      },
      {
        type: "info",
        title: "雪板歸還 · 裝備檢查",
        time: "下午",
        desc: "確認板面、固定器與鞋子沒有遺失物品，歸還 Rossignol 租借的裝備。",
        tags: ["租借 / 裝備", "歸還"],
        mapsUrl: "https://maps.app.goo.gl/WZNJ9rCxh6GkUKrA8"
      },
      {
        type: "onsen",
        title: "最後一晚泡湯 & 整理行李",
        time: "夜間",
        desc: "打包行李、確認機票與包車時間，留一點時間好好告別這次的雪季。",
        tags: ["溫泉", "打包"]
      }
    ]
  }
];

// -----------------------------
// Day3 山形市區：美食 & 景點資料
// -----------------------------

const day3Food = [
  {
    name: "そば処 三津屋（エスパル山形店）",
    type: "午餐 · 蕎麥麵",
    rating: "3.47（Tabelog）",
    must: ["冷たい肉そば（冷肉蕎麥）"],
    note: "山形駅直結 S-PAL 1 樓的人氣蕎麥麵店，蕎麥香氣濃、湯頭偏甜，很適合作為山形市區散步前的第一餐。",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E6%B4%A5%E5%B1%8B%20%E3%82%A8%E3%82%B9%E3%83%91%E3%83%AB%E5%B1%B1%E5%BD%A2%E5%BA%97",
    tags: ["必吃美食", "山形蕎麥", "車站直結"]
  },
  {
    name: "山形牛ステーキ / 焼肉 店（候選）",
    type: "午 / 晚餐 · 山形牛",
    rating: "3.4x 左右（Tabelog，依實際選店）",
    must: ["山形牛ステーキ", "山形牛焼肉"],
    note: "若想把『山形牛』安排在山形市區，可挑車站周邊評價約 3.4〜3.5 的山形牛專門店，作為這趟旅程的肉肉主場。",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Yamagata+beef+restaurant+near+Yamagata+Station",
    tags: ["山形牛", "主菜", "肉食派"]
  }
];

const day3Cafe = [
  {
    name: "蔵オビハチ（蔵オビハチ / クラ オビハチ）",
    type: "古民家咖啡",
    rating: "3.2x（Tabelog）",
    must: ["本日のランチ", "咖啡或甜點"],
    note: "由老倉庫改裝的木質系咖啡店，有一點昭和感，適合帶著筆電或手帳，在這裡慢慢寫這趟旅程的滑雪心得。",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=%E8%94%B5%E3%82%AA%E3%83%93%E3%83%8F%E3%83%81",
    tags: ["老屋咖啡", "寫日記", "慢活"]
  },
  {
    name: "Brasserie & Bar La Gare（Hotel Metropolitan 山形）",
    type: "車站直結咖啡 / 西餐",
    rating: "3.3x（Tabelog）",
    must: ["甜點套餐", "咖啡 / 紅茶"],
    note: "位在山形站直結飯店一樓，適合作為抵達市區後的暖身咖啡館，或回藏王前最後一個悠閒角落。",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brasserie+La+Gare+Yamagata",
    tags: ["飯店咖啡", "車站直結"]
  }
];

const day3Dinner = [
  {
    name: "山形長屋酒場",
    type: "郷土料理 × 居酒屋",
    rating: "3.4x（Tabelog）",
    must: ["芋煮鍋", "山形牛料理", "地酒"],
    note: "距山形站步行約 3 分鐘，一次把山形縣的芋煮鍋、在地小菜與地酒全部排開，店內還有花笠舞表演，是很適合當這趟旅程中場慶功的地方。",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Yamagata+Nagaya+Sakaba",
    tags: ["必吃美食", "地酒", "晚餐重點"]
  },
  {
    name: "其他郷土居酒屋（備選）",
    type: "郷土料理 · 安靜聊天型",
    rating: "3.3〜3.5（Tabelog）",
    must: ["山形牛", "當地小菜", "清酒"],
    note: "若當晚比較想安靜聊天，可選十日町或香澄町一帶評價不錯的郷土居酒屋，氣氛通常較長屋酒場安靜。",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Yamagata+izakaya+local+food",
    tags: ["郷土料理", "聊天氛圍"]
  }
];

const day3Spots = [
  {
    name: "霞城公園（山形城跡）",
    type: "公園 · 城跡",
    must: ["護城河步道", "石牆與城門"],
    note: "昔日山形城的遺跡改建而成的公園，冬天城牆與護城河邊的雪景很漂亮，是城市散步的經典路線。",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kajo+Park+Yamagata",
    tags: ["散步景點", "歷史", "拍照"]
  },
  {
    name: "文翔館（山形縣舊廳舍及議事堂）",
    type: "紅磚歷史建築",
    must: ["大階梯", "鐘樓", "免費入館"],
    note: "英國近代復興風磚建築，內部免費參觀，紅磚外牆與大階梯都非常適合拍照。",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bunshokan+Yamagata",
    tags: ["建築迷", "免費入館", "IG 景點"]
  },
  {
    name: "七日町商店街 & 御殿堰",
    type: "商店街 · 小店散步",
    must: ["御殿堰水路", "小店巡禮"],
    note: "結合老水路與新商店的區域，有雜貨、咖啡與小餐廳，很適合慢慢晃、慢慢選一間看得順眼的店坐下。",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Nanokamachi+Yamagata",
    tags: ["巷弄風景", "咖啡散步"]
  },
  {
    name: "S-PAL 山形 & 伴手禮樓層",
    type: "車站百貨 · 伴手禮",
    must: ["櫻桃甜點", "だだちゃ豆點心"],
    note: "山形站直結商場，一樓與樓上有許多在地土產與甜點，很適合在回藏王前一次把伴手禮掃完。",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=S-PAL+Yamagata",
    tags: ["必買伴手禮", "車站直結"]
  }
];

// -----------------------------
// 雪況 & 天氣（Open-Meteo）
// 中腹 1220m 概略預報
// -----------------------------

async function loadWeatherAndSnow() {
  const lat = 38.1801; // Zao Onsen 附近
  const lon = 140.3279;
  const elevation = 1220; // 中腹概略高度

  const banner = document.getElementById("today-banner");
  const bannerTempSpan = banner.querySelector(".temp");
  const bannerSnowSpan = document.getElementById("today-banner-snow");
  const bannerNoteSpan = document.getElementById("today-banner-note");
  const snowBox = document.getElementById("snow-forecast-content");

  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${lat}&longitude=${lon}` +
    `&elevation=${elevation}` +
    `&daily=temperature_2m_max,temperature_2m_min,snowfall_sum,wind_speed_10m_max` +
    `&timezone=auto`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data.daily || !data.daily.time || data.daily.time.length === 0) {
      throw new Error("no daily weather");
    }

    const d = data.daily;

    const todayMax = d.temperature_2m_max[0];
    const todayMin = d.temperature_2m_min[0];
    const todaySnow = d.snowfall_sum[0];
    const todayWind = d.wind_speed_10m_max[0];

    bannerTempSpan.textContent = `${Math.round(todayMax)}° / ${Math.round(
      todayMin
    )}°C`;
    bannerSnowSpan.textContent = `今日預估新雪：約 ${todaySnow.toFixed(
      1
    )} cm`;
    bannerNoteSpan.textContent = `最大風速：約 ${Math.round(
      todayWind
    )} km/h`;

    const daysToShow = Math.min(3, d.time.length);
    let html = `<div class="snow-row"><strong>中腹 1220m · 3 日概略預報（Open-Meteo）</strong></div>`;

    for (let i = 0; i < daysToShow; i++) {
      const dateStr = d.time[i];
      const dateObj = new Date(dateStr + "T00:00:00");
      const label =
        i === 0 ? "今天" : i === 1 ? "明天" : "後天";
      const maxT = d.temperature_2m_max[i];
      const minT = d.temperature_2m_min[i];
      const snow = d.snowfall_sum[i];
      const wind = d.wind_speed_10m_max[i];

      html += `
        <div class="snow-row" style="margin-left:10px;">
          ${label}（${dateObj.getMonth() + 1}/${dateObj.getDate()}）：
          新雪 ${snow.toFixed(1)} cm ｜ ${Math.round(
        maxT
      )}° / ${Math.round(minT)}°C ｜ 風 ${Math.round(wind)} km/h
        </div>
      `;
    }

    html += `
      <div style="margin-top:6px; font-size:11px; color:#9ca3af;">
        ※ 僅為中腹概略預報，實際滑雪前請再打開上方連結，查看 Snow-Forecast 的
        山麓 / 中腹 / 山頂 三高度圖表與 freezing level。
      </div>
    `;

    snowBox.innerHTML = html;
  } catch (e) {
    console.error(e);
    bannerTempSpan.textContent = "天氣讀取失敗";
    bannerSnowSpan.textContent = "新雪：-- cm";
    bannerNoteSpan.textContent = "請確認網路連線後重試。";
    snowBox.textContent = "目前無法取得概略預報，稍後再試一次。";
  }
}

// -----------------------------
// 行程卡片渲染
// -----------------------------

function createTag(label, kind) {
  const span = document.createElement("span");
  span.className = "tag" + (kind ? " " + kind : "");
  span.textContent = label;
  return span;
}

function renderSchedule() {
  const container = document.getElementById("schedule-container");
  container.innerHTML = "";

  itinerary.forEach((day) => {
    const dayCard = document.createElement("div");
    dayCard.className = "card";

    const header = document.createElement("div");
    header.className = "card-header";

    const left = document.createElement("div");
    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = `${day.label}｜${day.title}`;
    const subtitle = document.createElement("div");
    subtitle.className = "card-subtitle";
    subtitle.textContent = `${day.date} · ${day.note || ""}`;
    left.appendChild(title);
    left.appendChild(subtitle);

    header.appendChild(left);

    const right = document.createElement("div");
    const pill = document.createElement("div");
    pill.className = "pill";
    pill.innerHTML = `<strong>${day.items.length}</strong> 個行程卡片`;
    right.appendChild(pill);
    header.appendChild(right);

    dayCard.appendChild(header);

    day.items.forEach((item) => {
      const sub = document.createElement("div");
      sub.className = "card";
      sub.style.marginTop = "8px";
      sub.style.background = "rgba(15,23,42,0.9)";
      sub.style.boxShadow = "none";

      const sHeader = document.createElement("div");
      sHeader.className = "card-header";

      const sLeft = document.createElement("div");
      const sTitle = document.createElement("div");
      sTitle.className = "card-title";
      sTitle.textContent = item.title;
      const sSub = document.createElement("div");
      sSub.className = "card-subtitle";
      sSub.textContent = item.time || "";
      sLeft.appendChild(sTitle);
      sLeft.appendChild(sSub);
      sHeader.appendChild(sLeft);

      const sRight = document.createElement("div");
      if (item.type) {
        const t = document.createElement("div");
        t.className = "pill";
        t.textContent = item.type;
        sRight.appendChild(t);
      }
      sHeader.appendChild(sRight);

      sub.appendChild(sHeader);

      const body = document.createElement("div");
      body.className = "card-body";
      body.textContent = item.desc || "";
      sub.appendChild(body);

      if (item.tags && item.tags.length > 0) {
        const tagsWrap = document.createElement("div");
        tagsWrap.className = "card-tags";

        item.tags.forEach((t) => {
          let kind = "";
          if (t.includes("必吃")) kind = "must";
          else if (t.includes("必買")) kind = "buy";
          else if (t.includes("優先票") || t.includes("雪票")) kind = "book";
          else kind = "info";
          tagsWrap.appendChild(createTag(t, kind));
        });

        sub.appendChild(tagsWrap);
      }

      const footer = document.createElement("div");
      footer.className = "card-footer";

      if (item.mapsUrl) {
        const navBtn = document.createElement("a");
        navBtn.href = item.mapsUrl;
        navBtn.target = "_blank";
        navBtn.rel = "noopener";
        navBtn.className = "btn btn-primary";
        navBtn.innerHTML = `<span class="icon">📍</span> 導航`;
        footer.appendChild(navBtn);
      }

      const infoPill = document.createElement("span");
      infoPill.className = "pill";
      infoPill.textContent = "可以依當天體力與雪況彈性調整時間。";
      footer.appendChild(infoPill);

      sub.appendChild(footer);

      dayCard.appendChild(sub);
    });

    container.appendChild(dayCard);
  });
}

// -----------------------------
// Day3 山形市區：渲染迷你卡片
// -----------------------------

function renderMiniList(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "mini-card";

    const header = document.createElement("div");
    header.className = "mini-card-header";

    const title = document.createElement("div");
    title.className = "mini-card-title";
    title.textContent = item.name;

    const rating = document.createElement("div");
    rating.className = "mini-card-rating";
    rating.textContent = item.rating || "";

    header.appendChild(title);
    header.appendChild(rating);
    card.appendChild(header);

    const body = document.createElement("div");
    body.className = "mini-card-body";
    body.textContent = `${item.type}｜${item.note}`;
    card.appendChild(body);

    if (item.must && item.must.length > 0) {
      const tagsWrap = document.createElement("div");
      tagsWrap.className = "mini-card-tags";

      item.must.forEach((m) => {
        const tag = createTag(`必點：${m}`, "must");
        tagsWrap.appendChild(tag);
      });

      if (item.tags && item.tags.length > 0) {
        item.tags.forEach((t) => {
          const tag = createTag(t, "info");
          tagsWrap.appendChild(tag);
        });
      }

      card.appendChild(tagsWrap);
    }

    const footer = document.createElement("div");
    footer.className = "mini-card-footer";

    if (item.mapsUrl) {
      const btn = document.createElement("a");
      btn.href = item.mapsUrl;
      btn.target = "_blank";
      btn.rel = "noopener";
      btn.className = "btn";
      btn.innerHTML = `<span class="icon">📍</span> 導航`;
      footer.appendChild(btn);
    }

    card.appendChild(footer);

    container.appendChild(card);
  });
}

function renderDay3CityGuide() {
  renderMiniList(day3Food, "day3-food-list");
  renderMiniList(day3Cafe, "day3-cafe-list");
  renderMiniList(day3Dinner, "day3-dinner-list");
  renderMiniList(day3Spots, "day3-spot-list");
}

// -----------------------------
// 記帳 & 分帳功能（本機儲存）
// -----------------------------

const BUDGET_STORAGE_KEY = "zao_trip_budget_v1";
const MEMBER_STORAGE_KEY = "zao_trip_members_v1";

function loadBudgetFromStorage() {
  try {
    const raw = localStorage.getItem(BUDGET_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function saveBudgetToStorage(items) {
  try {
    localStorage.setItem(BUDGET_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

function loadMembersFromStorage() {
  try {
    const raw = localStorage.getItem(MEMBER_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function saveMembersToStorage(members) {
  try {
    localStorage.setItem(MEMBER_STORAGE_KEY, JSON.stringify(members));
  } catch {
    // ignore
  }
}

let members = loadMembersFromStorage();
if (!members || members.length === 0) {
  members = ["我", "旅伴"];
}

let budgetItems = loadBudgetFromStorage();

function renderMembersUI() {
  const current = document.getElementById("member-current");
  const payerSelect = document.getElementById("budget-payer");
  const sharesContainerInner = document.getElementById(
    "budget-shares-container-inner"
  );

  const namesStr = members.join("、");
  if (current) {
    current.textContent =
      members.length > 0
        ? `目前成員：${namesStr}`
        : "目前成員：尚未設定（預設會使用「我, 旅伴」）";
  }

  if (payerSelect) {
    payerSelect.innerHTML = "";
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "付款人（會依照上方成員更新）";
    payerSelect.appendChild(opt);

    members.forEach((m) => {
      const o = document.createElement("option");
      o.value = m;
      o.textContent = m;
      payerSelect.appendChild(o);
    });
  }

  if (sharesContainerInner) {
    sharesContainerInner.innerHTML = "";
    members.forEach((m) => {
      const label = document.createElement("label");
      label.className = "share-label";

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = m;
      cb.checked = true;
      cb.className = "share-checkbox";

      label.appendChild(cb);
      label.appendChild(document.createTextNode(m));
      sharesContainerInner.appendChild(label);
    });
  }
}

function renderBudget() {
  const list = document.getElementById("budget-list");
  const totalEl = document.getElementById("budget-total");
  list.innerHTML = "";

  let total = 0;

  // 初始化成員統計
  const memberTotals = {};
  members.forEach((m) => {
    memberTotals[m] = { paid: 0, shouldPay: 0 };
  });

  budgetItems.forEach((item, idx) => {
    const li = document.createElement("li");
    li.className = "budget-item";

    const main = document.createElement("div");
    main.className = "budget-item-main";

    const title = document.createElement("div");
    title.className = "budget-item-title";
    title.textContent = item.name || "(未命名)";

    const meta1 = document.createElement("div");
    meta1.className = "budget-item-meta";

    const amountNum =
      typeof item.amount === "number"
        ? item.amount
        : parseFloat(item.amount) || 0;

    meta1.textContent = `${item.category || "未分類"} ｜ ${amountNum.toLocaleString()}`;

    // 付款人 / 分帳對象
    const meta2 = document.createElement("div");
    meta2.className = "budget-item-meta";

    const shares =
      Array.isArray(item.shares) && item.shares.length > 0
        ? item.shares
        : members.slice(); // 沒寫 shares 時，預設全員

    const perShare =
      shares.length > 0 ? amountNum / shares.length : amountNum;

    let detailText = "";
    if (item.payer) {
      detailText += `付款人：${item.payer}｜`;
    } else {
      detailText += "付款人：未指定｜";
    }
    detailText += `分帳：${shares.join("、")}（每人約 ${Math.round(
      perShare
    ).toLocaleString()}）`;
    meta2.textContent = detailText;

    main.appendChild(title);
    main.appendChild(meta1);
    main.appendChild(meta2);

    const button = document.createElement("button");
    button.className = "btn btn-ghost";
    button.type = "button";
    button.textContent = "刪除";
    button.onclick = () => {
      budgetItems.splice(idx, 1);
      saveBudgetToStorage(budgetItems);
      renderBudget();
    };

    li.appendChild(main);
    li.appendChild(button);
    list.appendChild(li);

    total += amountNum;

    // 更新成員統計
    if (item.payer && memberTotals[item.payer]) {
      memberTotals[item.payer].paid += amountNum;
    }
    shares.forEach((m) => {
      if (memberTotals[m]) {
        memberTotals[m].shouldPay += perShare;
      }
    });
  });

  // 組裝 summary
  let summaryHtml = "";
  members.forEach((m) => {
    const t = memberTotals[m] || { paid: 0, shouldPay: 0 };
    const paid = Math.round(t.paid);
    const shouldPay = Math.round(t.shouldPay);
    const diff = paid - shouldPay;
    let status = "";
    if (Math.abs(diff) < 1) {
      status = "已平帳";
    } else if (diff > 0) {
      status = `應收 約 ${diff.toLocaleString()}`;
    } else {
      status = `應付 約 ${Math.abs(diff).toLocaleString()}`;
    }
    summaryHtml += `<div class="budget-summary-line">${m}：實際支付 ${paid.toLocaleString()} ｜ 應分攤 ${shouldPay.toLocaleString()} ｜ ${status}</div>`;
  });

  totalEl.innerHTML = `小計：<strong>${total.toLocaleString()}</strong>${summaryHtml}`;
}

// -----------------------------
// TAB 切換
// -----------------------------

function setupTabs() {
  const buttons = document.querySelectorAll("nav.tab-nav button");
  const sections = document.querySelectorAll("section[data-tab-content]");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      sections.forEach((sec) => {
        if (sec.getAttribute("data-tab-content") === tab) {
          sec.classList.add("active");
        } else {
          sec.classList.remove("active");
        }
      });
    });
  });
}

// -----------------------------
// 初始化
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  renderSchedule();
  renderDay3CityGuide();
  renderMembersUI();
  renderBudget();
  loadWeatherAndSnow();

  const memberSaveBtn = document.getElementById("member-save-btn");
  if (memberSaveBtn) {
    memberSaveBtn.addEventListener("click", () => {
      const input = document.getElementById("member-names");
      const raw = (input.value || "").trim();
      const parts = raw
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      if (parts.length === 0) {
        alert("請至少輸入一個成員名稱，例如：我, 旅伴");
        return;
      }
      members = parts;
      saveMembersToStorage(members);
      renderMembersUI();
      renderBudget(); // 成員改變，也重算一次 summary
    });
  }

  const form = document.getElementById("budget-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("budget-name");
    const amountInput = document.getElementById("budget-amount");
    const categorySelect = document.getElementById("budget-category");
    const payerSelect = document.getElementById("budget-payer");

    const name = nameInput.value.trim();
    const amountRaw = amountInput.value.trim();
    const category = categorySelect.value;
    const payer = payerSelect.value || "";

    if (!amountRaw) {
      alert("請至少輸入金額。");
      return;
    }

    const amountNum = parseFloat(amountRaw);
    if (isNaN(amountNum)) {
      alert("金額格式不正確。");
      return;
    }

    const shareCheckboxes = document.querySelectorAll(".share-checkbox");
    const shares = [];
    shareCheckboxes.forEach((cb) => {
      if (cb.checked) {
        shares.push(cb.value);
      }
    });

    if (shares.length === 0 && members.length > 0) {
      alert("請至少勾選一位分帳對象。");
      return;
    }

    budgetItems.push({
      name,
      amount: amountNum,
      category,
      payer,
      shares
    });

    saveBudgetToStorage(budgetItems);
    renderBudget();

    nameInput.value = "";
    amountInput.value = "";
  });
});