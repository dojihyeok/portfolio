import styles from './page.module.css';

export default function Day1Page() {
  return (
    <div className={styles.global_reset}>
      <div className={styles.shell}>
        
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.brand}>
            <div className={styles.brand_icon}>D</div>
            <span>Day1 Interview</span>
          </div>
        </header>

        <main>
          {/* 1. Hero */}
          <section className={`${styles.hero} ${styles.fade_in}`}>
            <span className={styles.hero_tag}>이윤혁 · CISO 지원자</span>
            <h1 className={styles.hero_title}>
              Day1의 도전을 더 안전하게 만드는 CISO
            </h1>
            <div className={styles.hero_body}>
              <p>저는 Day1에 합류해 먼저 중요한 보안 이슈를 책임 있게 해결하고 싶습니다.</p>
              <p>그 다음 AI 시대에 맞는 AX 보안팀을 구성해, 반복되는 보안 업무는 자동화하고, 구성원이 안전하게 AI와 데이터를 활용할 수 있는 가드레일을 만들고 싶습니다.</p>
              <p>Day1이 계속 도전하고 실패에서 배우며 성장하는 회사라면, 저 역시 그 방식과 잘 맞는 사람이라고 생각합니다.</p>
            </div>
            <div className={styles.tags_wrap}>
              <span className={styles.tag_item}>CISO</span>
              <span className={styles.tag_item}>AX Security</span>
              <span className={styles.tag_item}>T-Rive</span>
              <span className={styles.tag_item}>BLOODSTAR</span>
              <span className={styles.tag_item}>MONO</span>
            </div>
          </section>

          {/* 2. Day1 Company와 맞는 이유 */}
          <section className={`${styles.section} ${styles.fade_in}`} style={{ animationDelay: '0.1s' }}>
            <div className={styles.section_head}>
              <h2 className={styles.section_title}>Day1 Company와 맞는 이유</h2>
              <p className={styles.section_desc}>
                Day1 Company는 도전을 멈추지 않는 회사입니다. 저도 실패를 피하기보다, 실패에서 배우며 다음 실행으로 넘어가는 사람입니다.
              </p>
            </div>
            <div className={styles.text_block}>
              <p>저는 완성된 답을 기다리기보다, 먼저 문제를 구조화하고 빠르게 실행하며 배웁니다.</p>
              <p>보안에서도 마찬가지입니다. 위험을 발견하면 우선순위를 정하고, 반복되는 문제는 시스템과 프로세스로 해결하려고 합니다.</p>
              <p>DAY1 COMPANY의 도전 문화 안에서 보안의 책임과 새로운 성장 기회를 함께 만들어가고 싶습니다.</p>
            </div>
          </section>

          {/* 3. CISO로서 먼저 집중할 일 */}
          <section className={`${styles.section} ${styles.fade_in}`} style={{ animationDelay: '0.2s' }}>
            <div className={styles.section_head}>
              <h2 className={styles.section_title}>CISO로서 먼저 집중할 일</h2>
              <p className={styles.section_desc}>
                새로운 도전보다 먼저 중요한 것은 책임입니다. 가장 먼저 해야 할 일은 보안 문제 해결입니다.
              </p>
            </div>
            <div className={styles.text_block} style={{ marginBottom: '40px' }}>
              <p>DAY1 COMPANY에 합류한다면, 우선 회사가 지금 마주한 보안 이슈를 정확히 파악하고, 위험도가 높은 문제부터 빠르게 해결하겠습니다.</p>
              <p>보안은 비즈니스 속도를 늦추는 장치가 아니라, 회사가 더 빠르게 성장하기 위한 신뢰 기반이라고 생각합니다.</p>
            </div>
            <div className={styles.grid_2}>
              <article className={styles.card}>
                <h3 className={styles.card_title}>Risk</h3>
                <p className={styles.card_body}>중요한 보안 리스크를 우선순위화합니다.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.card_title}>Process</h3>
                <p className={styles.card_body}>반복되는 문제는 프로세스로 줄입니다.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.card_title}>Culture</h3>
                <p className={styles.card_body}>개발과 사업이 함께 지킬 수 있는 보안 기준을 만듭니다.</p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.card_title}>Trust</h3>
                <p className={styles.card_body}>고객과 구성원이 신뢰할 수 있는 환경을 만듭니다.</p>
              </article>
            </div>
          </section>

          {/* 4. AI 시대의 AX 보안팀 */}
          <section className={`${styles.section} ${styles.fade_in}`}>
            <div className={styles.section_head}>
              <h2 className={styles.section_title}>AI 시대의 AX 보안팀</h2>
              <p className={styles.section_desc}>
                제가 Day1에서 만들고 싶은 AX 보안팀은 보안을 막는 조직이 아니라, 비즈니스가 더 빠르고 안전하게 움직이도록 돕는 조직입니다.
              </p>
            </div>
            <div className={styles.text_block}>
              <p>기존 보안팀이 반드시 해결해야 할 취약점, 권한, 로그, 정책, 사고 대응을 안정적으로 관리하면서, 반복되는 보안 업무는 AI 에이전트와 자동화로 줄이고 싶습니다.</p>
              <p>그렇게 확보한 시간과 리소스는 AI 도구 사용 기준, 데이터 보호, 클라우드 보안, 보안성 검수 자동화, 그리고 전사 AX 보안 챔피언 프로그램으로 확장할 수 있습니다.</p>
              <p>저는 Day1에 합류하면 먼저 CISO의 책임을 다하고, 그 기반 위에서 Day1의 빠른 실험과 성장을 안전하게 지원하는 AX 보안팀을 만들고 싶습니다.</p>
            </div>
          </section>

          {/* 5. BLOODSTAR로 확장하고 싶은 이유 */}
          <section className={`${styles.section} ${styles.fade_in}`}>
            <div className={styles.section_head}>
              <h2 className={styles.section_title}>BLOODSTAR로 확장하고 싶은 이유</h2>
              <p className={styles.section_desc}>
                AX 보안팀의 경험은 장기적으로 BLOODSTAR로 확장될 수 있습니다.
              </p>
            </div>
            <div className={styles.text_block}>
              <p>DAY1 COMPANY에서 실제 보안 문제를 해결하고, AI 기반 보안 운영 체계를 만들 수 있다면, 그 경험은 하나의 강한 보안 조직 모델이 될 수 있습니다.</p>
              <p>저는 장기적으로 BLOODSTAR를 스타트업과 성장 기업을 위한 신뢰 기반 보안·기술 조직으로 확장하고 싶습니다.</p>
              <p style={{ color: '#4F46E5', fontWeight: '800' }}>하지만 그 출발점은 명확합니다. 지금은 DAY1 COMPANY의 보안 문제를 제대로 해결하는 것이 우선입니다.</p>
            </div>
          </section>

          {/* 6. T-Rive를 만든 이유 */}
          <section className={`${styles.section} ${styles.fade_in}`}>
            <div className={styles.section_head}>
              <h2 className={styles.section_title}>T-Rive를 만든 이유</h2>
              <p className={styles.section_desc}>
                내가 팀을 만든다면 어떤 팀을 만들까. T-Rive는 그 질문에서 시작했습니다.
              </p>
            </div>
            <div className={styles.text_block} style={{ marginBottom: '40px' }}>
              <p>T-Rive는 Tech를 기반으로 Try하고, 서로 Trust하며, Tribe로 함께 성장하는 팀을 상상하며 만든 조직 철학입니다.</p>
              <p>좋은 팀은 사람을 많이 모으는 것이 아니라, 목표에 맞는 역할을 정확히 연결하는 데서 시작한다고 생각합니다.</p>
              <p>T-Rive는 프로젝트의 목적에 따라 팀을 구성하고, 각자의 강점이 가장 잘 드러나는 방식으로 함께 실행하는 팀을 지향합니다.</p>
            </div>
            <a href="https://dojiung.com/trive_organization" target="_blank" rel="noreferrer" className={styles.link_card}>
              <div className={styles.link_card_content}>
                <h3>T-Rive Team Organization</h3>
                <p>https://dojiung.com/trive_organization</p>
              </div>
              <div className={styles.link_card_arrow}>→</div>
            </a>
          </section>

          {/* 7. 첫 번째 도전, MONO */}
          <section className={`${styles.section} ${styles.fade_in}`}>
            <div className={styles.section_head}>
              <h2 className={styles.section_title}>첫 번째 도전, MONO</h2>
              <p className={styles.section_desc}>
                MONO는 T-Rive의 첫 번째 도전입니다.
              </p>
            </div>
            <div className={styles.text_block} style={{ marginBottom: '40px' }}>
              <p>MONO는 현장 일용직과 기술자가 더 좋은 현장을 찾고, 자신의 경험을 신뢰 프로필로 쌓아갈 수 있도록 설계한 프로젝트입니다.</p>
              <p>단순히 일자리를 연결하는 것을 넘어, 일용직 근로자가 교육과 현장 경험을 통해 전문 기술자로 성장할 수 있는 구조를 고민하고 있습니다.</p>
              <p>현장 경험, 경력, 자격, 안전교육, 장비 사용 이력이 쌓이면 기술자는 더 나은 기회를 얻고, 기업은 믿을 수 있는 사람과 팀을 찾을 수 있습니다.</p>
            </div>
            <a href="https://mono.dojiung.com/strategy" target="_blank" rel="noreferrer" className={styles.link_card}>
              <div className={styles.link_card_content}>
                <h3>MONO Strategy</h3>
                <p>https://mono.dojiung.com/strategy</p>
              </div>
              <div className={styles.link_card_arrow}>→</div>
            </a>
          </section>

          {/* 8. Coloso와의 시너지 */}
          <section className={`${styles.section} ${styles.fade_in}`}>
            <div className={styles.section_head}>
              <h2 className={styles.section_title}>Coloso와의 시너지</h2>
              <p className={styles.section_desc}>
                MONO의 방향은 Coloso와도 연결될 수 있다고 생각합니다.
              </p>
            </div>
            <div className={styles.text_block} style={{ marginBottom: '40px' }}>
              <p>Coloso가 전문가의 지식과 교육 콘텐츠를 통해 사람의 성장을 돕는 플랫폼이라면, MONO는 현장 기술자의 경험과 교육, 자격, 실제 일자리를 연결하는 방향으로 확장될 수 있습니다.</p>
              <p>현장에서 일하는 사람이 더 나은 기술을 배우고, 그 기술로 더 좋은 현장에 연결되는 구조는 교육과 커리어 성장이 함께 작동하는 모델이 될 수 있습니다.</p>
              <p>이 점에서 MONO는 Coloso의 교육 철학과도 시너지를 만들 수 있다고 생각합니다.</p>
            </div>
            <a href="https://coloso.co.kr" target="_blank" rel="noreferrer" className={styles.link_card}>
              <div className={styles.link_card_content}>
                <h3>Coloso</h3>
                <p>https://coloso.co.kr</p>
              </div>
              <div className={styles.link_card_arrow}>→</div>
            </a>
          </section>

          {/* 9. 마무리 메시지 */}
          <section className={`${styles.cta_section} ${styles.fade_in}`}>
            <h2 className={styles.cta_title}>
              저는 DAY1 COMPANY에서 먼저 보안의 책임을 다하고 싶습니다.
            </h2>
            <div className={styles.cta_body}>
              <p style={{ marginBottom: '16px' }}>
                중요한 보안 문제를 해결하고, AI 시대에 맞는 AX 보안팀을 만들고, 그 경험을 바탕으로 더 큰 도전까지 이어가고 싶습니다.
              </p>
              <p style={{ color: '#4F46E5', fontWeight: '800' }}>
                DAY1 COMPANY가 끊임없이 도전하고 성장하는 회사라면, 저 역시 그 안에서 계속 도전하며 성장하고 싶습니다.
              </p>
            </div>
          </section>

          {/* 10. 관련 링크 */}
          <section className={`${styles.section} ${styles.fade_in}`} style={{ paddingBottom: '120px' }}>
            <div className={styles.section_head}>
              <h2 className={styles.section_title}>관련 링크</h2>
              <p className={styles.section_desc}>
                인터뷰 중이나 이후에 참고하실 수 있는 상세 자료들입니다.
              </p>
            </div>
            <div className={styles.links_list}>
              <a href="https://day1company.ninehire.site/10times" target="_blank" rel="noreferrer" className={styles.link_card}>
                <div className={styles.link_card_content}>
                  <h3>Day1 Company 채용·문화 참고</h3>
                  <p>https://day1company.ninehire.site/10times</p>
                </div>
                <div className={styles.link_card_arrow}>→</div>
              </a>
              <a href="https://dojiung.com/trive_organization" target="_blank" rel="noreferrer" className={styles.link_card}>
                <div className={styles.link_card_content}>
                  <h3>내가 생각하는 팀 구조 (T-Rive)</h3>
                  <p>https://dojiung.com/trive_organization</p>
                </div>
                <div className={styles.link_card_arrow}>→</div>
              </a>
              <a href="https://mono.dojiung.com/strategy" target="_blank" rel="noreferrer" className={styles.link_card}>
                <div className={styles.link_card_content}>
                  <h3>T-Rive의 첫 번째 도전 프로젝트 (MONO)</h3>
                  <p>https://mono.dojiung.com/strategy</p>
                </div>
                <div className={styles.link_card_arrow}>→</div>
              </a>
              <a href="https://coloso.co.kr" target="_blank" rel="noreferrer" className={styles.link_card}>
                <div className={styles.link_card_content}>
                  <h3>MONO와 시너지가 가능한 교육 플랫폼 방향 (Coloso)</h3>
                  <p>https://coloso.co.kr</p>
                </div>
                <div className={styles.link_card_arrow}>→</div>
              </a>
              <a href="https://dojiung.com/creator/" target="_blank" rel="noreferrer" className={styles.link_card}>
                <div className={styles.link_card_content}>
                  <h3>개인/팀 소개 페이지</h3>
                  <p>https://dojiung.com/creator/</p>
                </div>
                <div className={styles.link_card_arrow}>→</div>
              </a>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
