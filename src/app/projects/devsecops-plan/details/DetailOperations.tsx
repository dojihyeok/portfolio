import { CheckSquare, Square } from "lucide-react";

const rows = [
    { no: 1, item: "정보처리시스템 접속에 관한 사용자인가의 여부를 확인할 수 있는 기록 유지 여부", status: "단말기에 대한 네트워크 접근 통제, IP 식별, 접속 이력을 남기도록 개선 계획", measure: "- 서버 접근제어\n- AWS 접속 IP 정책\n- VPN 접속시 IP 정책" },
    { no: 2, item: "외부 반출, 인터넷 접속, 그룹웨어 접속의 금지 등 강화된 보호대책이 적용되는 중요단말기 지정 여부", status: "중요단말기 지정하여 관리할 예정", measure: "- 중요 단말기 지정" },
    { no: 3, item: "사용자 단말기에서 보조기억매체 및 휴대용 전산장비에 관한 접근통제(정보유출, 악성코드 감염방지 등) 여부", status: "사용자 단말기 매체제어 및 USB 허용 시 악성코드 자동 실행 방지 대책 수립 예정", measure: "- 매체제어 솔루션" },
    { no: 4, item: "전산자료 보유현황 관리 여부", status: "자산관리대장에 전산자료 현황 및 담당자를 지정하여 관리하도록 할 예정", measure: "- 자산관리대장" },
    { no: 5, item: "전산자료 책임자 지정 여부", status: "자산관리대장에 책임자 지정 예정", measure: "- 자산관리대장" },
    { no: 6, item: "전산자료 및 전산장비의 반출/반입 통제 여부", status: "사용자 단말기 매체제어 및 USB 허용 시 악성코드 자동 실행 방지 대책 수립 예정", measure: "- 매체제어 솔루션" },
    { no: 7, item: "보조기억매체 등 전산자료에 대한 안전지출 및 파기계획 수립 및 운용 여부", status: "보안 USB로 허용된 보조기억매체를 사용할 예정", measure: "- 매체제어 솔루션" },
    { no: 8, item: "보조기억매체 보유현황 및 관리실태에 관한 정기점검 및 책임자 확인 여부", status: "매체 제어 솔루션을 통해 보조기억매체 보유현황 및 관리실태 점검 예정", measure: "- 매체제어 솔루션" },
    { no: 9, item: "전산자료의 정기백업/소산 등 백업내역에 관한 기록 및 관리 여부", status: "전산자료 백업 정책은 수립되어 있으나 최근 AWS 전환으로 백업 운영 방안 수립 예정", measure: "- 백업 정책 및 백업 관리" },
    { no: 10, item: "전산자료 중요도 분류기준 수립 여부", status: "자산관리대장에 전산자료 중요도를 포함하여 업데이트 예정", measure: "- 자산관리대장" },
    { no: 11, item: "주요 백업 전산자료에 대한 정기 검증 여부", status: "백업 전산자료 정기 검증 시행 예정", measure: "- 백업 정책 및 백업 관리" },
    { no: 12, item: "이용자 정보 조회 및 출력에 대한 통제 여부", status: "- 개인정보 처리시스템에서 이용자 정보 조회 시 마스킹 예정\n- 개인정보 처리시스템에서 이용자 정보 저장 시 암호화 예정\n- 이용자 정보 출력물 모니터링 방안 예정", measure: "- admin page 보안 가이드\n- 출력물 보안" },
    { no: 13, item: "정보처리시스템 가동기록(정보처리시스템 접속기록, 전산자료 사용기록, 전산자료 처리기록) 1년 이상 보존 여부", status: "서버접근 제어 및 IP 식별 방안 미수립 되어 있어 정보처리시스템 가동기록은 1년 이상 보관하여야 함", measure: "- 서버 접근제어\n- 정보처리시스템 가동기록 방안 수립" },
    { no: 14, item: "정보처리시스템 접속 오류(최대 5회)시 사용 제한 여부", status: "정보처리시스템 접속 오류 방지를 위한 로그인 횟수 제한 5회 설정이 되어 있으나, 일부 정보처리시스템 횟수 제한 설정 여부 확인이 예정함", measure: "- 통합 계정 관리" },
    { no: 15, item: "단말기 내 주요정보 보관 예정시, 관련 절차 수립 여부", status: "단말기 내 주요정보 보관 시 관련 절차 정책 및 지침에서 확인하지 못함", measure: "- 단말기 내 중요정보 보관 시 지침에 포함" },
    { no: 16, item: "정보처리시스템 접근기록(접속일시,접속자,전산자료 사용일시, 사용자, 자료내용, 사용자 로그인, 액세스 로그 등)에 대한 자동 기록 및 보관 여부", status: "AWS trail log에 대부분 가동 기록이 남겨지고 있지만 전체 정보처리시스템의 접근 기록 여부 확인 예정", measure: "- 통합로그 정책 및 시스템" },
    { no: 17, item: "주요 정보처리시스템에 대한 시스템 운영 매뉴얼 작성 여부", status: "시스템 운영 매뉴얼 작성 또는 업데이트 예정", measure: "- 시스템 운영 매뉴얼" },
    { no: 18, item: "주요 정보처리시스템에 대한 시스템 운영 매뉴얼에 구동, 조작방법, 명령어사용법, 운용순서, 장애조치 및 연락처 등 포함 여부", status: "시스템 운영 매뉴얼 작성 또는 업데이트 예정", measure: "- 시스템 운영 매뉴얼" },
    { no: 19, item: "주요 프로그램에 대한 유지보수 관리대장에 작업일, 작업내용, 작업결과 등을 작성 및 보관 여부", status: "정기적으로 유지보수를 실시하고, 작업일, 작업내용, 작업결과 등을 기록한 유지보수관리대장을 작성·보관 예정", measure: "- 유지보수 정책 및 점검 결과" },
    { no: 20, item: "데이터베이스관리시스템(DBMS), 운영체제(OS), 웹프로그램에 대한 주기적 유지보수 여부", status: "정기적으로 유지보수를 실시하고, 작업일, 작업내용, 작업결과 등을 기록한 유지보수관리대장을 작성·보관 예정", measure: "- 작업 계획 절차 수립" },
    { no: 21, item: "정상작동여부 확인을 위한 정보처리시스템 자원 상태의 감시, 경고 및 제어가 가능한 모니터링 시스템 설치 및 운영 여부", status: "모니터링 시스템을 구축 진행 중", measure: "- 시스템 모니터링 시스템 구축" },
    { no: 22, item: "정보처리시스템 책임자 지정 및 운영 여부", status: "자산관리대장에 정보처리시스템 책임자를 포함하여 관리 예정", measure: "- 자산관리대장" },
    { no: 23, item: "운영체계, 시스템 유틸리티 등의 긴급하고 중요한 보정(patch)사항에 대하여는 즉시 보정 여부", status: "인터넷망, 운영망, 업무망 사무실 및 AWS 패치 절차 수립 예정", measure: "- 패치관리 정책 수립" },
    { no: 24, item: "중요도에 따른 운영체제(Operating System) 및 설정내용 등의 정기 백업, 원격안전지역 소산 및 백업자료 1년 이상 기록/관리 여부", status: "전산자료 백업 정책은 수립되어 있으나 최근 AWS 전환으로 백업 운영 방안 수립 예정", measure: "- 백업 정책 및 백업 관리" },
    { no: 25, item: "정보처리시스템의 운영체제(Operating System) 계정으로 로그인(Log in)할 경우 계정 및 비밀번호 이외에 별도의 추가인증 적용 여부", status: "전자금융기반시설 서버, 네트워크 정보보호시스템 취약점 진단 점검 사항으로 추가 인증 여부 점검 예정", measure: "- 통합 계정 관리" },
    { no: 26, item: "정보처리시스템 운영체제(OS) 계정에 대한 사용권한, 접근 기록, 작업 내역 등에 대한 상시 모니터링 체계 수립 여부", status: "서버 접근제어 방안 수립 예정", measure: "- 서버접근제어\n- 시스템 모니터링" },
    { no: 27, item: "정보처리시스템 사용 현황 및 추이 분석 등 정기적 실시 여부", status: "정보처리시스템의 장애예방 및 성능의 최적화를 위하여 정기적으로 수행하고 있으며 정기적 수행 내역 보고 절차 수립 예정", measure: "- 유지보수 정책 및 점검 결과" },
    { no: 28, item: "취약점 분석ㆍ평가결과에 따른 취약점 제거 또는 이에 상응하는 조치 시행 여부", status: "정보보호 담당자 퇴사 및 부재로 취약점 점검 연속성 확인 예정", measure: "- 취약점 이행 점검" },
    { no: 29, item: "취약점 분석ㆍ평가결과에 대한 이행계획 수립 여부 및 최고경영자 보고 여부", status: "이행 계획서 및 이행 결과 최고경영자 보고 여부 확인 예정", measure: "- 이행 계획서 보고 완료" },
    { no: 30, item: "내부 단말기의 정보보호시스템을 우회한 인터넷 등 외부 통신망(무선통신망 포함) 접속 차단 여부", status: "외부 인터넷은 정보보호시스템을 통해 접속되고 있으나 내부 단말기 및 무선 통신 우회 가능 여부 확인예정", measure: "- 매체제어" },
    { no: 31, item: "내부통신망에서의 파일 배포기능 이용 시 파일 무결성 검증 수행 여부", status: "패치 관리 방안 수립 예정", measure: "- 패치관리 정책 수립" },
    { no: 32, item: "정보보호시스템에 최소한의 서비스번호와 기능 적용 여부", status: "정보보호 시스템 서비스 Port 용도 확인 및 접근통제에 해당 Port만 허용되어 있는지 확인 예정", measure: "- 방화벽 정책 및 SG 룰 개선" },
    { no: 33, item: "정보보호시스템의 업무목적 이외 기능 및 프로그램 제거 여부", status: "정보보호 시스템 서비스 Port 용도 확인 및 접근통제에 해당 Port만 허용되어 있는지 확인 예정", measure: "- 취약점 점검" },
    { no: 34, item: "정보보안 정책 승인 및 적용 시, 정책 등록,변경,삭제 내용에 대한 보관 여부", status: "방화벽 허용 요청 정보보안 정책 승인 및 적용을 위한 절차 수립 예정", measure: "- 정보보안 정책 승인 절차 수립" },
    { no: 35, item: "정보보호시스템 작동상태 모니터링 여부", status: "개별 정보보호시스템 작동 상태로 확인하고 있으나 자동화 모니터링 방안 수립예정", measure: "- 시스템 모니터링" },
    { no: 36, item: "정보보호시스템에 대한 백업 및 복구절차 수립 및 시행 여부", status: "정보보호 시스템 백업 및 복구절chat가 수립되어 있으나 실제 백업 수행 예정", measure: "- 백업 정책 및 백업 관리" },
    { no: 37, item: "정보보호시스템 책임자 지정/운영 및 운영결과 1년 이상 보존 여부", status: "자산관리대장 업데이트에 정보보호 책임자를 지정하고 운영 결과를 1년 이상 보존 예정", measure: "- 통합로그시스템 구축" },
    { no: 38, item: "무선통신망 이용 업무의 정보보호최고책임자 승인 및 사전 지정 여부", status: "무선통신망 이용 업무의 CISO 승인 및 사전 지정하도록 지침에 반영 예정", measure: "- 사무실 무선 통신망 아키텍처 재구성 및 CISO 승인" },
    { no: 39, item: "사용자인증, 암호화 등 무선통신망 보안대책 수립", status: "무선통신망을 통한 불법 접속을 방지하기 위한 사용자인증, 암호화 등 보안대책을 수립 예정", measure: "- 사무실 무선 통신망 아키텍처 재구성 및 CISO 승인" },
    { no: 40, item: "금융회사 내부망에 연결된 정보처리시스템이 지정 된 무선통신망에 접속하는 것을 차단하기 위한 차단시스템 구축 여부", status: "무선통신 차단 시스템 구축 예정 WIPS", measure: "- 무선통신 차단 시스템 (WIPS)" },
    { no: 41, item: "무선통신망 실시간 모니터링체계 운영 여부", status: "WIPS 모니터링 방안 수립 예정", measure: "- 무선통신 차단 시스템 (WIPS)" },
    { no: 42, item: "비인가 무선접속장비 설치/접속여부 및 중요정보노출여부에 대한 주기적 점검 여부", status: "업무용/운영 단말기에서 외부 AP 연결 및 중요정보 보호 대책 수립 및 점검 예정", measure: "- 정보보호 점검의날 점검" },
    { no: 43, item: "악성코드 감염대비 복구절차 마련 여부", status: "악성코드 감염대비 복구절차 수립예정", measure: "- 침해사고 대응 절차 수립" },
    { no: 44, item: "중요 단말기의 악성코드 감염 여부 매일 점검 여부", status: "중요 단말기의 악성코드 감염여부를 매일 점검 자동화 방안 적용 예정", measure: "- 백신 스케줄러 적용" },
    { no: 45, item: "공개용 웹서버 게시자료에 대한 사전 관리 실시 여부", status: "공개용 웹서버 게시 절차 수립 예정", measure: "- 웹 게시 절차 수립" },
    { no: 46, item: "공개용 웹서버에 무기명 또는 가명에 의한 게시 금지 여부", status: "공개용 웹서버 게시 절차 수립 예정", measure: "- 웹 게시 절차 수립" },
    { no: 47, item: "단말기에서 음란, 도박 등 업무와 무관한 프로그램 및 인터넷사이트에 대한 접근 통제 여부", status: "접근 통제 대책 확인 예정", measure: "- 웹 차단 시스템 (사무실, AWS)" },
    { no: 48, item: "개인별로 내부 IP주소를 부여 및 유지/관리 여부", status: "개인별로 내부 IP 주소를 부여하고 있으나 DHCP를 통해 변경되어 추적 가능한 방안 수립 예정", measure: "- NAC" },
    { no: 49, item: "내/외부 IP주소의 인터넷 접속내용 1년이상 별도 기록/보관 여부", status: "접속 기록을 솔루션에서 보관하고 있으나 1년 이상 저장 여부 확인 및 백업 방안 수립 예정", measure: "- 통합로그 시스템" },
    { no: 50, item: "운영, 개발, 외주 등 업무특성별로 네트워크 분리 및 IP주소 사용 여부", status: "운영, 개발을 분리하고 있으나, 업무망, 운영망, 연구개발망 등 망분리 개선", measure: "- 망분리 환경 아키텍처 수립" },
    { no: 51, item: "암호프로그램의 비담당자 이용에 관한 통제 여부", status: "KMS 운영하고 담당자를 지정하고 있으나 권한 관리 세분화가 예정하여 조치 예정", measure: "- 키관리 정책 수립" }
];

