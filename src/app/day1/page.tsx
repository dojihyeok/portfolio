'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

const detailsData: Record<string, any> = {
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

export default function Day1Page() {
  const [selectedNode, setSelectedNode] = useState('ciso');
  const [activeNav, setActiveNav] = useState('');

  useEffect(() => {
    const anchors = ["hero", "why", "leader", "ax", "business", "roadmap"];
    
    const handleKeyDown = (event: KeyboardEvent) => {
      const index = Number(event.key) - 1;
      if (index >= 0 && index < anchors.length) {
        const el = document.getElementById(anchors[index]);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setActiveNav(entry.target.id);
      });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });

    anchors.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      observer.disconnect();
    };
  }, []);

  const detail = detailsData[selectedNode] || detailsData.ciso;

  return (
    <>
      <div className={styles.global_reset}>
        
    <div className={`${styles.shell}`}>
      <header className={`${styles.topbar}`}>
        <div className={`${styles.topbar_inner}`}>
          <a href="#hero" className={`${styles.brand} ${activeNav === "hero" ? styles.active : ""}`} aria-label="처음으로">
            <span className={`${styles.mark}`}>AX</span>
            <span>
              <small>Day1 Company CISO Interview</small>
              <b>이윤혁 | Founder, CISO, T-RIVE Leader</b>
            </span>
          </a>
          <nav className={`${styles.nav}`} aria-label="발표 목차">
            <a href="#why" className={activeNav === "why" ? styles.active : ""}>Why Day1</a>
            <a href="#leader" className={activeNav === "leader" ? styles.active : ""}>Leader</a>
            <a href="#ax" className={activeNav === "ax" ? styles.active : ""}>AX Security</a>
            <a href="#business" className={activeNav === "business" ? styles.active : ""}>T-RIVE</a>
            <a href="#roadmap" className={activeNav === "roadmap" ? styles.active : ""}>90 Days</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className={`${styles.hero}`}>
          <div className={`${styles.hero_copy}`}>
            <div className={`${styles.grid_overlay}`} aria-hidden="true"></div>
            <span className={`${styles.eyebrow}`}>CISO as Founder · Security as Growth System</span>
            <h1>Day1의 성장 속도를 지키는 AX 보안팀을 만들겠습니다.</h1>
            <p className={`${styles.lead}`}>
              저는 CISO이자 T-RIVE 팀 리더로서, 당장의 침해사고 대응을 안정화하면서도 Day1 Company의 비즈니스가 더 빠르고 안전하게 확장되는 보안 운영체제를 만들고 싶습니다.
            </p>
            <div className={`${styles.hero_actions}`}>
              <a className={`${styles.button}`} href="#ax">AX 보안팀 보기</a>
              <a className={`${styles.button} ${styles.ghost}`} href="#roadmap">90일 실행안 보기</a>
            </div>
          </div>

          <aside className={`${styles.hero_panel}`} aria-label="핵심 소개">
            <div className={`${styles.profile_card}`}>
              <span className={`${styles.tag}`}>Interview Narrative</span>
              <h2>창업가형 정보보호 리더</h2>
              <p>
                보안을 비용센터가 아니라 사업의 신뢰, 속도, 교육, 데이터 사업으로 확장하는 리더입니다. 현재 첫 프로젝트 MONO로 모두의 창업 1라운드를 준비하고 있습니다.
              </p>
              <div className={`${styles.tag_row}`}>
                <span className={`${styles.tag}`}>CISO</span>
                <span className={`${styles.tag}`}>T-RIVE</span>
                <span className={`${styles.tag}`}>MONO</span>
                <span className={`${styles.tag}`}>Blood Star</span>
                <span className={`${styles.tag}`}>Coloso Field Tech</span>
              </div>
            </div>
            <div className={`${styles.metric_grid}`}>
              <div className={`${styles.metric_card}`}>
                <b>Day 1</b>
                <span>침해사고 대응과 안정화 우선</span>
              </div>
              <div className={`${styles.metric_card}`}>
                <b>AX</b>
                <span>AI 가드레일 기반 보안 조직</span>
              </div>
              <div className={`${styles.metric_card}`}>
                <b>T-RIVE</b>
                <span>Tech, Try, Trust, Tribe, Thrive</span>
              </div>
              <div className={`${styles.metric_card}`}>
                <b>MONO</b>
                <span>산업 현장 운영 OS 검증</span>
              </div>
            </div>
          </aside>
        </section>

        <section id="why">
          <div className={`${styles.section_head}`}>
            <h2>왜 Day1 Company인가</h2>
            <p>합류 이유는 세 가지입니다. 문화적 핏, 보안팀 확장 역량, 그리고 계속 새로운 도전을 만들 수 있는 환경입니다.</p>
          </div>
          <div className={`${styles.cards_3}`}>
            <article className={`${styles.card}`}>
              <span className={`${styles.num}`}>01</span>
              <h3>문화적 핏</h3>
              <p>Day1이라는 이름처럼 빠르게 배우고 실행하는 조직 문화가 저의 창업가형 리더십과 맞습니다. 보안도 현업의 속도를 이해해야 제대로 작동합니다.</p>
            </article>
            <article className={`${styles.card}`}>
              <span className={`${styles.num}`}>02</span>
              <h3>가장 잘 만들 수 있는 팀</h3>
              <p>보안 운영, 침해대응, 개인정보, 클라우드, AI 거버넌스를 한 조직 언어로 묶어 Day1에 맞는 AX 보안팀으로 확장할 수 있습니다.</p>
            </article>
            <article className={`${styles.card}`}>
              <span className={`${styles.num}`}>03</span>
              <h3>그 이상을 함께 만들기</h3>
              <p>당장은 사고 대응에 집중하되, 장기적으로 콜로소를 현장 기술자 교육으로 확장하고 보안을 교육 사업의 신뢰 인프라로 만들고 싶습니다.</p>
            </article>
          </div>
          <div className={`${styles.notes}`}>발표 메모: “저는 보안팀을 조용히 지키는 팀으로만 보지 않습니다. Day1이 더 많은 카테고리와 교육 IP로 확장할 때 신뢰를 설계하는 팀으로 만들고 싶습니다.”</div>
        </section>

        <section id="leader">
          <div className={`${styles.section_head}`}>
            <h2>저는 어떤 CISO인가</h2>
            <p>CISO와 창업가의 관점을 동시에 가져갑니다. 위협을 막는 사람에서 사업의 구조를 설계하는 리더로 움직입니다.</p>
          </div>
          <div className={`${styles.split}`}>
            <div className={`${styles.quote}`}>
              <b>보안은 멈추게 하는 힘이 아니라, 더 멀리 가게 하는 신뢰의 구조입니다.</b>
              <p>보안 리더는 사고를 줄이는 사람인 동시에, 조직이 더 안전하게 실험하도록 길을 열어주는 사람이어야 합니다.</p>
            </div>
            <div className={`${styles.panel}`}>
              <ul className={`${styles.list}`}>
                <li><span className={`${styles.dot}`}></span><span>침해사고 대응과 재발 방지를 최우선으로 정렬합니다.</span></li>
                <li><span className={`${styles.dot}`}></span><span>보안 정책을 문서가 아니라 제품과 업무 흐름 안에 심습니다.</span></li>
                <li><span className={`${styles.dot}`}></span><span>AI와 자동화를 활용해 반복 업무를 줄이고, 팀의 판단력을 고위험 의사결정에 집중시킵니다.</span></li>
                <li><span className={`${styles.dot}`}></span><span>현업, 법무, 개인정보, 개발, 교육 운영이 같은 언어로 의사결정하도록 조율합니다.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="ax">
          <div className={`${styles.section_head}`}>
            <h2>Day1 AX 보안팀 설계</h2>
            <p>첨부 AX 방안을 바탕으로, 기존 보안 운영은 안정화하고 신설 AX 보안팀은 AI 시대의 가드레일과 자동화를 책임지는 구조입니다.</p>
          </div>
          <div className={`${styles.comparison}`}>
            <article className={`${styles.card} ${styles.legacy}`}>
              <h3>Legacy Security</h3>
              <p>수동 점검, 사후 승인, 규정 중심 운영으로 현업의 병목이 생깁니다. 사고 대응과 운영 안정화에는 필요하지만, 성장 조직의 기본값이 되면 속도가 떨어집니다.</p>
            </article>
            <div className={`${styles.arrow}`}>→</div>
            <article className={`${styles.card} ${styles.future}`}>
              <h3>AX Security</h3>
              <p>AI 에이전트, 정책 가드레일, 클라우드 보안, 개인정보 거버넌스를 연결해 “안전한 기본 경로”를 만듭니다. 보안팀은 통제자가 아니라 성장의 레일이 됩니다.</p>
            </article>
          </div>

          <div className={`${styles.two_col}`} style={{ marginTop: "18px" }}>
            <div className={`${styles.panel} ${styles.org}`}>
              <div className={`${styles.org_top}`}>
                <button className={`${styles.org_node} ${selectedNode === "ciso" ? styles.selected : ""}`} onClick={() => setSelectedNode("ciso")}>
                  <strong>CISO</strong>
                  <span>사고 대응, 보안 전략, 리스크 의사결정</span>
                </button>
              </div>
              <div className={`${styles.org_grid}`}>
                <button className={`${styles.org_node} ${selectedNode === "legacy" ? styles.selected : ""}`} onClick={() => setSelectedNode("legacy")}>
                  <strong>Legacy 보안팀</strong>
                  <span>규제, 관제, 접근통제, 기존 운영 안정화</span>
                </button>
                <div>
                  <button className={`${styles.org_node} ${selectedNode === "axmain" ? styles.selected : ""}`} onClick={() => setSelectedNode("axmain")}>
                    <strong>AX 보안팀</strong>
                    <span>AI Transformation 시대의 보안 운영체제</span>
                  </button>
                  <div className={`${styles.org_subgrid}`}>
                    <button className={`${styles.org_node} ${selectedNode === "policy" ? styles.selected : ""}`} onClick={() => setSelectedNode("policy")}><strong>정책</strong><span>AI 사용 가드레일</span></button>
                    <button className={`${styles.org_node} ${selectedNode === "privacy" ? styles.selected : ""}`} onClick={() => setSelectedNode("privacy")}><strong>개인정보</strong><span>데이터 최소화</span></button>
                    <button className={`${styles.org_node} ${selectedNode === "engineering" ? styles.selected : ""}`} onClick={() => setSelectedNode("engineering")}><strong>엔지니어링</strong><span>DevSecOps</span></button>
                    <button className={`${styles.org_node} ${selectedNode === "cloud" ? styles.selected : ""}`} onClick={() => setSelectedNode("cloud")}><strong>클라우드</strong><span>SaaS, CSPM</span></button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${styles.panel} ${styles.detail}`} id="org-detail" aria-live="polite">
              <h3>{detail.title}</h3>
              <p>{detail.body}</p>
              <ul className={styles.list}>
                {detail.items.map((item: string, idx: number) => (
                  <li key={idx}><span className={styles.dot}></span><span>{item}</span></li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        <section id="business">
          <div className={`${styles.section_head}`}>
            <h2>T-RIVE와 Blood Star 확장 전략</h2>
            <p>Day1에서 만들고 싶은 보안팀은 내부 통제 조직을 넘어, 교육과 산업 현장으로 확장 가능한 신뢰 사업의 기반이 됩니다.</p>
          </div>
          <div className={`${styles.business_map}`}>
            <div className={`${styles.map_item}`}><b>01. AX Security</b><span>Day1 내부의 보안 운영, AI 가드레일, 사고 대응 체계</span></div>
            <div className={`${styles.map_item}`}><b>02. Coloso Field Tech</b><span>콜로소를 현장 기술자 교육 카테고리로 확장</span></div>
            <div className={`${styles.map_item}`}><b>03. MONO</b><span>기술자 신뢰 프로필, 기업 채용 수요, 현장 운영 데이터</span></div>
            <div className={`${styles.map_item}`}><b>04. Blood Star</b><span>여러 팀이 함께 쓰는 신뢰, 교육, 운영 기반으로 확장</span></div>
            <div className={`${styles.map_item}`}><b>05. Blood Universe</b><span>성과가 다시 팀원과 고객의 삶을 지키는 생태계</span></div>
          </div>
          <div className={`${styles.two_col}`} style={{ marginTop: "18px" }}>
            <article className={`${styles.card}`}>
              <h3>MONO의 첫 검증</h3>
              <p>모두의 창업 1라운드에서는 기술자 신뢰 프로필, 기업 협약과 채용 공고, 현장 소품·자재 ERP 가능성을 검증합니다. 앱 광고보다 수요를 먼저 확보하는 Demand-first 전략입니다.</p>
            </article>
            <article className={`${styles.card}`}>
              <h3>Day1과의 접점</h3>
              <p>Day1의 교육 제작 역량과 콜로소 브랜드는 현장 기술자 교육으로 확장될 수 있습니다. 보안팀은 이 과정에서 개인정보, 신뢰 데이터, B2B 파트너 리스크를 설계합니다.</p>
            </article>
          </div>
        </section>

        <section id="roadmap">
          <div className={`${styles.section_head}`}>
            <h2>합류 후 90일 실행안</h2>
            <p>급한 불부터 끄고, 동시에 Day1이 장기적으로 활용할 수 있는 AX 보안 체계를 남기겠습니다.</p>
          </div>
          <div className={`${styles.roadmap}`}>
            <article className={`${styles.card} ${styles.step}`}>
              <small>Day 1-14</small>
              <h3>Incident Stabilization</h3>
              <p>침해사고 타임라인, 침해범위, 계정·권한·로그, 대외 커뮤니케이션을 정리하고 즉시 통제 가능한 리스크부터 닫습니다.</p>
            </article>
            <article className={`${styles.card} ${styles.step}`}>
              <small>Day 15-30</small>
              <h3>Control Baseline</h3>
              <p>SSO/MFA, 권한 검토, SaaS 사용 현황, 클라우드 노출면, 개인정보 처리 흐름을 기준선으로 만들고 반복 점검을 자동화합니다.</p>
            </article>
            <article className={`${styles.card} ${styles.step}`}>
              <small>Day 31-60</small>
              <h3>AX Guardrail</h3>
              <p>AI 도구 사용 정책, 프롬프트·데이터 반출 기준, AI 가상 보안검수, 보안 챔피언 프로그램을 작동시킵니다.</p>
            </article>
            <article className={`${styles.card} ${styles.step}`}>
              <small>Day 61-90</small>
              <h3>Scale & Business</h3>
              <p>보안 KPI, 임원 리포팅, 교육 사업 확장 리스크 모델, 콜로소 현장 기술자 교육과 MONO 연계 가능성을 제안합니다.</p>
            </article>
          </div>
        </section>

        <section>
          <div className={`${styles.section_head}`}>
            <h2>참고 링크</h2>
            <p>인터뷰 중 바로 열어볼 수 있도록 원문 자료를 연결했습니다.</p>
          </div>
          <div className={`${styles.links}`}>
            <a href="https://day1company.ninehire.site/dd" target="_blank" rel="noreferrer">Day1 채용 페이지</a>
            <a href="https://dojiung.com/creator/" target="_blank" rel="noreferrer">T-RIVE 팀 소개</a>
            <a href="https://dojiung.com/security" target="_blank" rel="noreferrer">이윤혁 CISO 소개</a>
            <a href="https://mono.dojiung.com/mono" target="_blank" rel="noreferrer">MONO MVP</a>
            <a href="https://mono.dojiung.com/strategy" target="_blank" rel="noreferrer">MONO 전략</a>
          </div>
        </section>

        <div className={`${styles.footer}`}>
          <h2>마지막 메시지</h2>
          <p>
            저는 Day1 Company의 보안팀을 지금의 사고 대응을 끝내는 팀으로만 만들고 싶지 않습니다. Day1이 더 많은 도전을 할 수 있도록, 보안이 사업의 속도와 신뢰를 동시에 키우는 AX 팀을 만들겠습니다.
          </p>
        </div>
      </main>
    </div>

    
      </div>
    </>
  );
}
