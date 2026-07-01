import React from 'react';
import styles from './page.module.css';

export default function Day1Page() {
  return (
    <div className={styles.global_reset}>
      <div className={styles.shell}>
        
        {/* Header */}
        <header className={styles.header}>
          <a href="/day1" className={styles.brand}>
            <div className={styles.brand_icon}>D1</div>
            <span>Day1 Company CISO Interview</span>
          </a>
        </header>

        {/* 1. Hero */}
        <section className={styles.hero}>
          <span className={styles.hero_tag}>이윤혁 · CISO 지원자</span>
          <h1 className={styles.hero_title}>
            보안의 책임을 지키면서,<br/>
            새로운 도전도 끝까지 실행하는 사람
          </h1>
          <div className={styles.hero_body}>
            <p>저는 중요한 보안 문제를 우선순위의 가장 앞에 두고 해결하는 사람입니다.</p>
            <p>동시에 기술, 제품, 사업을 연결해 새로운 기회를 만들고 실행하는 데 강점이 있습니다.</p>
            <p>Day1 Company가 추구하는 빠른 실행, 높은 책임감, 새로운 도전의 문화와 제 일하는 방식이 잘 맞는다고 생각합니다.</p>
          </div>
          <div className={styles.tags_wrap}>
            <span className={styles.tag_item}>Security</span>
            <span className={styles.tag_item}>Product</span>
            <span className={styles.tag_item}>Business</span>
            <span className={styles.tag_item}>Execution</span>
          </div>
        </section>

        {/* 2. 나는 어떤 사람인가 */}
        <section className={styles.section}>
          <div className={styles.section_head}>
            <h2 className={styles.section_title}>나는 어떤 사람인가</h2>
            <p className={styles.section_desc}>
              저는 문제를 발견하면 끝까지 구조화하고,<br/>
              실제로 작동하는 해결책으로 만드는 사람입니다.
            </p>
          </div>
          <div className={styles.grid_2}>
            <article className={styles.card}>
              <h3 className={styles.card_title}>책임감</h3>
              <p className={styles.card_body}>중요한 문제를 미루지 않고 우선순위를 정해 해결합니다.</p>
            </article>
            <article className={styles.card}>
              <h3 className={styles.card_title}>실행력</h3>
              <p className={styles.card_body}>아이디어를 문서, 제품, 운영 구조로 빠르게 전환합니다.</p>
            </article>
            <article className={styles.card}>
              <h3 className={styles.card_title}>보안 중심 사고</h3>
              <p className={styles.card_body}>리스크를 먼저 보고, 안정적으로 운영될 수 있는 구조를 설계합니다.</p>
            </article>
            <article className={styles.card}>
              <h3 className={styles.card_title}>사업 감각</h3>
              <p className={styles.card_body}>기술을 기능이 아니라 고객 가치와 비즈니스 모델로 연결합니다.</p>
            </article>
          </div>
        </section>

        {/* 3. CISO 역할에 대한 관점 */}
        <section className={styles.section}>
          <div className={styles.section_head}>
            <h2 className={styles.section_title}>CISO 역할에 대한 관점</h2>
            <p className={styles.section_desc}>
              CISO는 보안을 막는 사람이 아니라,<br/>
              회사가 더 안전하게 빠르게 움직이도록 돕는 사람이라고 생각합니다.
            </p>
          </div>
          <div className={styles.text_block} style={{ marginBottom: '32px' }}>
            <p>보안은 속도를 늦추는 장치가 아니라, 회사가 더 큰 신뢰를 얻기 위한 기반입니다.</p>
            <p>저는 중요한 보안 이슈를 우선 해결하고, 반복되는 위험은 프로세스와 시스템으로 줄이는 방식으로 일하고 싶습니다.</p>
            <p>Day1 Company에서 CISO 역할을 맡는다면, 기술적 보안뿐 아니라 조직이 안전하게 실행할 수 있는 기준과 문화를 함께 만들겠습니다.</p>
          </div>
          <div className={styles.table_list}>
            <dl className={styles.table_item}>
              <dt>보안 리스크 관리</dt>
              <dd>중요한 취약점과 운영 리스크를 우선순위화</dd>
            </dl>
            <dl className={styles.table_item}>
              <dt>보안 프로세스</dt>
              <dd>반복 가능한 점검, 대응, 개선 체계 구축</dd>
            </dl>
            <dl className={styles.table_item}>
              <dt>개발 조직 협업</dt>
              <dd>개발 속도를 막기보다 안전한 실행 기준 제공</dd>
            </dl>
            <dl className={styles.table_item}>
              <dt>신뢰 구축</dt>
              <dd>고객, 파트너, 내부 구성원이 신뢰할 수 있는 보안 체계</dd>
            </dl>
          </div>
        </section>

        {/* 4. 새로운 도전에 대한 관점 */}
        <section className={styles.section}>
          <div className={styles.section_head}>
            <h2 className={styles.section_title}>새로운 도전에 대한 관점</h2>
            <p className={styles.section_desc}>
              저는 안정적인 운영과 새로운 도전이 충돌한다고 생각하지 않습니다.
            </p>
          </div>
          <div className={styles.text_block}>
            <p>중요한 보안 문제를 먼저 해결하는 것은 기본입니다.</p>
            <p>그 기반 위에서 새로운 제품, 사업, 브랜드, 조직 실험을 함께 만들어갈 수 있다고 생각합니다.</p>
            <p>저는 MONO를 준비하며 전략, MVP, 데이터 구조, 사업계획, 투자 관점까지 직접 설계하고 실행해왔습니다. 이 경험은 Day1 Company 안에서도 새로운 기회를 발견하고 구체적인 실행으로 옮기는 데 도움이 될 수 있습니다.</p>
          </div>
        </section>

        {/* 5. Day1 Company와 맞는 이유 */}
        <section className={styles.section}>
          <div className={styles.section_head}>
            <h2 className={styles.section_title}>Day1 Company와 맞는 이유</h2>
            <p className={styles.section_desc}>
              Day1 Company의 이름처럼,<br/>
              저도 매번 Day 1의 태도로 문제를 봅니다.
            </p>
          </div>
          <div className={styles.text_block}>
            <p>완성된 답을 기다리기보다, 빠르게 가설을 세우고 실행하며 배우는 방식이 저에게 잘 맞습니다.</p>
            <p>새로운 문제를 두려워하기보다 구조화하고, 필요한 사람과 도구를 연결해 실제 결과로 만드는 과정에서 강점을 발휘합니다.</p>
            <p>Day1 Company가 빠른 실행, 높은 기준, 책임 있는 도전을 중요하게 본다면, 저는 그 방식 안에서 충분히 기여할 수 있다고 생각합니다.</p>
          </div>
        </section>

        {/* 6. 내가 기여할 수 있는 것 */}
        <section className={styles.section}>
          <div className={styles.section_head}>
            <h2 className={styles.section_title}>내가 기여할 수 있는 것</h2>
          </div>
          <div className={styles.table_list}>
            <dl className={styles.table_item}>
              <dt>CISO 역할</dt>
              <dd>보안 리스크 관리, 정책, 프로세스, 대응 체계 구축</dd>
            </dl>
            <dl className={styles.table_item}>
              <dt>제품·사업 감각</dt>
              <dd>기술을 고객 가치와 사업 구조로 연결</dd>
            </dl>
            <dl className={styles.table_item}>
              <dt>AI 기반 실행</dt>
              <dd>AI 도구를 활용한 빠른 문서화, 개발, 전략 수립</dd>
            </dl>
            <dl className={styles.table_item}>
              <dt>조직 협업</dt>
              <dd>개발, 운영, 비즈니스가 같은 기준으로 움직이도록 정리</dd>
            </dl>
            <dl className={styles.table_item}>
              <dt>새로운 도전</dt>
              <dd>신규 서비스, MVP, 전략 프로젝트를 빠르게 구조화하고 실행</dd>
            </dl>
          </div>
        </section>

        {/* 7. 마무리 메시지 */}
        <section className={styles.cta_section}>
          <h2 className={styles.cta_title}>
            저는 CISO의 책임을 우선으로 하겠습니다.
          </h2>
          <div className={styles.cta_body}>
            <p style={{ marginBottom: '16px' }}>
              중요한 보안 문제를 해결하고,<br/>
              Day1 Company가 더 안전하게 성장할 수 있는 기반을 만들겠습니다.
            </p>
            <p style={{ color: '#4F46E5', fontWeight: '800' }}>
              그리고 그 기반 위에서,<br/>
              새로운 도전도 함께 해내고 싶습니다.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