export function DetailOperations() {
    return (
        <div className="space-y-8">
            <section>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚔️</span> 3. 관리체계 개선 조치_운영관리(51)
                </h3>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                            <tr>
                                <th className="border border-slate-200 dark:border-slate-700 p-2 w-12">No</th>
                                <th className="border border-slate-200 dark:border-slate-700 p-2">평가항목</th>
                                <th className="border border-slate-200 dark:border-slate-700 p-2 w-1/4">현황</th>
                                <th className="border border-slate-200 dark:border-slate-700 p-2">보안 대책</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {rows.map((row) => (
                                <tr key={row.no} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                    <td className="border border-slate-200 dark:border-slate-700 p-2">{row.no}</td>
                                    <td className="border border-slate-200 dark:border-slate-700 p-2 whitespace-pre-wrap">{row.item}</td>
                                    <td className="border border-slate-200 dark:border-slate-700 p-2 whitespace-pre-wrap">{row.status}</td>
                                    <td className="border border-slate-200 dark:border-slate-700 p-2 whitespace-pre-wrap">{row.measure}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h4 className="text-lg font-bold mb-4">Action Items</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                    {[
                        "서버 접근제어 시스템", "AWS 접속 IP 정책", "VPN 접속시 IP 정책", "중요 단말기 지정",
                        "정보보호 점검의날 점검", "매체제어 솔루션", "자산관리대장", "백업 정책 및 백업 관리",
                        "admin page 보안 가이드", "출력물 보안", "정보처리 모니터링 시스템, 가동기록 방안 수립",
                        "통합 계정 관리", "단말기 내 중요정보 보관 시 지침에 포함", "통합로그 시스템",
                        "시스템 운영 매뉴얼", "유지보수 정책 및 점검 결과", "작업 계획 절차 수립",
                        "패치관리 정책 수립", "취약점 이행 점검", "이행 계획서 보고 완료",
                        "정보보안 정책 승인 절차 수립", "사무실 무선 통신망 아키텍처 재구성 및 CISO 승인",
                        "무선통신 차단 시스템 (WIPS)", "침해사고 대응 절차 수립", "중요단말기 백신 스케줄러 적용",
                        "웹 차단 시스템 (사무실, AWS)", "NAC", "망분리 환경 아키텍처 수립", "키관리 정책 수립"
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                            <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                            <span>{item}</span>
                        </div>
                    ))}
                    <div className="flex items-start gap-2">
                        <Square className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                        <span>방화벽 정책 및 SG 룰 개선</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <Square className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                        <span>웹 게시 절차 수립</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
