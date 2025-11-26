// =========================
// 1. 行程資料：Zao 2026
// =========================

const itineraryData = [
  {
    id: "d0",
    date: "Day 0 · 2026/01/08（四）",
    title: "台北 → 仙台 · 抵達藏王溫泉吉田屋",
    baseLocation: "藏王溫泉",
    weatherLocation: "Sendai Airport, Japan",
    segments: [
      {
        type: "交通",
        title: "BR118 台北桃園 TPE → 仙台 SDJ",
        time: "10:15 → 14:25",
        place: "台北桃園機場 TPE / 仙台機場 SDJ",
        description:
          "早上搭乘 EVA Air BR118 直飛仙台。建議起飛前再確認登機門與行李是否直掛回程。",
        tags: [
          { kind: "tip", label: "出發前再次檢查：護照、保險、雪具行李" }
        ]
      },
      {
        type: "購物",
        title: "仙台機場完美行櫃檯 · 領取免稅品",
        time: "抵達後",
        place: "仙台機場 完美行櫃檯",
        description:
          "入境後前往完美行櫃檯，領取事先訂好的免稅品，並再次確認滑雪纜車票資訊。",
        tags: [
          { kind: "mustbuy", label: "必領：完美行免稅品＆雪票訂單確認" },
          { kind: "booking", label: "對照完美行訂單與護照姓名" }
        ]
      },
      {
        type: "交通",
        title: "包車接送：仙台機場 → 藏王溫泉 吉田屋",
        time: "下午",
        place: "仙台機場 → 吉田屋旅館 Yoshidaya Ryokan",
        description:
          "已預約機場包車直達吉田屋旅館，省去搬雪具奔波。上車前確認行李與雪具全部都在車上。",
        tags: [{ kind: "tip", label: "上車前快速點一次行李件數" }]
      },
      {
        type: "景點",
        title: "傍晚入住吉田屋 · 溫泉街散步",
        time: "傍晚～晚上",
        place: "吉田屋旅館 / 藏王溫泉街",
        description:
          "Check-in 後先確認宅配寄來的行李是否都完好收件。晚餐前可以在溫泉街走走，試試足湯與小店。",
        tags: [
          { kind: "mustbuy", label: "必買伴手禮：溫泉饅頭、溫泉蛋" },
          { kind: "tip", label: "晚餐後泡旅館溫泉，早點睡調時差" }
        ]
      }
    ]
  },
  {
    id: "d1",
    date: "Day 1 · 2026/01/09（五）",
    title: "滑雪 Day 1 · 租雪具 & 認識雪場",
    baseLocation: "藏王溫泉滑雪場",
    weatherLocation: "Zao Onsen Ski Resort, Yamagata, Japan",
    segments: [
      {
        type: "租借",
        title: "Rossignol Rental Station 租借雪具",
        time: "早上",
        place:
          "ROSSIGNOL RENTAL STATION, 〒990-2301 山形県山形市蔵王温泉川前940（中央纜車站口旁）",
        description:
          "第一天先到 Rossignol 租借站租雪板／雪鞋／雪杖等裝備，建議提早到場比較不排隊。確認鞋子尺寸、固定器角度，試穿好再出門。",
        tags: [
          { kind: "tip", label: "確認租借天數與歸還時間，拍照存租借單" }
        ]
      },
      {
        type: "滑雪",
        title: "完美行滑雪纜車票 · 首日啟用",
        time: "上午",
        place: "藏王溫泉滑雪場 山麓纜車站",
        description:
          "使用完美行預訂的滑雪纜車票兌換實體票券或 IC 卡，第一天以熟悉雪場動線為主。",
        tags: [
          { kind: "booking", label: "完美行滑雪纜車票（4 日券已購）" },
          { kind: "tip", label: "先確認各纜車與雪道收班時間" }
        ]
      },
      {
        type: "滑雪",
        title: "練習區 & 中級雪道暖身",
        time: "白天",
        place: "藏王溫泉滑雪場 各區",
        description:
          "先從較寬、坡度溫和的雪道暖身，找出順手的路線與腳感，記錄喜歡的雪道編號。",
        tags: [{ kind: "tip", label: "用 App 記錄路線與高度差，當作旅程數據" }]
      },
      {
        type: "餐廳",
        title: "山上餐廳午餐：簡單補給",
        time: "中午",
        place: "山上餐廳（例：SANGORO 等）",
        description:
          "第一天午餐選簡單的咖哩飯、漢堡排或烏龍麵，重點是暖和跟補充熱量。",
        tags: [{ kind: "food", label: "必點：熱咖哩飯 / 烏龍麵" }]
      },
      {
        type: "景點",
        title: "回吉田屋泡湯 · 早睡養腳",
        time: "晚上",
        place: "吉田屋旅館 Yoshidaya Ryokan",
        description:
          "滑完第一天讓身體先適應雪場節奏，泡露天溫泉放鬆腿跟下背，早睡讓隔天續航力更好。",
        tags: [{ kind: "tip", label: "泡湯前後記得補水，避免高山脫水" }]
      }
    ]
  },
  {
    id: "d2",
    date: "Day 2 · 2026/01/10（六）",
    title: "滑雪 Day 2 · 樹冰區探路",
    baseLocation: "藏王樹冰原",
    weatherLocation: "Zao Onsen Ski Resort, Yamagata, Japan",
    segments: [
      {
        type: "景點",
        title: "搭纜車上樹冰原 · 看雪怪",
        time: "上午",
        place: "藏王纜車 山麓站 → 山頂站",
        description:
          "利用完美行纜車票一路搭上樹冰原，觀賞被風雪雕刻成雪怪的樹冰。如有夜樹冰行程，可順便勘路。",
        tags: [{ kind: "tip", label: "山頂風強，記得護目鏡、面罩與頸套" }]
      },
      {
        type: "滑雪",
        title: "長距離雪道巡禮",
        time: "白天",
        place: "樹冰原連通雪道",
        description:
          "挑視野好的長距離雪道，邊滑邊看風景。遇到白茫或能見度差時，降低速度、安全為優先。",
        tags: [{ kind: "tip", label: "拍照前確認後方是否有人滑過來" }]
      },
      {
        type: "餐廳",
        title: "山形芋煮鍋 · 暖胃午餐",
        time: "中午",
        place: "山上或山麓餐廳",
        description:
          "試試山形名物芋煮鍋，以芋頭、牛肉與蔬菜慢燉，滑雪日吃這個非常療癒。",
        tags: [
          { kind: "food", label: "必吃：山形芋煮鍋" },
          { kind: "food", label: "必點：芋煮鍋 + 白飯" }
        ]
      },
      {
        type: "景點",
        title: "傍晚小逛溫泉街 · 補貨零食飲料",
        time: "晚上",
        place: "藏王溫泉街",
        description:
          "補一些隔天滑雪可以帶的餅乾、巧克力、運動飲料，順便再踩幾個足湯點。",
        tags: [{ kind: "mustbuy", label: "必買：在地零食 + 熱飲" }]
      }
    ]
  },
  {
    id: "d3",
    date: "Day 3 · 2026/01/11（日）",
    title: "休息日 · 山形市區慢遊",
    baseLocation: "山形市區",
    weatherLocation: "Yamagata, Japan",
    segments: [
      {
        type: "交通",
        title: "藏王溫泉 → 山形市區",
        time: "上午",
        place: "藏王溫泉巴士總站 → 山形駅周邊",
        description:
          "滑兩天後讓身體休息，從藏王溫泉搭巴士或包車下山前往山形市區，車程不長，讓腿和核心暫時放假。",
        tags: [{ kind: "tip", label: "提前查好回程巴士末班車時間" }]
      },
      {
        type: "景點",
        title: "山形市區散步 · 咖啡店 / 書店",
        time: "白天",
        place: "山形駅周邊商圈",
        description:
          "在山形駅附近找一間喜歡的咖啡店坐著放空，整理這兩天的滑雪照片，或逛逛書店、文具店，當成給身體的緩衝日。",
        tags: [{ kind: "mustbuy", label: "必買：在地點心、咖啡豆、小文具" }]
      },
      {
        type: "餐廳",
        title: "午晚餐：山形在地料理",
        time: "午餐 / 晚餐",
        place: "山形市區居酒屋 / 在地食堂",
        description:
          "可以找家使用山形牛或當地蔬菜的食堂、居酒屋，好好吃一餐非雪場的正常食物，補充鐵質和蔬菜。",
        tags: [
          { kind: "food", label: "必吃：山形牛料理 / 在地居酒屋小菜" }
        ]
      },
      {
        type: "交通",
        title: "山形市區 → 藏王溫泉 · 回吉田屋",
        time: "傍晚～晚上",
        place: "山形駅 → 藏王溫泉 吉田屋旅館",
        description:
          "傍晚搭巴士或包車回到藏王溫泉，泡個溫泉、做點輕柔伸展，讓身體把疲勞排掉，準備迎接後面兩天的滑雪。",
        tags: [
          { kind: "tip", label: "回程路上留意路況與積雪，提早出發比較安心" }
        ]
      }
    ]
  },
  {
    id: "d4",
    date: "Day 4 · 2026/01/12（一）",
    title: "滑雪 Day 3 · 技巧練習日",
    baseLocation: "藏王溫泉滑雪場",
    weatherLocation: "Zao Onsen Ski Resort, Yamagata, Japan",
    segments: [
      {
        type: "滑雪",
        title: "指定雪道技巧練習",
        time: "白天",
        place: "藏王溫泉滑雪場 中級雪道",
        description:
          "挑 1～2 條喜歡的雪道專心練習轉彎與速度控制，也可以拍幾段影片回看姿勢。",
        tags: [
          { kind: "tip", label: "設定今天的練習重點：例如前腳壓板 / 側滑控制" }
        ]
      },
      {
        type: "餐廳",
        title: "山上快餐 · 不花太多時間",
        time: "中午",
        place: "山上餐廳",
        description:
          "以飯、麵等主食為主，吃飽但不要過撐，下午繼續滑。",
        tags: [{ kind: "food", label: "必點：快速上桌的定食 / 丼飯" }]
      },
      {
        type: "景點",
        title: "若有安排夜樹冰 · 夜間纜車",
        time: "晚上（選配）",
        place: "樹冰夜間觀賞纜車",
        description:
          "如果有透過完美行或旅館安排夜樹冰行程，晚上可以搭纜車上山，在燈光下看一整片雪怪。",
        tags: [
          {
            kind: "booking",
            label: "重要預約：樹冰夜間觀賞行程（需提前預約）"
          }
        ]
      }
    ]
  },
  {
    id: "d5",
    date: "Day 5 · 2026/01/13（二）",
    title: "滑雪 Day 4 · Last Run & 打包日",
    baseLocation: "藏王溫泉滑雪場",
    weatherLocation: "Zao Onsen Ski Resort, Yamagata, Japan",
    segments: [
      {
        type: "滑雪",
        title: "早晨 Last Run 儀式感",
        time: "上午",
        place: "最喜歡的雪道",
        description:
          "選一條最喜歡、最有紀念感的雪道，來一趟儀式感的 Last Run，把這次藏王的滑雪記在肌肉記憶裡。",
        tags: [{ kind: "tip", label: "請人幫忙拍一小段影片留念" }]
      },
      {
        type: "滑雪",
        title: "中午前收板 · 還板 / 整理裝備",
        time: "中午前後",
        place: "租板店 / 吉田屋",
        description:
          "確認租借裝備是否完整歸還，自己的板則檢查是否有受傷、固定器是否鎖好。回房整理雪衣、手套等裝備，準備打包。",
        tags: [
          { kind: "tip", label: "將隔天上飛機會用到的物品另外打包在手提" }
        ]
      },
      {
        type: "餐廳",
        title: "最後一晚溫泉旅館晚餐",
        time: "晚上",
        place: "吉田屋旅館 Yoshidaya Ryokan",
        description:
          "好好享受這次旅程最後一晚的會席料理與溫泉，寫個簡短小結或感謝日記，當作這趟滑雪的句點。",
        tags: [{ kind: "mustbuy", label: "再確認伴手禮是否都買齊" }]
      }
    ]
  },
  {
    id: "d6",
    date: "Day 6 · 2026/01/14（三）",
    title: "退房 · 仙台機場 · BR117 回台北",
    baseLocation: "藏王溫泉 → 仙台機場",
    weatherLocation: "Sendai Airport, Japan",
    segments: [
      {
        type: "交通",
        title: "退房＆包車：吉田屋 → 仙台機場",
        time: "早上～下午",
        place: "吉田屋旅館 → 仙台機場 SDJ",
        description:
          "確認房間沒有遺漏物品，包含充電器、護照、雪具。搭乘預約好的包車前往仙台機場，預留足夠時間辦理退稅與托運。",
        tags: [
          { kind: "tip", label: "再檢查一次完美行免稅品與伴手禮是否都在" }
        ]
      },
      {
        type: "交通",
        title: "BR117 仙台 SDJ → 台北桃園 TPE",
        time: "16:15 → 19:30",
        place: "仙台機場 SDJ / 台北桃園機場 TPE",
        description:
          "搭乘 EVA Air BR117 直飛回台北。回程途中整理照片，寫下一兩個這趟旅程最有記憶點的瞬間。",
        tags: [{ kind: "tip", label: "抵達後注意雪板托運輸送帶位置" }]
      }
    ]
  }
];

