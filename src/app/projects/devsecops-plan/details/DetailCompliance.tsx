import { CheckSquare, Square } from "lucide-react";

const rows = [
    { no: 1, item: "업무지속성 확보대책에 전산시스템 운영지침서, 사용자매뉴얼 등이 최신 상태로 유지되고 있는지 여부", status: "업무지속성 확보대책에 전산시스템 운영지침서, 사용자매뉴얼 등이 최신 상태로 유지하도록 수립되어 있으나 최신 상태로 업데이트 예정", measure: "- 전산시스템 운영 매뉴얼" },
    { no: 2, item: "업무지속성 확보대책에 비상지원인력에 대한 연수 실시 여부 포함 여부", status: "비상지원인력에 대한 연수 미실시", measure: "- 비상지원인력 연수" },
    { no: 3, item: "위기대응 행동매뉴얼 또는 비상대책 수립 여부", status: "전자금융업자로써 사업연속성관리 지침에 비상대책을 수립하도록 있으며, 지침에 따라 비상대책 매뉴얼을 수립할 예정", measure: "- 비상대책 매뉴얼" },
    { no: 4, item: "위기대응 행동매뉴얼 또는 비상대책에 업무지속성 확보대책의 반영 여부", status: "비상 대책에 업무지속성 확보대책 반영 예정", measure: "- 비상대책 매뉴얼" },
    { no: 5, item: "이용자 비밀번호 유출위험 및 관리에 관한 사항 공지 여부", status: "홈페이지에 이용자 비밀번호 유출위험 및 관리에 관한 사항을 공지할 예정", measure: "- 이용자 유의사항\n(조치완료)" },
    { no: 6, item: "금융기관 등이 제공하는 이용자 보호제도에 관한 사항 공지 여부", status: "홈페이지에 이용자 비밀번호 유출위험 및 관리에 관한 사항을 공지할 예정", measure: "- 이용자 유의사항" },
    { no: 7, item: "해킹/피싱 등 전자적 침해방지에 관한 사항 공지 여부", status: "홈페이지에 이용자 비밀번호 유출위험 및 관리에 관한 사항을 공지할 예정", measure: "- 이용자 유의사항" },
    { no: 8, item: "본인확인절차 후 비밀번호 변경가능한 정보처리시스템 구축 여부", status: "가입된 e-mail 링크를 통해 비밀번호 재 발급으로 본인확인절차 후 비밀번호 변경 예정", measure: "- 취약점 개선중" },
    { no: 9, item: "이용자 비밀번호 변경시 동일 비밀번호 재사용 금지 여부", status: "이용자 비밀번호 변경시 동일 비밀번호 재사용 금지 예정", measure: "- 취약점 개선중" },
    { no: 10, item: "IT외부주문 계약 체결시 계약내용의 적정성 검토 여부", status: "IT 외부주문 계약 체결시 포함되어야 할 계약내용의 표준 계약 양식 준비 예정", measure: "- 외부주문 관리" },
    { no: 11, item: "외부주문 등의 입찰ㆍ계약ㆍ수행ㆍ완료 등 각 단계별로 금융감독원장이 정하는 보안관리방안 준수 여부", status: "외부주문 등의 입찰ㆍ계약ㆍ수행ㆍ완료 등 각 단계별로 금융감독원장이 정하는 보안관리방안 준수 개선 예정", measure: "- 외부주문 관리" },
    { no: 12, item: "외부주문 사항에 대해 연1회 이상 재무건전성 평가 및 주요 경영활동 상시모니터링 여부", status: "외부주문 사항에 대해 연1회 이상 재무건전성 평가 등 모니터링을 수행할 예정", measure: "- 외부주문 관리" },
    { no: 13, item: "외부주문 사항에 대해 연1회 이상 서비스 품질수준 평가 여부", status: "외부주문 시 서비스 수준 협약을 통해 연1회 이상 서비스 품질 수준 평가를 수행할 예정", measure: "- 외부주문 관리" },
    { no: 14, item: "외부주문 사항에 대해 사전 동의 없는 재위탁, 계약업체 변경 금지(사전 동의시 계약서 기재사항 포함) 여부", status: "외부주문 사항에 대해 사전 동의 없는 재위탁, 계약업체 변경 금지 하도록 계약서에 포함할 예정", measure: "- 외부주문 관리" },
    { no: 15, item: "외부주문 사항에 대해 위탁회사가 전자금융거래정보 보호와 관련된 전산장비·소프트웨어 개발,운영,유지관리 업무 재위탁 시, 금융거래 정보 변경사항에 대해 위탁회사 또는 원수탁업자가 이를 관리, 통제할 수 있는 절차 마련 여부", status: "전자금융거래정보 보호와 관련된 외부주문 시 재위탁 금지 원칙으로 재 위탁시 금융거래 정보 변경사항에 대해 이를 관리, 통제할 수 있도록 절차 수립 예정", measure: "- 외부주문 관리" },
    { no: 16, item: "사고보고의 고의 지연 및 숨긴 자에 대한 징계절차 수립 여부", status: "사고보고의 고의 지연 및 숨긴 자에 대한 징계절차를 지침에 포함할 예정", measure: "- 침해사고 지침 개정" },
    { no: 17, item: "전자금융사고 시 책임이행을 위한 준비금 관리 및 지급에 관한 내부절차 수립 및 운영 여부", status: "전자금융사고 시 책임이행을 위한 준비금 관리 및 지급에 관한 내부절차 수립 예정", measure: "- 침해사고 지침 개정" },
];

export function DetailCompliance() {
    return (
        <div className="space-y-8">
            <section>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🪬</span> 4. 관리체계 개선 조치_전자금융거래등(17)
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
                <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>개인정보 보호 정책 지침 개정</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>전산시스템 운영 매뉴얼</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>비상지원인력 연수</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>비상대책 매뉴얼</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>이용자 유의사항</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                        <span>외부주문 관리</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Square className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                        <span>SIEM (security information and event management)</span>
                        <div className="ml-6 mt-1 p-3 bg-slate-100 dark:bg-slate-800 rounded text-sm text-slate-600 dark:text-slate-300">
                            내·외부에 의한 침해시도, 개인정보유출 시도, 부정행위 등 이상행위를 탐지할 수 있도록 주요 정보시스템, 응용프로그램, 네트워크, 보안시스템 등에서 발생한 네트워크 트래픽, 데이터 흐름, 이벤트 로그 등을 수집하여 분석 및 모니터링
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}
