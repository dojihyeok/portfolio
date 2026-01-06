import { CheckSquare, Square } from "lucide-react";

export function DetailDevSecOps() {
    return (
        <div className="space-y-8">
            <section>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    전자금융 기반시설 관리체계 자체 점검 후 개선 계획 수립
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
                                <td className="border border-slate-200 dark:border-slate-700 p-2">부서장 전결 금액 이상 사업에 대한 사전 타당성 검토 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">부서장 전결 금액 이상 사업에 대한 사전 타당성 검토가 포함한 내부 전결규정 개정 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- IT투자 및 비용관리 지침</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">2</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">타당성 검토와 비용대비 효과분석 결과에 대한 전산운영위원회 등 승인 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">IT투자 및 비용관리 지침에 따라 IT 팀 팀장이 검토 및 승인을 진행 함</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- IT투자 및 비용관리 지침</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">3</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">업체 선정 기준 및 절차에 정보보안 관련사항 포함 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">업체 선정 기준 및 절차에 정보보안 관련사항 포함하도록 개정 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- IT투자 및 비용관리 지침</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">4</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">계약조항 미이행 또는 계약조항 변경에 대한 검사부서 승인 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">계약조항 미이행 또는 계약조항 변경에 대한 검사부서 승인 절차 수립 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- IT투자 및 비용관리 지침에 검사 부서 승인 절차 포함</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">5</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">감사가 정한 금액이상 계약에 대한 자체감사 또는 검사부서 승인 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">감사가 정한 금액이상 계약에 대한 자체감사 또는 검사부서 승인 절차 수립 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- IT투자 및 비용관리 지침에 검사 부서 승인 절차 포함</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">6</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">정보처리시스템 감리 지침에 감리목적, 대상, 감리인, 감리시기, 계획 등 일반기준 포함 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">시스템 감리 지침을 수립하여 감리, 목적, 계획을 포함하고 있으나 감리인 일반 기준을 미포함되어 개정 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 정보처리시스템 감리 지침</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">7</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">정보처리시스템 감리 지침에 기획, 개발 및 운영의 감리 실시 기준 포함 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">시스템 감리 지침에 기획, 개발 미포함되어 개정 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 정보처리시스템 감리 지침</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">8</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">정보처리시스템 감리 지침에 전자금융업무와 관련된 외부주문 등의 감리기준 포함 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">전자금융업무와 관련된 외부주문 등의 감리기준 미포함</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 정보처리시스템 감리 지침</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">9</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">정보기술부문인력과 정보보호인력의 직무 분리 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">지침에 정보기술부문인력과 정보보호인력의 직무 분리 미포함으로 개정 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 직무분리 지침에 반영</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">10</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">내부통제와 관련한 직무 분리 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">내부통제와 관련한 직무 분리 미포함으로 개정 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 직무분리 지침에 반영</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">11</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">정보의 기밀성/무결성/가용성을 고려하여 충분한 테스트 및 관련 책임자 승인 후 운영시스템에 적용 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">정보의 기밀성/무결성/가용성을 고려하여 충분한 테스트 및 관련 책임자 승인 후 운영시스템에 적용 미포함</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 프로그램 통제 절차 수립 (개발보안 지침)</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="border border-slate-200 dark:border-slate-700 p-2">12</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">정보통신망을 이용하여 이용자를 대상으로 신규 전자금융업무를 수행하거나 복수의 금융회사 또는 전자금융업자가 공동으로 전자금융거래 관련 표준을 제정하는 경우 자체 보안성심의 여부</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">보안성 심의 미포함으로 개정 예정</td>
                                <td className="border border-slate-200 dark:border-slate-700 p-2">- 보안성 심의 절차 수립</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h4 className="text-lg font-bold mb-4">Action Items</h4>
                <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <Square className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                        <span>IT투자 및 비용관리 지침</span>
                        <ul className="ml-6 mt-1 space-y-1 text-sm text-slate-500">
                            <li className="flex items-center gap-2">
                                <Square size={14} /> IT투자 및 비용관리 지침에 검사 부서 승인 절차 포함
                            </li>
                        </ul>
                    </li>
                    <li className="flex items-start gap-2">
                        <Square className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                        <span>정보처리시스템 감리 지침</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>직무분리 지침에 반영</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>프로그램 통제 절차 수립 (개발보안 지침)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>보안성 심의 절차 수립</span>
                    </li>
                </ul>
            </section>
        </div>
    );
}