// 航班資訊
const flightInfo = {
  depart: {
    from: "台北桃園 TPE",
    to: "仙台 SDJ",
    code: "BR 118（EVA AIR）",
    time: "2026/01/08（四） 10:15 → 14:25 · 直飛"
  },
  return: {
    from: "仙台 SDJ",
    to: "台北桃園 TPE",
    code: "BR 117（EVA AIR）",
    time: "2026/01/14（三） 16:15 → 19:30 · 直飛"
  },
  memo:
    "已預約機場 ⇄ 藏王溫泉吉田屋包車接送。抵達仙台後記得到完美行櫃檯領取免稅品並確認滑雪纜車票。建議將完美行訂單截圖存到手機與雲端。"
};

// 住宿資訊
const hotelInfo = {
  name: "吉田屋旅館 Yoshidaya Ryokan",
  nights: "6 晚（2026/01/08 入住 ～ 2026/01/14 退房）",
  address:
    "〒990-2301 山形県山形市蔵王温泉13番地\n電話：023-694-9223",
  checkin: "2026/01/08（四） 15:00 之後",
  checkout: "2026/01/14（三） 10:00 前",
  bookingId:
    "行李宅配收件資訊：\n收件日期：1/8\n收件人：黃雅琳（Ya-Lin Huang）\n旅館：Yoshidaya Ryokan, Zao Onsen\n地址：〒990-2301 山形県山形市蔵王温泉13番地\n電話：023-694-9223"
};

