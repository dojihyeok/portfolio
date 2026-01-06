import { CheckSquare, Square } from "lucide-react";

export function DetailAccessControl() {
    return (
        <div className="space-y-8">
            <section>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎎</span> 1. 관리체계 개선 조치_접근통제(24)
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
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">1</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">외부사용자에 대한 최소 작업권한 할당 및 통제장치 설치 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">원격 관제등 외부사용자 권한 관리 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">
                                    - 망분리 대책 통제<br />
                                    - 통합 계정 관리
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">2</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">사용자 인사조치 시 지체없이 해당 사용자 계정 삭제, 사용 중지, 공동 사용 계정 변경 등 정보처리시스템 접근 통제 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">인사 변경에 따른 권한 관리 절차 수립 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 통합 계정 관리 방안</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">3</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">사용자 계정 공동사용 시 개인별 사용내역에 대한 기록저장 및 관리 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">IT 계정 신청서를 통해 공용 계정 발급하고 있으며, 공용 계정 식별 수 사용 내역 로그 방안 수립 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 통합 계정 관리 방안</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">4</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">정보처리시스템 관리자에 대한 적절한 통제장치 마련 및 운용 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">단말기와 전산자료의 접근권한이 부여되는 정보처리시스템 관리자를 지정하여 사용자가 신청/승인 후 권한을 부여하고 있으나 신청 승인의 이력 등 개선 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 통합 계정 관리 방안</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">5</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">정보처리시스템 관리자 주요업무관련행위의 책임자 이중 확인 및 모니터링 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">권한 부여 이력 책임자 이중 확인 및 모니터링 방안 수립 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 전산원장, 주요정보 또는 이용자 정보 등이 저장된 정보처리시스템에 대한 중요작업 수행 시 책임자가 이중확인</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">6</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">내부사용자에 대한 비밀번호 설정 및 운영 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">내부 사용자에 대한 비밀번호를 규정에 맞게 적용하고 있으나, 모든 자산 및 서비스에 대해 점검을 통해 운영 여부를 확인해야 함</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 통합 계정 관리 방안</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">7</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">내부사용자 비밀번호 설정 시, 이용자 식별부호(아이디), 생년월일, 주민등록번호, 전화번호 포함 금지 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">내부 사용자 패스워드 정책 여부 확인 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 통합 계정 관리 방안</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">8</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">내부사용자 비밀번호에 관한 주기적(분기별 1회 이상) 변경 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">내부 사용자에 대한 비밀번호를 규정에 맞게 적용하고 있으나, 모든 자산 및 서비스에 대해 점검을 통해 운영 여부를 확인해야 함</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 통합 계정 관리 방안</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">9</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">정보처리시스템마다 각기 다른 관리자 비밀번호 적용 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">정보처리시스템별 다른관리자 비밀번호 적용 여부 확인 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 통합 계정 관리 방안</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">10</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">내부사용자 비밀번호 연속 입력 오류(최대5회)시 즉시 접속 차단 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">내부 사용자에 대한 비밀번호를 규정에 맞게 적용하고 있으나, 대상 자산 및 서비스에 대해 점검을 통해 운영 여부를 확인해야 함</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 통합 계정 관리 방안</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">11</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">차단된 내부사용자 비밀번호 변경 시 본인확인 절차 적용 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">내부사용자 비밀번호 변경 시 초기화 적용 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 통합 계정 관리 방안</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">12</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">이용자 비밀번호 등록 시, 주민등록번호/동일숫자/연속숫자 등 제3자가 쉽게 유추할 수 있는 비밀번호의 등록 금지 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">이용자 비밀번호를 규정에 맞게 적용하고 있으나, 대상 자산 및 서비스에 대해 점검을 통해 정책 여부를 확인해야 함</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 이용자 비밀번호 개발 사항</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">13</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">전산원장 변경절차에 변경 대상 및 방법 포함 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">전산원장 변경 적절성 검토 및 개선 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 전산원장 변경 통제 방안 수립</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">14</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">전산원장 변경절차에 변경 권한자 지정 포함 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">변경 권한자 지정 후 승인 절차 적용 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 전산원장 변경 통제 방안 수립</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">15</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">전산원장 변경 절차에 변경 전후 내용 자동기록 및 보존 포함 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">변경 전후 내용 자동기록 및 보존여부 확인 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 전산원장 변경 통제 방안 수립</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">16</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">전산원장 변경절차에 변경내용의 정당여부에 대한 제3자 확인 포함 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">변경내용의 정당여부에 대한 제3자 확인 포함</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 전산원장 변경 통제 방안 수립</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">17</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">전산원장 불일치 원인과 조치 내용을 전산자료형태로 5년간 보존 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">전산원장 불일치 원인과 조치 내용을 전산자료형태로 5년 보존 하도록 개선 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 통합로그 시스템 구축</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">18</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">사고위험도가 높은 거래에 대한 전산시스템 기반의 책임자 이중확인 절차 적용 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">사고위험도가 높은 거래의 기준을 수립하고 책임자 이중 확인 절차를 적용하여야 함</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 사고위험도가 높은 거래의 기준 수립 및 승인절차 적용</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">19</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">전산원장, 주요정보, 이용자정보 등이 저장된 정보처리시스템 중요작업에 대한 책임자 이중확인 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">전자금융업자는 전산원장, 주요정보 또는 이용자 정보 등이 저장된 정보처리시스템에 대한 중요작업 수행 시 책임자가 이중확인 절차 수립 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 전산원장 변경 통제 방안 수립</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">20</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">일괄작업 요청 시 작업요청서의 책임자 승인 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">일괄작업(batch) 요청 시 작업 요청서 후 책임자 승인 절차 반영 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 전산원장 변경 통제 방안 수립</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">21</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">일괄작업 자동화 및 오류 최소화 방안 적용 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">일괄작업(batch)자동화 및 오류 최소화 방안 적용하고 있음</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 전산원장 변경 통제 방안 수립</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">22</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">모든 일괄작업 내용 기록 및 관리 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">Jira등을 통해 일괄 작업 내용 기록 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 전산원장 변경 통제 방안 수립</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">23</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">일괄작업 수행자 주요업무관련 행위에 관한 책임자 모니터링 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">Jira등을 통해 책임자 승인 여부 모니터링 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 전산원장 변경 통제 방안 수립</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h4 className="text-lg font-bold mb-4">Action Items</h4>
                <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>통합 계정 관리 방안</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>망분리 대체 통제</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>전산원장 변경 통제 방안 수립</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Square className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                        <span>통합로그 시스템 구축</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>이용자 비밀번호 규칙 개발 → 웹 취약점 점검 개선 사항</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Square className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                        <span>전산원장, 주요정보 또는 이용자 정보 등이 저장된 정보처리시스템에 대한 중요작업 수행 시 책임자가 이중확인</span>
                        <ul className="ml-6 mt-1 space-y-1 text-sm text-slate-500">
                            <li>- 주요 작업 정의 예시 : 소스 코드 배포, DB CUD 작업, 서버 생성/삭제/변경 작업, 보안 솔루션 정책 변경 작업 등</li>
                            <li>- 주요 작업 승인 절차</li>
                        </ul>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>사고위험도가 높은 거래의 기준 수립 및 승인절차 적용</span>
                        <div className="ml-6 mt-1">
                            <div className="flex items-start gap-2 mb-1">
                                <CheckSquare className="text-blue-500 mt-0.5 flex-shrink-0" size={14} />
                                <span className="text-sm">사고 위험도가 높은 거래 기준 예시</span>
                            </div>
                            <p className="text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 p-2 rounded">
                                일정금액 이상의 고액인출, 각종 사고신고, 계좌일괄조회, 정정거래 등 사고위험도가 높거나 이상거래의 개연성이 있는 업무에 대해서는 업무 담당자가 단독으로 처리할 경우 사고 위험이 존재함
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}

