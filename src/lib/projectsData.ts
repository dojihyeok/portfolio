export interface ProjectDetail {
    goal: string;
    required: string[];
    laws: string[];
    selectionReason: string;
    script: string[] | { title: string; items: string[] }[];
    results: string;
    architecture?: string;
}

export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    details: ProjectDetail;
}

export const projectsData: Record<string, Project> = {
    "litellm": {
        id: "litellm",
        title: "LiteLLM 구축을 통한 GenAI API 키 관리 PoC",
        category: "AI Governance / Security",
        description: "AI API 키 발급, 수명관리 및 사용로그 감사 체계 구축",
        tags: ["LiteLLM", "AI Governance", "Security", "PoC"],
        details: {
            goal: "개발팀 Claude Code 및 API 업무 지속 활용에 대한 모니터링 필요",
            required: ["LiteLLM", "Dashboard", "GenAI API"],
            laws: [],
            selectionReason: "LiteLLM은 다양한 AI 모델 API를 단일 프록시로 관리할 수 있는 오픈소스 도구\n가상 API 키 발급 및 수명관리 기능으로 키 추적이 용이\n사용 로그 기반 감사 기능으로 비용 통제 및 MCP 사용내역 확인 가능",
            script: [
                "LiteLLM 설치 및 Dashboard 연동",
                "가상 API 키 발급 및 수명관리 체계 구축",
                "사용 로그 기반 감사 시스템 구현"
            ],
            results: "가상 API 키 추적 및 비용 통제 가능\n커스텀 MCP, 벤더사 MCP 사용내역 감사 가능\nAI API 사용 현황 가시성 확보"
        }
    },
    "trufflehog": {
        id: "trufflehog",
        title: "TruffleHog를 통한 중요 키 점검",
        category: "Secret Scanning / Security",
        description: "GitHub 리포지토리 및 개발 환경 중요 키 노출 탐지 및 점검 자동화",
        tags: ["TruffleHog", "Secret Scanning", "Security", "Automation"],
        details: {
            goal: "GitHub 리포지토리 및 로컬 개발 환경(단말기 등)에 API 키, DB 비밀번호, 토큰 커밋 여부 확인 필요\nAWS Access Key가 코드/설정 파일에 하드코딩 되어 있는지 점검 및 관리 부재 리스크 해소",
            required: ["TruffleHog", "GitHub Organization", "Crontab", "AWS CLI"],
            laws: [
                "전자금융감독규정 제13조 제1항: 인증 수단 개인별 부여, 최소 권한",
                "ISMS-P 2.7.1 (암호키 관리): 암호키 생성, 이용, 보관, 배포, 파기에 관한 절차 수립"
            ],
            selectionReason: "TruffleHog는 Git 히스토리 전체를 스캔하여 과거 커밋에서 노출된 시크릿까지 탐지 가능\nAWS 키, Okta 토큰, DB 비밀번호 등 다양한 시크릿 유형 지원\n오픈소스로 비용 부담 없이 도입 가능\nCLI 기반으로 자동화 스크립트 연동이 용이",
            script: [
                "GitHub Org 전체 리포지토리 대상 TruffleHog 스캔 실행: Git 히스토리 포함 전수 검사로 노출된 시크릿 탐지",
                "탐지 대상: AWS Access Key/Secret Key, Okta 토큰, DB 비밀번호, API 키 등",
                "Crontab 설정으로 주기적 스캔 자동화: 신규 커밋에 대한 시크릿 노출 즉시 탐지 체계 구축"
            ],
            results: "인증심사(ISMS-P) 대응: 암호키 관리 통제 항목 충족\n키 관리 부재로 인한 보안 사고 사전 예방\n하드코딩된 시크릿 식별 및 제거를 통한 보안 수준 향상"
        }
    },
    "aws-asset-automation": {
        id: "aws-asset-automation",
        title: "AWS API를 활용한 자산관리대장 자동화",
        category: "Asset Management / Automation",
        description: "AWS EC2 정보 수집 및 자산관리대장 자동 기입",
        tags: ["AWS API", "Boto3", "Openpyxl", "Automation"],
        details: {
            goal: "ISMS-P 심사 대비를 위해 수동으로 자산을 관리하여 낭비되던 리소스 절감을 위해 기획",
            required: ["AWS API", "Python (Boto3, Openpyxl)"],
            laws: ["ISMS-P 인증심사: 자산 관리 관련 항목"],
            selectionReason: "AWS API를 통해 EC2 정보를 직접 수집하여 정확도 확보\nOpenpyxl을 활용하여 기존 엑셀 양식의 자산관리대장에 자동 기입 가능\n신규 EC2 생성 시 수동 입력 없이 자동 반영으로 운영 효율화",
            script: [
                "AWS API를 활용하여 EC2 OS정보, 버전, IP 등 수집",
                "Openpyxl을 활용하여 자산관리대장 내 자동 기입 구현"
            ],
            results: "신규 EC2 생성 시 자동입력을 통한 리소스 절감\n자산관리대장 정확도 향상\nISMS-P 심사 대비 증적 자동 관리"
        }
    },
    "elk-stack": {
        id: "elk-stack",
        title: "ELK Stack 구축",
        category: "Log Analysis / Infrastructure",
        description: "대용량 로그 처리를 위한 아키텍처 개선",
        tags: ["ELK Stack", "Log Analysis", "Infrastructure"],
        details: {
            goal: "Splunk 라이선스 비용 증가에 따른 대용량 VPC Flow Log의 장기 보관 체계 마련 필요\nSplunk는 데이터 유입량에 따라 라이선스 비용이 책정되나, VPC Flow Log는 대용량 네트워크 트래픽 전체를 기록하여 데이터량이 매우 큼",
            required: ["AWS S3", "AWS SQS", "Logstash", "Elasticsearch", "Kibana", "AWS EC2"],
            laws: [
                "전자금융감독규정 제13조: 로그 기록을 1년 이상 보존해야 함",
                "전자금융감독규정 제14조: 정보시스템에 대한 상시 모니터링 및 자원 감시 체계 구축"
            ],
            selectionReason: "OpenSearch보다 커뮤니티가 활성화되어 있어 문제 해결 시 참고 자료가 풍부함\n쿼리 검색 성능이 우위에 있으며, 특히 대용량 데이터 aggregation에서 성능 차이가 명확함\nKibana 대시보드 구성이 직관적이고 시각화 옵션이 다양함",
            script: [
                "데이터 파이프라인 구축: VPC Flow Logs → S3 자동 저장, S3 Event Notification → SQS 메시지 전송, Logstash SQS Input Plugin으로 데이터 수집",
                "AWS SQS 파이프라인 설계의 목적: 대량 로그 유입 시 SQS를 중간 버퍼로 사용하여 시스템 자원 과점유 방지 및 안정성 확보",
                "ELK Stack 구성: Elasticsearch(저장/인덱싱), Logstash(파싱/전송), Kibana(실시간 모니터링 대시보드)"
            ],
            results: "Splunk 대비 연간 운영 비용 대폭 절감\n실시간 모니터링으로 이상 트래픽 즉시 탐지 및 제14조 규정 준수\nKibana 대시보드로 네트워크 트래픽 가시화"
        }
    },
    "gophish-training": {
        id: "gophish-training",
        title: "악성메일 훈련 내재화",
        category: "Infrastructure / Security",
        description: "GoPhish 구축, 운영 및 훈련 프로그램 개발",
        tags: ["GoPhish", "AWS SES", "Google Workspace", "Python"],
        details: {
            goal: "기존 외부 위탁 훈련의 퀄리티 한계 극복 및 운영 리소스, 비용 절감 필요\n외부 업체의 획일화된 시나리오는 실제 업무 상황과 괴리가 있어 훈련 효과가 낮으며 1회당 비용 부담이 큼\n첨부파일로 인한 임직원 감염 위험에 대응하기 위해 모의 훈련 시스템 구축 필요",
            required: ["GoPhish", "AWS EC2", "AWS SES", "Google Workspace", "AWS S3", "Python"],
            laws: [
                "개인정보보호법 제29조(관리적 보호조치): 임직원에 대한 정기적인 보안교육 실시",
                "전자금융감독규정 제37조의2(침해사고 대응): 침해사고 대응 모의훈련 실시"
            ],
            selectionReason: "오픈소스 피싱 훈련 도구 중 GoPhish는 커뮤니티 및 업데이트가 지속적이고 활발함\n웹 기반 인터페이스 제공으로 사용 편의성이 높음\n훈련 시나리오를 사내 연말정산 등 실제 업무 상황을 반영하여 자유롭게 디자인 가능",
            script: [
                {
                    title: "GoPhish 관련",
                    items: [
                        "인프라 구성: DMZ 구간 내 EC2 인스턴스에 GoPhish 설치",
                        "AWS SES 연동: GoPhish의 SMTP 설정에서 AWS SES 엔드포인트 연동으로 발송 신뢰성 확보",
                        "시나리오 제작: HTML/CSS로 실제 사내 경영지원팀 등 업무 메일 양식과 유사한 피싱 메일 템플릿 제작"
                    ]
                },
                {
                    title: "훈련 프로그램 관련",
                    items: [
                        "PC 정보 수집: request 객체로 IP 주소 수집, socket 라이브러리로 Reverse DNS 조회하여 Hostname 수집",
                        "AWS 및 ELK 연동: Python Boto3 패키지를 활용하여 수집 정보를 JSON 가공하여 AWS S3 저장 및 Logstash 실시간 전송"
                    ]
                }
            ],
            results: "외부 위탁 대비 연간 비용 대폭 감소\n전년 대비 악성 메일 열람률 20% 감소로 임직원 보안 인식 수준 향상\n시나리오 자체 제작 시간 단축 (2주 -> 2일)\n훈련 진행 후 의심 메일 신고율 증가"
        }
    },
    "entra-id-sso": {
        id: "entra-id-sso",
        title: "Entra ID 구축 및 SSO / 프로비저닝 자동화",
        category: "IAM / Cloud",
        description: "macOS 및 Google Workspace 계정 일원화",
        tags: ["Entra ID", "SSO", "IAM", "Kandji MDM"],
        details: {
            goal: "기존 AWS Managed AD의 macOS 계정 관리 한계 극복(macOS 정책 유실, SaaS별 계정 파편화, 퇴사자 수동 삭제 누락 리스크 해소)",
            required: ["Microsoft Entra ID", "AWS Managed AD", "Entra ID Connect", "Google Workspace", "Kandji MDM", "Conditional Access"],
            laws: [
                "전자금융감독규정 제14조 (1인 1계정 원칙, 사용자 식별)",
                "전자금융감독규정 제15조 (MFA 적용)"
            ],
            selectionReason: "Okta 대비 연간 라이선스 비용 약 40% 저렴\n기존 AWS Managed AD가 Microsoft 기반으로 높은 호환성 보장\nEntra ID Connect로 사내 AD와 자동 동기화 가능",
            script: [
                "Entra ID Connect 설정: AWS Managed AD와 15분 단위 델타 동기화 및 암호 동기화(Password Hash Sync)",
                "SAML SSO 연동: Google Workspace 등 주요 사내 SaaS 시스템에 Single Sign-On 연동 구현",
                "SCIM 프로비저닝 자동화: AD 계정 생성 시 Entra ID 및 연동 앱 자동 생성, 퇴사 시 차단 프로세스 자동화",
                "macOS 통합 (Kandji MDM): 플랫폼 SSO 설정을 통한 macOS OS 로그인을 Entra ID 계정으로 통합",
                "조건부 액세스(Conditional Access): 회사 기기 외 다요소 인증(MFA) 강제"
            ],
            results: "연간 라이선스 비용 절감 및 계정 처리 시간 단축\n계정 수동 관리에 따른 휴먼 에러 차단\n전사 통합 계정 관리 구현으로 가시성 및 보안 강화"
        }
    },
    "gitops-elk-monitoring": {
        id: "gitops-elk-monitoring",
        title: "GitOps + ELK Stack을 통한 해킹메일 훈련 모니터링 구축",
        category: "Infrastructure / DevOps",
        description: "해킹메일 훈련 실시간 모니터링 및 인프라 자동화",
        tags: ["GitOps", "Terraform", "Atlantis", "ELK Stack"],
        details: {
            goal: "해킹메일 훈련 진행 시 수집되는 로그(IP, Hostname, 클릭 시간 등)를 실시간으로 모니터링 및 분석할 인프라 환경 구축",
            required: ["Terraform", "Atlantis (GitOps)", "AWS EC2/VPC", "ELK Stack", "GitHub"],
            laws: [
                "개인정보보호법 제29조 (개인정보 처리 기록 보관)",
                "개인정보의 안전성 확보조치 기준 제4조 (내부관리계획의 수립 및 시행)"
            ],
            selectionReason: "Terraform을 이용한 인프라 코드화(IaC)로 재현 가능하고 버전 관리가 용이함\nAtlantis를 연동하여 GitHub PR을 통해 투명한 인프라 변경 및 자동 실행 가능\nKibana 시각화 대시보드로 실시간 부서별/직급별 분석이 용이",
            script: [
                "Terraform 인프라 작성: AWS VPC, Subnet, Security Group, EC2 리소스 및 ELK Stack 구성을 코드로 정의",
                "GitOps(Atlantis) 설정: GitHub PR 시 Atlantis가 자동으로 terraform plan 수행, 리뷰 후 머지 시 terraform apply 자동 실행",
                "ELK Stack 구축: EC2 내 Elasticsearch, Logstash, Kibana 인스턴스 연동 및 훈련 로그 수집 인프라 구축",
                "시각화 구성: Kibana를 통한 실시간 피싱 훈련 현황 대시보드 구축"
            ],
            results: "인프라 자산의 수동 설정 제거 및 히스토리 관리 체계 마련\n훈련 진행 상황의 실시간 모니터링 가시성 확보\n임직원 의심 메일 신고율 향상 증적 기록 기반 제공"
        }
    },
    "cloud-governance-dashboard": {
        id: "cloud-governance-dashboard",
        title: "클라우드 보안 거버넌스 대시보드 구축 및 자동화",
        category: "Cloud Security / Governance",
        description: "AWS 리소스 보안 감사 자동화 및 인증심사 대응 대시보드",
        tags: ["Boto3", "AWS API", "LiteLLM", "ISMS-P", "Dashboard"],
        details: {
            goal: "AWS IAM, EC2 등 사내 클라우드 리소스의 정기 보안 감사와 ISMS-P, ISO27001 등 보안 인증심사 증적 간소화를 위한 대시보드 개발",
            required: ["Python (Boto3)", "AWS API", "LiteLLM", "Dashboard"],
            laws: [
                "ISMS-P 인증심사 항목",
                "ISO27001 심사 항목"
            ],
            selectionReason: "AWS API와 Boto3 라이브러리를 활용하여 실시간에 근접한 클라우드 리소스 파악 가능\n보안 인증 항목들과 직접 맵핑하여 심사 대응 단일 포털 구축에 용이\nLiteLLM을 통해 사내에서 사용 중인 다양한 AI API 키 감사 기능까지 통합 가능",
            script: [
                "Boto3 활용 리소스 연동: EC2 퍼블릭 액세스 여부, 보안 그룹 설정, IAM 권한 오용, PEM키 생명주기 검사 스크립트 작성",
                "모니터링 대시보드 연동: 수집된 보안 미흡 항목 실시간 시각화",
                "LiteLLM 연동: 가상 API 키 감사 기능 및 Secrets Manager를 연동한 API 키 수명 주기 관리"
            ],
            results: "인증심사 시 증적 확보 프로세스 대폭 단축\n수동 점검 공수 제거를 통한 보안 운영 리소스 절감\n리소스 취약 설정(퍼블릭 개방 등) 실시간 탐지로 리스크 사전 차단"
        }
    },
    "wazuh-nvd-vuln": {
        id: "wazuh-nvd-vuln",
        title: "Wazuh + NVD API를 활용한 취약점 관리",
        category: "Vulnerability Management / Security",
        description: "서버 패키지 취약점 자동 탐지 및 CVE 기반 관리",
        tags: ["Wazuh", "NVD API", "CVE", "Vulnerability"],
        details: {
            goal: "EC2, ECS 인프라 내부에 설치되어 운영 중인 다양한 서버 패키지 정보 및 실시간 취약점 관리 체계 부재 해결",
            required: ["Wazuh Agent", "NVD API", "Dashboard", "AWS EC2/ECS"],
            laws: [
                "전자금융감독규정 제14조: 정보처리시스템 보호대책",
                "전자금융감독규정 제15조: 해킹 등 방지대책",
                "ISMS-P 2.9.3: 패치 관리",
                "ISMS-P 2.11.2: 취약점 점검 및 조치"
            ],
            selectionReason: "Wazuh는 에이전트 기반으로 사내 서버 내 모든 패키지 및 OS 상세 버전 정보 수집이 가능\nNVD API와의 원활한 매칭을 통해 수동 정보 탐색 없이 최신 CVE 실시간 연동이 가능\n직관적인 XDR 대시보드를 제공하여 시각적인 가시성 우수",
            script: [
                "Wazuh 에이전트 배포: AWS EC2 및 주요 노드에 Wazuh Agent 설치 및 데이터 수집 활성화",
                "CVE 매칭 파이프라인: 에이전트가 전송한 패키지 정보를 NVD API를 통해 대조하여 신규 취약점 및 CVE 코드 식별",
                "대시보드 시각화: 식별된 취약 수준(CVSS 스코어)에 따른 서버별 취약점 현황판 구축"
            ],
            results: "보안 인증 심사 시 필수 증적인 패치 관리 및 취약점 점검 통제 항목 완벽 충족\n사내 전체 서버의 패키지 현황 자동 자산화\n중대 취약점 발표 시 즉각 대응 가능 시스템 확보"
        }
    }
};