// 纜車四日券（完美行購入）
const liftPassInfo = {
  name: "藏王溫泉滑雪場 4 日纜車雪票",
  provider: "完美行平台（事先線上購入）",
  pickupPlace: "蔵王ロープウェイ 山麓駅（Zao Ropeway Sanroku Station）",
  notes:
    "第一個滑雪日（1/9）上午於山麓站憑護照 + 完美行 QR Code 兌換票券或 IC 卡，四日票可依行程彈性安排：滑 2 休 1 滑 2。票券通常不可改期／退票，請務必確認使用日期。"
};

// 雪具租借 Rossignol Rental Station
const rentalInfo = {
  name: "ROSSIGNOL RENTAL STATION 藏王",
  address: "日本 〒990-2301 山形県山形市蔵王温泉川前940（中央纜車站口旁）",
  tel: "+81-23-694-9168",
  placeForNav:
    "ROSSIGNOL RENTAL STATION, 〒990-2301 山形県山形市蔵王温泉川前940",
  notes:
    "全館提供 Rossignol 全套滑雪／單板裝備，店鋪就在藏王溫泉滑雪場中央纜車站口旁，租完馬上上雪道。旺季建議提早到場以免排隊，確認租借天數與歸還時間。"
};

// 藏王溫泉資訊（溫泉街 + 公共浴場）
const onsenInfo = {
  areaName: "藏王溫泉（Zao Onsen）",
  address: "〒990-2301 山形県山形市蔵王温泉一帶",
  highlights: [
    "強酸性硫磺泉，對肌肉疲勞、關節痠痛與皮膚非常友善。",
    "三大共同浴場：上湯（Kamiyu）、川原湯（Kawarayu）、下湯（Shimoyu），費用便宜，多為簡易設備。",
    "另有大露天風呂與多家日歸溫泉設施，可和旅館內風呂交替泡。"
  ],
  tips:
    "公共浴場多為無提供洗髮精、沐浴乳的『純泡湯』形式，建議在旅館先洗淨身體再去泡。泡完湯的衣物會殘留硫磺味，適合穿易清洗或不怕味道的衣物外出。"
};

