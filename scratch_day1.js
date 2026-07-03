const page = String.raw`<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Day1 Company CISO Interview | AX Security Team</title>
    <style>
      :root {
        color-scheme: light;
        --ink: #07111f;
        --muted: #627184;
        --line: #d9e2ee;
        --paper: #fbfcff;
        --soft: #eef4fb;
        --navy: #071a33;
        --blue: #1766ff;
        --cyan: #00a6d6;
        --green: #13a06f;
        --red: #dc4458;
        --amber: #f1a51f;
      }

      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body {
        margin: 0;
        font-family: "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif;
        color: var(--ink);
        background:
          linear-gradient(180deg, rgba(238,244,251,.96), rgba(255,255,255,.98) 38%),
          radial-gradient(circle at 80% 0%, rgba(23,102,255,.12), transparent 34rem);
      }

      a { color: inherit; text-decoration: none; }
      .shell { min-height: 100vh; }
      .topbar {
        position: sticky;
        top: 0;
        z-index: 10;
        border-bottom: 1px solid rgba(217,226,238,.86);
        background: rgba(251,252,255,.9);
        backdrop-filter: blur(16px);
      }
      .topbar-inner {
        max-width: 1180px;
        margin: 0 auto;
        padding: 14px 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 0;
      }
      .mark {
        width: 38px;
        height: 38px;
        display: grid;
        place-items: center;
        border-radius: 8px;
        color: #fff;
        font-weight: 900;
        background: linear-gradient(135deg, var(--navy), var(--blue));
      }
      .brand small {
        display: block;
        color: var(--muted);
        font-size: 12px;
        font-weight: 800;
        letter-spacing: .06em;
        text-transform: uppercase;
      }
      .brand b {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 15px;
      }
      .nav {
        display: flex;
        gap: 6px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;
      }
      .nav a, .pill {
        padding: 9px 11px;
        border-radius: 8px;
        color: #26384c;
        font-size: 13px;
        font-weight: 800;
      }
      .nav a:hover, .nav a.active { background: var(--soft); color: var(--blue); }

      main {
        max-width: 1180px;
        margin: 0 auto;
        padding: 34px 22px 74px;
      }
      section {
        scroll-margin-top: 82px;
        margin: 0 0 44px;
      }
      .hero {
        min-height: calc(100vh - 120px);
        display: grid;
        grid-template-columns: minmax(0, 1.18fr) minmax(320px, .82fr);
        gap: 28px;
        align-items: stretch;
      }
      .hero-copy {
        border-radius: 8px;
        color: #fff;
        padding: 46px;
        background:
          linear-gradient(135deg, rgba(7,26,51,.98), rgba(10,55,109,.98) 58%, rgba(19,160,111,.88));
        box-shadow: 0 24px 70px rgba(7,26,51,.18);
        position: relative;
        overflow: hidden;
      }
      .grid-overlay {
        position: absolute;
        inset: 0;
        opacity: .22;
        background-image:
          linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px);
        background-size: 52px 52px;
        mask-image: linear-gradient(90deg, transparent, #000 38%, #000);
      }
      .hero-copy > * { position: relative; z-index: 1; }
      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: #cde6ff;
        font-size: 13px;
        font-weight: 900;
        letter-spacing: .08em;
        text-transform: uppercase;
      }
      h1 {
        margin: 18px 0 18px;
        max-width: 820px;
        font-size: clamp(44px, 6vw, 76px);
        line-height: 1.04;
        letter-spacing: 0;
      }
      .lead {
        max-width: 760px;
        margin: 0;
        color: #e8f2ff;
        font-size: clamp(17px, 2vw, 22px);
        line-height: 1.62;
        font-weight: 600;
      }
      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 28px;
      }
      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 44px;
        padding: 0 16px;
        border: 1px solid rgba(255,255,255,.22);
        border-radius: 8px;
        background: #fff;
        color: var(--navy);
        font-weight: 900;
      }
      .button.ghost {
        color: #fff;
        background: rgba(255,255,255,.1);
      }
      .hero-panel {
        display: grid;
        gap: 14px;
      }
      .profile-card, .metric-card, .panel, .card {
        border: 1px solid var(--line);
        border-radius: 8px;
        background: rgba(255,255,255,.9);
        box-shadow: 0 18px 44px rgba(7,17,31,.08);
      }
      .profile-card { padding: 24px; }
      .profile-card h2 {
        margin: 10px 0 8px;
        font-size: 28px;
      }
      .profile-card p {
        margin: 0;
        color: var(--muted);
        line-height: 1.6;
        font-weight: 700;
      }
      .tag-row {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 18px;
      }
      .tag {
        display: inline-flex;
        align-items: center;
        min-height: 28px;
        padding: 0 10px;
        border-radius: 999px;
        background: #eaf2ff;
        color: #144fba;
        font-size: 12px;
        font-weight: 900;
      }
      .metric-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
      }
      .metric-card { padding: 18px; }
      .metric-card b {
        display: block;
        font-size: 27px;
        line-height: 1.1;
        color: var(--blue);
      }
      .metric-card span {
        display: block;
        margin-top: 6px;
        color: var(--muted);
        font-size: 13px;
        font-weight: 800;
      }

      .section-head {
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 18px;
        margin-bottom: 18px;
      }
      .section-head h2 {
        margin: 0;
        font-size: clamp(28px, 4vw, 42px);
        letter-spacing: 0;
      }
      .section-head p {
        max-width: 560px;
        margin: 0;
        color: var(--muted);
        line-height: 1.55;
        font-weight: 700;
      }
      .panel { padding: 26px; }
      .cards-3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      .card { padding: 22px; box-shadow: none; }
      .card h3 {
        margin: 0 0 10px;
        font-size: 21px;
      }
      .card p {
        margin: 0;
        color: var(--muted);
        line-height: 1.58;
        font-weight: 700;
      }
      .num {
        display: inline-grid;
        place-items: center;
        width: 32px;
        height: 32px;
        margin-bottom: 16px;
        border-radius: 8px;
        color: #fff;
        background: var(--navy);
        font-size: 13px;
        font-weight: 900;
      }
      .two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 18px;
      }
      .split {
        display: grid;
        grid-template-columns: .9fr 1.1fr;
        gap: 22px;
        align-items: stretch;
      }
      .quote {
        padding: 28px;
        border-radius: 8px;
        background: var(--navy);
        color: #fff;
      }
      .quote b {
        display: block;
        font-size: 30px;
        line-height: 1.22;
        margin-bottom: 16px;
      }
      .quote p {
        margin: 0;
        color: #d8e7fb;
        line-height: 1.62;
        font-weight: 700;
      }
      .list {
        display: grid;
        gap: 12px;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .list li {
        display: grid;
        grid-template-columns: 10px 1fr;
        gap: 12px;
        color: #25374c;
        line-height: 1.52;
        font-weight: 800;
      }
      .dot {
        width: 8px;
        height: 8px;
        margin-top: 9px;
        border-radius: 50%;
        background: var(--blue);
      }
      .comparison {
        display: grid;
        grid-template-columns: 1fr 56px 1fr;
        gap: 16px;
        align-items: stretch;
      }
      .arrow {
        display: grid;
        place-items: center;
        color: var(--blue);
        font-size: 30px;
        font-weight: 900;
      }
      .legacy { border-top: 6px solid var(--red); }
      .future { border-top: 6px solid var(--green); }
      .org {
        display: grid;
        gap: 12px;
      }
      .org-top {
        display: grid;
        place-items: center;
      }
      .org-node {
        width: 100%;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fff;
        padding: 16px;
        text-align: left;
      }
      button.org-node {
        cursor: pointer;
        font: inherit;
      }
      .org-node strong { display: block; font-size: 18px; }
      .org-node span {
        display: block;
        margin-top: 6px;
        color: var(--muted);
        font-size: 13px;
        font-weight: 800;
      }
      .org-node.selected {
        border-color: var(--blue);
        box-shadow: 0 0 0 3px rgba(23,102,255,.12);
      }
      .org-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
      }
      .org-subgrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
      }
      .detail {
        min-height: 322px;
        border-left: 6px solid var(--blue);
      }
      .detail h3 {
        margin: 0 0 10px;
        font-size: 28px;
      }
      .detail p {
        margin: 0 0 18px;
        color: var(--muted);
        line-height: 1.58;
        font-weight: 700;
      }
      .roadmap {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;
      }
      .step {
        border-top: 6px solid var(--blue);
        min-height: 230px;
      }
      .step:nth-child(2) { border-top-color: var(--cyan); }
      .step:nth-child(3) { border-top-color: var(--green); }
      .step:nth-child(4) { border-top-color: var(--amber); }
      .step small {
        color: var(--muted);
        font-weight: 900;
        letter-spacing: .08em;
        text-transform: uppercase;
      }
      .step h3 { margin: 8px 0 10px; }
      .stack {
        display: grid;
        gap: 14px;
      }
      .business-map {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
      }
      .map-item {
        padding: 18px 14px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fff;
        min-height: 150px;
      }
      .map-item b { display: block; margin-bottom: 8px; }
      .map-item span {
        display: block;
        color: var(--muted);
        font-size: 13px;
        line-height: 1.48;
        font-weight: 750;
      }
      .links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .links a {
        min-height: 40px;
        display: inline-flex;
        align-items: center;
        padding: 0 13px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fff;
        color: #23415f;
        font-weight: 900;
        font-size: 13px;
      }
      .notes {
        margin-top: 14px;
        padding: 14px;
        border: 1px dashed #b8c7da;
        border-radius: 8px;
        background: #f6f9fd;
        color: #43546a;
        line-height: 1.55;
        font-size: 14px;
        font-weight: 750;
      }
      .footer {
        margin-top: 50px;
        padding: 28px;
        border-radius: 8px;
        background: var(--navy);
        color: #fff;
      }
      .footer h2 { margin: 0 0 10px; font-size: 30px; }
      .footer p { margin: 0; color: #dbe7f7; line-height: 1.58; font-weight: 700; }

      @media (max-width: 980px) {
        .hero, .split, .two-col, .comparison { grid-template-columns: 1fr; }
        .cards-3, .roadmap, .business-map { grid-template-columns: 1fr 1fr; }
        .arrow { transform: rotate(90deg); min-height: 32px; }
      }
      @media (max-width: 680px) {
        .topbar-inner { align-items: flex-start; }
        .nav { display: none; }
        main { padding-inline: 16px; }
        .hero-copy, .panel, .profile-card { padding: 22px; }
        .cards-3, .roadmap, .business-map, .metric-grid, .org-grid, .org-subgrid { grid-template-columns: 1fr; }
        h1 { font-size: 42px; }
      }
    </style>
  </head>
  <body>
    <div class="shell">
      <header class="topbar">
        <div class="topbar-inner">
          <a class="brand" href="#hero" aria-label="처음으로">
            <span class="mark">AX</span>
            <span>
              <small>Day1 Company CISO Interview</small>
              <b>이윤혁 | Founder, CISO, T-RIVE Leader</b>
            </span>
          </a>
          <nav class="nav" aria-label="발표 목차">
            <a href="#why">Why Day1</a>
            <a href="#leader">Leader</a>
            <a href="#ax">AX Security</a>
            <a href="#business">T-RIVE</a>
            <a href="#roadmap">90 Days</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" class="hero">
          <div class="hero-copy">
            <div class="grid-overlay" aria-hidden="true"></div>
            <span class="eyebrow">CISO as Founder · Security as Growth System</span>
            <h1>Day1의 성장 속도를 지키는 AX 보안팀을 만들겠습니다.</h1>
            <p class="lead">
              저는 CISO이자 T-RIVE 팀 리더로서, 당장의 침해사고 대응을 안정화하면서도 Day1 Company의 비즈니스가 더 빠르고 안전하게 확장되는 보안 운영체제를 만들고 싶습니다.
            </p>
            <div class="hero-actions">
              <a class="button" href="#ax">AX 보안팀 보기</a>
              <a class="button ghost" href="#roadmap">90일 실행안 보기</a>
            </div>
          </div>

          <aside class="hero-panel" aria-label="핵심 소개">
            <div class="profile-card">
              <span class="tag">Interview Narrative</span>
              <h2>창업가형 정보보호 리더</h2>
              <p>
                보안을 비용센터가 아니라 사업의 신뢰, 속도, 교육, 데이터 사업으로 확장하는 리더입니다. 현재 첫 프로젝트 MONO로 모두의 창업 1라운드를 준비하고 있습니다.
              </p>
              <div class="tag-row">
                <span class="tag">CISO</span>
                <span class="tag">T-RIVE</span>
                <span class="tag">MONO</span>
                <span class="tag">Blood Star</span>
                <span class="tag">Coloso Field Tech</span>
              </div>
            </div>
            <div class="metric-grid">
              <div class="metric-card">
                <b>Day 1</b>
                <span>침해사고 대응과 안정화 우선</span>
              </div>
              <div class="metric-card">
                <b>AX</b>
                <span>AI 가드레일 기반 보안 조직</span>
              </div>
              <div class="metric-card">
                <b>T-RIVE</b>
                <span>Tech, Try, Trust, Tribe, Thrive</span>
              </div>
              <div class="metric-card">
                <b>MONO</b>
                <span>산업 현장 운영 OS 검증</span>
              </div>
            </div>
          </aside>
        </section>

        <section id="why">
          <div class="section-head">
            <h2>왜 Day1 Company인가</h2>
            <p>합류 이유는 세 가지입니다. 문화적 핏, 보안팀 확장 역량, 그리고 계속 새로운 도전을 만들 수 있는 환경입니다.</p>
          </div>
          <div class="cards-3">
            <article class="card">
              <span class="num">01</span>
              <h3>문화적 핏</h3>
              <p>Day1이라는 이름처럼 빠르게 배우고 실행하는 조직 문화가 저의 창업가형 리더십과 맞습니다. 보안도 현업의 속도를 이해해야 제대로 작동합니다.</p>
            </article>
            <article class="card">
              <span class="num">02</span>
              <h3>가장 잘 만들 수 있는 팀</h3>
              <p>보안 운영, 침해대응, 개인정보, 클라우드, AI 거버넌스를 한 조직 언어로 묶어 Day1에 맞는 AX 보안팀으로 확장할 수 있습니다.</p>
            </article>
            <article class="card">
              <span class="num">03</span>
              <h3>그 이상을 함께 만들기</h3>
              <p>당장은 사고 대응에 집중하되, 장기적으로 콜로소를 현장 기술자 교육으로 확장하고 보안을 교육 사업의 신뢰 인프라로 만들고 싶습니다.</p>
            </article>
          </div>
          <div class="notes">발표 메모: “저는 보안팀을 조용히 지키는 팀으로만 보지 않습니다. Day1이 더 많은 카테고리와 교육 IP로 확장할 때 신뢰를 설계하는 팀으로 만들고 싶습니다.”</div>
        </section>

        <section id="leader">
          <div class="section-head">
            <h2>저는 어떤 CISO인가</h2>
            <p>CISO와 창업가의 관점을 동시에 가져갑니다. 위협을 막는 사람에서 사업의 구조를 설계하는 리더로 움직입니다.</p>
          </div>
          <div class="split">
            <div class="quote">
              <b>보안은 멈추게 하는 힘이 아니라, 더 멀리 가게 하는 신뢰의 구조입니다.</b>
              <p>보안 리더는 사고를 줄이는 사람인 동시에, 조직이 더 안전하게 실험하도록 길을 열어주는 사람이어야 합니다.</p>
            </div>
            <div class="panel">
              <ul class="list">
                <li><span class="dot"></span><span>침해사고 대응과 재발 방지를 최우선으로 정렬합니다.</span></li>
                <li><span class="dot"></span><span>보안 정책을 문서가 아니라 제품과 업무 흐름 안에 심습니다.</span></li>
                <li><span class="dot"></span><span>AI와 자동화를 활용해 반복 업무를 줄이고, 팀의 판단력을 고위험 의사결정에 집중시킵니다.</span></li>
                <li><span class="dot"></span><span>현업, 법무, 개인정보, 개발, 교육 운영이 같은 언어로 의사결정하도록 조율합니다.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="ax">
          <div class="section-head">
            <h2>Day1 AX 보안팀 설계</h2>
            <p>첨부 AX 방안을 바탕으로, 기존 보안 운영은 안정화하고 신설 AX 보안팀은 AI 시대의 가드레일과 자동화를 책임지는 구조입니다.</p>
          </div>
          <div class="comparison">
            <article class="card legacy">
              <h3>Legacy Security</h3>
              <p>수동 점검, 사후 승인, 규정 중심 운영으로 현업의 병목이 생깁니다. 사고 대응과 운영 안정화에는 필요하지만, 성장 조직의 기본값이 되면 속도가 떨어집니다.</p>
            </article>
            <div class="arrow">→</div>
            <article class="card future">
              <h3>AX Security</h3>
              <p>AI 에이전트, 정책 가드레일, 클라우드 보안, 개인정보 거버넌스를 연결해 “안전한 기본 경로”를 만듭니다. 보안팀은 통제자가 아니라 성장의 레일이 됩니다.</p>
            </article>
          </div>

          <div class="two-col" style="margin-top:18px">
            <div class="panel org">
              <div class="org-top">
                <button class="org-node selected" data-node="ciso">
                  <strong>CISO</strong>
                  <span>사고 대응, 보안 전략, 리스크 의사결정</span>
                </button>
              </div>
              <div class="org-grid">
                <button class="org-node" data-node="legacy">
                  <strong>Legacy 보안팀</strong>
                  <span>규제, 관제, 접근통제, 기존 운영 안정화</span>
                </button>
                <div>
                  <button class="org-node" data-node="axmain">
                    <strong>AX 보안팀</strong>
                    <span>AI Transformation 시대의 보안 운영체제</span>
                  </button>
                  <div class="org-subgrid">
                    <button class="org-node" data-node="policy"><strong>정책</strong><span>AI 사용 가드레일</span></button>
                    <button class="org-node" data-node="privacy"><strong>개인정보</strong><span>데이터 최소화</span></button>
                    <button class="org-node" data-node="engineering"><strong>엔지니어링</strong><span>DevSecOps</span></button>
                    <button class="org-node" data-node="cloud"><strong>클라우드</strong><span>SaaS, CSPM</span></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel detail" id="org-detail" aria-live="polite">
              <h3>CISO</h3>
              <p>초기에는 침해사고 대응 지휘, 로그와 접근권한 정상화, 재발 방지 체계 수립에 집중합니다. 이후 AX 보안팀을 통해 보안을 제품화 가능한 운영체계로 확장합니다.</p>
              <ul class="list">
                <li><span class="dot"></span><span>긴급 대응 우선순위와 커뮤니케이션 체계 정렬</span></li>
                <li><span class="dot"></span><span>Day1의 사업 속도에 맞는 리스크 기준 수립</span></li>
                <li><span class="dot"></span><span>보안 챔피언과 AI 가상검수로 전사 확산</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="business">
          <div class="section-head">
            <h2>T-RIVE와 Blood Star 확장 전략</h2>
            <p>Day1에서 만들고 싶은 보안팀은 내부 통제 조직을 넘어, 교육과 산업 현장으로 확장 가능한 신뢰 사업의 기반이 됩니다.</p>
          </div>
          <div class="business-map">
            <div class="map-item"><b>01. AX Security</b><span>Day1 내부의 보안 운영, AI 가드레일, 사고 대응 체계</span></div>
            <div class="map-item"><b>02. Coloso Field Tech</b><span>콜로소를 현장 기술자 교육 카테고리로 확장</span></div>
            <div class="map-item"><b>03. MONO</b><span>기술자 신뢰 프로필, 기업 채용 수요, 현장 운영 데이터</span></div>
            <div class="map-item"><b>04. Blood Star</b><span>여러 팀이 함께 쓰는 신뢰, 교육, 운영 기반으로 확장</span></div>
            <div class="map-item"><b>05. Blood Universe</b><span>성과가 다시 팀원과 고객의 삶을 지키는 생태계</span></div>
          </div>
          <div class="two-col" style="margin-top:18px">
            <article class="card">
              <h3>MONO의 첫 검증</h3>
              <p>모두의 창업 1라운드에서는 기술자 신뢰 프로필, 기업 협약과 채용 공고, 현장 소품·자재 ERP 가능성을 검증합니다. 앱 광고보다 수요를 먼저 확보하는 Demand-first 전략입니다.</p>
            </article>
            <article class="card">
              <h3>Day1과의 접점</h3>
              <p>Day1의 교육 제작 역량과 콜로소 브랜드는 현장 기술자 교육으로 확장될 수 있습니다. 보안팀은 이 과정에서 개인정보, 신뢰 데이터, B2B 파트너 리스크를 설계합니다.</p>
            </article>
          </div>
        </section>

        <section id="roadmap">
          <div class="section-head">
            <h2>합류 후 90일 실행안</h2>
            <p>급한 불부터 끄고, 동시에 Day1이 장기적으로 활용할 수 있는 AX 보안 체계를 남기겠습니다.</p>
          </div>
          <div class="roadmap">
            <article class="card step">
              <small>Day 1-14</small>
              <h3>Incident Stabilization</h3>
              <p>침해사고 타임라인, 침해범위, 계정·권한·로그, 대외 커뮤니케이션을 정리하고 즉시 통제 가능한 리스크부터 닫습니다.</p>
            </article>
            <article class="card step">
              <small>Day 15-30</small>
              <h3>Control Baseline</h3>
              <p>SSO/MFA, 권한 검토, SaaS 사용 현황, 클라우드 노출면, 개인정보 처리 흐름을 기준선으로 만들고 반복 점검을 자동화합니다.</p>
            </article>
            <article class="card step">
              <small>Day 31-60</small>
              <h3>AX Guardrail</h3>
              <p>AI 도구 사용 정책, 프롬프트·데이터 반출 기준, AI 가상 보안검수, 보안 챔피언 프로그램을 작동시킵니다.</p>
            </article>
            <article class="card step">
              <small>Day 61-90</small>
              <h3>Scale & Business</h3>
              <p>보안 KPI, 임원 리포팅, 교육 사업 확장 리스크 모델, 콜로소 현장 기술자 교육과 MONO 연계 가능성을 제안합니다.</p>
            </article>
          </div>
        </section>

        <section>
          <div class="section-head">
            <h2>참고 링크</h2>
            <p>인터뷰 중 바로 열어볼 수 있도록 원문 자료를 연결했습니다.</p>
          </div>
          <div class="links">
            <a href="https://day1company.ninehire.site/dd" target="_blank" rel="noreferrer">Day1 채용 페이지</a>
            <a href="https://dojiung.com/creator/" target="_blank" rel="noreferrer">T-RIVE 팀 소개</a>
            <a href="https://dojiung.com/security" target="_blank" rel="noreferrer">이윤혁 CISO 소개</a>
            <a href="https://mono.dojiung.com/mono" target="_blank" rel="noreferrer">MONO MVP</a>
            <a href="https://mono.dojiung.com/strategy" target="_blank" rel="noreferrer">MONO 전략</a>
          </div>
        </section>

        <div class="footer">
          <h2>마지막 메시지</h2>
          <p>
            저는 Day1 Company의 보안팀을 지금의 사고 대응을 끝내는 팀으로만 만들고 싶지 않습니다. Day1이 더 많은 도전을 할 수 있도록, 보안이 사업의 속도와 신뢰를 동시에 키우는 AX 팀을 만들겠습니다.
          </p>
        </div>
      </main>
    </div>

    <script>
      const details = {
        ciso: {
          title: "CISO",
          body: "초기에는 침해사고 대응 지휘, 로그와 접근권한 정상화, 재발 방지 체계 수립에 집중합니다. 이후 AX 보안팀을 통해 보안을 제품화 가능한 운영체계로 확장합니다.",
          items: ["긴급 대응 우선순위와 커뮤니케이션 체계 정렬", "Day1의 사업 속도에 맞는 리스크 기준 수립", "보안 챔피언과 AI 가상검수로 전사 확산"]
        },
        legacy: {
          title: "Legacy 보안팀",
          body: "기존 인프라, 접근권한, 규제 대응, 관제 업무를 안정화합니다. 반복 업무는 표준화하고 자동화 후보를 발굴해 AX 팀으로 넘깁니다.",
          items: ["사고 대응 런북과 증적 관리", "계정, 권한, SaaS, 엔드포인트 기준선", "ISMS-P와 개인정보 컴플라이언스 운영"]
        },
        axmain: {
          title: "AX 보안팀",
          body: "AI Transformation에 맞는 정책, 엔지니어링, 클라우드, 개인정보 보호를 한 팀으로 묶습니다. 목적은 차단이 아니라 안전한 기본 경로를 만드는 것입니다.",
          items: ["AI 도구 사용 가드레일", "자동 보안검수와 챔피언 프로그램", "제품·교육·B2B 확장 리스크 설계"]
        },
        policy: {
          title: "정책 & 거버넌스",
          body: "임직원이 AI와 신규 SaaS를 안전하게 쓰도록 승인 절차를 줄이고, 데이터 등급과 사용 가능 범위를 명확하게 설계합니다.",
          items: ["AI 사용 정책", "Shadow AI 양성화", "현업 친화형 승인 기준"]
        },
        privacy: {
          title: "개인정보 보호",
          body: "교육 플랫폼과 B2B 사업 확장에 필요한 개인정보 흐름을 정리하고, 최소 수집, 목적 제한, 위탁·제3자 제공 관리를 제품 흐름에 심습니다.",
          items: ["개인정보 처리 맵", "고위험 처리 사전검토", "교육 데이터 보호 기준"]
        },
        engineering: {
          title: "보안 엔지니어링",
          body: "개발 파이프라인, 코드, API, 배포 흐름에 자동 보안검수를 붙여 보안팀의 수동 검토 병목을 줄입니다.",
          items: ["DevSecOps 기본선", "자동 취약점 triage", "보안성 심사 5분 모델"]
        },
        cloud: {
          title: "클라우드 보안",
          body: "클라우드와 SaaS 노출면을 지속적으로 파악하고, 잘못된 설정과 과도한 권한을 자동 감지하도록 만듭니다.",
          items: ["CSPM 기준선", "SaaS 보안 인벤토리", "권한·키·비밀정보 관리"]
        }
      };

      const detail = document.querySelector("#org-detail");
      const nodes = document.querySelectorAll("[data-node]");

      function renderDetail(key) {
        const data = details[key] || details.ciso;
        nodes.forEach((node) => node.classList.toggle("selected", node.dataset.node === key));
        detail.innerHTML =
          "<h3>" + data.title + "</h3>" +
          "<p>" + data.body + "</p>" +
          "<ul class='list'>" +
          data.items.map((item) => "<li><span class='dot'></span><span>" + item + "</span></li>").join("") +
          "</ul>";
      }

      nodes.forEach((node) => {
        node.addEventListener("click", () => renderDetail(node.dataset.node));
      });

      const anchors = ["hero", "why", "leader", "ax", "business", "roadmap"];
      window.addEventListener("keydown", (event) => {
        const index = Number(event.key) - 1;
        if (index >= 0 && index < anchors.length) {
          document.getElementById(anchors[index]).scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });

      const navLinks = Array.from(document.querySelectorAll(".nav a"));
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
        });
      }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });
      anchors.forEach((id) => observer.observe(document.getElementById(id)));
    </script>
  </body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    void env;
    void ctx;

    const url = new URL(request.url);
    if (url.pathname !== "/") {
      return new Response("Not found", { status: 404 });
    }

    return new Response(page, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  },
};