// 三五郎小屋（Forest Inn Sangoro / さんごろう山小屋）
const hutInfo = {
  name: "Forest Inn SANGORO（三五郎小屋）",
  address: "藏王溫泉 中央高原 三五郎雪道內",
  placeForNav: "Forest Inn SANGORO, Zao Onsen, Yamagata",
  tel: "+81-23-694-9330",
  notes:
    "位在中央高原三五郎雪道上的山小屋與住宿設施，天氣好時露台景色極佳。中午可在此用餐，常見餐點有咖哩飯、焗飯等，座位熱門，建議避開正午人潮。"
};

// 包車資訊（機場 ⇄ 藏王溫泉）
const charterInfo = {
  departAirline: "長榮航空 BR118 桃園 → 仙台（10:15 → 14:25）",
  returnAirline: "長榮航空 BR117 仙台 → 桃園（16:15 → 19:30）",
  day1: {
    date: "1/8",
    note:
      "抵達仙台機場後，由預約包車公司接駁前往藏王溫泉各旅館（含吉田屋）。飛機抵達後至出關＋取行李通常需預留 60–90 分鐘。包車合約一般以航班抵達時間為基準，有超時費用條款，盡量不要在機場逗留太久。"
  },
  day9: {
    date: "1/14",
    note:
      "早上從各旅館開始逐點接人，約 14:00 左右由吉田屋出發前往仙台機場，預計於 16:00 左右抵達辦理 BR117 劃位與托運。"
  },
  stops: [
    {
      name: "美好環界 藏王溫泉營業所",
      address: "〒990-2301 山形県山形市蔵王温泉字上ノ代758番7",
      tel: "0236-76-8190"
    },
    {
      name: "高宮保険酒店",
      address: "〒990-2301 山形県山形市蔵王温泉上ノ代94-1",
      tel: "+81-23-610-9602"
    },
    {
      name: "吉田屋旅館 Yoshidaya Ryokan",
      address: "〒990-2301 山形県山形市蔵王温泉13",
      tel: "+81-23-694-9223"
    }
  ]
};

// 緊急聯絡
const emergencyInfo = [
  {
    label: "日本緊急電話",
    value: "110（警察） / 119（消防・救護）"
  },
  {
    label: "台灣駐日代表處（東京）",
    value: "+81-3-3280-7811"
  },
  {
    label: "吉田屋旅館",
    value: "023-694-9223"
  },
  {
    label: "包車／旅行社窗口",
    value: "請依包車合約上的聯絡人電話填入"
  }
];

// =========================
// 2. 共用：導航
// =========================

function openNav(place) {
  const url =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(place);
  window.open(url, "_blank");
}

// =========================
// 3. UI 初始化
// =========================

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  renderItinerary();
  renderInfo();
  setupBudget();
  fetchTodayWeather();
});

function setupTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const panels = {
    schedule: document.getElementById("tab-schedule"),
    info: document.getElementById("tab-info"),
    budget: document.getElementById("tab-budget")
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      Object.values(panels).forEach((p) => p.classList.remove("active"));
      panels[btn.dataset.tab].classList.add("active");
    });
  });
}

function renderItinerary() {
  const container = document.getElementById("itinerary-list");
  container.innerHTML = "";

  itineraryData.forEach((day) => {
    const dayCard = document.createElement("article");
    dayCard.className = "day-card";

    const header = document.createElement("div");
    header.className = "day-header";
    header.innerHTML = `
      <div>
        <h2>${day.date}</h2>
        <span>${day.title}</span>
      </div>
    `;
    dayCard.appendChild(header);

    const weatherEl = document.createElement("div");
    weatherEl.className = "day-weather";
    weatherEl.dataset.weatherLocation = day.weatherLocation;
    weatherEl.textContent = "天氣資訊載入中…";
    dayCard.appendChild(weatherEl);

    const segList = document.createElement("div");
    segList.className = "segment-list";

    day.segments.forEach((seg) => {
      const segCard = document.createElement("div");
      segCard.className = "segment-card";

      const segHeader = document.createElement("div");
      segHeader.className = "segment-header";
      segHeader.innerHTML = `
        <div>
          <div class="segment-title">${seg.title}</div>
          <div class="segment-time">${seg.time} · ${seg.place}</div>
        </div>
        <div class="segment-type">${seg.type}</div>
      `;
      segCard.appendChild(segHeader);

      const segBody = document.createElement("div");
      segBody.className = "segment-body";
      segBody.textContent = seg.description;
      segCard.appendChild(segBody);

      if (seg.place) {
        const navBtn = document.createElement("button");
        navBtn.className = "nav-button";
        navBtn.innerHTML = `<span>📍</span> 導航`;
        navBtn.addEventListener("click", () => openNav(seg.place));
        segCard.appendChild(navBtn);
      }

      if (seg.tags && seg.tags.length > 0) {
        const tagRow = document.createElement("div");
        tagRow.className = "tag-row";
        seg.tags.forEach((t) => {
          const tag = document.createElement("span");
          tag.className = "tag " + tagClass(t.kind);
          tag.textContent = t.label;
          tagRow.appendChild(tag);
        });
        segCard.appendChild(tagRow);
      }

      segList.appendChild(segCard);
    });

    dayCard.appendChild(segList);
    container.appendChild(dayCard);
  });
}

function tagClass(kind) {
  switch (kind) {
    case "food":
      return "tag-food";
    case "mustbuy":
      return "tag-mustbuy";
    case "booking":
      return "tag-booking";
    case "tip":
    default:
      return "tag-tip";
  }
}

// 航班 / 住宿 / 雪票 / 租雪具 / 溫泉 / 山小屋 / 包車 / 緊急聯絡

function renderInfo() {
  // 航班
  const flightEl = document.getElementById("flight-info");
  flightEl.innerHTML = `
    <div class="info-row">
      <div>
        <div class="info-label">去程</div>
        <div class="info-value">${flightInfo.depart.from} → ${
    flightInfo.depart.to
  }</div>
      </div>
      <div class="info-value">${flightInfo.depart.code}</div>
    </div>
    <div class="info-row">
      <div class="info-label">時間</div>
      <div class="info-value">${flightInfo.depart.time}</div>
    </div>
    <hr style="border-color: rgba(55,65,81,0.5); border-style: dashed; margin: 0.4rem 0;" />
    <div class="info-row">
      <div>
        <div class="info-label">回程</div>
        <div class="info-value">${flightInfo.return.from} → ${
    flightInfo.return.to
  }</div>
      </div>
      <div class="info-value">${flightInfo.return.code}</div>
    </div>
    <div class="info-row">
      <div class="info-label">時間</div>
      <div class="info-value">${flightInfo.return.time}</div>
    </div>
    <p class="hint">${flightInfo.memo}</p>
  `;

  // 住宿
  const hotelEl = document.getElementById("hotel-info");
  hotelEl.innerHTML = `
    <div class="info-row">
      <div class="info-label">住宿名稱</div>
      <div class="info-value">${hotelInfo.name}</div>
    </div>
    <div class="info-row">
      <div class="info-label">入住晚數</div>
      <div class="info-value">${hotelInfo.nights}</div>
    </div>
    <div class="info-row">
      <div class="info-label">地址</div>
      <div class="info-value" style="white-space: pre-line;">${hotelInfo.address}</div>
    </div>
    <div class="info-row">
      <div class="info-label">Check-in</div>
      <div class="info-value">${hotelInfo.checkin}</div>
    </div>
    <div class="info-row">
      <div class="info-label">Check-out</div>
      <div class="info-value">${hotelInfo.checkout}</div>
    </div>
    <div class="info-row">
      <div class="info-label">預約 / 宅配資訊</div>
      <div class="info-value" style="white-space: pre-line;">${hotelInfo.bookingId}</div>
    </div>
  `;

  // 四日雪票
  const passEl = document.getElementById("pass-info");
  passEl.innerHTML = `
    <div class="info-row">
      <div class="info-label">票種</div>
      <div class="info-value">${liftPassInfo.name}</div>
    </div>
    <div class="info-row">
      <div class="info-label">購買平台</div>
      <div class="info-value">${liftPassInfo.provider}</div>
    </div>
    <div class="info-row">
      <div class="info-label">取票地點</div>
      <div class="info-value">${liftPassInfo.pickupPlace}</div>
    </div>
    <p class="hint">${liftPassInfo.notes}</p>
  `;

  // 租雪具
  const rentalEl = document.getElementById("rental-info");
  rentalEl.innerHTML = `
    <div class="info-row">
      <div class="info-label">店名</div>
      <div class="info-value">${rentalInfo.name}</div>
    </div>
    <div class="info-row">
      <div class="info-label">地址</div>
      <div class="info-value">${rentalInfo.address}</div>
    </div>
    <div class="info-row">
      <div class="info-label">電話</div>
      <div class="info-value">${rentalInfo.tel}</div>
    </div>
    <button class="nav-button" onclick="openNav('${rentalInfo.placeForNav.replace(
      /'/g,
      "\\'"
    )}')">
      <span>📍</span> 導航到租借店
    </button>
    <p class="hint">${rentalInfo.notes}</p>
  `;

  // 藏王溫泉
  const onsenEl = document.getElementById("onsen-info");
  onsenEl.innerHTML = `
    <div class="info-row">
      <div class="info-label">溫泉區</div>
      <div class="info-value">${onsenInfo.areaName}</div>
    </div>
    <div class="info-row">
      <div class="info-label">地址</div>
      <div class="info-value">${onsenInfo.address}</div>
    </div>
    <button class="nav-button" onclick="openNav('${onsenInfo.areaName}')">
      <span>♨️</span> 導航到溫泉街
    </button>
    <ul class="hint" style="margin-top:0.4rem; padding-left:1.1rem;">
      ${onsenInfo.highlights.map((h) => `<li>${h}</li>`).join("")}
    </ul>
    <p class="hint">${onsenInfo.tips}</p>
  `;

  // 三五郎小屋
  const hutEl = document.getElementById("hut-info");
  hutEl.innerHTML = `
    <div class="info-row">
      <div class="info-label">名稱</div>
      <div class="info-value">${hutInfo.name}</div>
    </div>
    <div class="info-row">
      <div class="info-label">位置</div>
      <div class="info-value">${hutInfo.address}</div>
    </div>
    <div class="info-row">
      <div class="info-label">電話</div>
      <div class="info-value">${hutInfo.tel}</div>
    </div>
    <button class="nav-button" onclick="openNav('${hutInfo.placeForNav}')">
      <span>🏔️</span> 導航到三五郎小屋
    </button>
    <p class="hint">${hutInfo.notes}</p>
  `;

  // 包車
  const charterEl = document.getElementById("charter-info");
  charterEl.innerHTML = `
    <div class="info-row">
      <div class="info-label">去程航班</div>
      <div class="info-value">${charterInfo.departAirline}</div>
    </div>
    <div class="info-row">
      <div class="info-label">回程航班</div>
      <div class="info-value">${charterInfo.returnAirline}</div>
    </div>
    <p class="hint"><strong>1/8</strong>：${charterInfo.day1.note}</p>
    <p class="hint"><strong>1/14</strong>：${charterInfo.day9.note}</p>
    <hr style="border-color: rgba(55,65,81,0.5); border-style: dashed; margin: 0.4rem 0;" />
    ${charterInfo.stops
      .map(
        (s) => `
      <div class="info-row">
        <div class="info-label">${s.name}</div>
        <div class="info-value">
          ${s.address}<br />
          TEL：${s.tel}
        </div>
      </div>
    `
      )
      .join("")}
  `;

  // 緊急聯絡
  const emergencyEl = document.getElementById("emergency-info");
  emergencyEl.innerHTML = emergencyInfo
    .map(
      (item) => `
    <div class="info-row">
      <div class="info-label">${item.label}</div>
      <div class="info-value">${item.value}</div>
    </div>
  `
    )
    .join("");
}

// =========================
// 4. 天氣（API Key 可之後再補）
// =========================

const OPEN_WEATHER_API_KEY = "REPLACE_WITH_YOUR_KEY";
const OPEN_WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function fetchTodayWeather() {
  try {
    const todayWeatherEl = document.getElementById("today-weather");
    const loc = itineraryData[0]?.weatherLocation || "Zao Onsen, Yamagata";
    const data = await fetchWeather(loc);
    if (!data) {
      todayWeatherEl.textContent =
        "天氣 API 尚未設定 Key，先以當地預報為主。";
      document
        .querySelectorAll(".day-weather")
        .forEach((el) => (el.textContent = "天氣：可之後接上 API 顯示"));
      return;
    }
    const temp = Math.round(data.main.temp);
    const cond = data.weather[0]?.description ?? "";
    todayWeatherEl.innerHTML = `
      <div class="weather-main">
        <strong>${loc}</strong>
        <span>· ${cond}</span>
      </div>
      <div><strong>${temp}°C</strong></div>
    `;
    document
      .querySelectorAll(".day-weather")
      .forEach(
        (el) => (el.innerHTML = `天氣：<strong>${temp}°C</strong> · ${cond}`)
      );
  } catch (e) {
    console.error(e);
  }
}

async function fetchWeather(location) {
  if (!OPEN_WEATHER_API_KEY || OPEN_WEATHER_API_KEY.startsWith("REPLACE")) {
    return null;
  }
  const params = new URLSearchParams({
    q: location,
    appid: OPEN_WEATHER_API_KEY,
    units: "metric",
    lang: "zh_tw"
  });
  const res = await fetch(`${OPEN_WEATHER_BASE_URL}?${params.toString()}`);
  if (!res.ok) return null;
  return await res.json();
}

// =========================
// 5. 記帳（localStorage）
// =========================

const STORAGE_KEY = "zao-trip-expenses";

function setupBudget() {
  const form = document.getElementById("expense-form");
  const listEl = document.getElementById("expense-list");
  const totalEl = document.getElementById("expense-total");

  const expenses = loadExpenses();

  function render() {
    listEl.innerHTML = "";
    let total = 0;
    expenses.forEach((e) => {
      total += e.amount;
      const li = document.createElement("li");
      li.className = "expense-item";
      li.innerHTML = `
        <div>
          <div>${e.category} · ¥${e.amount}</div>
          <div class="expense-meta">${e.date} · ${e.note || ""}</div>
        </div>
      `;
      listEl.appendChild(li);
    });
    totalEl.textContent = `¥${total.toLocaleString("ja-JP")}`;
  }

  render();

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const date = document.getElementById("expense-date").value;
    const category = document.getElementById("expense-category").value;
    const note = document.getElementById("expense-note").value.trim();
    const amount = Number(
      document.getElementById("expense-amount").value || "0"
    );
    if (!date || !amount) return;

    expenses.push({ date, category, note, amount });
    saveExpenses(expenses);
    form.reset();
    render();
  });
}

function loadExpenses() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveExpenses(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}